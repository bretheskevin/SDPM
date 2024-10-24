import { ApiService } from "@/services/api.service";
import { Cookies } from "@/services/cookie.service";

export class SoundcloudApiService extends ApiService {
  static BASE_URL = "https://ideological-flor-hikudo-790c3543.koyeb.app/";

  static async get<T>(path: string): Promise<T> {
    const token = await Cookies.get("token");
    return super.get(path + "?token=" + token);
  }

  static async checkHealth(): Promise<boolean> {
    try {
      const data = await this.get<{ status: string }>("health");
      return data.status === "healthy";
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
      const data = await this.get<{ is_valid: boolean }>(`check-token`);
      return data.is_valid;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to check token validity");
      return true;
    }
  }

  static async me(): Promise<SoundcloudProfile | undefined> {
    try {
      return await this.get<SoundcloudProfile>("me");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch Soundcloud profile");
    }
  }
}
