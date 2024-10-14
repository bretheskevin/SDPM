import { create } from "zustand";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";

interface ApiHealthStore {
  health: boolean;
  setHealth: (health: boolean) => void;
  checkHealth: () => Promise<void>;
}

export const useApiHealthStore = create<ApiHealthStore>((set) => ({
  health: true,
  setHealth: (health) => set({ health }),
  checkHealth: async () => {
    const health: boolean = await SoundcloudApiService.checkHealth();
    set({ health });
  },
}));
