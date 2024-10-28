import { Badge } from "@/components/ui/badge";
import React from "react";
import { ProfileCardBannerCard } from "@profile/profile-card/ProfileCardBannerCard";
import { ProfileCardAvatar } from "@profile/profile-card/ProfileCardAvatar";
import { ProfileCardStats } from "@profile/profile-card/ProfileCardStats";

interface ProfileCardSummaryProps {
  profileData: SoundcloudProfile;
}

export const ProfileCardSummary = ({ profileData }: ProfileCardSummaryProps) => {
  return (
    <ProfileCardBannerCard className={"ml-0 flex w-full flex-col gap-4 sm:ml-6 sm:w-auto sm:flex-row"}>
      <div className={"flex items-center justify-center gap-4 sm:flex-col"}>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{profileData.username}</h1>
          <div className="mb-4 flex flex-wrap gap-2">
            {profileData.badges.pro && <Badge variant="secondary">Next</Badge>}
            {profileData.badges.pro_unlimited && <Badge variant="destructive">Next Pro</Badge>}
            {profileData.badges.verified && <Badge>Verified</Badge>}
          </div>
          <p className="text-sm text-foreground/80">
            {profileData.city}, {profileData.country_code}
          </p>
        </div>
        <ProfileCardAvatar profileData={profileData} className={"sm:hidden"} />
      </div>
      <ProfileCardStats profileData={profileData} />
    </ProfileCardBannerCard>
  );
};
