export default {
  global: {
    button: {
      backToHome: "Retour à l'accueil",
    }
  },
  landing: {
    title: "Connectez votre compte SoundCloud pour gérer vos playlists facilement."
  },
  tokenForm: {
    title: "Connectez Votre Compte",
    description: "Entrez votre token SoundCloud pour commencer à gérer vos playlists.",
    label: "Token SoundCloud",
    placeholder: "Entrez votre token SoundCloud",
    buttonLabel: "Connecter à SoundCloud",
    buttonLabelLoading: "Connexion en cours...",
    tokenInvalid: "Token invalide. Veuillez vérifier et réessayer."
  },
  footer: {
    rights: "© 2024 SoundCloud DJ. Tous droits réservés.",
    privacy: "Politique de confidentialité",
  },
  navbar: {
    home: "Accueil",
  },
  notFound: {
    title: "404 - Page Non Trouvée",
    description: "Oups ! La page que vous cherchez semble introuvable.",
  },
  privacy: {
    title: "Politique de Confidentialité",
    description: "Chez SCDJ Playlist Manager, nous prenons votre vie privée très au sérieux. Voici notre politique :",
    weDoNotCollectAnyData: "Nous ne collectons aucune donnée",
    weDoNotCollectAnyDataDescription: "Notre application ne collecte, ne stocke ni ne traite vos informations personnelles. Nous nous engageons à offrir un service qui respecte pleinement votre vie privée.",
    whenUsing: "Lorsque vous utilisez SDPM :",
    noPersonalInformation: "Aucune information personnelle n'est collectée",
    noUsageData: "Aucune donnée d'utilisation n'est suivie",
    noCookies: "Aucun cookie n'est utilisé",
    noDataShared: "Aucune donnée n'est partagée avec des tiers",
    tokenNeeded: "Votre token SoundCloud, requis pour gérer vos playlists, est uniquement utilisé pour interagir avec l'API SoundCloud et n'est jamais stocké sur nos serveurs.",
    lastUpdated: "Dernière mise à jour : {date}",
  },
} as const;
