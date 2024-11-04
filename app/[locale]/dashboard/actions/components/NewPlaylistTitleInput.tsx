import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { useScopedI18n } from "@/locales/client";

interface NewPlaylistTitleInputProps {
  form: UseFormReturn<any>;
}

export const NewPlaylistTitleInput = ({ form }: NewPlaylistTitleInputProps) => {
  const scopedT = useScopedI18n("dashboard.actions.global.form.title");

  return (
    <div className="space-y-2">
      <FormField
        control={form.control}
        name="newPlaylistTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="new-playlist-title">{scopedT("title")}</FormLabel>

            <div className={"space-y-1"}>
              <FormControl>
                <Input id="new-playlist-title" {...field} placeholder={scopedT("placeholder")} required />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};
