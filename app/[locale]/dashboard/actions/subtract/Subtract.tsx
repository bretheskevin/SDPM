"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useModal } from "@/hooks/use-modal";
import { Combobox } from "@/components/ui/combobox";

const mockPlaylists = [
  { value: "1", label: "Summer Hits" },
  { value: "2", label: "Chill Vibes" },
  { value: "3", label: "Workout Mix" },
  { value: "4", label: "Party Anthems" },
];

export const Subtract = () => {
  const [basePlaylist, setBasePlaylist] = useState("");
  const [playlistsToSubtract, setPlaylistsToSubtract] = useState<string>("");
  const [newPlaylistTitle, setNewPlaylistTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModal();
  const { toast } = useToast();

  const handleCreatePlaylist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: "Playlist created successfully",
      description: "Check your playlists :)",
      duration: 3000,
    });

    setIsLoading(false);
    closeModal();

    setBasePlaylist("");
    setPlaylistsToSubtract("");
    setNewPlaylistTitle("");
  };

  return (
    <form onSubmit={handleCreatePlaylist} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="base-playlist">Base Playlist</Label>
        <Combobox options={mockPlaylists} value={basePlaylist} onChange={setBasePlaylist} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="playlists-to-subtract">Playlists to Subtract</Label>
        <Combobox options={mockPlaylists} value={playlistsToSubtract} onChange={setPlaylistsToSubtract} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="new-playlist-title">New Playlist Title</Label>
        <Input
          id="new-playlist-title"
          value={newPlaylistTitle}
          onChange={(e) => setNewPlaylistTitle(e.target.value)}
          placeholder="Enter new playlist title"
        />
      </div>
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
