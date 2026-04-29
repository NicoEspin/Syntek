const DEFAULT_LOCALE = "es";

const localizedText = (es, en) => ({es, en});

const projectEntries = [
  {
    id: "hotel-california",
    index: "01",
    title: "Hotel California",
    subtitle: localizedText(
      "Landing Page + Experiencia de reservas",
      "Landing Page + Booking Experience"
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Hotel California",
    services: ["Diseno UX/UI", "Desarrollo Web", "Animaciones Web"],
    tags: ["React", "Tailwind CSS", "GSAP", "ScrollTrigger", "Vite"],
    description: {
      short: localizedText(
        "Landing page cinematografica para hotel boutique en Villa Carlos Paz, enfocada en reservas directas y una experiencia visual premium.",
        "Cinematic landing page for a boutique hotel in Villa Carlos Paz, focused on direct bookings and a premium visual experience."
      ),
      long: localizedText(
        "Hotel California llego a Synttek con un objetivo claro: aumentar las reservas directas y reducir la dependencia de plataformas externas como Booking.com. Disenamos una landing page inmersiva con una direccion de arte cinematografica, oscura y elegante, inspirada en una experiencia visual digna de Awwwards. La propuesta combina narrativa emocional, fotografia de alto impacto, tipografia editorial y animaciones suaves con GSAP para transmitir intimidad, sofisticacion y deseo de estadia. La arquitectura del sitio guia al usuario desde la atmosfera del hotel hasta la decision de reserva, destacando habitaciones, amenities, testimonios y beneficios reales de reservar de forma directa.",
        "Hotel California came to Synttek with a clear goal: increase direct bookings and reduce dependency on external platforms like Booking.com. We designed an immersive landing page with a cinematic, dark and elegant art direction inspired by premium hospitality showcases. The proposal combines emotional storytelling, high-impact photography, editorial typography and smooth GSAP motion to convey intimacy, sophistication and desire to stay. The site architecture guides users from the hotel's atmosphere to the booking decision, highlighting rooms, amenities, testimonials and the real advantages of booking directly."
      ),
    },
    coverImage: "/projects/hotel-california/cover.webp",
    heroImage: "/projects/hotel-california/hero.webp",
    gallery: [
      "/projects/hotel-california/gallery-1.webp",
      "/projects/hotel-california/gallery-2.webp",
      "/projects/hotel-california/gallery-3.webp",
    ],
    accentColor: "#C9A96E",
    featured: true,
    link: "https://demo-hotel-eight.vercel.app/",
    updatedAt: "2026-04-09T20:36:11.080Z",
  },
  {
    id: "viajes-cordoba",
    index: "02",
    title: "Viajes Cordoba",
    subtitle: localizedText(
      "Landing Page + Conversion para turismo",
      "Landing Page + Travel Conversion"
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Viajes Cordoba",
    services: ["Diseno UX/UI", "Desarrollo Web", "Animaciones Web"],
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vite"],
    description: {
      short: localizedText(
        "Landing page editorial de alto impacto para agencia de turismo en Cordoba, disenada para consultas y conversion por WhatsApp.",
        "High-impact editorial landing page for a travel agency in Cordoba, designed to drive inquiries and WhatsApp conversions."
      ),
      long: localizedText(
        "Viajes Cordoba fue concebido como una demo de alto nivel para mostrar el potencial de Synttek dentro del rubro turismo y hospitalidad. A diferencia de propuestas oscuras y cinematograficas, esta landing adopta una identidad completamente diurna, editorial y aireada, inspirada en revistas de viajes independientes. El proyecto combina un layout asimetrico, tipografia expresiva, fotografia luminosa y una narrativa centrada en el territorio para construir una experiencia visual memorable. La arquitectura del sitio presenta circuitos destacados, manifiesto de marca, proceso de trabajo, testimonios y contacto final, guiando al usuario hacia la consulta directa por WhatsApp con una propuesta clara, sensible y diferencial.",
        "Viajes Cordoba was conceived as a high-end demo to show Synttek's potential in travel and hospitality. Instead of a dark cinematic approach, this landing page embraces a daytime, editorial and airy identity inspired by independent travel magazines. The project combines an asymmetric layout, expressive typography, bright photography and territory-driven storytelling to build a memorable visual experience. The site architecture presents featured routes, brand manifesto, process, testimonials and a final contact section, guiding users toward direct WhatsApp inquiries with a clear and differentiated proposition."
      ),
    },
    coverImage: "/projects/viajes-cordoba/cover.webp",
    heroImage: "/projects/viajes-cordoba/hero.webp",
    gallery: [
      "/projects/viajes-cordoba/gallery-2.webp",
      "/projects/viajes-cordoba/gallery-1.webp",
      "/projects/viajes-cordoba/gallery-3.webp",
    ],
    accentColor: "#3D6B52",
    featured: true,
    link: "https://demo-viajes-five.vercel.app/",
    updatedAt: "2026-04-09T20:36:11.080Z",
  },
  {
    id: "thumblify",
    index: "03",
    title: "Thumblify",
    subtitle: localizedText(
      "SaaS con IA + Landing Page",
      "AI SaaS + Landing Page"
    ),
    category: "SaaS",
    year: "2025",
    client: "Thumblify",
    services: [
      "Diseno UX/UI",
      "Desarrollo Web",
      "Arquitectura Frontend",
      "Integracion Backend",
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "Tailwind CSS v4",
      "i18next",
      "Axios",
    ],
    description: {
      short: localizedText(
        "Plataforma SaaS para generar thumbnails con IA para YouTube, con autenticacion, galerias, comunidad y experiencia bilingue.",
        "SaaS platform for generating AI YouTube thumbnails, with authentication, galleries, community features and a bilingual experience."
      ),
      long: localizedText(
        "Thumblify es una plataforma SaaS pensada para creadores de contenido que necesitan generar thumbnails de alto impacto para YouTube de forma rapida y consistente. El proyecto combina una landing de conversion moderna con una aplicacion completa que incluye autenticacion, generacion de thumbnails con IA, soporte para imagenes de referencia, estilos visuales, esquemas de color, visibilidad publica o privada y una experiencia de preview orientada al contexto real de YouTube. Ademas, se desarrollaron secciones de comunidad y galeria personal para gestionar generaciones, explorar contenido publico y reforzar el valor de producto. A nivel tecnico, el frontend fue construido como una SPA en React 19 con TypeScript, Vite 7, Tailwind CSS v4, i18next para soporte bilingue ES/EN, Axios con cookies para autenticacion y una integracion directa con el backend de generacion. El resultado es una herramienta visualmente potente, enfocada en conversion y preparada para escalar como producto digital.",
        "Thumblify is a SaaS platform built for content creators who need to generate high-impact YouTube thumbnails quickly and consistently. The project combines a modern conversion-focused landing page with a full application that includes authentication, AI thumbnail generation, support for reference images, visual styles, color schemes, public or private visibility and a preview experience designed around the real YouTube context. We also built community and personal gallery sections to manage generations, explore public content and reinforce the product's value. On the technical side, the frontend was built as a React 19 SPA with TypeScript, Vite 7, Tailwind CSS v4, i18next for bilingual ES/EN support, Axios with cookies for authentication and a direct integration with the generation backend. The result is a visually strong tool, focused on conversion and ready to scale as a digital product."
      ),
    },
    coverImage: "/projects/thumblify/cover.webp",
    heroImage: "/projects/thumblify/hero.webp",
    gallery: [
      "/projects/thumblify/gallery-1.webp",
      "/projects/thumblify/gallery-2.webp",
      "/projects/thumblify/gallery-3.webp",
    ],
    accentColor: "#EC4899",
    featured: true,
    link: "https://thumblify.com",
    updatedAt: "2025-11-14T12:00:00.000Z",
  },
  {
    id: "cari-turismo",
    index: "04",
    title: "Cari Turismo",
    subtitle: localizedText(
      "Landing Page + Conversion por WhatsApp",
      "Landing Page + WhatsApp Conversion"
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Cari Turismo",
    services: [
      "Diseno UX/UI",
      "Desarrollo Web",
      "Animaciones Web",
      "SEO",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "WhatsApp", "SEO"],
    description: {
      short: localizedText(
        "Landing premium para agencia de turismo en Villa Carlos Paz, disenada para convertir consultas por WhatsApp con una identidad joven, local y editorial.",
        "Premium landing page for a travel agency in Villa Carlos Paz, designed to turn WhatsApp inquiries into conversions with a young, local and editorial identity."
      ),
      long: localizedText(
        "Cari Turismo nace como una landing page de alto impacto para una marca turistica local de Villa Carlos Paz, enfocada en excursiones, city tours y traslados especiales. El proyecto fue pensado con una arquitectura de conversion centrada en WhatsApp, combinando una direccion visual editorial, tipografia con personalidad, narrativa territorial y una seleccion curada de experiencias para evitar el tipico catalogo plano de agencia. A nivel tecnico, la implementacion se desarrollo con Next.js, TypeScript, Tailwind CSS y GSAP, priorizando performance, semantica SEO y una experiencia mobile-first. El resultado es una pieza digital joven, confiable y escalable, preparada para posicionar la marca en busquedas como 'excursiones en Carlos Paz' y transformar trafico en conversaciones reales con potencial de venta.",
        "Cari Turismo started as a high-impact landing page for a local tourism brand in Villa Carlos Paz, focused on excursions, city tours and special transfers. The project was built around a WhatsApp-centered conversion architecture, combining editorial art direction, personality-driven typography, territory-based storytelling and a curated selection of experiences to avoid the usual flat agency catalog. Technically, it was implemented with Next.js, TypeScript, Tailwind CSS and GSAP, prioritizing performance, SEO semantics and a mobile-first experience. The result is a young, trustworthy and scalable digital piece, prepared to rank for searches such as 'excursions in Carlos Paz' and turn traffic into real conversations with sales potential."
      ),
    },
    coverImage: "/projects/cari-turismo/cover.webp",
    heroImage: "/projects/cari-turismo/hero.webp",
    gallery: [
      "/projects/cari-turismo/gallery-1.webp",
      "/projects/cari-turismo/gallery-2.webp",
      "/projects/cari-turismo/gallery-3.webp",
    ],
    accentColor: "#048b72",
    featured: true,
    link: "https://www.cariturismo.com.ar/",
    updatedAt: "2026-03-18T09:30:00.000Z",
  },
  {
    id: "nox-branding",
    index: "05",
    title: "NOX",
    subtitle: localizedText("Identidad de marca", "Brand Identity"),
    category: "Branding",
    year: "2026",
    client: "NOX Nightclub",
    services: ["Branding", "Diseno Grafico"],
    tags: ["Illustrator", "Photoshop", "Motion"],
    description: {
      short: localizedText(
        "Identidad para club nocturno de alta gama en Cordoba con sistema grafico modular.",
        "Brand identity for a high-end nightclub in Cordoba built around a modular graphic system."
      ),
      long: localizedText(
        "NOX necesitaba una identidad que funcionara tanto en la frialdad de un cartel exterior como en el calor de un flyer digital para redes. Construimos un sistema modular basado en formas geometricas cortantes y tipografia de impacto, con guias claras para que el equipo interno pudiera aplicarlo sin perder coherencia.",
        "NOX needed an identity that could work both on the cold surface of exterior signage and on the energy of digital flyers for social media. We built a modular system based on sharp geometric forms and high-impact typography, with clear guidelines so the internal team could apply it without losing consistency."
      ),
    },
    coverImage: "/projects/nox-branding/cover.svg",
    heroImage: "/projects/nox-branding/hero.svg",
    gallery: [
      "/projects/nox-branding/gallery-1.svg",
      "/projects/nox-branding/gallery-2.svg",
      "/projects/nox-branding/gallery-3.svg",
    ],
    accentColor: "#FF3366",
    featured: false,
    link: null,
    updatedAt: "2026-02-01T15:00:00.000Z",
  },
];

const getLocalizedField = (value, locale = DEFAULT_LOCALE) => {
  if (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    ("es" in value || "en" in value)
  ) {
    return value[locale] ?? value[DEFAULT_LOCALE];
  }

  return value;
};

const localizeProject = (project, locale = DEFAULT_LOCALE) => ({
  ...project,
  subtitle: getLocalizedField(project.subtitle, locale),
  description: {
    short: getLocalizedField(project.description.short, locale),
    long: getLocalizedField(project.description.long, locale),
  },
});

export const projects = projectEntries;

export const getProjects = (locale = DEFAULT_LOCALE) =>
  projectEntries.map((project) => localizeProject(project, locale));

export const getFeaturedProjects = (locale = DEFAULT_LOCALE) =>
  getProjects(locale).filter((project) => project.featured);

export const getProjectById = (id, locale = DEFAULT_LOCALE) => {
  const project = projectEntries.find((entry) => entry.id === id);

  return project ? localizeProject(project, locale) : undefined;
};
