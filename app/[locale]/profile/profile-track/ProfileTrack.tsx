import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Heart, Lock, Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ProfileTrackImage } from "@profile/profile-track/ProfileTrackImage";
import { ProfileTrackDescription } from "@profile/profile-track/ProfileTrackDescription";
import { ProfileTrackBadge } from "@profile/profile-track/ProfileTrackBadge";

interface ProfileTrackProps {
  track: SoundcloudTrack;
}

export const ProfileTrack = ({ track }: ProfileTrackProps) => {
  return (
    <Card key={track.permalink_url}>
      <CardHeader>
        <ProfileTrackImage url={track.artwork_url} alt={track.title} />
      </CardHeader>
      <CardContent className="overflow-hidden">
        <div className="mb-2 flex items-center justify-between">
          <CardTitle className="mr-2 line-clamp-2">
            <Link href={track.permalink_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {track.title}
            </Link>
          </CardTitle>
          <ProfileTrackBadgeVisibility isPublic={track.public} />
        </div>
        <ProfileTrackDescription description={track.description} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center space-x-2">
          <ProfileTrackBadge
            type="count"
            value={track.playback_count}
            srText="Playback count"
            icon={<Play className="mr-1 h-3 w-3" />}
          />
          <ProfileTrackBadge
            type="count"
            value={track.likes_count}
            srText="Likes count"
            icon={<Heart className="mr-1 h-3 w-3" />}
          />
        </div>
        <ProfileTrackBadge type="duration" value={track.duration} srText="Duration" />
      </CardFooter>
    </Card>
  );
};

const ProfileTrackBadgeVisibility = ({ isPublic }: { isPublic: boolean }) => {
  if (isPublic) {
    return (
      <ProfileTrackBadge
        type={"label"}
        value={"Public"}
        srText="Visibility"
        icon={<Globe className="mr-1 h-3 w-3" />}
      />
    );
  }

  return (
    <ProfileTrackBadge
      type={"label"}
      value={"Private"}
      srText="Username"
      variant={"secondary"}
      icon={<Lock className="mr-1 h-3 w-3" />}
    />
  );
};
