import {create} from "zustand";

interface UserStore {
  authenticated: boolean,
  setAuthenticated: (authenticated: boolean) => void,
}

export const useUserStore = create<UserStore>((set) => ({
  authenticated: false,
  setAuthenticated: (authenticated: boolean) => set({authenticated}),
}))
