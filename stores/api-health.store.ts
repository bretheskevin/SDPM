import {create} from "zustand";

interface ApiHealthStore {
  isApiUp: boolean
}

export const useApiHealthStore = create<ApiHealthStore>((set) => ({
  isApiUp: false,
  setIsApiUp: (isApiUp: boolean) => set({isApiUp}),
}))
