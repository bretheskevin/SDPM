import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "@/components/ui/combobox";

interface BasePlaylistSelectorProps {
  form: UseFormReturn<any>;
  options: { value: string; label: string }[];
}

export const BasePlaylistSelector = ({ options, form }: BasePlaylistSelectorProps) => (
  <div className="space-y-2">
    <FormField
      control={form.control}
      name="basePlaylistId"
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="base-playlist">Base Playlist</FormLabel>

          <div className={"space-y-1"}>
            <FormControl>
              <Combobox options={options} {...field} form={form} placeholder={"Select base playlist"} />
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  </div>
);
