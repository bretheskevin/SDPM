import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePlaylistsStore } from "@/stores/playlists.store";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useI18n } from "@/locales/client";
import { useTransition } from "react";
import { closeModal } from "@/hooks/use-modal";
import { AddPlaylistInputs, addPlaylistSchema } from "@dashboard/actions/add/schema";
import { ToastService } from "@/services/toast.service";

export const useAdd = () => {
  const form = useForm<AddPlaylistInputs>({
    resolver: zodResolver(addPlaylistSchema),
    defaultValues: {
      playlistToAddIds: [],
      newPlaylistTitle: "",
    },
  });

  const [isSubmitPending, startSubmitTransition] = useTransition();
  const { optionPlaylists } = usePlaylistsStore();

  const t = useI18n();

  const onSubmit = async (values: AddPlaylistInputs) => {
    startSubmitTransition(async () => {
      const { playlistToAddIds, newPlaylistTitle } = values;

      const response: SoundcloudApiResponse = await SoundcloudApiService.addPlaylists(
        playlistToAddIds,
        newPlaylistTitle
      );

      if (response.success) {
        closeModal();
        ToastService.emitPlaylistCreatedToast(true, t);
      } else {
        ToastService.emitPlaylistCreatedToast(false, t, response.message as ApiErrorKey);
      }
    });
  };

  return {
    form,
    isSubmitPending,
    onSubmit,
    optionPlaylists,
  };
};
