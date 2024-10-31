import { BaseRequestController } from "./base-request.controller";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { transformPlaylistsToOptions } from "@/components/option_wrapper/playlist.option";

interface FetchPlaylistsResult {
  playlists: SoundCloudPlaylist[];
  optionPlaylists: Array<OptionLabel<string>>;
}

export class PlaylistsController extends BaseRequestController {
  static async fetchPlaylists(): Promise<FetchPlaylistsResult> {
    this.cancelRequest();

    try {
      const playlists = await SoundcloudApiService.getMyPlaylists(this.getCurrentSignal());
      const optionPlaylists = transformPlaylistsToOptions(playlists);
      return { playlists, optionPlaylists };
    } catch (error) {
      if (!this.isAbortError(error)) {
        throw error;
      }
      throw error;
    } finally {
      this.clearController();
    }
  }
}
