import React, { useEffect, useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { AuthContainer } from '../auth/AuthContainer';
import { useAuthStore } from '../../store/auth';
import { penpotApi, Project } from '../../lib/api';

export function MainContent() {
  const { isAuthenticated, token } = useAuthStore();
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isAuthenticated && token) {
      penpotApi.getProjects(token)
        .then(setProjects)
        .catch(console.error);
    }
  }, [isAuthenticated, token]);

  if (!isAuthenticated) {
    return (
      <main className="flex-1 bg-[#1E1E1E] overflow-auto flex items-center justify-center">
        <AuthContainer />
      </main>
    );
  }

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-1 bg-[#1E1E1E] overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="h-10 w-[300px] bg-[#252525] rounded-md pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button className="h-10 px-4 bg-blue-600 rounded-md flex items-center text-sm font-medium hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#252525] rounded-lg overflow-hidden hover:bg-[#2A2A2A] transition-colors cursor-pointer"
            >
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="aspect-video object-cover group-hover:opacity-90 transition-opacity"
                />
              ) : (
                <div className="aspect-video bg-[#333] group-hover:opacity-90 transition-opacity" />
              )}
              <div className="p-4">
                <h3 className="text-white font-medium">{project.name}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Last edited {new Date(project.modifiedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}