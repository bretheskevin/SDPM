import { NewPlaylistTitleInput } from "../NewPlaylistTitleInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasePlaylistSelector } from "@dashboard/actions/BasePlaylistSelector";
import { MultiPlaylistSelector } from "@dashboard/actions/MultiPlaylistSelector";
import { SubtractPlaylistInputs, subtractPlaylistSchema } from "@dashboard/actions/subtract/schema";
import { closeModal } from "@/hooks/use-modal";
import { useTransition } from "react";
import { SubtractSubmitButton } from "@dashboard/actions/subtract/SubtractSubmitButton";

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

  const [isPending, startTransition] = useTransition();

  const onSubmit = async (values: SubtractPlaylistInputs) => {
    startTransition(async () => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      closeModal();
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <NewPlaylistTitleInput form={form} />
        <BasePlaylistSelector form={form} options={mockPlaylists} />
        <MultiPlaylistSelector form={form} options={mockPlaylists} name={"playlistToSubtractIds"} />
        <SubtractSubmitButton isLoading={isPending} />
      </form>
    </Form>
  );
};
