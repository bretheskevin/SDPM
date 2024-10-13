export default {
  global: {
    button: {
      backToHome: "Volver a Inicio",
    }
  },
  landing: {
    title: "Conecta tu cuenta de SoundCloud para comenzar a gestionar tus listas de reproducción sin esfuerzo."
  },
  tokenForm: {
    title: "Conecta Tu Cuenta",
    description: "Ingresa tu token de SoundCloud para comenzar a gestionar tus listas de reproducción.",
    label: "Token de SoundCloud",
    placeholder: "Ingresa tu token de SoundCloud",
    buttonLabel: "Conectar a SoundCloud",
    buttonLabelLoading: "Conectando...",
    tokenInvalid: "Token inválido. Por favor verifica e intenta de nuevo."
  },
  footer: {
    rights: "© 2024 SoundCloud DJ. Todos los derechos reservados.",
    privacy: "Privacidad",
  },
  navbar: {
    home: "Inicio",
  },
  notFound: {
    title: "404 - Página No Encontrada",
    description: "¡Ups! La página que buscas no se pudo encontrar.",
  },
  privacy: {
    title: "Política de Privacidad",
    description: "En SCDJ Playlist Manager, tomamos tu privacidad muy en serio. Nuestra política es simple:",
    weDoNotCollectAnyData: "No Recopilamos Ningún Dato",
    weDoNotCollectAnyDataDescription: "Nuestra aplicación no recopila, almacena ni procesa información personal. Creemos en ofrecer un servicio que respete completamente tu privacidad.",
    whenUsing: "Cuando usas SDPM :",
    noPersonalInformation: "No se recopila ninguna información personal",
    noUsageData: "No se rastrea ningún dato de uso",
    noCookies: "No se utilizan cookies",
    noDataShared: "No se comparte ningún dato con terceros",
    tokenNeeded: "Tu token de SoundCloud, que es necesario para gestionar tus listas de reproducción, solo se utiliza para interactuar con la API de SoundCloud y nunca se almacena en nuestros servidores.",
    lastUpdated: "Última actualización: {date}",
  },
} as const;
