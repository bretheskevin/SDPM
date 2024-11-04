import { create } from "zustand";
import { PlaylistsController } from "@/controllers/playlists.controller";

interface PlaylistsStore {
  playlists: SoundCloudPlaylist[];
  optionPlaylists: Array<OptionLabel<string>>;
  loadPlaylists: (force?: boolean) => Promise<void>;
  isLoading: boolean;
}

let currentRequestId = 0;

export const usePlaylistsStore = create<PlaylistsStore>((set) => ({
  playlists: [],
  optionPlaylists: [],
  loadPlaylists: async (force: boolean = false) => {
    const playlists = usePlaylistsStore.getState().playlists;
    console.log(playlists);
    if (!force && playlists.length > 0) {
      return;
    }

    const requestId = ++currentRequestId;
    set({ isLoading: true });

    try {
      const result = await PlaylistsController.fetchPlaylists();

      if (requestId === currentRequestId) {
        set({ ...result, isLoading: false });
      }
    } catch (error) {
      if (requestId === currentRequestId) {
        set({ isLoading: false });
      }

      if (!PlaylistsController.isAbortError(error)) {
        throw error;
      }
    }
  },
  isLoading: false,
}));
