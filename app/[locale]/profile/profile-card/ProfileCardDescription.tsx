import { ProfileCardBannerCard } from "@/app/[locale]/profile/profile-card/ProfileCardBannerCard";
import React from "react";

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
