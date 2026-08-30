import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useTTS } from '../../context/TTSContext';

interface TTSButtonProps {
  text: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
  label?: string;
}

export const TTSButton: React.FC<TTSButtonProps> = ({
  text,
  size = 'sm',
  className = '',
  showLabel = false,
  label = '朗读',
}) => {
  const { isPlaying, currentText, speak, stop } = useTTS();

  const isCurrentPlaying = isPlaying && currentText === text.replace(/[*_~`#>\-[\]]/g, '').trim();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrentPlaying) {
      stop();
    } else {
      speak(text);
    }
  };

  const sizeClasses = {
    xs: 'p-1 text-xs',
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'p-2.5 text-base',
  }[size];

  const iconSizes = {
    xs: 12,
    sm: 15,
    md: 18,
    lg: 20,
  }[size];

  return (
    <button
      onClick={handleClick}
      title={isCurrentPlaying ? '停止朗读' : '播放发音'}
      aria-label={isCurrentPlaying ? '停止朗读' : '播放发音'}
      className={`inline-flex items-center gap-1.5 rounded-full transition-all duration-200 cursor-pointer ${
        isCurrentPlaying
          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25 ring-2 ring-emerald-400/50 scale-105'
          : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-400'
      } ${sizeClasses} ${className}`}
    >
      {isCurrentPlaying ? (
        <div className="flex items-center gap-0.5 px-0.5">
          <span className="w-1 bg-white rounded-full animate-wave-1"></span>
          <span className="w-1 bg-white rounded-full animate-wave-2"></span>
          <span className="w-1 bg-white rounded-full animate-wave-3"></span>
        </div>
      ) : (
        <Volume2 size={iconSizes} className="shrink-0" />
      )}
      {showLabel && <span className="font-medium pr-1">{label}</span>}
    </button>
  );
};
