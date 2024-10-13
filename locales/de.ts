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
    tokenInvalid: "Ungültiger Token. Bitte überprüfe und versuche es erneut."
  },
  footer: {
    rights: "© 2024 SoundCloud DJ. Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
  },
  navbar: {
    home: "Startseite",
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
} as const;
