import { useI18n } from "@/locales/client";
import { emitToast } from "@/hooks/use-toast";

export class ToastService {
  static emitPlaylistCreatedToast = (isCreated: boolean, t: ReturnType<typeof useI18n>, errorKey?: ApiErrorKey) => {
    if (isCreated) {
      emitToast(t("dashboard.toasters.playlistCreated.title"), t("dashboard.toasters.playlistCreated.description"));
    } else {
      emitToast(
        t("dashboard.toasters.playlistCreatedError.title"),
        errorKey && t(`dashboard.toasters.playlistCreatedError.${errorKey}`),
        "destructive"
      );
    }
  };
}
