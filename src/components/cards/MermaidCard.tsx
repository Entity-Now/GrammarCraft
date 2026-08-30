import React, { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';
import { GitBranch, Code, Eye, Copy, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface MermaidCardProps {
  data: {
    id?: string;
    title: string;
    desc?: string;
    code: string;
  };
}

export const MermaidCard: React.FC<MermaidCardProps> = ({ data }) => {
  const { isDark } = useTheme();
  const [showCode, setShowCode] = useState(false);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const rawId = useId().replace(/[:]/g, '_');
  const containerId = `mermaid_${rawId}`;

  useEffect(() => {
    let isMounted = true;
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'Inter, system-ui, sans-serif',
      });

      mermaid
        .render(`${containerId}_svg`, data.code.trim())
        .then((result) => {
          if (isMounted) {
            setSvgContent(result.svg);
            setError(null);
          }
        })
        .catch((err) => {
          console.error('[Mermaid Render Error]', err);
          if (isMounted) {
            setError(String(err));
          }
        });
    } catch (e: any) {
      if (isMounted) {
        setError(String(e));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [data.code, isDark, containerId]);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <GitBranch size={16} />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            {data.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowCode(!showCode)}
            className="p-1.5 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1"
            title={showCode ? '查看流程图' : '查看代码'}
          >
            {showCode ? <Eye size={14} /> : <Code size={14} />}
            <span className="text-[11px]">{showCode ? '图表' : '源码'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-xs text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="复制代码"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {data.desc && (
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
          {data.desc}
        </p>
      )}

      {showCode ? (
        <div className="p-3 rounded-xl bg-zinc-900 text-zinc-200 font-mono text-xs overflow-x-auto border border-zinc-800">
          <pre>{data.code}</pre>
        </div>
      ) : error ? (
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 text-xs font-mono">
          渲染失败: {error}
        </div>
      ) : (
        <div
          id={containerId}
          className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/80 overflow-x-auto flex justify-center items-center min-h-[140px] transition-all"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </div>
  );
};
