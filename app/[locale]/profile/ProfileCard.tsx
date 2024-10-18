import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
      <CardContent className="pt-6 flex flex-col min-h-[16rem]">
        <div className="flex items-center mb-4">
          <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
            <AvatarImage
              src={profileData.avatar_url}
              alt={profileData.full_name}
            />
            <AvatarFallback>{profileData.full_name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-6 p-4 bg-background/90 rounded-lg">
            <h1 className="text-3xl font-bold mb-2 text-foreground">
              {profileData.full_name}
            </h1>
            <p className="text-xl text-foreground/80 mb-2">
              @{profileData.username}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {profileData.badges.pro && <Badge variant="secondary">Pro</Badge>}
              {profileData.badges.pro_unlimited && (
                <Badge variant="destructive">Pro Unlimited</Badge>
              )}
              {profileData.badges.verified && <Badge>Verified</Badge>}
            </div>
            <p className="text-sm text-foreground/80">
              {profileData.city}, {profileData.country_code}
            </p>
          </div>
        </div>
        {profileData.description && (
          <div className="mt-4 p-4 bg-background/90 rounded-lg">
            <p className="text-sm text-foreground/80">
              {profileData.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
