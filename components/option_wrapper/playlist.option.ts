export const transformPlaylistToOption = (playlist: SoundCloudPlaylist): OptionLabel<string> => {
  return {
    label: playlist.title,
    value: playlist.id.toString(),
  };
};

export const transformPlaylistsToOptions = (playlists: Array<SoundCloudPlaylist>): Array<OptionLabel<string>> => {
  return playlists.map(transformPlaylistToOption);
};
