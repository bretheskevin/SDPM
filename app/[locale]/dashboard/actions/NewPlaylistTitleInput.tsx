import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface NewPlaylistTitleInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NewPlaylistTitleInput = ({ value, onChange }: NewPlaylistTitleInputProps) => (
  <div className="space-y-2">
    <Label htmlFor="new-playlist-title">New Playlist Title</Label>
    <Input id="new-playlist-title" value={value} onChange={onChange} placeholder="Enter new playlist title" />
  </div>
);
