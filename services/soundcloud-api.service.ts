import {ApiService} from "@/services/api.service";
import {Cookies} from "@/services/cookie.service";

export class SoundcloudApiService extends ApiService {
  static BASE_URL = "https://ideological-flor-hikudo-790c3543.koyeb.app/";

  static async checkHealth(): Promise<boolean> {
    try {
      const data = await this.get("health")
      return data.status === 'healthy';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to fetch API health")
      return false;
    }
  }

  static async checkToken(token: string = ""): Promise<boolean> {
    if (token) {
      Cookies.set("token", token);
    } else {
      token = await Cookies.get("token") || "";
    }

    try {
      const data: {is_valid: boolean} = await this.get(`check-token?token=${token}`)
      return data.is_valid;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      return false;
    }
  }
}
