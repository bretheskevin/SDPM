"use client";

import { NewPlaylistTitleInput } from "../components/NewPlaylistTitleInput";
import { Form } from "@/components/ui/form";
import { BasePlaylistSelector } from "@dashboard/actions/BasePlaylistSelector";
import { MultiPlaylistSelector } from "@dashboard/actions/components/multi-playlist-selector/MultiPlaylistSelector";
import { SubmitButton } from "@dashboard/actions/components/SubmitButton";
import { BaseAction } from "@dashboard/actions/BaseAction";
import { useSubtract } from "@dashboard/actions/subtract/use-subtract.hook";
import { useScopedI18n } from "@/locales/client";

export const Subtract = () => {
  const { form, isSubmitPending, onSubmit, optionPlaylists } = useSubtract();
  const scopedT = useScopedI18n("dashboard.actions.subtract.form");

  return (
    <BaseAction>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <NewPlaylistTitleInput form={form} />
          <BasePlaylistSelector form={form} options={optionPlaylists} />
          <MultiPlaylistSelector
            form={form}
            options={optionPlaylists}
            name={"playlistToSubtractIds"}
            title={scopedT("playlistsToSubtract.title")}
            placeholder={scopedT("playlistsToSubtract.placeholder")}
          />
          <SubmitButton isLoading={isSubmitPending} />
        </form>
      </Form>
    </BaseAction>
  );
};
