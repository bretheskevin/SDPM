import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import React from "react";

interface PlaylistBadgeProps {
  onChange: (value: string) => void;
  option: OptionLabel<string>;
}

export const PlaylistToSubtractBadge: React.FC<PlaylistBadgeProps> = ({ onChange, option }) => {
  return (
    <Badge variant="secondary" className="px-2 py-1">
      {option.label}
      <button className="ml-1 rounded-full hover:bg-secondary-foreground/10" onClick={() => onChange(option.value)}>
        <X className="h-3 w-3" />
      </button>
    </Badge>
  );
};
