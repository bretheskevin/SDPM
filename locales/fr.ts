export default {
  global: {
    button: {
      backToHome: "Retour à l'accueil",
      logout: "Se déconnecter",
    },
    search: "Rechercher",
  },
  landing: {
    title: "Connectez votre compte SoundCloud pour commencer à gérer vos playlists en toute simplicité.",
  },
  tokenForm: {
    title: "Connectez Votre Compte",
    description: "Entrez votre token SoundCloud pour commencer à gérer vos playlists.",
    label: "Token SoundCloud",
    placeholder: "Entrez votre token SoundCloud",
    buttonLabel: "Connecter à SoundCloud",
    buttonLabelLoading: "Connexion en cours...",
    tokenInvalid: "Token invalide. Veuillez vérifier et essayer de nouveau.",
    howToGetTokenLink: "Comment obtenir votre token SoundCloud ?",
  },
  footer: {
    rights: "© 2024 SoundCloud DJ Playlist Manager. Tous droits réservés.",
    privacy: "Politique de confidentialité",
    contact: "Contact",
  },
  navbar: {
    home: "Accueil",
    dashboard: "Tableau de bord",
    profile: "Profil",
  },
  notFound: {
    title: "404 - Page Non Trouvée",
    description: "Oups ! La page que vous cherchez semble introuvable.",
  },
  privacy: {
    title: "Politique de Confidentialité",
    description: "Chez SCDJ Playlist Manager, nous prenons votre vie privée très au sérieux. Voici notre politique :",
    weDoNotCollectAnyData: "Nous ne collectons aucune donnée",
    weDoNotCollectAnyDataDescription:
      "Nous ne collectons, stockons ni ne traitons aucune de vos informations personnelles. Nous nous engageons à offrir un service totalement respectueux de votre vie privée.",
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
      description: "Allez sur {link} et faites un clic droit n'importe où sur la page, puis sélectionnez {code}.",
      inspectElement: "Inspecter l'élément",
      imageAlt: "Capture d'écran du clic droit sur la page d'accueil de SoundCloud",
    },
    step2: {
      title: "Étape 2 : Naviguer vers la section Application",
      description:
        "Dans les outils de développement qui s'affichent, localisez et cliquez sur l'onglet {code}. C'est ici que vous trouverez vos cookies.",
      imageAlt: "Capture d'écran de l'onglet Application dans les outils de développement",
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
    description: "Nous rencontrons des difficultés techniques. Notre équipe travaille à rétablir la situation.",
    alertTitle: "Que se passe-t-il ?",
    alertDescription:
      "L'application est actuellement indisponible en raison de problèmes avec notre serveur. Nous nous excusons pour le désagrément.",
    needAppBackUp: "Besoin d'un retour rapide de l'application ? Faites-le nous savoir !",
    contactInfo: "Infos de contact :",
    toast: {
      copiedToClipboard: "Copié dans le presse-papier",
      discordDescription: "Nom d'utilisateur Discord copié dans le presse-papier",
    },
  },
  authenticatedUser: {
    title: "Bienvenue de nouveau !",
    description: "Vous êtes connecté avec succès. Prêt à gérer vos playlists ?",
    dashboardButton: "Aller sur le tableau de bord",
  },
  profile: {
    tracks: "Morceaux",
    followers: "Abonnés",
    latestTracks: "Derniers morceaux",
    errors: {
      profileFetch: {
        title: "Impossible de charger le profil",
        description:
          "Un problème est survenu lors du chargement des informations de votre profil. Veuillez actualiser la page ou réessayer plus tard.",
      },
    },
    hideImages: "Masquer les images",
    noTracksFound: "Aucun morceau trouvé.",
    playbackCount: "Nombre de lectures",
    likesCount: "Nombre de likes",
    duration: "Durée",
    filter: {
      title: "Filtrer les morceaux",
      all: "Tous",
      public: "Public",
      private: "Privé",
    },
  },
  dashboard: {
    title: "Tableau de bord",
    noticeTitle: "Avis Important",
    noticeDescription: "Aucune playlist existante ne sera supprimée ou modifiée.",
    loadingPlaylists: "Chargement des playlists...",
    refreshPlaylists: "Actualiser les playlists",
    actions: {
      global: {
        form: {
          title: {
            title: "Nom de la Playlist",
            placeholder: "Entrez le nom de la nouvelle playlist",
          },
          basePlaylist: {
            title: "Playlist de Base",
            placeholder: "Choisissez une playlist de base",
          },
          button: {
            createPlaylist: "Créer la Playlist",
            createPlaylistLoading: "Création...",
          },
        },
      },
      subtract: {
        title: "Soustraire des Playlists",
        description: "Créez une nouvelle playlist en soustrayant des titres de la playlist de base.",
        buttonText: "Créer la Playlist",
        modal: {
          title: "Soustraire des Playlists",
          description: "Sélectionnez les playlists dont vous souhaitez retirer les titres de votre playlist de base.",
        },
        form: {
          playlistsToSubtract: {
            title: "Playlists à Soustraire",
            placeholder: "Sélectionnez les playlists à soustraire",
            reset: "Effacer la sélection",
          },
        },
      },
    },
    playlists: {
      title: "Playlists",
      description: "Consultez vos playlists ici.",
      alertTitle: "En cours de développement",
      alertDescription:
        "Cette fonctionnalité est actuellement en cours de développement. Nous travaillons dur pour vous l'apporter bientôt !",
    },
    tabs: {
      actions: "Actions",
      playlists: "Playlists",
    },
    toasters: {
      playlistCreated: {
        title: "Playlist créée avec succès",
        description: "Consultez vos playlists :)",
      },
      playlistCreatedError: {
        title: "Erreur lors de la création de la playlist",
        description: "Veuillez consulter la page de contact ou réessayer plus tard.",
      },
    },
  },
  contact: {
    title: "Nous contacter",
    description: "Nous sommes à votre écoute ! N’hésitez pas à nous laisser un message.",
    contactForm: "Formulaire de contact",
    namePlaceholder: "Nom",
    emailPlaceholder: "E-mail",
    messagePlaceholder: "Votre message",
    sendMessage: "Envoyer",
    socialMedia: "Suivez-nous sur les réseaux",
    directContact: "Contact direct",
    contactInfo: "Vous pouvez aussi nous joindre directement par :",
    toast: {
      messageSent: "Message envoyé !",
      messageDescription: "Votre message a bien été reçu, nous reviendrons vers vous rapidement.",
      copiedToClipboard: "Copié dans le presse-papiers",
      discordDescription: "Nom d’utilisateur Discord copié",
    },
  },
  metadata: {
    title: "SDPM",
    description: "Gérez et créez vos playlists SoundCloud en toute simplicité",
    dashboard: {
      title: "SDPM | Tableau de bord",
      description:
        "Tableau de bord de DJ Playlist Manager - Gérez et créez vos playlists SoundCloud en toute simplicité.",
    },
    privacy: {
      title: "SDPM | Politique de confidentialité",
      description:
        "Politique de confidentialité de DJ Playlist Manager - Gérez et créez vos playlists SoundCloud en toute simplicité.",
    },
    contact: {
      title: "SDPM | Contact",
      description:
        "Page de contact pour DJ Playlist Manager - Gérez et créez vos playlists SoundCloud en toute simplicité.",
    },
    profile: {
      title: "SDPM | Profil",
      description:
        "Page de profil pour DJ Playlist Manager - Gérez et créez vos playlists SoundCloud en toute simplicité.",
    },
  },
} as const;
