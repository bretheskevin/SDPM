import { z } from "zod";

export const addPlaylistSchema = z.object({
  playlistToAddIds: z.array(z.string()).min(2, { message: "Please select at least 2 playlists to add" }),
  newPlaylistTitle: z.string().min(1, { message: "Playlist title must be at least 1 character" }),
});

export type AddPlaylistInputs = z.infer<typeof addPlaylistSchema>;
