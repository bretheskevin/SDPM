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
          <FormControl>
            <Combobox options={options} placeholder="Select base playlist" {...field} form={form} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);
