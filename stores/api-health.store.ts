import {create} from "zustand";
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
    } catch (e) {
      // console.log("==============================")
      // console.log("| Failed to fetch API health |")
      // console.log("==============================")
      console.log(`==============================
| Failed to fetch API health |
==============================`);
      set({ health: false });
    }
  }
}));
