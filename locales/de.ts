export default {
  global: {
    button: {
      backToHome: "Zurück zur Startseite",
      logout: "Abmelden",
    },
  },
  landing: {
    title: "Verbinde dein SoundCloud-Konto, um deine Wiedergabelisten mühelos zu verwalten.",
  },
  tokenForm: {
    title: "Verbinde Dein Konto",
    description: "Gib deinen SoundCloud-Token ein, um deine Wiedergabelisten zu verwalten.",
    label: "SoundCloud-Token",
    placeholder: "Gib deinen SoundCloud-Token ein",
    buttonLabel: "Mit SoundCloud verbinden",
    buttonLabelLoading: "Verbindung wird hergestellt...",
    tokenInvalid: "Ungültiger Token. Bitte überprüfe und versuche es erneut.",
    howToGetTokenLink: "Wie erhalte ich meinen SoundCloud-Token?",
  },
  footer: {
    rights: "© 2024 SoundCloud DJ Playlist Manager. Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
  },
  navbar: {
    home: "Startseite",
    dashboard: "Dashboard",
    profile: "Profil",
  },
  notFound: {
    title: "404 - Seite Nicht Gefunden",
    description: "Ups! Die Seite, die du suchst, konnte nicht gefunden werden.",
  },
  privacy: {
    title: "Datenschutzbestimmungen",
    description: "Bei SCDJ Playlist Manager nehmen wir deine Privatsphäre sehr ernst. Unsere Richtlinie ist klar:",
    weDoNotCollectAnyData: "Wir Sammeln Keine Daten",
    weDoNotCollectAnyDataDescription:
      "Unsere Anwendung sammelt, speichert oder verarbeitet keine persönlichen Informationen. Wir glauben daran, einen Dienst anzubieten, der deine Privatsphäre vollständig respektiert.",
    whenUsing: "Wenn du SDPM nutzt:",
    noPersonalInformation: "Es werden keine persönlichen Informationen gesammelt",
    noUsageData: "Es werden keine Nutzungsdaten erfasst",
    noCookies: "Es werden keine Cookies verwendet",
    noDataShared: "Es werden keine Daten mit Dritten geteilt",
    tokenNeeded:
      "Dein SoundCloud-Token, das zur Verwaltung deiner Playlists erforderlich ist, wird nur zur Interaktion mit der SoundCloud-API verwendet und niemals auf unseren Servern gespeichert.",
    lastUpdated: "Zuletzt aktualisiert: {date}",
  },
  tutorial: {
    title: "So holen Sie sich Ihr SoundCloud-Token",
    step1: {
      title: "Schritt 1: Greifen Sie auf SoundCloud zu",
      description:
        "Gehen Sie zu {link} und klicken Sie mit der rechten Maustaste irgendwo auf die Seite, und wählen Sie dann {code} aus.",
      inspectElement: "Element untersuchen",
      imageAlt: "Screenshot des Rechtsklicks auf der SoundCloud-Startseite",
    },
    step2: {
      title: "Schritt 2: Navigieren Sie zum Abschnitt Anwendung",
      description:
        "Suchen Sie in den angezeigten Entwicklertools die Registerkarte {code} und klicken Sie darauf. Hier finden Sie Ihre Cookies.",
      imageAlt: "Screenshot der Registerkarte Anwendung in den Entwicklertools",
    },
    step3: {
      title: "Schritt 3: Finden Sie Ihr OAuth-Token",
      description:
        "Suchen Sie in der Registerkarte Anwendung den Abschnitt {cookies}. Finden Sie das Cookie mit dem Namen {key}. Der Wert dieses Cookies ist Ihr SoundCloud-Token.",
      imageAlt: "Screenshot, der das oauth_token-Cookie zeigt",
    },
    note: {
      title: "Wichtiger Hinweis",
      description:
        "Halten Sie Ihr OAuth-Token privat und sicher. Das Teilen Ihres Tokens ist dasselbe wie das Teilen Ihres Passworts, da es Zugang zu den Daten und Funktionen Ihres Kontos gewährt. Teilen Sie es nicht mit anderen.",
    },
  },
  serviceUnavailable: {
    title: "Oops! Unser Dienst macht eine Pause",
    description: "Wir haben einige technische Probleme. Unser Team arbeitet daran, alles wieder in Ordnung zu bringen.",
    alertTitle: "Was ist los?",
    alertDescription:
      "Die App ist derzeit aufgrund von Problemen mit unserem Server nicht verfügbar. Wir entschuldigen uns für etwaige Unannehmlichkeiten.",
    needAppBackUp: "Muss die App schnell wieder verfügbar sein? Lass es mich wissen!",
    contactInfo: "Kontaktinfo:",
    toast: {
      copiedToClipboard: "In die Zwischenablage kopiert",
      discordDescription: "Discord-Benutzername in die Zwischenablage kopiert",
    },
  },
  authenticatedUser: {
    title: "Willkommen zurück!",
    description: "Du bist erfolgreich eingeloggt. Bereit, deine Playlists zu verwalten?",
    dashboardButton: "Gehe zum Dashboard",
  },
  profile: {
    tracks: "Titel",
    followers: "Follower",
    latestTracks: "Neueste Titel",
    errors: {
      profileFetch: {
        title: "Profil konnte nicht geladen werden",
        description:
          "Beim Laden Ihrer Profilinformationen ist ein Problem aufgetreten. Bitte aktualisieren Sie die Seite oder versuchen Sie es später erneut.",
      },
    },
    hideImages: "Bilder ausblenden",
    noTracksFound: "Keine Titel gefunden.",
    playbackCount: "Wiedergabeanzahl",
    likesCount: "Likes",
    duration: "Dauer",
    filter: {
      title: "Tracks filtern",
      all: "Alle",
      public: "Öffentlich",
      private: "Privat",
    },
  },
  dashboard: {
    title: "Dashboard",
    noticeTitle: "Wichtiger Hinweis",
    noticeDescription: "Es werden keine vorhandenen Wiedergabelisten gelöscht oder geändert.",
    loadingPlaylists: "Wiedergabelisten werden geladen...",
    refreshPlaylists: "Wiedergabelisten aktualisieren",
    actions: {
      global: {
        form: {
          title: {
            title: "Wiedergabelistenname",
            placeholder: "Geben Sie den Namen der neuen Wiedergabeliste ein",
          },
          basePlaylist: {
            title: "Basis-Wiedergabeliste",
            placeholder: "Wählen Sie eine Basis-Wiedergabeliste",
          },
          button: {
            createPlaylist: "Wiedergabeliste erstellen",
            createPlaylistLoading: "Wird erstellt...",
          },
        },
      },
      subtract: {
        title: "Von Wiedergabelisten abziehen",
        description: "Erstellen Sie eine neue Wiedergabeliste, indem Sie Titel von der Basis-Wiedergabeliste abziehen.",
        buttonText: "Wiedergabeliste erstellen",
        modal: {
          title: "Von Wiedergabelisten abziehen",
          description:
            "Wählen Sie die Wiedergabelisten aus, aus denen Sie Titel von Ihrer Basis-Wiedergabeliste entfernen möchten.",
        },
        form: {
          playlistsToSubtract: {
            title: "Wiedergabelisten zum Abziehen",
            placeholder: "Wählen Sie die Wiedergabelisten zum Abziehen aus",
            reset: "Auswahl löschen",
          },
        },
      },
    },
    playlists: {
      title: "Wiedergabelisten",
      description: "Sehen Sie hier Ihre Wiedergabelisten.",
      alertTitle: "In Entwicklung",
      alertDescription:
        "Diese Funktion befindet sich derzeit in der Entwicklung. Wir arbeiten hart daran, sie Ihnen bald zur Verfügung zu stellen!",
    },
    tabs: {
      actions: "Aktionen",
      playlists: "Wiedergabelisten",
    },
    toasters: {
      playlistCreated: {
        title: "Wiedergabeliste erfolgreich erstellt",
        description: "Überprüfen Sie Ihre Wiedergabelisten :)",
      },
      playlistCreatedError: {
        title: "Fehler beim Erstellen der Wiedergabeliste",
        description: "Bitte besuchen Sie die Kontaktseite oder versuchen Sie es später erneut.",
      },
    },
  },
} as const;
