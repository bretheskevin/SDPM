export default {
  global: {
    button: {
      backToHome: "Back to Home",
    }
  },
  landing: {
    title: "Connect your SoundCloud account to start managing your playlists effortlessly."
  },
  tokenForm: {
    title: "Connect Your Account",
    description: "Enter your SoundCloud token to start managing your playlists.",
    label: "SoundCloud Token",
    placeholder: "Enter your SoundCloud token",
    buttonLabel: "Connect to SoundCloud",
    buttonLabelLoading: "Connecting...",
    tokenInvalid: "Invalid token. Please check and try again."
  },
  footer: {
    rights: "© 2024 SoundCloud DJ. All rights reserved.",
    privacy: "Privacy",
  },
  navbar: {
    home: "Home",
  },
  notFound: {
    title: "404 - Page Not Found",
    description: "Oops! The playlist you're looking for seems to have skipped a beat.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "At SCDJ Playlist Manager, we take your privacy seriously. Our policy is simple :",
    weDoNotCollectAnyData: "We Do Not Collect Any Data",
    weDoNotCollectAnyDataDescription: "Our application does not collect, store, or process any personal information. We believe in providing a service that respects your privacy completely.",
    whenUsing: "When you use SDPM :",
    noPersonalInformation: "No personal information is collected",
    noUsageData: "No usage data is tracked",
    noCookies: "No cookies are used",
    noDataShared: "No data is shared with third parties",
    tokenNeeded: "Your SoundCloud token, which is required to manage your playlists, is only used to interact with the SoundCloud API and is never stored on our servers.",
    lastUpdated: "Last updated: {date}",
  },
} as const
