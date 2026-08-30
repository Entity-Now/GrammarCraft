import React from 'react';
import { Table, Volume2 } from 'lucide-react';
import type { CustomTableSection } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface CustomTableCardProps {
  data: CustomTableSection;
}

export const CustomTableCard: React.FC<CustomTableCardProps> = ({ data }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Table size={16} />
        </div>
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
          {data.title}
        </h3>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-200/70 dark:border-zinc-800">
        <table className="w-full text-xs text-left">
          <thead className="bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 font-semibold border-b border-zinc-200 dark:border-zinc-800">
            <tr>
              {data.headers.map((h, i) => (
                <th key={i} className="px-3.5 py-2.5 whitespace-nowrap">
                  {h}
                </th>
              ))}
              <th className="px-3.5 py-2.5 text-right whitespace-nowrap">发音</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
            {data.rows.map((row, rowIdx) => {
              const primaryEnText = row[0] || '';
              return (
                <tr
                  key={rowIdx}
                  className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className={`px-3.5 py-2.5 ${
                        cellIdx === 0
                          ? 'font-medium font-mono text-zinc-900 dark:text-zinc-100'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                  <td className="px-3.5 py-2.5 text-right">
                    <TTSButton text={primaryEnText} size="xs" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {data.note && (
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-2.5 pl-1 italic">
          💡 说明：{data.note}
        </p>
      )}
    </div>
  );
};
