import React from "react";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { ProfileTrack } from "@profile/profile-track/ProfileTrack";
import { ProfileTrackImagesToggle } from "@profile/ProfileTrackImagesToggle";
import { ProfileTrackFilter } from "@profile/profile-track/ProfileTrackFilter";

export const ProfileTracks = async () => {
  const tracks: SoundcloudTrack[] = await SoundcloudApiService.getMyTracks();

  if (!tracks || tracks.length === 0) {
    return <div className="text-center text-gray-500">No tracks found.</div>;
  }

  return (
    <div>
      <div className={"flex justify-between"}>
        <ProfileTrackFilter />
        <ProfileTrackImagesToggle />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <ProfileTrack key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};
