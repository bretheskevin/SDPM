import { Combobox } from "@/components/ui/combobox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { PlaylistToSubtractBadgeGrid } from "@dashboard/actions/subtract/playlist-to-subtract-badge-grid/PlaylistToSubtractBadgeGrid";

interface PlaylistsToSubtractSelectorProps {
  form: UseFormReturn<any>;
  options: OptionLabel<string>[];
  name: string;
}

export const MultiPlaylistSelector: React.FC<PlaylistsToSubtractSelectorProps> = ({ options, form, name }) => {
  const values: Array<string> = form.watch(name);

  const addValue = (value: string) => {
    form.clearErrors(name);
    if (values.includes(value)) return;

    const newValues = [...values, value];
    form.setValue(name, newValues);
  };

  const handleDeleteAll = () => {
    form.clearErrors(name);
    form.setValue(name, []);
  };

  return (
    <div className="space-y-2">
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem>
            <FormLabel htmlFor="playlists-to-subtract">Playlists to Subtract</FormLabel>

            <div className={"space-y-1"}>
              <FormControl>
                <Combobox options={options} onChange={addValue} placeholder={"Select playlists to subtract"} />
              </FormControl>
              <FormMessage />
            </div>

            <PlaylistToSubtractBadgeGrid options={options} values={values} form={form} />
            {values.length > 0 && (
              <div className={"w-full text-end text-xs text-muted-foreground"}>
                <button className="text-normal hover:underline" onClick={handleDeleteAll}>
                  Reset
                </button>
              </div>
            )}
          </FormItem>
        )}
      />
    </div>
  );
};
