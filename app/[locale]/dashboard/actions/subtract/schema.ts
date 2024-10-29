import { z } from "zod";

export const subtractPlaylistSchema = z.object({
  basePlaylistId: z.string().min(1, { message: "Please select a base playlist" }),
  playlistToSubtractIds: z.array(z.string()).min(1, { message: "Please select at least one playlist to subtract" }),
  newPlaylistTitle: z.string().min(1, { message: "Playlist title must be at least 1 character" }),
});

export type SubtractPlaylistInputs = z.infer<typeof subtractPlaylistSchema>;
