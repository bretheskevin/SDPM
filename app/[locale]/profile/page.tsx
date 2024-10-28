import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getScopedI18n } from "@/locales/server";
import React, { Suspense } from "react";
import { ProfileTracksSkeleton } from "@profile/skeletons/ProfileTracksSkeleton";
import { ProfileTracks } from "@profile/ProfileTracks";
import ProfileCard from "@profile/profile-card/ProfileCard";
import { ProfileTrackImagesToggle } from "@profile/ProfileTrackImagesToggle";

export default async function ProfilePage() {
  const profileData: SoundcloudProfile | undefined = await SoundcloudApiService.me();
  const scopedT = await getScopedI18n("profile");

  if (!profileData) {
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

      <Suspense fallback={<ProfileTracksSkeleton />}>
        <ProfileTracks />
      </Suspense>
    </div>
  );
}
