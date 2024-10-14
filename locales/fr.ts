export default {
  global: {
    button: {
      backToHome: "Retour à l'accueil",
    },
  },
  landing: {
    title:
      "Connectez votre compte SoundCloud pour gérer vos playlists facilement.",
  },
  tokenForm: {
    title: "Connectez Votre Compte",
    description:
      "Entrez votre token SoundCloud pour commencer à gérer vos playlists.",
    label: "Token SoundCloud",
    placeholder: "Entrez votre token SoundCloud",
    buttonLabel: "Connecter à SoundCloud",
    buttonLabelLoading: "Connexion en cours...",
    tokenInvalid: "Token invalide. Veuillez vérifier et réessayer.",
    howToGetTokenLink: "Comment obtenir votre token SoundCloud ?",
  },
  footer: {
    rights: "© 2024 SoundCloud DJ. Tous droits réservés.",
    privacy: "Politique de confidentialité",
  },
  navbar: {
    home: "Accueil",
    dashboard: "Tableau de bord",
  },
  notFound: {
    title: "404 - Page Non Trouvée",
    description: "Oups ! La page que vous cherchez semble introuvable.",
  },
  privacy: {
    title: "Politique de Confidentialité",
    description:
      "Chez SCDJ Playlist Manager, nous prenons votre vie privée très au sérieux. Voici notre politique :",
    weDoNotCollectAnyData: "Nous ne collectons aucune donnée",
    weDoNotCollectAnyDataDescription:
      "Notre application ne collecte, ne stocke ni ne traite vos informations personnelles. Nous nous engageons à offrir un service qui respecte pleinement votre vie privée.",
    whenUsing: "Lorsque vous utilisez SDPM :",
    noPersonalInformation: "Aucune information personnelle n'est collectée",
    noUsageData: "Aucune donnée d'utilisation n'est suivie",
    noCookies: "Aucun cookie n'est utilisé",
    noDataShared: "Aucune donnée n'est partagée avec des tiers",
    tokenNeeded:
      "Votre token SoundCloud, requis pour gérer vos playlists, est uniquement utilisé pour interagir avec l'API SoundCloud et n'est jamais stocké sur nos serveurs.",
    lastUpdated: "Dernière mise à jour : {date}",
  },
  tutorial: {
    title: "Comment récupérer votre token SoundCloud",
    step1: {
      title: "Étape 1 : Accéder à SoundCloud",
      description:
        "Allez sur {link} et faites un clic droit n'importe où sur la page, puis sélectionnez {code}.",
      inspectElement: "Inspecter l'élément",
      imageAlt:
        "Capture d'écran du clic droit sur la page d'accueil de SoundCloud",
    },
    step2: {
      title: "Étape 2 : Naviguer vers la section Application",
      description:
        "Dans les outils de développement qui s'affichent, localisez et cliquez sur l'onglet {code}. C'est ici que vous trouverez vos cookies.",
      imageAlt:
        "Capture d'écran de l'onglet Application dans les outils de développement",
    },
    step3: {
      title: "Étape 3 : Localiser votre token OAuth",
      description:
        "Dans l'onglet Application, cherchez la section {cookies}. Trouvez le cookie nommé {key}. La valeur de ce cookie est votre token SoundCloud.",
      imageAlt: "Capture d'écran montrant le cookie oauth_token",
    },
    note: {
      title: "Remarque importante",
      description:
        "Gardez votre token OAuth privé et sécurisé. Partager votre token équivaut à partager votre mot de passe, car cela donne accès aux données et fonctionnalités de votre compte. Ne le partagez pas avec d'autres.",
    },
  },
  serviceUnavailable: {
    title: "Oups ! Notre service fait une pause",
    description:
      "Nous rencontrons des difficultés techniques. Notre équipe travaille à rétablir la situation.",
    alertTitle: "Que se passe-t-il ?",
    alertDescription:
      "L'application est actuellement indisponible en raison de problèmes avec notre serveur. Nous nous excusons pour le désagrément.",
    needAppBackUp:
      "Besoin que l'application soit rapidement rétablie ? Faites-le moi savoir !",
    contactInfo: "Infos de contact :",
    toast: {
      copiedToClipboard: "Copié dans le presse-papier",
      discordDescription:
        "Nom d'utilisateur Discord copié dans le presse-papier",
    },
  },
} as const;
