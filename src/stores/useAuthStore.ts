import { create } from "zustand";
import type { UserType } from "../modules/auth/index.tsx";

interface AuthState {
  accessToken: string | null;
  user: UserType | null;
  isAuthenticated: boolean;
  setLoginSuccess: (user: UserType, token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  loading: null,
  isAuthenticated: false,

  setLoginSuccess: (user, token) => {
    set({ user, accessToken: token, isAuthenticated: true });
  },
}));
