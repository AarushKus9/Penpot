import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { penpotApi, LoginResponse } from '../lib/api';

interface AuthState {
  user: LoginResponse['profile'] | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithToken: (token: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        try {
          const response = await penpotApi.login(email, password);
          set({
            user: response.profile,
            token: response.token,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Login failed:', error);
          throw error;
        }
      },
      loginWithToken: async (token: string) => {
        try {
          const profile = await penpotApi.validateToken(token);
          set({
            user: profile,
            token,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Token validation failed:', error);
          throw error;
        }
      },
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);