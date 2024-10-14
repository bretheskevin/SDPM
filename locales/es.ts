export default {
  global: {
    button: {
      backToHome: "Volver a Inicio",
    },
  },
  landing: {
    title:
      "Conecta tu cuenta de SoundCloud para comenzar a gestionar tus listas de reproducción sin esfuerzo.",
  },
  tokenForm: {
    title: "Conecta Tu Cuenta",
    description:
      "Ingresa tu token de SoundCloud para comenzar a gestionar tus listas de reproducción.",
    label: "Token de SoundCloud",
    placeholder: "Ingresa tu token de SoundCloud",
    buttonLabel: "Conectar a SoundCloud",
    buttonLabelLoading: "Conectando...",
    tokenInvalid: "Token inválido. Por favor verifica e intenta de nuevo.",
    howToGetTokenLink: "¿Cómo obtener tu token de SoundCloud?",
  },
  footer: {
    rights: "© 2024 SoundCloud DJ. Todos los derechos reservados.",
    privacy: "Privacidad",
  },
  navbar: {
    home: "Inicio",
    dashboard: "Panel de Control",
  },
  notFound: {
    title: "404 - Página No Encontrada",
    description: "¡Ups! La página que buscas no se pudo encontrar.",
  },
  privacy: {
    title: "Política de Privacidad",
    description:
      "En SCDJ Playlist Manager, tomamos tu privacidad muy en serio. Nuestra política es simple:",
    weDoNotCollectAnyData: "No Recopilamos Ningún Dato",
    weDoNotCollectAnyDataDescription:
      "Nuestra aplicación no recopila, almacena ni procesa información personal. Creemos en ofrecer un servicio que respete completamente tu privacidad.",
    whenUsing: "Cuando usas SDPM :",
    noPersonalInformation: "No se recopila ninguna información personal",
    noUsageData: "No se rastrea ningún dato de uso",
    noCookies: "No se utilizan cookies",
    noDataShared: "No se comparte ningún dato con terceros",
    tokenNeeded:
      "Tu token de SoundCloud, que es necesario para gestionar tus listas de reproducción, solo se utiliza para interactuar con la API de SoundCloud y nunca se almacena en nuestros servidores.",
    lastUpdated: "Última actualización: {date}",
  },
  tutorial: {
    title: "Cómo recuperar tu token de SoundCloud",
    step1: {
      title: "Paso 1: Acceder a SoundCloud",
      description:
        "Ve a {link} y haz clic derecho en cualquier parte de la página, luego selecciona {code}.",
      inspectElement: "Inspeccionar elemento",
      imageAlt:
        "Captura de pantalla del clic derecho en la página de inicio de SoundCloud",
    },
    step2: {
      title: "Paso 2: Navegar a la sección de Aplicación",
      description:
        "En las herramientas de desarrollo que aparecen, localiza y haz clic en la pestaña {code}. Aquí es donde encontrarás tus cookies.",
      imageAlt:
        "Captura de pantalla de la pestaña Aplicación en las herramientas de desarrollo",
    },
    step3: {
      title: "Paso 3: Localizar tu token OAuth",
      description:
        "En la pestaña Aplicación, busca la sección {cookies}. Encuentra la cookie llamada {key}. El valor de esta cookie es tu token de SoundCloud.",
      imageAlt: "Captura de pantalla mostrando la cookie oauth_token",
    },
    note: {
      title: "Nota importante",
      description:
        "Mantén tu token OAuth privado y seguro. Compartir tu token es lo mismo que compartir tu contraseña, ya que otorga acceso a los datos y funcionalidades de tu cuenta. No lo compartas con otros.",
    },
  },
  serviceUnavailable: {
    title: "¡Vaya! Nuestro servicio está tomando un descanso",
    description:
      "Estamos experimentando algunas dificultades técnicas. Nuestro equipo está trabajando para resolver el problema.",
    alertTitle: "¿Qué está pasando?",
    alertDescription:
      "La aplicación no está disponible actualmente debido a algunos problemas con nuestro servidor. Lamentamos cualquier inconveniente que esto pueda causar.",
    needAppBackUp:
      "¿Necesitas que la aplicación vuelva a funcionar rápidamente? ¡Házmelo saber!",
    contactInfo: "Información de contacto:",
    toast: {
      copiedToClipboard: "Copiado al portapapeles",
      discordDescription:
        "Nombre de usuario de Discord copiado al portapapeles",
    },
  },
} as const;
