"use client";

import { NewPlaylistTitleInput } from "../NewPlaylistTitleInput";
import { Form } from "@/components/ui/form";
import { BasePlaylistSelector } from "@dashboard/actions/BasePlaylistSelector";
import { MultiPlaylistSelector } from "@dashboard/actions/MultiPlaylistSelector";
import { SubmitButton } from "@dashboard/actions/SubmitButton";
import { BaseAction } from "@dashboard/actions/BaseAction";
import { useSubtract } from "@dashboard/actions/subtract/use-subtract.hook";

export const Subtract = () => {
  const { form, isSubmitPending, onSubmit, optionPlaylists } = useSubtract();

  return (
    <BaseAction>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <NewPlaylistTitleInput form={form} />
          <BasePlaylistSelector form={form} options={optionPlaylists} />
          <MultiPlaylistSelector form={form} options={optionPlaylists} name={"playlistToSubtractIds"} />
          <SubmitButton isLoading={isSubmitPending} />
        </form>
      </Form>
    </BaseAction>
  );
};
