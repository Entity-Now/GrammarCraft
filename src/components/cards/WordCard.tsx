import React, { useState } from 'react';
import { Bookmark, Sparkles, Split, BookOpen } from 'lucide-react';
import type { WordCardData } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface WordCardProps {
  data: WordCardData;
}

export const WordCard: React.FC<WordCardProps> = ({ data }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg group relative">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 font-mono tracking-tight">
              {data.word}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold">
              {data.pos}
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-md">
              {data.phonetic}
            </span>
          </div>
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1.5">
            {data.meaning}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <TTSButton text={data.word} size="sm" />
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-1.5 rounded-full transition-colors ${
              isBookmarked
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
            title={isBookmarked ? '取消收藏' : '收藏单词'}
          >
            <Bookmark size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Root & Affix Decomposition */}
      {data.roots && (
        <div className="my-3 p-3 rounded-xl bg-zinc-50/90 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-2">
            <Split size={13} className="text-emerald-500" />
            <span>词根词缀结构拆解</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            {data.roots.prefix && (
              <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold block">
                  {data.roots.prefix} (前缀)
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 text-[11px] mt-0.5 block">
                  {data.roots.prefixMeaning}
                </span>
              </div>
            )}
            <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50">
              <span className="text-blue-600 dark:text-blue-400 font-mono font-bold block">
                {data.roots.root} (词根)
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-[11px] mt-0.5 block">
                {data.roots.rootMeaning}
              </span>
            </div>
            {data.roots.suffix && (
              <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50">
                <span className="text-purple-600 dark:text-purple-400 font-mono font-bold block">
                  {data.roots.suffix} (后缀)
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 text-[11px] mt-0.5 block">
                  {data.roots.suffixMeaning}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Example Sentences */}
      <div className="space-y-2 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <BookOpen size={13} className="text-zinc-400" />
          <span>核心语境例句</span>
        </div>
        {data.examples.map((ex, i) => (
          <div key={i} className="flex items-start justify-between gap-2 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
            <div className="text-xs space-y-0.5 flex-1">
              <p className="text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                {ex.en}
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                {ex.zh}
              </p>
            </div>
            <TTSButton text={ex.en} size="xs" />
          </div>
        ))}
      </div>

      {/* Mnemonic Hook */}
      {data.mnemonic && (
        <div className="mt-3 flex items-start gap-1.5 text-xs p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/20 text-amber-900 dark:text-amber-300 border border-amber-200/40 dark:border-amber-900/30">
          <Sparkles size={14} className="shrink-0 mt-0.5 text-amber-500" />
          <div>
            <span className="font-semibold">记忆秘诀：</span>
            <span>{data.mnemonic}</span>
          </div>
        </div>
      )}
    </div>
  );
};
