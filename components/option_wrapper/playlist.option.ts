export const transformPlaylistToOption = (playlist: SoundcloudPlaylist): OptionLabel<string> => {
  return {
    label: playlist.title,
    value: playlist.id.toString(),
  };
};

export const transformPlaylistsToOptions = (playlists: Array<SoundcloudPlaylist>): Array<OptionLabel<string>> => {
  return playlists.map(transformPlaylistToOption);
};
