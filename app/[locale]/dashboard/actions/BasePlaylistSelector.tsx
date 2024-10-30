import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "@/components/ui/combobox";
import { useScopedI18n } from "@/locales/client";

interface BasePlaylistSelectorProps {
  form: UseFormReturn<any>;
  options: { value: string; label: string }[];
}

export const BasePlaylistSelector = ({ options, form }: BasePlaylistSelectorProps) => {
  const scopedT = useScopedI18n("dashboard.actions.global.form.basePlaylist");

  return (
    <div className="space-y-2">
      <FormField
        control={form.control}
        name="basePlaylistId"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="base-playlist">{scopedT("title")}</FormLabel>

            <div className={"space-y-1"}>
              <FormControl>
                <Combobox options={options} {...field} form={form} placeholder={scopedT("placeholder")} />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};
