export const projects = [
  {
    id: "hotel-california",
    index: "01",
    title: "Hotel California",
    subtitle: "Landing Page + Booking Experience",
    category: "Desarrollo Web",
    year: "2025",
    client: "Hotel California",
    services: ["Diseno UX/UI", "Desarrollo Web", "Animaciones Web"],
    tags: ["React", "Tailwind CSS", "GSAP", "ScrollTrigger", "Vite"],
    description: {
      short:
        "Landing page cinematografica para hotel boutique en Villa Carlos Paz, enfocada en reservas directas y experiencia visual premium.",
      long: "Hotel California llego a Synttek con un objetivo claro: aumentar las reservas directas y reducir la dependencia de plataformas externas como Booking.com. Diseñamos una landing page inmersiva con una direccion de arte cinematografica, oscura y elegante, inspirada en una experiencia visual digna de Awwwards. La propuesta combina narrativa emocional, fotografia de alto impacto, tipografia editorial y animaciones suaves con GSAP para transmitir intimidad, sofisticacion y deseo de estadia. La arquitectura del sitio guia al usuario desde la atmosfera del hotel hasta la decision de reserva, destacando habitaciones, amenities, testimonios y beneficios reales de reservar de forma directa.",
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
  },
  {
    id: "viajes-cordoba",
    index: "02",
    title: "Viajes Córdoba",
    subtitle: "Landing Page + Travel Conversion",
    category: "Desarrollo Web",
    year: "2024",
    client: "Viajes Córdoba",
    services: ["Diseno UX/UI", "Desarrollo Web", "Animaciones Web"],
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vite"],
    description: {
      short:
        "Landing page editorial de alto impacto para agencia de turismo en Córdoba, diseñada para consultas y conversion por WhatsApp.",
      long: "Viajes Córdoba fue concebido como una demo de alto nivel para mostrar el potencial de Synttek dentro del rubro turismo y hospitalidad. A diferencia de propuestas oscuras y cinematograficas, esta landing adopta una identidad completamente diurna, editorial y aireada, inspirada en revistas de viajes independientes. El proyecto combina un layout asimetrico, tipografia expresiva, fotografia luminosa y una narrativa centrada en el territorio para construir una experiencia visual memorable. La arquitectura del sitio presenta circuitos destacados, manifiesto de marca, proceso de trabajo, testimonios y contacto final, guiando al usuario hacia la consulta directa por WhatsApp con una propuesta clara, sensible y diferencial.",
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
  },
  {
    id: "thumblify",
    index: "03",
    title: "Thumblify",
    subtitle: "AI SaaS + Landing Page",
    category: "SaaS",
    year: "2026",
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
      short:
        "Plataforma SaaS para generar thumbnails con IA para YouTube, con autenticacion, galerias, comunidad y experiencia bilingue.",
      long: "Thumblify es una plataforma SaaS pensada para creadores de contenido que necesitan generar thumbnails de alto impacto para YouTube de forma rapida y consistente. El proyecto combina una landing de conversion moderna con una aplicacion completa que incluye autenticacion, generacion de thumbnails con IA, soporte para imagenes de referencia, estilos visuales, esquemas de color, visibilidad publica o privada y una experiencia de preview orientada al contexto real de YouTube. Ademas, se desarrollaron secciones de comunidad y galeria personal para gestionar generaciones, explorar contenido publico y reforzar el valor de producto. A nivel tecnico, el frontend fue construido como una SPA en React 19 con TypeScript, Vite 7, Tailwind CSS v4, i18next para soporte bilingue ES/EN, Axios con cookies para autenticacion y una integracion directa con el backend de generacion. El resultado es una herramienta visualmente potente, enfocada en conversion y preparada para escalar como producto digital.",
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
  },
  {
    id: "nox-branding",
    index: "04",
    title: "NOX",
    subtitle: "Brand Identity",
    category: "Branding",
    year: "2023",
    client: "NOX Nightclub",
    services: ["Branding", "Diseno Grafico"],
    tags: ["Illustrator", "Photoshop", "Motion"],
    description: {
      short:
        "Identidad para club nocturno de alta gama en Cordoba con sistema grafico modular.",
      long: "NOX necesitaba una identidad que funcionara tanto en la frialdad de un cartel exterior como en el calor de un flyer digital para redes. Construimos un sistema modular basado en formas geometricas cortantes y tipografia de impacto, con guias claras para que el equipo interno pudiera aplicarlo sin perder coherencia.",
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
  },
  {
    id: "atlas-web",
    index: "05",
    title: "Atlas",
    subtitle: "Web Development",
    category: "Desarrollo Web",
    year: "2023",
    client: "Atlas Consultora",
    services: ["Desarrollo Web", "Diseno UX/UI"],
    tags: ["Next.js", "Tailwind", "Sanity CMS"],
    description: {
      short:
        "Plataforma de contenidos y captacion de leads para consultora de RRHH con CMS headless.",
      long: "Atlas Consultora publicaba articulos de manera manual cada semana, sin poder medir impacto ni captar leads de forma estructurada. Construimos una plataforma sobre Next.js y Sanity CMS que permite al equipo editorial publicar contenido desde un panel visual sin tocar codigo, con SEO tecnico optimizado y formularios conectados a su CRM.",
    },
    coverImage: "/projects/atlas-web/cover.svg",
    heroImage: "/projects/atlas-web/hero.svg",
    gallery: [
      "/projects/atlas-web/gallery-1.svg",
      "/projects/atlas-web/gallery-2.svg",
      "/projects/atlas-web/gallery-3.svg",
    ],
    accentColor: "#FFB347",
    featured: false,
    link: "https://atlasconsultora.com.ar",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectById = (id) =>
  projects.find((project) => project.id === id);
