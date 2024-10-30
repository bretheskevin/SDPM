"use client";

import { NewPlaylistTitleInput } from "../NewPlaylistTitleInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasePlaylistSelector } from "@dashboard/actions/BasePlaylistSelector";
import { MultiPlaylistSelector } from "@dashboard/actions/MultiPlaylistSelector";
import { SubtractPlaylistInputs, subtractPlaylistSchema } from "@dashboard/actions/subtract/schema";
import { closeModal } from "@/hooks/use-modal";
import { useEffect, useState, useTransition } from "react";
import { SubmitButton } from "@dashboard/actions/SubmitButton";
import { transformPlaylistsToOptions } from "@/components/option_wrapper/playlist.option";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "@/components/Loader";
import { useScopedI18n } from "@/locales/client";

export const Subtract = () => {
  const form = useForm<SubtractPlaylistInputs>({
    resolver: zodResolver(subtractPlaylistSchema),
    defaultValues: {
      basePlaylistId: "",
      playlistToSubtractIds: [],
      newPlaylistTitle: "",
    },
  });

  const [isSubmitPending, startSubmitTransition] = useTransition();
  const [isLoadingPlaylists, startLoadingPlaylistsTransition] = useTransition();

  const [optionPlaylists, setOptionPlaylists] = useState<Array<OptionLabel<string>>>([]);

  const { toast } = useToast();
  const scopedT = useScopedI18n("dashboard");

  const a = () => {
    console.log(scopedT("toasters.playlistCreated.title"));
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
        toast({
          title: scopedT("toasters.playlistCreated.title"),
          description: scopedT("toasters.playlistCreated.description"),
          duration: 3000,
        });
      } else {
        toast({
          title: scopedT("toasters.playlistCreatedError.title"),
          duration: 3000,
          variant: "destructive",
        });
      }
    });
  };

  useEffect(() => {
    startLoadingPlaylistsTransition(async () => {
      const playlists: Array<SoundcloudPlaylist> = await SoundcloudApiService.getMyPlaylists();
      setOptionPlaylists(transformPlaylistsToOptions(playlists));
    });
  }, []);

  return isLoadingPlaylists ? (
    <Loader text={scopedT("loadingPlaylists")} />
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <NewPlaylistTitleInput form={form} />
        <BasePlaylistSelector form={form} options={optionPlaylists} />
        <MultiPlaylistSelector form={form} options={optionPlaylists} name={"playlistToSubtractIds"} />
        <SubmitButton isLoading={isSubmitPending} />
      </form>
    </Form>
  );
};
