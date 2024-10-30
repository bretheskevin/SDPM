import { ApiService } from "@/services/api.service";
import { Cookies } from "@/services/cookie.service";

export class SoundcloudApiService extends ApiService {
  static BASE_URL = "https://ideological-flor-hikudo-790c3543.koyeb.app/";

  static async get<T>(path: string): Promise<ApiResponse<T>> {
    const token = await Cookies.get("token");
    return super.get(path + "?token=" + token);
  }

  static async post<T>(path: string, data: any): Promise<ApiResponse<T>> {
    const token = await Cookies.get("token");
    return super.post(path + "?token=" + token, data);
  }

  static async checkHealth(): Promise<boolean> {
    try {
      const response = await this.get<{ status: string }>("health");
      return response.data.status === "healthy";
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch API health");
      return false;
    }
  }

  static async checkToken(token: string = ""): Promise<boolean> {
    if (token) {
      Cookies.set("token", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      });
    }

    try {
      const response = await this.get<{ is_valid: boolean }>(`check-token`);
      return response.data.is_valid;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to check token validity");
      return true;
    }
  }

  static async me(): Promise<SoundcloudProfile | undefined> {
    try {
      const response = await this.get<SoundcloudProfile>("me");
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch Soundcloud profile");
    }
  }

  static async getMyTracks(): Promise<SoundcloudTrack[]> {
    try {
      const response = await this.get<SoundcloudTrack[]>("my-tracks");
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch Soundcloud tracks");
      return [];
    }
  }

  static async getMyPlaylists(): Promise<SoundCloudPlaylist[]> {
    try {
      const response = await this.get<SoundCloudPlaylist[]>("my-playlists");
      const playlists = response.data;
      return playlists.sort((a, b) => a.title.localeCompare(b.title));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch Soundcloud playlists");
      return [];
    }
  }

  static async subtractPlaylists(
    basePlaylistId: string,
    playlistToSubtractIds: string[],
    title?: string
  ): Promise<boolean> {
    try {
      const response = await this.post("create-unplayed-tracks", {
        base_playlist_id: basePlaylistId,
        played_playlist_ids: playlistToSubtractIds,
        title,
      });

      return response.status === 200;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to subtract playlists");
      return false;
    }
  }
}
