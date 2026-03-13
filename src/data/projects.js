export const projects = [
  {
    id: "forma-studio",
    index: "01",
    title: "Forma Studio",
    subtitle: "Brand Identity + Web",
    category: "Branding",
    year: "2024",
    client: "Forma Studio AR",
    services: ["Branding", "Diseno UX/UI", "Desarrollo Web"],
    tags: ["Next.js", "Framer Motion", "Figma"],
    description: {
      short:
        "Identidad visual completa y plataforma web para estudio de arquitectura boutique en Buenos Aires.",
      long:
        "Forma Studio llego a Synttek con una necesidad clara: una identidad que comunicara precision, calidez y contemporaneidad. Desarrollamos desde cero el sistema de marca y lo traducimos a una web que funciona como portfolio interactivo. La arquitectura de informacion prioriza los proyectos del estudio con galerias inmersivas de pantalla completa y transiciones de pagina fluidas.",
    },
    coverImage: "/projects/forma-studio/cover.svg",
    heroImage: "/projects/forma-studio/hero.svg",
    gallery: [
      "/projects/forma-studio/gallery-1.svg",
      "/projects/forma-studio/gallery-2.svg",
      "/projects/forma-studio/gallery-3.svg",
    ],
    accentColor: "#C8F04A",
    featured: true,
    link: "https://formastudio.com.ar",
  },
  {
    id: "verde-ecommerce",
    index: "02",
    title: "Verde",
    subtitle: "Ecommerce Platform",
    category: "Ecommerce",
    year: "2024",
    client: "Verde Organic",
    services: ["Ecommerce", "Desarrollo Web", "Diseno UX/UI"],
    tags: ["Shopify", "Liquid", "Custom Theme"],
    description: {
      short:
        "Tienda online de cosmetica organica con experiencia de compra sensorial y checkout optimizado.",
      long:
        "Verde es una marca de cosmeticos organicos que necesitaba una plataforma de venta que reflejara su filosofia: lenta, consciente y bella. Disenamos un tema custom sobre Shopify con microinteracciones que guian al usuario sin apurarlo. El resultado fue una experiencia editorial que eleva el producto y reduce la friccion en checkout.",
    },
    coverImage: "/projects/verde-ecommerce/cover.svg",
    heroImage: "/projects/verde-ecommerce/hero.svg",
    gallery: [
      "/projects/verde-ecommerce/gallery-1.svg",
      "/projects/verde-ecommerce/gallery-2.svg",
      "/projects/verde-ecommerce/gallery-3.svg",
    ],
    accentColor: "#A1E233",
    featured: true,
    link: "https://verdecosmetica.com",
  },
  {
    id: "pulso-app",
    index: "03",
    title: "Pulso",
    subtitle: "UI/UX + Design System",
    category: "Diseno UX/UI",
    year: "2023",
    client: "Pulso Fintech",
    services: ["Diseno UX/UI", "Design System"],
    tags: ["Figma", "Design System", "Prototipado"],
    description: {
      short:
        "Design system completo y rediseno de app de finanzas personales para el mercado latinoamericano.",
      long:
        "Pulso es una fintech que opera en Argentina, Chile y Colombia. El equipo de producto necesitaba unificar la experiencia entre plataformas y acelerar el tiempo de desarrollo de nuevas features. Creamos un design system robusto en Figma con documentacion exhaustiva, tokens de diseno y guidelines de accesibilidad WCAG 2.1 AA.",
    },
    coverImage: "/projects/pulso-app/cover.svg",
    heroImage: "/projects/pulso-app/hero.svg",
    gallery: [
      "/projects/pulso-app/gallery-1.svg",
      "/projects/pulso-app/gallery-2.svg",
      "/projects/pulso-app/gallery-3.svg",
    ],
    accentColor: "#5B8DEF",
    featured: true,
    link: null,
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
      long:
        "NOX necesitaba una identidad que funcionara tanto en la frialdad de un cartel exterior como en el calor de un flyer digital para redes. Construimos un sistema modular basado en formas geometricas cortantes y tipografia de impacto, con guias claras para que el equipo interno pudiera aplicarlo sin perder coherencia.",
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
      long:
        "Atlas Consultora publicaba articulos de manera manual cada semana, sin poder medir impacto ni captar leads de forma estructurada. Construimos una plataforma sobre Next.js y Sanity CMS que permite al equipo editorial publicar contenido desde un panel visual sin tocar codigo, con SEO tecnico optimizado y formularios conectados a su CRM.",
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
