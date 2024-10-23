import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { cn } from "@/lib/utils";

interface ProfileCardAvatarProps {
  profileData: SoundcloudProfile;
  className?: string;
}

export const ProfileCardAvatar = ({ profileData, className }: ProfileCardAvatarProps) => {
  return (
    <Avatar className={cn("h-24 w-24 border-4 border-background shadow-lg sm:h-32 sm:w-32", className)}>
      <AvatarImage src={profileData.avatar_url} alt={profileData.full_name} />
      <AvatarFallback>{profileData.full_name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
};
