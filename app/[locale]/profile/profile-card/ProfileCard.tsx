import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { ProfileCardAvatar } from "@profile/profile-card/ProfileCardAvatar";
import { ProfileCardSummary } from "@profile/profile-card/ProfileCardSummary";
import { ProfileCardDescription } from "@profile/profile-card/ProfileCardDescription";

interface ProfileCardProps {
  profileData: SoundcloudProfile;
}

export default function ProfileCard({ profileData }: ProfileCardProps) {
  return (
    <Card
      className="mb-8"
      style={{
        backgroundImage: `url(${profileData.visuals?.visuals[0]?.visual_url}), linear-gradient(315deg, rgb(196, 204, 173) 0%, rgb(125, 118, 107) 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardContent className="flex min-h-[16rem] flex-col pt-6">
        <div className="mb-4 flex flex-col items-center sm:flex-row">
          <ProfileCardAvatar profileData={profileData} className={"hidden sm:block"} />
          <ProfileCardSummary profileData={profileData} />
        </div>
        <ProfileCardDescription profileData={profileData} />
      </CardContent>
    </Card>
  );
}
