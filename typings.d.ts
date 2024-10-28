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
  badges: Badges;
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

interface SoundcloudTrack {
  artwork_url: string | null;
  created_at: string; // ISO 8601 date string
  description: string;
  duration: number; // in milliseconds
  embeddable_by: string;
  genre: string;
  id: number;
  kind: string;
  label_name: string | null;
  last_modified: string; // ISO 8601 date string
  licence: string | null;
  likes_count: number;
  permalink: string;
  permalink_url: string;
  public: boolean;
  purchase_title: string | null;
  purchase_url: string | null;
  release_date: string | null; // ISO 8601 date string or null
  reposts_count: number;
  secret_token: string;
  sharing: string;
  tag_list: string;
  title: string;
  uri: string;
  user_id: number;
  display_date: string; // ISO 8601 date string
  caption: string | null;
  commentable: boolean;
  comment_count: number;
  downloadable: boolean;
  download_count: number;
  full_duration: number; // in milliseconds
  has_downloads_left: boolean;
  playback_count: number;
  state: string;
  streamable: boolean;
  urn: string;
  visuals: string | null;
  waveform_url: string;
  media: {
    transcodings: Transcoding[];
  };
  station_urn: string;
  station_permalink: string;
  track_authorization: string;
  monetization_model: string;
  policy: string;
  user: SimpleSoundcloudProfile;
}

interface Transcoding {
  url: string;
  preset: string;
  duration: number; // in milliseconds
  snipped: boolean;
  format: {
    protocol: string;
    mime_type: string;
  };
  quality: string;
}

interface SimpleSoundcloudProfile {
  avatar_url: string;
  first_name: string;
  followers_count: number;
  full_name: string;
  id: number;
  kind: string;
  last_modified: string; // ISO 8601 date string
  last_name: string;
  permalink: string;
  permalink_url: string;
  uri: string;
  urn: string;
  username: string;
  verified: boolean;
  city: string;
  country_code: string;
  badges: Badges;
  station_urn: string;
  station_permalink: string;
}

interface Badges {
  pro: boolean;
  pro_unlimited: boolean;
  verified: boolean;
}

type locales = "en" | "fr" | "es" | "de";
