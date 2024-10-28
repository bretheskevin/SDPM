import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ProfileTrackDescription } from "@/app/[locale]/profile/profile-track/ProfileTrackDescription";
import { ProfileTrackImage } from "@/app/[locale]/profile/profile-track/ProfileTrackImage";
import { ProfileTrackBadge } from "@/app/[locale]/profile/profile-track/ProfileTrackBadge";

interface ProfileTrackProps {
  track: SoundcloudTrack;
}

export const ProfileTrack = ({ track }: ProfileTrackProps) => {
  return (
    <Card key={track.permalink_url}>
      <CardHeader>
        <ProfileTrackImage url={track.artwork_url} alt={track.title} />
      </CardHeader>
      <CardContent className={"overflow-hidden"}>
        <CardTitle className="line-clamp-1">
          <Link href={track.permalink_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {track.title}
          </Link>
        </CardTitle>
        <ProfileTrackDescription description={track.description} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center space-x-2">
          <ProfileTrackBadge
            type={"count"}
            value={track.playback_count}
            srText={"Playback count"}
            icon={<Play className={"mr-1 h-3 w-3"} />}
          />
          <ProfileTrackBadge
            type={"count"}
            value={track.likes_count}
            srText={"Likes count"}
            icon={<Heart className={"mr-1 h-3 w-3"} />}
          />
        </div>
        <ProfileTrackBadge type={"duration"} value={track.duration} srText={"Duration"} />
      </CardFooter>
    </Card>
  );
};
