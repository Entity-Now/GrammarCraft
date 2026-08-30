import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Layers, BookOpen, Variable, HelpCircle, ArrowRight } from 'lucide-react';
import type { TopicContent } from '../../types';

interface SearchResultItem {
  type: 'topic' | 'formula' | 'word' | 'quiz' | 'skeleton';
  topicId: string;
  topicTitle: string;
  title: string;
  subtitle: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicContents: Record<string, TopicContent>;
  onSelectTopic: (topicId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  topicContents,
  onSelectTopic,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search indexing
  const q = query.trim().toLowerCase();
  const results: SearchResultItem[] = [];

  if (q) {
    Object.values(topicContents).forEach((tc) => {
      // Check topic meta
      if (
        tc.meta.title.toLowerCase().includes(q) ||
        tc.meta.enTitle.toLowerCase().includes(q) ||
        tc.meta.desc.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'topic',
          topicId: tc.meta.id,
          topicTitle: tc.meta.title,
          title: tc.meta.title,
          subtitle: `${tc.meta.enTitle} · ${tc.meta.desc}`,
        });
      }

      // Check formulas
      tc.formulas?.forEach((f) => {
        if (f.title.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q)) {
          results.push({
            type: 'formula',
            topicId: tc.meta.id,
            topicTitle: tc.meta.title,
            title: f.title,
            subtitle: `公式: ${f.formula}`,
          });
        }
      });

      // Check words
      tc.words?.forEach((w) => {
        if (w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q)) {
          results.push({
            type: 'word',
            topicId: tc.meta.id,
            topicTitle: tc.meta.title,
            title: `${w.word} (${w.pos})`,
            subtitle: `${w.meaning} · ${w.phonetic}`,
          });
        }
      });

      // Check skeletons
      tc.skeletons?.forEach((s) => {
        if (s.title.toLowerCase().includes(q) || s.sentence.toLowerCase().includes(q) || s.translation.toLowerCase().includes(q)) {
          results.push({
            type: 'skeleton',
            topicId: tc.meta.id,
            topicTitle: tc.meta.title,
            title: s.title,
            subtitle: `${s.sentence} (${s.translation})`,
          });
        }
      });

      // Check quizzes
      tc.quizzes?.forEach((qz) => {
        if (qz.title.toLowerCase().includes(q) || qz.question.toLowerCase().includes(q)) {
          results.push({
            type: 'quiz',
            topicId: tc.meta.id,
            topicTitle: tc.meta.title,
            title: qz.title,
            subtitle: qz.question,
          });
        }
      });
    });
  }

  const getTypeIcon = (type: SearchResultItem['type']) => {
    switch (type) {
      case 'topic':
        return <Layers size={14} className="text-emerald-500" />;
      case 'formula':
        return <Variable size={14} className="text-blue-500" />;
      case 'word':
        return <BookOpen size={14} className="text-purple-500" />;
      case 'skeleton':
        return <Layers size={14} className="text-amber-500" />;
      case 'quiz':
        return <HelpCircle size={14} className="text-rose-500" />;
    }
  };

  const getTypeName = (type: SearchResultItem['type']) => {
    switch (type) {
      case 'topic':
        return '专题';
      case 'formula':
        return '公式';
      case 'word':
        return '单词';
      case 'skeleton':
        return '解构';
      case 'quiz':
        return '测验';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl rounded-2xl glass-panel shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Box */}
        <div className="p-4 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center gap-3">
          <Search size={18} className="text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="全局快速搜索语法概念、公式、单词、例句..."
            className="flex-1 text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {!q ? (
            <div className="p-8 text-center text-xs text-zinc-400 space-y-2">
              <p>输入关键词（如：“时态”、“助动词”、“SVO”、“宾语从句”等）即时检索</p>
              <div className="flex justify-center gap-2 pt-2">
                {['时态', '情态动词', '介词', '反义疑问句', '宾语从句'].map((k) => (
                  <button
                    key={k}
                    onClick={() => setQuery(k)}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition-colors"
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-zinc-400">
              未找到与 "{query}" 相关的结果，请尝试其他关键词
            </div>
          ) : (
            results.slice(0, 25).map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectTopic(item.topicId);
                  onClose();
                }}
                className="w-full p-2.5 rounded-xl text-left flex items-center justify-between gap-3 hover:bg-emerald-50/70 dark:hover:bg-zinc-800/80 transition-colors group cursor-pointer border border-transparent hover:border-emerald-500/20"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-mono">
                        {getTypeName(item.type)}
                      </span>
                      <span className="text-[10px] text-zinc-400 truncate">
                        · 来自《{item.topicTitle}》
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <ArrowRight size={14} className="text-zinc-400 group-hover:text-emerald-500 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
