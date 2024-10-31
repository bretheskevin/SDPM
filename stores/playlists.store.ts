import { create } from "zustand";
import { PlaylistsController } from "@/controllers/playlists.controller";

interface PlaylistsStore {
  playlists: SoundCloudPlaylist[];
  optionPlaylists: Array<OptionLabel<string>>;
  loadPlaylists: () => Promise<void>;
  isLoading: boolean;
}

export const usePlaylistsStore = create<PlaylistsStore>((set) => ({
  playlists: [],
  optionPlaylists: [],
  loadPlaylists: async () => {
    set({ isLoading: true });

    try {
      const result = await PlaylistsController.fetchPlaylists();
      set({ ...result, isLoading: false });
    } catch (error) {
      set({ isLoading: false });

      if (!PlaylistsController.isAbortError(error)) {
        throw error;
      }
    }
  },
  isLoading: false,
}));

export const refreshPlaylists = () => {
  usePlaylistsStore.getState().loadPlaylists();
};
