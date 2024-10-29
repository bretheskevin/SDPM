import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";

interface BasePlaylistSelectorProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export const BasePlaylistSelector = ({ value, onChange, options }: BasePlaylistSelectorProps) => (
  <div className="space-y-2">
    <Label htmlFor="base-playlist">Base Playlist</Label>
    <Combobox options={options} value={value} onChange={onChange} placeholder="Select base playlist" />
  </div>
);
