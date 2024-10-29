import { Combobox } from "@/components/ui/combobox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { SubtractPlaylistInputs } from "@dashboard/actions/subtract/schema";
import { PlaylistToSubtractBadgeGrid } from "@dashboard/actions/subtract/playlist-to-subtract-badge-grid/PlaylistToSubtractBadgeGrid";

interface PlaylistsToSubtractSelectorProps {
  form: UseFormReturn<SubtractPlaylistInputs>;
  options: OptionLabel<string>[];
}

export const PlaylistsToSubtractSelector: React.FC<PlaylistsToSubtractSelectorProps> = ({ options, form }) => {
  const values: Array<string> = form.watch("playlistToSubtractIds");

  const addValue = (value: string) => {
    form.clearErrors("playlistToSubtractIds");
    if (values.includes(value)) return;

    const newValues = [...values, value];
    form.setValue("playlistToSubtractIds", newValues);
  };

  const handleDeleteAll = () => {
    form.clearErrors("playlistToSubtractIds");
    form.setValue("playlistToSubtractIds", []);
  };

  return (
    <div className="space-y-2">
      <FormField
        control={form.control}
        name="playlistToSubtractIds"
        render={() => (
          <FormItem>
            <FormLabel htmlFor="playlists-to-subtract">Playlists to Subtract</FormLabel>

            <div className={"space-y-1"}>
              <FormControl>
                <Combobox options={options} onChange={addValue} />
              </FormControl>
              <FormMessage />
            </div>

            <PlaylistToSubtractBadgeGrid options={options} values={values} form={form} />
            {values.length > 0 && (
              <p className="w-full text-end text-xs text-muted-foreground">
                <button className="text-normal hover:underline" onClick={handleDeleteAll}>
                  Reset
                </button>
              </p>
            )}
          </FormItem>
        )}
      />
    </div>
  );
};
