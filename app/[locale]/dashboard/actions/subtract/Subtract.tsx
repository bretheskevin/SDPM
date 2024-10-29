import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { NewPlaylistTitleInput } from "../NewPlaylistTitleInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasePlaylistSelector } from "@dashboard/actions/BasePlaylistSelector";
import { PlaylistsToSubtractSelector } from "@dashboard/actions/subtract/PlaylistsToSubtractSelector";
import { SubtractPlaylistInputs, subtractPlaylistSchema } from "@dashboard/actions/subtract/schema";
import { closeModal } from "@/hooks/use-modal";

const mockPlaylists = [
  { value: "1", label: "Summer Hits" },
  { value: "2", label: "Chill Vibes" },
  { value: "3", label: "Workout Mix" },
  { value: "4", label: "Party Anthems" },
];

export const Subtract = () => {
  const form = useForm<SubtractPlaylistInputs>({
    resolver: zodResolver(subtractPlaylistSchema),
    defaultValues: {
      basePlaylistId: "",
      playlistToSubtractIds: [],
      newPlaylistTitle: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: SubtractPlaylistInputs) => {
    setIsLoading(true);

    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    closeModal();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <BasePlaylistSelector form={form} options={mockPlaylists} />
        <PlaylistsToSubtractSelector form={form} options={mockPlaylists} />
        <NewPlaylistTitleInput form={form} />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Playlist"
          )}
        </Button>
      </form>
    </Form>
  );
};
