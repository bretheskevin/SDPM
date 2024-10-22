import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { Music } from "lucide-react";
import ProfileCard from "@/app/[locale]/profile/ProfileCard";

export default async function ProfilePage() {
  const profileData: SoundcloudProfile = await SoundcloudApiService.me();

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileCard profileData={profileData} />

      <div className="mt-8">
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Latest Tracks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((track) => (
                <div
                  key={track}
                  className="flex items-center p-4 bg-muted rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center mr-4">
                    <Music className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Track Title {track}
                    </h3>
                    <p className="text-sm text-muted-foreground">1,234 plays</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
