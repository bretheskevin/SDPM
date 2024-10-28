import React from "react";
import { ProfileCardBannerCard } from "@profile/profile-card/ProfileCardBannerCard";

interface ProfileCardProps {
  profileData: SoundcloudProfile;
}

export const ProfileCardDescription = ({ profileData }: ProfileCardProps) => {
  return (
    profileData.description && (
      <ProfileCardBannerCard className="mt-4">
        <p className="text-sm text-foreground/80">{profileData.description}</p>
      </ProfileCardBannerCard>
    )
  );
};
