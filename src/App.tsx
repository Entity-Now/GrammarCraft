import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TTSProvider } from './context/TTSContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { SearchModal } from './components/layout/SearchModal';
import { GlobalAudioPlayer } from './components/audio/GlobalAudioPlayer';
import { TopicDetailView } from './views/TopicDetailView';
import { PracticeArenaView } from './views/PracticeArenaView';
import { ToolsView } from './views/ToolsView';
import { OverviewDashboard } from './views/OverviewDashboard';
import { PILLARS, TOPIC_REGISTRY } from './data/topics';
import { Menu } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState<'topics' | 'practice' | 'tools' | 'dashboard'>('topics');
  const [activeTopicId, setActiveTopicId] = useState<string>('thinking-debug');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const allTopicMetas = PILLARS.flatMap((p) => p.topics);
  const currentTopicContent = TOPIC_REGISTRY[activeTopicId] || TOPIC_REGISTRY['thinking-debug'];

  const handleSelectTopic = (topicId: string) => {
    setActiveTopicId(topicId);
    setCurrentView('topics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPractice = () => {
    setCurrentView('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
      {/* Top Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Workspace Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Left Sidebar (visible in 'topics' view or can be toggled) */}
        {currentView === 'topics' && (
          <Sidebar
            pillars={PILLARS}
            activeTopicId={activeTopicId}
            onSelectTopic={handleSelectTopic}
            isOpen={mobileSidebarOpen}
            onClose={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Content Area */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          {/* Mobile Sidebar Toggle Button */}
          {currentView === 'topics' && (
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="px-3.5 py-2 rounded-xl glass-card text-xs font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-200 cursor-pointer"
              >
                <Menu size={15} />
                <span>展开 19 个语法专题目录</span>
              </button>
            </div>
          )}

          {currentView === 'topics' && (
            <TopicDetailView
              content={currentTopicContent}
              allTopics={allTopicMetas}
              onSelectTopic={handleSelectTopic}
              onOpenPractice={handleOpenPractice}
            />
          )}

          {currentView === 'practice' && (
            <PracticeArenaView
              topicContents={TOPIC_REGISTRY}
              onSelectTopic={handleSelectTopic}
            />
          )}

          {currentView === 'tools' && <ToolsView />}

          {currentView === 'dashboard' && (
            <OverviewDashboard
              pillars={PILLARS}
              onSelectTopic={handleSelectTopic}
              onOpenPractice={handleOpenPractice}
            />
          )}
        </main>
      </div>

      {/* Global Cmd+K Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        topicContents={TOPIC_REGISTRY}
        onSelectTopic={handleSelectTopic}
      />

      {/* Bottom Floating MsEdgeTTS Audio Bar */}
      <GlobalAudioPlayer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <TTSProvider>
        <AppContent />
      </TTSProvider>
    </ThemeProvider>
  );
}

export default App;
