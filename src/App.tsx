import React from 'react';
import { TitleBar } from './components/layout/TitleBar';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';
import { useAuthStore } from './store/auth';

function App() {
  const { user, logout } = useAuthStore();

  return (
    <div className="flex flex-col h-screen bg-[#1E1E1E] text-gray-100">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;