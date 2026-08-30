import React, { useState } from 'react';
import {
  Compass,
  Search,
  Moon,
  Sun,
  Palette,
  Layers,
  Dumbbell,
  Wrench,
  LayoutDashboard,
  Check,
} from 'lucide-react';
import { useTheme, type AccentColor } from '../../context/ThemeContext';

interface HeaderProps {
  currentView: 'topics' | 'practice' | 'tools' | 'dashboard';
  setCurrentView: (view: 'topics' | 'practice' | 'tools' | 'dashboard') => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  onOpenSearch,
}) => {
  const { isDark, accent, setAccent, toggleDark } = useTheme();
  const [showAccentPicker, setShowAccentPicker] = useState(false);

  const accentOptions: { id: AccentColor; name: string; color: string }[] = [
    { id: 'emerald', name: '翡翠绿 (Emerald)', color: 'bg-emerald-500' },
    { id: 'jade', name: '森林玉 (Jade)', color: 'bg-teal-600' },
    { id: 'sage', name: '鼠尾草 (Sage)', color: 'bg-[#84a98c]' },
    { id: 'forest', name: '鲜林绿 (Forest)', color: 'bg-green-500' },
    { id: 'slate', name: '极简灰 (Slate)', color: 'bg-slate-500' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
            <Compass size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
                Grammar<span className="text-emerald-500">Craft</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                Visual
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block">
              现代可视化交互式英语框架
            </p>
          </div>
        </div>

        {/* Center: Main View Navigation Tabs */}
        <nav className="hidden md:flex items-center p-1 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/70 border border-zinc-200/50 dark:border-zinc-700/50 text-xs font-semibold">
          <button
            onClick={() => setCurrentView('topics')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              currentView === 'topics'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Layers size={14} />
            <span>核心专题</span>
          </button>

          <button
            onClick={() => setCurrentView('practice')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              currentView === 'practice'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Dumbbell size={14} />
            <span>实战演练场</span>
          </button>

          <button
            onClick={() => setCurrentView('tools')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              currentView === 'tools'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Wrench size={14} />
            <span>数字与工具</span>
          </button>

          <button
            onClick={() => setCurrentView('dashboard')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              currentView === 'dashboard'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <LayoutDashboard size={14} />
            <span>知识全景图</span>
          </button>
        </nav>

        {/* Right: Search, Theme & Accent controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 text-zinc-500 dark:text-zinc-400 text-xs transition-colors cursor-pointer"
            title="全局搜索 (Ctrl + K)"
          >
            <Search size={14} />
            <span className="hidden sm:inline">搜索语法/单词...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-400">
              ⌘K
            </kbd>
          </button>

          {/* Accent Theme Picker Popover */}
          <div className="relative">
            <button
              onClick={() => setShowAccentPicker(!showAccentPicker)}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              title="切换主题配色"
            >
              <Palette size={16} />
            </button>

            {showAccentPicker && (
              <div className="absolute right-0 mt-2 w-48 p-2 rounded-2xl glass-card border border-zinc-200 dark:border-zinc-700 shadow-xl z-50 animate-fadeIn">
                <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider px-2 py-1 block">
                  主题色彩强调
                </span>
                <div className="space-y-1 mt-1">
                  {accentOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setAccent(opt.id);
                        setShowAccentPicker(false);
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${opt.color}`}></span>
                        <span>{opt.name.split(' ')[0]}</span>
                      </div>
                      {accent === opt.id && <Check size={13} className="text-emerald-500" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dark/Light Mode Switcher */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
            title={isDark ? '切换浅色模式' : '切换深色模式'}
          >
            {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};
