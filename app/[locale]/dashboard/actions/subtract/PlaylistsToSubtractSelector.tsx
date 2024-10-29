import { Combobox } from "@/components/ui/combobox";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { SubtractPlaylistInputs } from "@dashboard/actions/subtract/schema";

interface PlaylistsToSubtractSelectorProps {
  form: UseFormReturn<SubtractPlaylistInputs>;
  options: { value: string; label: string }[];
}

export const PlaylistsToSubtractSelector: React.FC<PlaylistsToSubtractSelectorProps> = ({ options, form }) => {
  const values: Array<string> = form.watch("playlistToSubtractIds");

  const handleRemove = (value: string) => {
    form.clearErrors("playlistToSubtractIds");
    const newValues = values.filter((item) => item !== value);
    form.setValue("playlistToSubtractIds", newValues);
  };

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
            <FormControl>
              <Combobox
                options={options}
                onChange={addValue}
                placeholder="Select playlists to subtract"
                className="flex-grow"
              />
            </FormControl>
            <div className="mt-2 flex flex-wrap gap-2">
              {values.map((item) => {
                const option = options.find((o) => o.value === item);
                return (
                  <Badge key={item} variant="secondary" className="px-2 py-1">
                    {option?.label || item}
                    <button
                      className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                      onClick={() => handleRemove(item)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                );
              })}
            </div>
            {values.length > 0 && (
              <p className="w-full text-end text-xs text-muted-foreground">
                <button className="text-normal hover:underline" onClick={handleDeleteAll}>
                  Reset
                </button>
              </p>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
