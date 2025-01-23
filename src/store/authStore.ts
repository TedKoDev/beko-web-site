import { create } from "zustand";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

interface CountryState {
  country: string[];
  setCountry: (country: string[]) => void;
}

export const useCountryStore = create<CountryState>((set) => ({
  country: [],
  setCountry: (country: string[]) => set({ country }),
}));
