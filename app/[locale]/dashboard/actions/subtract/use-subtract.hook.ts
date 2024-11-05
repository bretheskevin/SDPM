import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubtractPlaylistInputs, subtractPlaylistSchema } from "@dashboard/actions/subtract/schema";
import { usePlaylistsStore } from "@/stores/playlists.store";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useI18n } from "@/locales/client";
import { useTransition } from "react";
import { closeModal } from "@/hooks/use-modal";
import { ToastService } from "@/services/toast.service";

export const useSubtract = () => {
  const form = useForm<SubtractPlaylistInputs>({
    resolver: zodResolver(subtractPlaylistSchema),
    defaultValues: {
      basePlaylistId: "",
      playlistToSubtractIds: [],
      newPlaylistTitle: "",
    },
  });

  const [isSubmitPending, startSubmitTransition] = useTransition();
  const { optionPlaylists, loadPlaylists } = usePlaylistsStore();

  const t = useI18n();

  const onSubmit = async (values: SubtractPlaylistInputs) => {
    startSubmitTransition(async () => {
      const { basePlaylistId, playlistToSubtractIds, newPlaylistTitle } = values;

      const isCreated = await SoundcloudApiService.subtractPlaylists(
        basePlaylistId,
        playlistToSubtractIds,
        newPlaylistTitle
      );

      if (isCreated) {
        closeModal();
        loadPlaylists(true);
      }

      ToastService.emitPlaylistCreatedToast(isCreated, t);
    });
  };

  return {
    form,
    isSubmitPending,
    onSubmit,
    optionPlaylists,
  };
};
