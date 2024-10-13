export default {
  global: {
    button: {
      backToHome: "Zurück zur Startseite",
    }
  },
  landing: {
    title: "Verbinde dein SoundCloud-Konto, um deine Wiedergabelisten mühelos zu verwalten."
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
    rights: "© 2024 SoundCloud DJ. Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
  },
  navbar: {
    home: "Startseite"
  },
  notFound: {
    title: "404 - Seite Nicht Gefunden",
    description: "Ups! Die Seite, die du suchst, konnte nicht gefunden werden.",
  },
  privacy: {
    title: "Datenschutzbestimmungen",
    description: "Bei SCDJ Playlist Manager nehmen wir deine Privatsphäre sehr ernst. Unsere Richtlinie ist klar:",
    weDoNotCollectAnyData: "Wir Sammeln Keine Daten",
    weDoNotCollectAnyDataDescription: "Unsere Anwendung sammelt, speichert oder verarbeitet keine persönlichen Informationen. Wir glauben daran, einen Dienst anzubieten, der deine Privatsphäre vollständig respektiert.",
    whenUsing: "Wenn du SDPM nutzt:",
    noPersonalInformation: "Es werden keine persönlichen Informationen gesammelt",
    noUsageData: "Es werden keine Nutzungsdaten erfasst",
    noCookies: "Es werden keine Cookies verwendet",
    noDataShared: "Es werden keine Daten mit Dritten geteilt",
    tokenNeeded: "Dein SoundCloud-Token, das zur Verwaltung deiner Playlists erforderlich ist, wird nur zur Interaktion mit der SoundCloud-API verwendet und niemals auf unseren Servern gespeichert.",
    lastUpdated: "Zuletzt aktualisiert: {date}",
  },
  tutorial: {
    title: "So holen Sie sich Ihr SoundCloud-Token",
    step1: {
      title: "Schritt 1: Greifen Sie auf SoundCloud zu",
      description: "Gehen Sie zu {link} und klicken Sie mit der rechten Maustaste irgendwo auf die Seite, und wählen Sie dann {code} aus.",
      inspectElement: "Element untersuchen",
      imageAlt: "Screenshot des Rechtsklicks auf der SoundCloud-Startseite"
    },
    step2: {
      title: "Schritt 2: Navigieren Sie zum Abschnitt Anwendung",
      description: "Suchen Sie in den angezeigten Entwicklertools die Registerkarte {code} und klicken Sie darauf. Hier finden Sie Ihre Cookies.",
      imageAlt: "Screenshot der Registerkarte Anwendung in den Entwicklertools"
    },
    step3: {
      title: "Schritt 3: Finden Sie Ihr OAuth-Token",
      description: "Suchen Sie in der Registerkarte Anwendung den Abschnitt {cookies}. Finden Sie das Cookie mit dem Namen {key}. Der Wert dieses Cookies ist Ihr SoundCloud-Token.",
      imageAlt: "Screenshot, der das oauth_token-Cookie zeigt"
    },
    note: {
      title: "Wichtiger Hinweis",
      description: "Halten Sie Ihr OAuth-Token privat und sicher. Das Teilen Ihres Tokens ist dasselbe wie das Teilen Ihres Passworts, da es Zugang zu den Daten und Funktionen Ihres Kontos gewährt. Teilen Sie es nicht mit anderen."
    }
  }
} as const;
