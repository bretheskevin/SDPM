declare module "node-fetch";

interface SoundcloudProfile {
  avatar_url: string;
  first_name: string;
  followers_count: number;
  full_name: string;
  id: number;
  kind: string;
  last_modified: string;
  last_name: string;
  permalink: string;
  permalink_url: string;
  uri: string;
  urn: string;
  username: string;
  verified: boolean;
  city: string;
  country_code: string;
  badges: {
    pro: boolean;
    pro_unlimited: boolean;
    verified: boolean;
  };
  station_urn: string;
  station_permalink: string;
  comments_count: number;
  created_at: string;
  creator_subscriptions: Array<{
    product: {
      id: string;
    };
  }>;
  creator_subscription: {
    product: {
      id: string;
    };
  };
  description: string;
  followings_count: number;
  groups_count: number;
  likes_count: number;
  playlist_likes_count: number;
  playlist_count: number;
  reposts_count: number;
  track_count: number;
  visuals: {
    urn: string;
    enabled: boolean;
    visuals: Array<{
      urn: string;
      entry_time: number;
      visual_url: string;
    }>;
  };
}
