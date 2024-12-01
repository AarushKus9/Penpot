import React, { useState } from 'react';
import { useAuthStore } from '../../store/auth';

export function TokenForm() {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const loginWithToken = useAuthStore((state) => state.loginWithToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await loginWithToken(token);
    } catch (err) {
      setError('Invalid access token. Please check and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="token" className="block text-sm font-medium text-gray-300 mb-2">
          Access Token
        </label>
        <input
          id="token"
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full h-10 bg-[#1A1A1A] rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Enter your Penpot access token"
        />
      </div>
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="w-full h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Connect with Token
      </button>
    </form>
  );
}