import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { TokenForm } from './TokenForm';

type AuthMethod = 'email' | 'token';

export function AuthContainer() {
  const [authMethod, setAuthMethod] = useState<AuthMethod>('email');

  return (
    <div className="w-full max-w-md p-8 bg-[#252525] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Connect to Penpot</h2>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setAuthMethod('email')}
          className={`flex-1 h-10 rounded-md font-medium transition-colors ${
            authMethod === 'email'
              ? 'bg-blue-600 text-white'
              : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
          }`}
        >
          Email
        </button>
        <button
          onClick={() => setAuthMethod('token')}
          className={`flex-1 h-10 rounded-md font-medium transition-colors ${
            authMethod === 'token'
              ? 'bg-blue-600 text-white'
              : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
          }`}
        >
          Access Token
        </button>
      </div>

      {authMethod === 'email' ? <LoginForm /> : <TokenForm />}
      
      <p className="mt-6 text-sm text-gray-400 text-center">
        {authMethod === 'email' 
          ? "Don't have an account? Sign up at penpot.app"
          : "You can find your access token in Penpot's settings"}
      </p>
    </div>
  );
}