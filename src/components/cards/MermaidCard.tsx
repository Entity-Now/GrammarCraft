import React, { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';
import {
  GitBranch,
  Code,
  Eye,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Layers,
  BookOpen,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { MermaidCardData } from '../../types';

interface MermaidCardProps {
  data: MermaidCardData;
}

export const MermaidCard: React.FC<MermaidCardProps> = ({ data }) => {
  const { isDark } = useTheme();
  const [showCode, setShowCode] = useState(false);
  const [viewMode, setViewMode] = useState<'both' | 'diagram' | 'details'>('both');
  const [zoom, setZoom] = useState(100);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedDetailIndex, setCopiedDetailIndex] = useState<number | null>(null);

  const rawId = useId().replace(/[:]/g, '_');
  const containerId = `mermaid_${rawId}`;
  const svgWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'neutral',
        themeVariables: isDark
          ? {
              primaryColor: '#064e3b',
              primaryTextColor: '#ecfdf5',
              primaryBorderColor: '#10b981',
              lineColor: '#34d399',
              secondaryColor: '#18181b',
              tertiaryColor: '#27272a',
              mainBkg: '#18181b',
              nodeBorder: '#059669',
              clusterBkg: '#141e1b',
              clusterBorder: '#047857',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '13px',
            }
          : {
              primaryColor: '#f0fdf4',
              primaryTextColor: '#064e3b',
              primaryBorderColor: '#10b981',
              lineColor: '#059669',
              secondaryColor: '#f8fafc',
              tertiaryColor: '#f1f5f9',
              mainBkg: '#ffffff',
              nodeBorder: '#10b981',
              clusterBkg: '#f0fdf4',
              clusterBorder: '#86efac',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '13px',
            },
        flowchart: {
          htmlLabels: true,
          curve: 'basis',
          padding: 14,
          nodeSpacing: 35,
          rankSpacing: 40,
        },
        securityLevel: 'loose',
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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(data.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyDetail = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedDetailIndex(index);
    setTimeout(() => setCopiedDetailIndex(null), 2000);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 15, 180));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 15, 60));
  const handleZoomReset = () => setZoom(100);

  const hasDetails = Boolean(data.details && data.details.length > 0);

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg space-y-4">
      {/* Card Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
            <GitBranch size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {data.title}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                拓扑图谱
              </span>
            </div>
            {data.desc && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                {data.desc}
              </p>
            )}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 flex-wrap">
          {/* View mode toggle if details exist */}
          {hasDetails && (
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800/80 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setViewMode('both')}
                className={`px-2 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                  viewMode === 'both'
                    ? 'bg-white dark:bg-zinc-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
                title="图表与详析对照"
              >
                <Layers size={13} />
                <span className="text-[11px]">图文对照</span>
              </button>
              <button
                onClick={() => setViewMode('diagram')}
                className={`px-2 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                  viewMode === 'diagram'
                    ? 'bg-white dark:bg-zinc-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
                title="仅看流程图"
              >
                <Eye size={13} />
                <span className="text-[11px]">仅图表</span>
              </button>
              <button
                onClick={() => setViewMode('details')}
                className={`px-2 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                  viewMode === 'details'
                    ? 'bg-white dark:bg-zinc-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
                title="仅看节点表达清单"
              >
                <BookOpen size={13} />
                <span className="text-[11px]">节点清单</span>
              </button>
            </div>
          )}

          {/* Zoom Controls (only in diagram/both mode and not showCode) */}
          {!showCode && viewMode !== 'details' && (
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800/80 rounded-lg p-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              <button
                onClick={handleZoomOut}
                className="p-1 hover:text-zinc-900 dark:hover:text-zinc-100 rounded transition-colors"
                title="缩小"
              >
                <ZoomOut size={13} />
              </button>
              <button
                onClick={handleZoomReset}
                className="px-1.5 py-0.5 text-[11px] font-mono hover:text-zinc-900 dark:hover:text-zinc-100 rounded transition-colors"
                title="重置缩放"
              >
                {zoom}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1 hover:text-zinc-900 dark:hover:text-zinc-100 rounded transition-colors"
                title="放大"
              >
                <ZoomIn size={13} />
              </button>
            </div>
          )}

          {/* Toggle Code / Diagram */}
          <button
            onClick={() => setShowCode(!showCode)}
            className="p-1.5 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1"
            title={showCode ? '查看图表' : '查看代码'}
          >
            {showCode ? <Eye size={14} /> : <Code size={14} />}
            <span className="text-[11px]">{showCode ? '图表' : '源码'}</span>
          </button>

          {/* Copy Code */}
          <button
            onClick={handleCopyCode}
            className="p-1.5 rounded-lg text-xs text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="复制代码"
          >
            {copiedCode ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      {showCode ? (
        <div className="p-3.5 rounded-xl bg-zinc-950 text-zinc-200 font-mono text-xs overflow-x-auto border border-zinc-800">
          <pre className="leading-relaxed">{data.code}</pre>
        </div>
      ) : error ? (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 text-xs font-mono border border-rose-200 dark:border-rose-900/50">
          ⚠️ 图表渲染失败: {error}
        </div>
      ) : (
        viewMode !== 'details' && (
          <div
            ref={svgWrapperRef}
            id={containerId}
            className="p-5 rounded-xl bg-slate-50/70 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-800/80 overflow-x-auto flex justify-center items-center min-h-[160px] transition-all relative select-none"
          >
            <div
              className="w-full flex justify-center items-center transition-transform duration-200"
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top center',
              }}
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>
        )
      )}

      {/* High-Density Node Breakdown Section: Keeps Diagram Clean while Preserving 100% Information */}
      {hasDetails && viewMode !== 'diagram' && (
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/60 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <Sparkles size={14} className="text-emerald-500" />
              <span>图表节点核心要素深度拆解 & 地道英文表达</span>
            </div>
            <span className="text-[11px] text-zinc-400">
              共 {data.details!.length} 个核心要素点
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.details!.map((detail, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl p-3 bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-200 hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      {detail.label}
                    </span>
                    {detail.tag && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        {detail.tag}
                      </span>
                    )}
                  </div>

                  {/* Copyable Professional English Expression */}
                  <div className="mt-1 mb-2 p-2 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between gap-2">
                    <code className="text-xs font-mono font-medium text-emerald-800 dark:text-emerald-300 break-all leading-relaxed">
                      {detail.enPhrase}
                    </code>
                    <button
                      onClick={() => handleCopyDetail(detail.enPhrase, idx)}
                      className="p-1 rounded text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors shrink-0"
                      title="复制英文表达"
                    >
                      {copiedDetailIndex === idx ? (
                        <Check size={12} className="text-emerald-500" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                  {detail.zhMeaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

