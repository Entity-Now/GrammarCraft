import React, { useState } from 'react';
import { Wrench, Hash, Calendar, Volume2, Sparkles, Play, Copy, Check } from 'lucide-react';
import { useTTS } from '../context/TTSContext';
import { TTSButton } from '../components/audio/TTSButton';

export const ToolsView: React.FC = () => {
  const { speak, voice, setVoice, rate, setRate, voices } = useTTS();

  // Number tool state
  const [numInput, setNumInput] = useState('1234567');
  // Date tool state
  const [dateInput, setDateInput] = useState('2026-10-12');
  // Custom TTS Lab state
  const [ttsInput, setTtsInput] = useState(
    'The production database handled over ten million queries per second with zero downtime.'
  );

  // Number to English algorithm
  const convertNumberToWords = (n: number): string => {
    if (isNaN(n)) return '请输入有效数字';
    if (n === 0) return 'zero';
    if (n < 0) return 'negative ' + convertNumberToWords(Math.abs(n));

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const helper = (num: number): string => {
      let str = '';
      if (num >= 100) {
        str += ones[Math.floor(num / 100)] + ' hundred ';
        num %= 100;
        if (num > 0) str += 'and ';
      }
      if (num >= 20) {
        str += tens[Math.floor(num / 10)];
        if (num % 10 > 0) str += '-' + ones[num % 10];
      } else if (num >= 10) {
        str += teens[num - 10];
      } else if (num > 0) {
        str += ones[num];
      }
      return str.trim();
    };

    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
    let parts: string[] = [];
    let i = 0;

    let temp = Math.floor(n);
    while (temp > 0) {
      const chunk = temp % 1000;
      if (chunk !== 0) {
        const chunkStr = helper(chunk);
        const unit = thousands[i];
        parts.unshift(unit ? `${chunkStr} ${unit}` : chunkStr);
      }
      temp = Math.floor(temp / 1000);
      i++;
    }

    return parts.join(', ');
  };

  // Convert Date to English string
  const formatDateToWords = (dateStr: string) => {
    if (!dateStr) return { full: '', prepositions: '' };
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return { full: '无效日期', prepositions: '' };

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const getOrdinal = (d: number) => {
      if (d > 3 && d < 21) return d + 'th';
      switch (d % 10) {
        case 1: return d + 'st';
        case 2: return d + 'nd';
        case 3: return d + 'rd';
        default: return d + 'th';
      }
    };

    const full = `${dayName}, ${monthName} ${getOrdinal(day)}, ${year}`;
    const prepositions = `on ${dayName} / on ${monthName} ${getOrdinal(day)} / in ${monthName} / in ${year}`;

    return { full, prepositions };
  };

  const parsedNum = parseInt(numInput, 10);
  const numberResult = !isNaN(parsedNum) ? convertNumberToWords(parsedNum) : '请输入有效整数';
  const dateResult = formatDateToWords(dateInput);

  return (
    <div className="space-y-6 pb-20 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="rounded-3xl glass-panel p-6 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
        <div className="flex items-center gap-2.5 mb-1">
          <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Wrench size={20} />
          </span>
          <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            速查小工具与语音实验室 (Tools & Lab)
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          交互式大数英文转换、日期介词解析器与 MsEdgeTTS 高自然度神经音色朗读实验室
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tool 1: Number Converter */}
        <div className="glass-card rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Hash size={16} />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              大数字 ➔ 英文拼写与千分位转换器
            </h3>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">
              输入任意阿拉伯数字（支持百/千/百万/十亿）：
            </label>
            <input
              type="number"
              value={numInput}
              onChange={(e) => setNumInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl font-mono text-sm bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              placeholder="如 1000000"
            />
          </div>

          <div className="p-4 rounded-xl bg-zinc-900 text-zinc-100 dark:bg-black/60 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                English Spelling Output
              </span>
              <TTSButton text={numberResult} size="xs" />
            </div>
            <p className="font-mono text-sm font-semibold text-emerald-400 leading-relaxed break-words">
              {numberResult}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {['1000', '250000', '1500000', '1000000000'].map((preset) => (
              <button
                key={preset}
                onClick={() => setNumInput(preset)}
                className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 text-xs font-mono transition-colors cursor-pointer"
              >
                {parseInt(preset).toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Tool 2: Date Formatter */}
        <div className="glass-card rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Calendar size={16} />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              日期 ➔ 英文序数词与介词速查
            </h3>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">
              选择任意公历日期：
            </label>
            <input
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-700/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                地道英文读法
              </span>
              <TTSButton text={dateResult.full} size="xs" />
            </div>
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {dateResult.full}
            </p>
            <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-700/60">
              <span className="text-[11px] text-zinc-400 block mb-1">搭配介词规则：</span>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                {dateResult.prepositions}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tool 3: TTS Voice Lab */}
      <div className="glass-card rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Volume2 size={16} />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              MsEdgeTTS 自然神经语音调试实验室
            </h3>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
            双模引擎
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">
            输入或粘贴任意英文文本/代码注释测试发音：
          </label>
          <textarea
            rows={3}
            value={ttsInput}
            onChange={(e) => setTtsInput(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none font-mono"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-zinc-500 dark:text-zinc-400 font-semibold mb-1">
              选择播音音色
            </label>
            <select
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
            >
              {voices.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-zinc-500 dark:text-zinc-400 font-semibold mb-1">
              语速调整 ({rate}x)
            </label>
            <div className="flex gap-2">
              {[0.75, 1.0, 1.25, 1.5].map((r) => (
                <button
                  key={r}
                  onClick={() => setRate(r)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    rate === r
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  {r}x
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={() => speak(ttsInput)}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-md shadow-emerald-500/25 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <Play size={15} />
            <span>即时朗读体验</span>
          </button>
        </div>
      </div>
    </div>
  );
};
