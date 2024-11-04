import { ApiService } from "@/services/api.service";
import { Cookies } from "@/services/cookie.service";
import { BaseRequestController } from "@/controllers/base-request.controller";

export class SoundcloudApiService extends ApiService {
  static BASE_URL = "https://ideological-flor-hikudo-790c3543.koyeb.app/api/v1/sdpm/";

  static async get<T>(path: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const token = await Cookies.get("token");
    return super.get(path + "?token=" + token, options);
  }

  static async post<T>(path: string, data: any): Promise<ApiResponse<T>> {
    const token = await Cookies.get("token");
    return await super.post<T>(path + "?token=" + token, data);
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
      const response = await this.get<SoundcloudApiResponse>("token/validate");
      return response.data.success;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to check token validity");
      return true;
    }
  }

  static async me(): Promise<SoundcloudProfile | undefined> {
    try {
      const response = await this.get<SoundcloudProfile>("users/me");
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch Soundcloud profile");
    }
  }

  static async getMyTracks(): Promise<SoundcloudTrack[]> {
    try {
      const response = await this.get<SoundcloudTrack[]>("tracks");
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch Soundcloud tracks");
      return [];
    }
  }

  static async getMyPlaylists(signal?: AbortSignal): Promise<SoundCloudPlaylist[]> {
    try {
      const response = await this.get<SoundCloudPlaylist[]>("playlists", { signal });
      const playlists = response.data;
      return playlists.sort((a, b) => a.title.localeCompare(b.title));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      if (!BaseRequestController.isAbortError(error)) {
        throw error;
      }
      return [];
    }
  }

  static async subtractPlaylists(
    basePlaylistId: string,
    playlistToSubtractIds: string[],
    title?: string
  ): Promise<boolean> {
    try {
      const response = await this.post<SoundcloudApiResponse>("playlists/unplayed", {
        base_playlist_id: basePlaylistId,
        played_playlist_ids: playlistToSubtractIds,
        title,
      });

      return response.data.success;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to subtract playlists");
      return false;
    }
  }

  static async addPlaylists(playlistToAddIds: string[], title?: string): Promise<SoundcloudApiResponse> {
    try {
      const response = await this.post<SoundcloudApiResponse>("playlists/merge", {
        playlist_ids: playlistToAddIds,
        title,
      });

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      return {
        success: false,
        message: "Failed to add playlists",
      };
    }
  }
}
