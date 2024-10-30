import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubtractPlaylistInputs, subtractPlaylistSchema } from "@dashboard/actions/subtract/schema";
import { usePlaylistsStore } from "@/stores/playlists.store";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useToast } from "@/hooks/use-toast";
import { useScopedI18n } from "@/locales/client";
import { useTransition } from "react";
import { closeModal } from "@/hooks/use-modal";

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
  const { optionPlaylists } = usePlaylistsStore();

  const { emitToast } = useToast();
  const scopedT = useScopedI18n("dashboard");

  const emitToastMessage = (isCreated: boolean) => {
    if (isCreated) {
      emitToast(scopedT("toasters.playlistCreated.title"), scopedT("toasters.playlistCreated.description"));
    } else {
      emitToast(
        scopedT("toasters.playlistCreatedError.title"),
        scopedT("toasters.playlistCreatedError.description"),
        "destructive"
      );
    }
  };

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
      }

      emitToastMessage(isCreated);
    });
  };

  return {
    form,
    isSubmitPending,
    onSubmit,
    optionPlaylists,
  };
};
