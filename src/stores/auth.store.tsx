import create from "zustand";
import { persist } from "zustand/middleware";

interface Auth {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const useStore = create<Auth>()(
  persist((set) => ({
    isAuthenticated: false,
    login: () =>
      set((state) => ({
        isAuthenticated: !state.isAuthenticated,
      })),
    logout: () =>
      set((state) => ({
        isAuthenticated: !state.isAuthenticated,
      })),
  }))
);
export const useAuthStore = useStore;
