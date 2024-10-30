import { create } from "zustand";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { transformPlaylistsToOptions } from "@/components/option_wrapper/playlist.option";

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
    const playlists = await SoundcloudApiService.getMyPlaylists();
    const optionPlaylists = transformPlaylistsToOptions(playlists);
    set({ playlists, optionPlaylists, isLoading: false });
  },
  isLoading: false,
}));

export const refreshPlaylists = () => {
  usePlaylistsStore.getState().loadPlaylists();
};
