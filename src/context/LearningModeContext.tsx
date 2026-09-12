import React, { createContext, useContext, useEffect, useState } from 'react';

export type LearningMode = 'beginner' | 'geek';

interface LearningModeContextType {
  mode: LearningMode;
  isBeginner: boolean;
  setMode: (mode: LearningMode) => void;
  toggleMode: () => void;
}

const LearningModeContext = createContext<LearningModeContextType | null>(null);

export const LearningModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<LearningMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gc_learning_mode') as LearningMode | null;
      if (saved === 'beginner' || saved === 'geek') {
        return saved;
      }
    }
    // Default to beginner mode for a warm, accessible experience
    return 'beginner';
  });

  const isBeginner = mode === 'beginner';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gc_learning_mode', mode);
      document.documentElement.setAttribute('data-learning-mode', mode);
    }
  }, [mode]);

  const setMode = (newMode: LearningMode) => {
    setModeState(newMode);
  };

  const toggleMode = () => {
    setModeState((prev) => (prev === 'beginner' ? 'geek' : 'beginner'));
  };

  return (
    <LearningModeContext.Provider value={{ mode, isBeginner, setMode, toggleMode }}>
      {children}
    </LearningModeContext.Provider>
  );
};

export const useLearningMode = () => {
  const context = useContext(LearningModeContext);
  if (!context) {
    throw new Error('useLearningMode must be used within a LearningModeProvider');
  }
  return context;
};
