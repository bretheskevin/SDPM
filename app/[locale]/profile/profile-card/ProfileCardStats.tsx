import { Music, Users } from "lucide-react";
import React from "react";
import { getScopedI18n } from "@/locales/server";

interface ProfileCardProps {
  profileData: SoundcloudProfile;
}

export const ProfileCardStats = async ({ profileData }: ProfileCardProps) => {
  const scopedT = await getScopedI18n("profile");

  return (
    <div className="flex flex-wrap justify-center gap-4 rounded-lg bg-muted p-4">
      <StatItem
        icon={<Music className="h-5 w-5 text-primary" />}
        label={scopedT("tracks")}
        value={profileData.track_count}
      />
      <StatItem
        icon={<Users className="h-5 w-5 text-primary" />}
        label={scopedT("followers")}
        value={profileData.followers_count}
      />
    </div>
  );
};

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

const StatItem = ({ icon, label, value }: StatItemProps) => {
  return (
    <div className="flex items-center space-x-3">
      <div>{icon}</div>
      <div>
        <p className="text-xs font-medium text-muted-foreground sm:text-sm">{label}</p>
        <p className="text-sm font-semibold text-foreground sm:text-base">{value?.toLocaleString() || "-"}</p>
      </div>
    </div>
  );
};
