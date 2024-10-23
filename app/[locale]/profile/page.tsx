import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { AlertCircle, Music } from "lucide-react";
import ProfileCard from "@/app/[locale]/profile/profile-card/ProfileCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getScopedI18n } from "@/locales/server";

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

      <div className="mt-8">
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">{scopedT("latestTracks")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((track) => (
                <div key={track} className="flex items-center rounded-lg bg-muted p-4">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary">
                    <Music className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Track Title {track}</h3>
                    <p className="text-sm text-muted-foreground">1,234 plays</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{scopedT("errors.profileFetch.title")}</AlertTitle>
          <AlertDescription>{scopedT("errors.profileFetch.description")}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
