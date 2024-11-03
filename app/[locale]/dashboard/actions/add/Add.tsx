"use client";

import { NewPlaylistTitleInput } from "../components/NewPlaylistTitleInput";
import { Form } from "@/components/ui/form";
import { MultiPlaylistSelector } from "@dashboard/actions/components/multi-playlist-selector/MultiPlaylistSelector";
import { SubmitButton } from "@dashboard/actions/components/SubmitButton";
import { BaseAction } from "@dashboard/actions/BaseAction";
import { useScopedI18n } from "@/locales/client";
import { useAdd } from "@dashboard/actions/add/use-add.hook";

export const Add = () => {
  const { form, isSubmitPending, onSubmit, optionPlaylists } = useAdd();
  const scopedT = useScopedI18n("dashboard.actions.add.form");

  return (
    <BaseAction>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <NewPlaylistTitleInput form={form} />
          <MultiPlaylistSelector
            form={form}
            options={optionPlaylists}
            name={"playlistToAddIds"}
            title={scopedT("playlistToAddIds.title")}
            placeholder={scopedT("playlistToAddIds.placeholder")}
          />
          <SubmitButton isLoading={isSubmitPending} />
        </form>
      </Form>
    </BaseAction>
  );
};
