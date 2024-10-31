import { BadgeRemovable } from "@/components/BadgeRemovable";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface MultiPlaylistBadgeGridProps {
  options: OptionLabel<string>[];
  values: string[];
  form: UseFormReturn<any>;
  name: string;
}

export const MultiPlaylistBadgeGrid: React.FC<MultiPlaylistBadgeGridProps> = ({ options, values, form, name }) => {
  const handleRemove = (value: string) => {
    form.clearErrors(name);
    const newValues = values.filter((item) => item !== value);
    form.setValue(name, newValues);
  };

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {values.map((item) => {
        const option = options.find((o) => o.value === item);
        return option && <BadgeRemovable onChange={handleRemove} option={option} key={item} />;
      })}
    </div>
  );
};
