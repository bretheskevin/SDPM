export default {
  global: {
    button: {
      backToHome: "Volver a Inicio",
      logout: "Cerrar sesión",
    },
    search: "Buscar",
  },
  landing: {
    title: "Conecta tu cuenta de SoundCloud para gestionar tus listas de reproducción fácilmente.",
  },
  tokenForm: {
    title: "Conecta Tu Cuenta",
    description: "Ingresa tu token de SoundCloud para comenzar a gestionar tus listas de reproducción.",
    label: "Token de SoundCloud",
    placeholder: "Ingresa tu token de SoundCloud",
    buttonLabel: "Conectar a SoundCloud",
    buttonLabelLoading: "Conectando...",
    tokenInvalid: "Token inválido. Por favor, verifícalo e inténtalo de nuevo.",
    howToGetTokenLink: "¿Cómo obtener tu token de SoundCloud?",
  },
  footer: {
    rights: "© 2024 SoundCloud DJ Playlist Manager. Todos los derechos reservados.",
    privacy: "Privacidad",
    contact: "Contacto",
  },
  navbar: {
    home: "Inicio",
    dashboard: "Panel de Control",
    profile: "Perfil",
  },
  notFound: {
    title: "404 - Página No Encontrada",
    description: "¡Ups! La página que buscas no se pudo encontrar.",
  },
  privacy: {
    title: "Política de Privacidad",
    description: "En SCDJ Playlist Manager, tomamos tu privacidad muy en serio. Nuestra política es simple:",
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
      description: "Ve a {link} y haz clic derecho en cualquier parte de la página, luego selecciona {code}.",
      inspectElement: "Inspeccionar elemento",
      imageAlt: "Captura de pantalla del clic derecho en la página de inicio de SoundCloud",
    },
    step2: {
      title: "Paso 2: Navegar a la sección de Aplicación",
      description:
        "En las herramientas de desarrollo que aparecen, localiza y haz clic en la pestaña {code}. Aquí es donde encontrarás tus cookies.",
      imageAlt: "Captura de pantalla de la pestaña Aplicación en las herramientas de desarrollo",
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
    needAppBackUp: "¿Necesitas que la aplicación vuelva a funcionar rápidamente? ¡Házmelo saber!",
    contactInfo: "Información de contacto:",
    toast: {
      copiedToClipboard: "Copiado al portapapeles",
      discordDescription: "Nombre de usuario de Discord copiado al portapapeles",
    },
  },
  authenticatedUser: {
    title: "¡Bienvenido de nuevo!",
    description: "Has iniciado sesión correctamente. ¿Listo para gestionar tus listas de reproducción?",
    dashboardButton: "Ir al Dashboard",
  },
  profile: {
    tracks: "Canciones",
    followers: "Seguidores",
    latestTracks: "Últimas canciones",
    errors: {
      profileFetch: {
        title: "No se puede cargar el perfil",
        description:
          "Hubo un problema al cargar la información de tu perfil. Por favor, actualiza la página o inténtalo de nuevo más tarde.",
      },
    },
    hideImages: "Ocultar imágenes",
    noTracksFound: "No se encontraron pistas.",
    playbackCount: "Recuento de reproducciones",
    likesCount: "Recuento de likes",
    duration: "Duración",
    filter: {
      title: "Filtrar pistas",
      all: "Todos",
      public: "Público",
      private: "Privado",
    },
  },
  dashboard: {
    title: "Tablero",
    noticeTitle: "Aviso Importante",
    noticeDescription: "No se eliminarán ni modificarán las listas de reproducción existentes.",
    loadingPlaylists: "Cargando listas de reproducción...",
    refreshPlaylists: "Actualizar listas de reproducción",
    actions: {
      global: {
        form: {
          title: {
            title: "Nombre de la Lista de Reproducción",
            placeholder: "Introduce el nombre de la nueva lista de reproducción",
          },
          basePlaylist: {
            title: "Lista de Reproducción Base",
            placeholder: "Elige una lista de reproducción base",
          },
          button: {
            createPlaylist: "Crear Lista de Reproducción",
            createPlaylistLoading: "Creando...",
          },
        },
      },
      subtract: {
        title: "Restar de las Listas de Reproducción",
        description: "Crea una nueva lista de reproducción restando pistas de la lista de reproducción base.",
        buttonText: "Crear Lista de Reproducción",
        modal: {
          title: "Restar de las Listas de Reproducción",
          description:
            "Selecciona las listas de reproducción de las que deseas eliminar pistas de tu lista de reproducción base.",
        },
        form: {
          playlistsToSubtract: {
            title: "Listas de Reproducción a Restar",
            placeholder: "Selecciona las listas de reproducción a restar",
            reset: "Borrar selección",
          },
        },
      },
    },
    playlists: {
      title: "Listas de Reproducción",
      description: "Consulta tus listas de reproducción aquí.",
      alertTitle: "En Desarrollo",
      alertDescription:
        "Esta función está actualmente en desarrollo. ¡Estamos trabajando arduamente para traértela pronto!",
    },
    tabs: {
      actions: "Acciones",
      playlists: "Listas de Reproducción",
    },
    toasters: {
      playlistCreated: {
        title: "Lista de Reproducción Creada Exitosamente",
        description: "Consulta tus listas de reproducción :)",
      },
      playlistCreatedError: {
        title: "Error al Crear la Lista de Reproducción",
        description: "Por favor, consulta la página de contacto o intenta de nuevo más tarde.",
      },
    },
  },
  contact: {
    title: "Contáctanos",
    description: "¡Estamos aquí para escucharte! No dudes en enviarnos un mensaje.",
    contactForm: "Formulario de contacto",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Correo electrónico",
    messagePlaceholder: "Tu mensaje",
    sendMessage: "Enviar",
    socialMedia: "Síguenos en redes",
    directContact: "Contacto directo",
    contactInfo: "También puedes comunicarte con nosotros a través de:",
    toast: {
      messageSent: "¡Mensaje enviado!",
      messageDescription: "Hemos recibido tu mensaje y te responderemos pronto.",
      copiedToClipboard: "Copiado al portapapeles",
      discordDescription: "Nombre de usuario de Discord copiado",
    },
  },
  metadata: {
    title: "SDPM",
    description: "Gestiona y crea playlists de SoundCloud fácilmente",
    dashboard: {
      title: "SDPM | Panel de control",
      description: "Panel de control de DJ Playlist Manager - Gestiona y crea playlists de SoundCloud fácilmente.",
    },
    privacy: {
      title: "SDPM | Política de privacidad",
      description:
        "Política de privacidad de DJ Playlist Manager - Gestiona y crea playlists de SoundCloud fácilmente.",
    },
    contact: {
      title: "SDPM | Contacto",
      description: "Página de contacto para DJ Playlist Manager - Gestiona y crea playlists de SoundCloud fácilmente.",
    },
    profile: {
      title: "SDPM | Perfil",
      description: "Página de perfil para DJ Playlist Manager - Gestiona y crea playlists de SoundCloud fácilmente.",
    },
  },
} as const;
