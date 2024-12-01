import axios from 'axios';

const api = axios.create({
  baseURL: 'https://design.penpot.app/api',
});

export interface LoginResponse {
  token: string;
  profile: {
    id: string;
    fullName: string;
    email: string;
  };
}

export interface Project {
  id: string;
  name: string;
  modifiedAt: string;
  thumbnail?: string;
}

export const penpotApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post('/login', { email, password });
    return response.data;
  },

  validateToken: async (token: string): Promise<LoginResponse['profile']> => {
    const response = await api.get('/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  getProjects: async (token: string): Promise<Project[]> => {
    const response = await api.get('/projects', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};