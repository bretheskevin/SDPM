import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { AlertCircle } from "lucide-react";
import ProfileCard from "@/app/[locale]/profile/profile-card/ProfileCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getScopedI18n } from "@/locales/server";
import { ProfileTracks } from "@/app/[locale]/profile/ProfileTracks";
import { ProfileTrackImagesToggle } from "@/app/[locale]/profile/ProfileTrackImagesToggle";
import React from "react";

export default async function ProfilePage() {
  const profileData: SoundcloudProfile | undefined = await SoundcloudApiService.me();
  const profileTracks: SoundcloudTrack[] | undefined = await SoundcloudApiService.getMyTracks();
  const scopedT = await getScopedI18n("profile");

  if (!profileData || !profileTracks) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{scopedT("errors.profileFetch.title")}</AlertTitle>
          <AlertDescription>{scopedT("errors.profileFetch.description")}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <ProfileCard profileData={profileData} />

      <ProfileTrackImagesToggle />
      <ProfileTracks tracks={profileTracks} />
    </div>
  );
}
