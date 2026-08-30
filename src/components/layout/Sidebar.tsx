import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Filter,
  Layers,
  Sparkles,
  BookMarked,
  CheckCircle,
} from 'lucide-react';
import type { Pillar, TopicMeta } from '../../types';

interface SidebarProps {
  pillars: Pillar[];
  activeTopicId: string;
  onSelectTopic: (topicId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  pillars,
  activeTopicId,
  onSelectTopic,
  isOpen,
  onClose,
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [collapsedPillars, setCollapsedPillars] = useState<Record<string, boolean>>({});

  const togglePillar = (pillarId: string) => {
    setCollapsedPillars((prev) => ({
      ...prev,
      [pillarId]: !prev[pillarId],
    }));
  };

  // Filter topics
  const filterMatches = (topic: TopicMeta) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.enTitle.toLowerCase().includes(q) ||
      topic.desc.toLowerCase().includes(q)
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static top-16 bottom-0 left-0 z-30 w-72 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-r border-zinc-200/80 dark:border-zinc-800/80 flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Search / Filter Box */}
        <div className="p-3.5 border-b border-zinc-200/70 dark:border-zinc-800/70">
          <div className="relative">
            <Filter size={13} className="absolute left-3 top-2.5 text-zinc-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="过滤专题 (如: 时态, 介词)..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 border border-transparent focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
            />
          </div>
        </div>

        {/* Pillars & Topic Navigation List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {pillars.map((pillar) => {
            const filteredTopics = pillar.topics.filter(filterMatches);
            if (searchFilter && filteredTopics.length === 0) return null;
            const isCollapsed = !searchFilter && collapsedPillars[pillar.id];

            return (
              <div key={pillar.id} className="space-y-1">
                {/* Pillar Header */}
                <button
                  onClick={() => togglePillar(pillar.id)}
                  className="w-full px-2 py-1.5 rounded-lg flex items-center justify-between text-left text-xs font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{pillar.icon}</span>
                    <span>{pillar.title}</span>
                    <span className="text-[10px] font-normal text-zinc-400">
                      ({filteredTopics.length})
                    </span>
                  </div>
                  {isCollapsed ? (
                    <ChevronRight size={13} className="text-zinc-400" />
                  ) : (
                    <ChevronDown size={13} className="text-zinc-400" />
                  )}
                </button>

                {/* Topics in Pillar */}
                {!isCollapsed && (
                  <div className="space-y-0.5 pl-2 border-l border-zinc-200/80 dark:border-zinc-800/80 ml-2">
                    {filteredTopics.map((topic) => {
                      const isActive = topic.id === activeTopicId;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            onSelectTopic(topic.id);
                            onClose();
                          }}
                          className={`w-full px-2.5 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all cursor-pointer text-left ${
                            isActive
                              ? 'bg-emerald-500 text-white font-semibold shadow-sm shadow-emerald-500/20'
                              : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-sm shrink-0">{topic.icon}</span>
                            <div className="min-w-0">
                              <span className="block truncate">{topic.title}</span>
                              <span
                                className={`text-[10px] block truncate font-mono ${
                                  isActive ? 'text-emerald-100' : 'text-zinc-400 dark:text-zinc-500'
                                }`}
                              >
                                {topic.enTitle}
                              </span>
                            </div>
                          </div>

                          {topic.badge && (
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded-full shrink-0 font-mono ${
                                isActive
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                              }`}
                            >
                              {topic.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer Stats */}
        <div className="p-3 border-t border-zinc-200/70 dark:border-zinc-800/70 text-[11px] text-zinc-400 flex items-center justify-between">
          <span>共 19 个核心语法专题</span>
          <span className="text-emerald-500 font-semibold font-mono">100% 涵盖</span>
        </div>
      </aside>
    </>
  );
};
