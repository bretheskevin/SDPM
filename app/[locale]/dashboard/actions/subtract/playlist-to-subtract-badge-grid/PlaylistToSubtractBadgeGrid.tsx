import { PlaylistToSubtractBadge } from "@dashboard/actions/subtract/playlist-to-subtract-badge-grid/PlaylistToSubtractBadge";
import React from "react";
import { SubtractPlaylistInputs } from "@dashboard/actions/subtract/schema";
import { UseFormReturn } from "react-hook-form";

interface PlaylistToSubtractBadgeGridProps {
  options: OptionLabel<string>[];
  values: string[];
  form: UseFormReturn<SubtractPlaylistInputs>;
}

export const PlaylistToSubtractBadgeGrid: React.FC<PlaylistToSubtractBadgeGridProps> = ({ options, values, form }) => {
  const handleRemove = (value: string) => {
    form.clearErrors("playlistToSubtractIds");
    const newValues = values.filter((item) => item !== value);
    form.setValue("playlistToSubtractIds", newValues);
  };

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {values.map((item) => {
        const option = options.find((o) => o.value === item);
        return option && <PlaylistToSubtractBadge onChange={handleRemove} option={option} key={item} />;
      })}
    </div>
  );
};
