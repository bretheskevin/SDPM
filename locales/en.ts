export default {
  global: {
    button: {
      backToHome: "Back to Home",
      logout: "Log out",
    },
  },
  landing: {
    title: "Connect your SoundCloud account to start managing your playlists effortlessly.",
  },
  tokenForm: {
    title: "Connect Your Account",
    description: "Enter your SoundCloud token to start managing your playlists.",
    label: "SoundCloud Token",
    placeholder: "Enter your SoundCloud token",
    buttonLabel: "Connect to SoundCloud",
    buttonLabelLoading: "Connecting...",
    tokenInvalid: "Invalid token. Please check and try again.",
    howToGetTokenLink: "How to get your SoundCloud token ?",
  },
  footer: {
    rights: "© 2024 SoundCloud DJ Playlist Manager. All rights reserved.",
    privacy: "Privacy",
  },
  navbar: {
    home: "Home",
    dashboard: "Dashboard",
    profile: "Profile",
  },
  notFound: {
    title: "404 - Page Not Found",
    description: "Oops! The playlist you're looking for seems to have skipped a beat.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "At SCDJ Playlist Manager, we take your privacy seriously. Our policy is simple :",
    weDoNotCollectAnyData: "We Do Not Collect Any Data",
    weDoNotCollectAnyDataDescription:
      "Our application does not collect, store, or process any personal information. We believe in providing a service that respects your privacy completely.",
    whenUsing: "When you use SDPM :",
    noPersonalInformation: "No personal information is collected",
    noUsageData: "No usage data is tracked",
    noCookies: "No cookies are used",
    noDataShared: "No data is shared with third parties",
    tokenNeeded:
      "Your SoundCloud token, which is required to manage your playlists, is only used to interact with the SoundCloud API and is never stored on our servers.",
    lastUpdated: "Last updated: {date}",
  },
  tutorial: {
    title: "How to Retrieve Your SoundCloud Token",
    step1: {
      title: "Step 1: Access SoundCloud",
      description: "Go to {link} and right-click anywhere on the page, then select {code}.",
      inspectElement: "Inspect Element",
      imageAlt: "Screenshot of right-clicking on SoundCloud homepage",
    },
    step2: {
      title: "Step 2: Navigate to the Application Section",
      description:
        "In the developer tools that appear, locate and click on the {code} tab. This is where you'll find your cookies.",
      imageAlt: "Screenshot of the Application tab in developer tools",
    },
    step3: {
      title: "Step 3: Locate Your OAuth Token",
      description:
        "In the Application tab, look for the {cookies} section. Find the cookie named {key}. The value of this cookie is your SoundCloud token.",
      imageAlt: "Screenshot showing the oauth_token cookie",
    },
    note: {
      title: "Important Note",
      description:
        "Keep your OAuth token private and secure. Sharing your token is the same as sharing your password, as it grants access to your account's data and functionality. Do not share it with others.",
    },
  },
  serviceUnavailable: {
    title: "Oops! Our service is taking a break",
    description:
      "We're experiencing some technical difficulties. Our team is working on getting things back to normal.",
    alertTitle: "What's happening?",
    alertDescription:
      "The app is currently unavailable due to some issues with our server. We apologize for any inconvenience this may cause.",
    needAppBackUp: "Need the app back up quickly? Let me know!",
    contactInfo: "Contact info :",
    toast: {
      copiedToClipboard: "Copied to clipboard",
      discordDescription: "Discord username copied to clipboard",
    },
  },
  authenticatedUser: {
    title: "Welcome Back!",
    description: "You're successfully logged in. Ready to manage your playlists?",
    dashboardButton: "Go to Dashboard",
  },
  profile: {
    tracks: "Tracks",
    followers: "Followers",
    latestTracks: "Latest Tracks",
    errors: {
      profileFetch: {
        title: "Unable to load profile",
        description:
          "There was a problem loading your profile information. Please refresh the page or try again later.",
      },
    },
    hideImages: "Hide Images",
    noTracksFound: "No tracks found.",
    playbackCount: "Playback Count",
    likesCount: "Likes Count",
    duration: "Duration",
    filter: {
      title: "Filter Tracks",
      all: "All",
      public: "Public",
      private: "Private",
    },
  },
  dashboard: {
    title: "Dashboard",
    noticeTitle: "Important Notice",
    noticeDescription: "No existing playlists will be deleted or modified.",
    loadingPlaylists: "Loading playlists...",
    refreshPlaylists: "Refresh Playlists",
    actions: {
      global: {
        form: {
          title: {
            title: "Playlist Name",
            placeholder: "Enter the name of the new playlist",
          },
          basePlaylist: {
            title: "Base Playlist",
            placeholder: "Choose a base playlist",
          },
          button: {
            createPlaylist: "Create Playlist",
            createPlaylistLoading: "Creating...",
          },
        },
      },
      subtract: {
        title: "Subtract from Playlists",
        description: "Create a new playlist by subtracting tracks from the base playlist.",
        buttonText: "Create Playlist",
        modal: {
          title: "Subtract from Playlists",
          description: "Select the playlists from which you want to remove tracks from your base playlist.",
        },
        form: {
          playlistsToSubtract: {
            title: "Playlists to Subtract",
            placeholder: "Select playlists to subtract",
            reset: "Clear selection",
          },
        },
      },
    },
    playlists: {
      title: "Playlists",
      description: "View your playlists here.",
      alertTitle: "In Development",
      alertDescription: "This feature is currently in development. We're working hard to bring it to you soon!",
    },
    tabs: {
      actions: "Actions",
      playlists: "Playlists",
    },
    toasters: {
      playlistCreated: {
        title: "Playlist Created Successfully",
        description: "Check out your playlists :)",
      },
      playlistCreatedError: {
        title: "Error Creating Playlist",
        description: "Please check the contact page or try again later.",
      },
    },
  },
} as const;
