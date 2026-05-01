export type TranslationKeys = typeof translations.es;
export type Lang = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      logo: 'Nino Aventuras',
      home: 'Inicio',
      gallery: 'Galería',
      itinerary: 'Itinerario',
      info: 'Datos Útiles',
      contact: 'Contacto',
    },
    hero: {
      title: 'Nino Aventuras',
      subtitle: 'Cruce de los Andes',
      description: 'Desde el histórico Manzano hasta el límite Argentina-Chile. Una travesía épica por la cordillera más larga del mundo.',
      cta: 'Conocé la ruta',
      ctaSecondary: 'Ver galería',
    },
    gallery: {
      title: 'Galería',
      subtitle: 'Momentos del cruce',
      description: 'Imágenes capturadas con drone y cámara que muestran la majestuosidad de los Andes en cada etapa del recorrido.',
      photoAlt: 'Foto del cruce de los Andes',
      videoTitle: 'Video del cruce',
      videoDescription: 'Imágenes aéreas del recorrido completo',
      videoPlaceholder: 'Video drone — reemplazar con tu archivo',
    },
    itinerary: {
      title: 'Itinerario',
      subtitle: 'La ruta del cruce',
      description: 'Un recorrido de ida y vuelta que nos lleva desde el corazón de Mendoza hasta la frontera con Chile.',
      stages: [
        {
          title: 'Manzano Histórico',
          description: 'Punto de partida. Un lugar cargado de historia donde comenzó la epopeya libertadora de San Martín.',
          detail: 'Altitud: 1.200 msnm',
          distance: 'Km 0',
        },
        {
          title: 'Ascenso Cordillerano',
          description: 'Ingreso a los Andes. El terreno comienza a elevarse entre quebradas y valles de altura.',
          detail: 'Altitud: 2.400 msnm',
          distance: 'Km 25',
        },
        {
          title: 'Alta Montaña',
          description: 'Paso a gran altitud. Paisajes lunares, nieve permanente y vistas que cortan la respiración.',
          detail: 'Altitud: 3.800 msnm',
          distance: 'Km 55',
        },
        {
          title: 'Límite Argentina-Chile',
          description: 'El cruce. La frontera entre dos mundos unidos por la cordillera. Un momento inolvidable.',
          detail: 'Altitud: 3.200 msnm',
          distance: 'Km 75',
        },
        {
          title: 'Retorno al Manzano',
          description: 'La vuelta. El regreso por otro camino con nuevas perspectivas y la satisfacción de haber completado la travesía.',
          detail: 'Altitud: 1.200 msnm',
          distance: 'Km 130',
        },
        {
          title: 'Cierre de la travesía',
          description: 'Último día del recorrido. Una jornada de descenso y regreso final para cerrar la experiencia en la montaña.',
          detail: 'Altitud: 1.100 msnm',
          distance: 'Km 150',
        },
      ],
    },
    info: {
      title: 'Datos Útiles',
      subtitle: 'Prepará tu aventura',
      whatToBring: {
        title: 'Qué llevar',
        items: [
          'Ropa térmica y campera impermeable',
          'Calzado de trekking con buen agarre',
          'Protección solar (sombrero, lentes, protector SPF 50+)',
          'Botella de agua y snacks energéticos',
          'Documentación personal (DNI/pasaporte)',
          'Botiquín básico de montaña',
          'Linterna frontal y baterías extra',
          'Cámara o celular con batería cargada',
        ],
      },
      season: {
        title: 'Época recomendada',
        description: 'La mejor época para realizar el cruce es entre noviembre y abril, cuando las condiciones climáticas son más favorables y los pasos de montaña están libres de nieve.',
        months: {
          best: 'Nov — Abr (Ideal)',
          possible: 'Oct / May (Posible)',
          notRecommended: 'Jun — Sep (No recomendado)',
        },
      },
      calendar: {
        title: 'Calendario Aventurero',
        description: 'Próximas fechas de expediciones programadas',
        trips: [
          {
            date: '15 Dic 2026',
            status: 'Disponible',
            description: 'Cruce clásico — 3 días',
          },
          {
            date: '20 Ene 2027',
            status: 'Disponible',
            description: 'Cruce con campamento — 4 días',
          },
          {
            date: '10 Feb 2027',
            status: 'Últimos lugares',
            description: 'Cruce express — 2 días',
          },
          {
            date: '5 Mar 2027',
            status: 'Disponible',
            description: 'Cruce fotográfico — 5 días',
          },
        ],
      },
      difficulty: {
        title: 'Dificultad',
        level: 'Moderada — Alta',
        description: 'Se requiere buena condición física. El recorrido incluye tramos de alta montaña con desniveles importantes. No se necesita experiencia previa en montañismo, pero sí aptitud física.',
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Sumate a la aventura',
      description: '¿Tenés preguntas o querés reservar tu lugar? Escribinos y te respondemos a la brevedad.',
      form: {
        name: 'Nombre completo',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Contanos qué te gustaría saber...',
        submit: 'Enviar mensaje',
        success: '¡Mensaje enviado! Te contactaremos pronto.',
      },
      details: {
        title: 'Datos de contacto',
        phone: 'Teléfono',
        email: 'Email',
        location: 'Mendoza, Argentina',
        social: 'Seguinos en redes',
      },
    },
    footer: {
      rights: '© 2026 Nino Aventuras. Todos los derechos reservados.',
      tagline: 'Cruce de los Andes — Manzano Histórico → Límite Argentina-Chile',
    },
    langSwitch: {
      es: 'ES',
      en: 'EN',
    },
  },
  en: {
    nav: {
      logo: 'Nino Adventures',
      home: 'Home',
      gallery: 'Gallery',
      itinerary: 'Itinerary',
      info: 'Useful Info',
      contact: 'Contact',
    },
    hero: {
      title: 'Nino Adventures',
      subtitle: 'Crossing the Andes',
      description: 'From the historic Manzano to the Argentina-Chile border. An epic journey through the longest mountain range in the world.',
      cta: 'Discover the route',
      ctaSecondary: 'View gallery',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments of the crossing',
      description: 'Images captured with drone and camera showcasing the majesty of the Andes at every stage of the journey.',
      photoAlt: 'Andes crossing photo',
      videoTitle: 'Crossing video',
      videoDescription: 'Aerial footage of the complete route',
      videoPlaceholder: 'Drone video — replace with your file',
    },
    itinerary: {
      title: 'Itinerary',
      subtitle: 'The crossing route',
      description: 'A round trip that takes us from the heart of Mendoza to the border with Chile.',
      stages: [
        {
          title: 'Historic Manzano',
          description: 'Starting point. A place steeped in history where San Martín\'s liberating epic began.',
          detail: 'Altitude: 1,200 m asl',
          distance: 'Km 0',
        },
        {
          title: 'Mountain Ascent',
          description: 'Entering the Andes. The terrain begins to rise through ravines and high valleys.',
          detail: 'Altitude: 2,400 m asl',
          distance: 'Km 25',
        },
        {
          title: 'High Mountain',
          description: 'Passing at high altitude. Lunar landscapes, permanent snow, and breathtaking views.',
          detail: 'Altitude: 3,800 m asl',
          distance: 'Km 55',
        },
        {
          title: 'Argentina-Chile Border',
          description: 'The crossing. The border between two worlds united by the Andes. An unforgettable moment.',
          detail: 'Altitude: 3,200 m asl',
          distance: 'Km 75',
        },
        {
          title: 'Return to Manzano',
          description: 'The way back. Returning via another path with new perspectives and the satisfaction of completing the journey.',
          detail: 'Altitude: 1,200 m asl',
          distance: 'Km 130',
        },
        {
          title: 'Journey Finale',
          description: 'Final day of the route. A descent and final return to close out the mountain experience.',
          detail: 'Altitude: 1,100 m asl',
          distance: 'Km 150',
        },
      ],
    },
    info: {
      title: 'Useful Info',
      subtitle: 'Prepare your adventure',
      whatToBring: {
        title: 'What to bring',
        items: [
          'Thermal clothing and waterproof jacket',
          'Trekking boots with good grip',
          'Sun protection (hat, sunglasses, SPF 50+ sunscreen)',
          'Water bottle and energy snacks',
          'Personal ID (passport)',
          'Basic mountain first aid kit',
          'Headlamp and extra batteries',
          'Camera or phone with charged battery',
        ],
      },
      season: {
        title: 'Recommended season',
        description: 'The best time to do the crossing is between November and April, when weather conditions are most favorable and mountain passes are snow-free.',
        months: {
          best: 'Nov — Apr (Ideal)',
          possible: 'Oct / May (Possible)',
          notRecommended: 'Jun — Sep (Not recommended)',
        },
      },
      calendar: {
        title: 'Adventure Calendar',
        description: 'Upcoming scheduled expedition dates',
        trips: [
          {
            date: 'Dec 15, 2026',
            status: 'Available',
            description: 'Classic crossing — 3 days',
          },
          {
            date: 'Jan 20, 2027',
            status: 'Available',
            description: 'Crossing with camping — 4 days',
          },
          {
            date: 'Feb 10, 2027',
            status: 'Last spots',
            description: 'Express crossing — 2 days',
          },
          {
            date: 'Mar 5, 2027',
            status: 'Available',
            description: 'Photographic crossing — 5 days',
          },
        ],
      },
      difficulty: {
        title: 'Difficulty',
        level: 'Moderate — High',
        description: 'Good physical condition is required. The route includes high mountain sections with significant elevation changes. No prior mountaineering experience needed, but physical fitness is essential.',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Join the adventure',
      description: 'Have questions or want to reserve your spot? Write to us and we\'ll get back to you soon.',
      form: {
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell us what you\'d like to know...',
        submit: 'Send message',
        success: 'Message sent! We\'ll contact you soon.',
      },
      details: {
        title: 'Contact details',
        phone: 'Phone',
        email: 'Email',
        location: 'Mendoza, Argentina',
        social: 'Follow us on social media',
      },
    },
    footer: {
      rights: '© 2026 Nino Adventures. All rights reserved.',
      tagline: 'Crossing the Andes — Historic Manzano → Argentina-Chile Border',
    },
    langSwitch: {
      es: 'ES',
      en: 'EN',
    },
  },
};

export function t(lang: Lang, ...keys: string[]): any {
  let current: any = translations[lang];
  for (const key of keys) {
    if (current && current[key] !== undefined) {
      current = current[key];
    } else {
      return key;
    }
  }
  return current;
}
