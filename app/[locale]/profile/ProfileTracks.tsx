"use client";

import React from "react";
import { ProfileTrack } from "@/app/[locale]/profile/profile-track/ProfileTrack";

interface ProfileTracksProps {
  tracks: Array<SoundcloudTrack>;
  isLoading?: boolean;
}

export const ProfileTracks = ({ tracks }: ProfileTracksProps) => {
  if (!tracks || tracks.length === 0) {
    return <div className="text-center text-gray-500">No tracks found.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track) => (
        <ProfileTrack key={track.id} track={track} />
      ))}
    </div>
  );
};
