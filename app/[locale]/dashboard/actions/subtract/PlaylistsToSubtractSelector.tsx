import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface PlaylistsToSubtractSelectorProps {
  values: string[];
  onChange: (values: string[]) => void;
  options: { value: string; label: string }[];
}

export const PlaylistsToSubtractSelector: React.FC<PlaylistsToSubtractSelectorProps> = ({
  values,
  onChange,
  options,
}) => {
  const handleRemove = (value: string) => {
    const newValues = values.filter((item) => item !== value);
    onChange(newValues);
  };

  const addValue = (value: string) => {
    if (values.includes(value)) return;

    const newValues = [...values, value];
    onChange(newValues);
  };

  const handleDeleteAll = () => {
    onChange([]);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="playlists-to-subtract">Playlists to Subtract</Label>
      <div className="flex items-center gap-2">
        <Combobox
          options={options}
          onChange={addValue}
          placeholder="Select playlists to subtract"
          className="flex-grow"
        />
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {values.map((item) => {
          const option = options.find((o) => o.value === item);
          return (
            <Badge key={item} variant="secondary" className="px-2 py-1">
              {option?.label || item}
              <button className="ml-1 rounded-full hover:bg-secondary-foreground/10" onClick={() => handleRemove(item)}>
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
    </div>
  );
};
