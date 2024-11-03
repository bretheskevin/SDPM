import { useScopedI18n } from "@/locales/client";
import { emitToast } from "@/hooks/use-toast";

export class ToastService {
  static emitPlaylistCreatedToast = (isCreated: boolean, t: ReturnType<typeof useScopedI18n>) => {
    if (isCreated) {
      emitToast(t("dashboard.toasters.playlistCreated.title"), t("dashboard.toasters.playlistCreated.description"));
    } else {
      emitToast(
        t("dashboard.toasters.playlistCreatedError.title"),
        t("dashboard.toasters.playlistCreatedError.description"),
        "destructive"
      );
    }
  };
}
