import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useModal } from "@/hooks/use-modal";
import { BasePlaylistSelector } from "../BasePlaylistSelector";
import { PlaylistsToSubtractSelector } from "./PlaylistsToSubtractSelector";
import { NewPlaylistTitleInput } from "../NewPlaylistTitleInput";

const mockPlaylists = [
  { value: "1", label: "Summer Hits" },
  { value: "2", label: "Chill Vibes" },
  { value: "3", label: "Workout Mix" },
  { value: "4", label: "Party Anthems" },
];

export const Subtract = () => {
  const [basePlaylist, setBasePlaylist] = useState("");
  const [playlistsToSubtract, setPlaylistsToSubtract] = useState<string[]>([]);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModal();
  const { toast } = useToast();

  const handleCreatePlaylist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: "Playlist created successfully",
      description: "Check your playlists :)",
      duration: 3000,
    });
    setIsLoading(false);
    closeModal();
    setBasePlaylist("");
    setPlaylistsToSubtract([]);
    setNewPlaylistTitle("");
  };

  return (
    <form onSubmit={handleCreatePlaylist} className="space-y-4">
      <BasePlaylistSelector value={basePlaylist} onChange={setBasePlaylist} options={mockPlaylists} />
      <PlaylistsToSubtractSelector
        values={playlistsToSubtract}
        onChange={setPlaylistsToSubtract}
        options={mockPlaylists}
      />
      <NewPlaylistTitleInput value={newPlaylistTitle} onChange={(e) => setNewPlaylistTitle(e.target.value)} />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating...
          </>
        ) : (
          "Create Playlist"
        )}
      </Button>
    </form>
  );
};
