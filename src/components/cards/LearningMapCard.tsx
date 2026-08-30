import React from 'react';
import { Map, ChevronRight, Hash } from 'lucide-react';
import type { LearningMapData } from '../../types';

interface LearningMapCardProps {
  data: LearningMapData;
  onItemClick?: (itemTitle: string) => void;
}

export const LearningMapCard: React.FC<LearningMapCardProps> = ({ data, onItemClick }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
      case 'green':
        return {
          badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
          border: 'border-emerald-200/60 dark:border-emerald-800/40',
          hover: 'hover:border-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20',
          num: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60',
        };
      case 'purple':
        return {
          badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300',
          border: 'border-purple-200/60 dark:border-purple-800/40',
          hover: 'hover:border-purple-400 hover:bg-purple-50/40 dark:hover:bg-purple-950/20',
          num: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60',
        };
      case 'amber':
        return {
          badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
          border: 'border-amber-200/60 dark:border-amber-800/40',
          hover: 'hover:border-amber-400 hover:bg-amber-50/40 dark:hover:bg-amber-950/20',
          num: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60',
        };
      default: // blue
        return {
          badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300',
          border: 'border-blue-200/60 dark:border-blue-800/40',
          hover: 'hover:border-blue-400 hover:bg-blue-50/40 dark:hover:bg-blue-950/20',
          num: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60',
        };
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-2 mb-1">
        <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Map size={16} />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
          {data.title}
        </h3>
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
        {data.desc}
      </p>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.categories.map((cat, catIdx) => {
          const styles = getColorClasses(cat.color);
          return (
            <div
              key={catIdx}
              className={`p-4 rounded-xl bg-zinc-50/70 dark:bg-zinc-900/50 border ${styles.border} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${styles.badge}`}>
                    {cat.badge}
                  </span>
                  <span className="text-base">{cat.icon}</span>
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                  {cat.title}
                </h4>
                <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mb-3">
                  {cat.enTitle}
                </p>

                {/* Items List */}
                <div className="space-y-1.5">
                  {cat.items.map((item, itemIdx) => (
                    <button
                      key={itemIdx}
                      onClick={() => onItemClick?.(item.title)}
                      className={`w-full p-2 rounded-lg bg-white dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${styles.hover}`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${styles.num}`}
                        >
                          {item.num}
                        </span>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 block truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-zinc-400 truncate block">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={13} className="text-zinc-300 dark:text-zinc-600 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
