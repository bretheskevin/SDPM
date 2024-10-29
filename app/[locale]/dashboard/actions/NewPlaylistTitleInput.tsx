import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface NewPlaylistTitleInputProps {
  form: UseFormReturn<any>;
}

export const NewPlaylistTitleInput = ({ form }: NewPlaylistTitleInputProps) => (
  <div className="space-y-2">
    <FormField
      control={form.control}
      name="newPlaylistTitle"
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="new-playlist-title">New Playlist Title</FormLabel>

          <div className={"space-y-1"}>
            <FormControl>
              <Input id="new-playlist-title" {...field} placeholder={"Enter new playlist title"} />
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  </div>
);
