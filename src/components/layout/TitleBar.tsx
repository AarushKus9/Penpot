import React from 'react';
import { Minus, Square, X } from 'lucide-react';

export function TitleBar() {
  return (
    <div className="h-10 bg-[#1A1A1A] flex items-center justify-between select-none">
      <div className="flex items-center px-4">
        <span className="text-sm text-gray-300">Penpot Desktop</span>
      </div>
      <div className="flex">
        <button className="h-10 w-12 flex items-center justify-center hover:bg-[#333] transition-colors">
          <Minus className="w-4 h-4 text-gray-400" />
        </button>
        <button className="h-10 w-12 flex items-center justify-center hover:bg-[#333] transition-colors">
          <Square className="w-3.5 h-3.5 text-gray-400" />
        </button>
        <button className="h-10 w-12 flex items-center justify-center hover:bg-red-500 transition-colors">
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}