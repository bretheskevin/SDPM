import {create} from "zustand";
import {ApiService} from "@/services/api.service";

interface ApiHealthStore {
  health: boolean;
  setHealth: (health: boolean) => void;
  checkHealth: () => Promise<void>;
}

export const useApiHealthStore = create<ApiHealthStore>((set) => ({
  health: true,
  setHealth: (health) => set({ health }),
  checkHealth: async () => {
    try {
      const data = await ApiService.get("health")
      set({ health: data.status === 'healthy' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.log(`==============================
| Failed to fetch API health |
==============================`);
      set({ health: false });
    }
  }
}));
