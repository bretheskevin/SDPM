import { create } from "zustand";
import {ApiService} from "@/services/api.service";

interface ApiHealthStore {
  health: boolean;
  setHealth: (health: boolean) => void;
  checkHealth: () => Promise<void>;
}

export const useApiHealthStore = create<ApiHealthStore>((set) => ({
  health: false,
  setHealth: (health) => set({ health }),
  checkHealth: async () => {
    try {
      const data = await ApiService.get("health")
      set({ health: data.status === 'healthy' });
    } catch (error) {
      console.error("====================================")
      console.error('Failed to fetch API health:', error);
      console.error("====================================")
      set({ health: false });
    }
  }
}));

