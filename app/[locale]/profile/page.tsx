import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React, { Suspense, use } from "react";
import { ProfileTracksSkeleton } from "@profile/skeletons/ProfileTracksSkeleton";
import { ProfileTracks } from "@profile/ProfileTracks";
import ProfileCard from "@profile/profile-card/ProfileCard";
import { ProfileCardSkeleton } from "@profile/skeletons/ProfileCardSkeleton";

function ProfileContent() {
  const profileData = use(SoundcloudApiService.me());

  if (!profileData?.id) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error fetching profile</AlertTitle>
        <AlertDescription>Unable to load your Soundcloud profile. Please try again later.</AlertDescription>
      </Alert>
    );
  }

  return <ProfileCard profileData={profileData} />;
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileContent />
      </Suspense>

      <br />

      <Suspense fallback={<ProfileTracksSkeleton />}>
        <ProfileTracks />
      </Suspense>
    </div>
  );
}
