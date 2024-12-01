import React from 'react';
import { Box, Layers, Library, Package, Settings } from 'lucide-react';

const navItems = [
  { icon: Box, label: 'Design', id: 'design' },
  { icon: Layers, label: 'Plugins', id: 'plugins' },
  { icon: Library, label: 'Library', id: 'library' },
  { icon: Package, label: 'Assets', id: 'assets' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export function Sidebar() {
  const [activeId, setActiveId] = React.useState('design');

  return (
    <nav className="w-[240px] bg-[#252525] flex flex-col border-r border-[#333]">
      <div className="h-14 flex items-center px-4 border-b border-[#333]">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <Box className="w-5 h-5 text-[#1E1E1E]" />
        </div>
        <span className="ml-3 text-white font-medium">Penpot</span>
      </div>
      
      <div className="flex-1 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`w-full h-10 flex items-center px-4 mb-1 group ${
              activeId === item.id ? 'bg-[#333]' : 'hover:bg-[#2A2A2A]'
            }`}
          >
            <item.icon className={`w-5 h-5 ${
              activeId === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
            }`} />
            <span className={`ml-3 ${
              activeId === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}