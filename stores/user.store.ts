import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      authenticated: false,
      setAuthenticated: (authenticated: boolean) => set({ authenticated }),
    }),
    {
      name: "user-storage",
    }
  )
);
