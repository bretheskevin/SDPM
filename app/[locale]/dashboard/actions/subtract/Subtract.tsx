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
import { SubtractSubmitButton } from "@dashboard/actions/subtract/SubtractSubmitButton";
import { transformPlaylistsToOptions } from "@/components/option_wrapper/playlist.option";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useToast } from "@/hooks/use-toast";

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

  const onSubmit = async (values: SubtractPlaylistInputs) => {
    startSubmitTransition(async () => {
      try {
        const { basePlaylistId, playlistToSubtractIds, newPlaylistTitle } = values;

        const isCreated = await SoundcloudApiService.subtractPlaylists(
          basePlaylistId,
          playlistToSubtractIds,
          newPlaylistTitle
        );

        if (isCreated) {
          closeModal();
          toast({
            title: "Playlist created successfully",
            description: "Check your playlists :)",
            duration: 3000,
          });
        } else {
          toast({
            title: "Failed to create playlist",
            duration: 3000,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Failed to create playlist",
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
    <FormLoader />
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <NewPlaylistTitleInput form={form} />
        <BasePlaylistSelector form={form} options={optionPlaylists} />
        <MultiPlaylistSelector form={form} options={optionPlaylists} name={"playlistToSubtractIds"} />
        <SubtractSubmitButton isLoading={isSubmitPending} />
      </form>
    </Form>
  );
};

const FormLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 p-8">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <span className="text-gray-600">Loading playlists...</span>
    </div>
  );
};
