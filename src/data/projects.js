const DEFAULT_LOCALE = "es";

const localizedText = (es, en) => ({ es, en });

const projectEntries = [
  {
    id: "hotel-california",
    index: "01",
    title: "Hotel California",
    metaTitle: localizedText(
      "Hotel California: landing page y reservas | Synttek",
      "Hotel California: landing page and booking experience | Synttek",
    ),
    subtitle: localizedText(
      "Landing Page + Experiencia de reservas",
      "Landing Page + Booking Experience",
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Hotel California",
    services: ["Diseño UX/UI", "Desarrollo Web", "Animaciones Web"],
    tags: ["React", "Tailwind CSS", "GSAP", "ScrollTrigger", "Vite"],
    description: {
      short: localizedText(
        "Landing page cinematográfica para hotel boutique en Villa Carlos Paz, enfocada en reservas directas y una experiencia visual premium.",
        "Cinematic landing page for a boutique hotel in Villa Carlos Paz, focused on direct bookings and a premium visual experience.",
      ),
      long: localizedText(
        "Hotel California llegó a Synttek con un objetivo claro: aumentar las reservas directas y reducir la dependencia de plataformas externas como Booking.com. Diseñamos una landing page inmersiva con una dirección de arte cinematográfica, oscura y elegante, inspirada en una experiencia visual digna de Awwwards. La propuesta combina narrativa emocional, fotografía de alto impacto, tipografía editorial y animaciones suaves con GSAP para transmitir intimidad, sofisticación y deseo de estadía. La arquitectura del sitio guía al usuario desde la atmósfera del hotel hasta la decisión de reserva, destacando habitaciones, amenities, testimonios y beneficios reales de reservar de forma directa.",
        "Hotel California came to Synttek with a clear goal: increase direct bookings and reduce dependency on external platforms like Booking.com. We designed an immersive landing page with a cinematic, dark and elegant art direction inspired by premium hospitality showcases. The proposal combines emotional storytelling, high-impact photography, editorial typography and smooth GSAP motion to convey intimacy, sophistication and desire to stay. The site architecture guides users from the hotel's atmosphere to the booking decision, highlighting rooms, amenities, testimonials and the real advantages of booking directly.",
      ),
    },
    coverImage: "/projects/hotel-california/cover.webp",
    heroImage: "/projects/hotel-california/hero.webp",
    demoVideo: "/projects/hotel-california/Demo-Hotel.webm",
    gallery: [
      "/projects/hotel-california/gallery-1.webp",
      "/projects/hotel-california/gallery-2.webp",
      "/projects/hotel-california/gallery-3.webp",
    ],
    accentColor: "#C9A96E",
    featured: false,
    link: "https://demo-hotel-eight.vercel.app/",
    relatedServiceSlugs: ["landing-pages", "desarrollo-web"],
    localLanding: "villa-carlos-paz",
    updatedAt: "2026-04-09T20:36:11.080Z",
  },
  {
    id: "viajes-cordoba",
    index: "01",
    title: "Viajes Córdoba",
    metaTitle: localizedText(
      "Viajes Córdoba: demo de landing para turismo | Synttek",
      "Viajes Córdoba: travel landing page demo | Synttek",
    ),
    subtitle: localizedText(
      "Landing Page + Conversion para turismo",
      "Landing Page + Travel Conversion",
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Viajes Córdoba",
    services: ["Diseño UX/UI", "Desarrollo Web", "Animaciones Web"],
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vite"],
    description: {
      short: localizedText(
        "Landing page editorial de alto impacto para agencia de turismo en Córdoba, diseñada para consultas y conversión por WhatsApp.",
        "High-impact editorial landing page for a travel agency in Cordoba, designed to drive inquiries and WhatsApp conversions.",
      ),
      long: localizedText(
        "Viajes Córdoba fue concebido como una demo de alto nivel para mostrar el potencial de Synttek dentro del rubro turismo y hospitalidad. A diferencia de propuestas oscuras y cinematográficas, esta landing adopta una identidad completamente diurna, editorial y aireada, inspirada en revistas de viajes independientes. El proyecto combina un layout asimétrico, tipografía expresiva, fotografía luminosa y una narrativa centrada en el territorio para construir una experiencia visual memorable. La arquitectura del sitio presenta circuitos destacados, manifiesto de marca, proceso de trabajo, testimonios y contacto final, guiando al usuario hacia la consulta directa por WhatsApp con una propuesta clara, sensible y diferencial.",
        "Viajes Córdoba was conceived as a high-end demo to show Synttek's potential in travel and hospitality. Instead of a dark cinematic approach, this landing page embraces a daytime, editorial and airy identity inspired by independent travel magazines. The project combines an asymmetric layout, expressive typography, bright photography and territory-driven storytelling to build a memorable visual experience. The site architecture presents featured routes, brand manifesto, process, testimonials and a final contact section, guiding users toward direct WhatsApp inquiries with a clear and differentiated proposition.",
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
    relatedServiceSlugs: ["landing-pages", "desarrollo-web"],
    updatedAt: "2026-04-09T20:36:11.080Z",
  },
  {
    id: "thumblify",
    index: "03",
    title: "Thumblify",
    metaTitle: localizedText(
      "Thumblify: plataforma SaaS de thumbnails con IA | Synttek",
      "Thumblify: AI thumbnail SaaS platform | Synttek",
    ),
    subtitle: localizedText(
      "SaaS con IA + Landing Page",
      "AI SaaS + Landing Page",
    ),
    category: "SaaS",
    year: "2025",
    client: "Thumblify",
    services: [
      "Diseño UX/UI",
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
        "Plataforma SaaS para generar thumbnails con IA para YouTube, con autenticación, galerías, comunidad y experiencia bilingüe.",
        "SaaS platform for generating AI YouTube thumbnails, with authentication, galleries, community features and a bilingual experience.",
      ),
      long: localizedText(
        "Thumblify es una plataforma SaaS pensada para creadores de contenido que necesitan generar thumbnails de alto impacto para YouTube de forma rápida y consistente. El proyecto combina una landing de conversión moderna con una aplicación completa que incluye autenticación, generación de thumbnails con IA, soporte para imágenes de referencia, estilos visuales, esquemas de color, visibilidad pública o privada y una experiencia de preview orientada al contexto real de YouTube. Además, se desarrollaron secciones de comunidad y galería personal para gestionar generaciones, explorar contenido público y reforzar el valor de producto. A nivel técnico, el frontend fue construido como una SPA en React 19 con TypeScript, Vite 7, Tailwind CSS v4, i18next para soporte bilingüe ES/EN, Axios con cookies para autenticación y una integración directa con el backend de generación. El resultado es una herramienta visualmente potente, enfocada en conversión y preparada para escalar como producto digital.",
        "Thumblify is a SaaS platform built for content creators who need to generate high-impact YouTube thumbnails quickly and consistently. The project combines a modern conversion-focused landing page with a full application that includes authentication, AI thumbnail generation, support for reference images, visual styles, color schemes, public or private visibility and a preview experience designed around the real YouTube context. We also built community and personal gallery sections to manage generations, explore public content and reinforce the product's value. On the technical side, the frontend was built as a React 19 SPA with TypeScript, Vite 7, Tailwind CSS v4, i18next for bilingual ES/EN support, Axios with cookies for authentication and a direct integration with the generation backend. The result is a visually strong tool, focused on conversion and ready to scale as a digital product.",
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
    featured: false,
    link: "https://thumblify.com",
    relatedServiceSlugs: [
      "software-a-medida",
      "desarrollo-web",
      "automatizaciones",
    ],
    updatedAt: "2025-11-14T12:00:00.000Z",
  },
  {
    id: "cari-turismo",
    index: "02",
    title: "Cari Turismo",
    metaTitle: localizedText(
      "Cari Turismo: sitio web para excursiones | Synttek",
      "Cari Turismo: excursion website | Synttek",
    ),
    subtitle: localizedText(
      "Landing Page + Conversion por WhatsApp",
      "Landing Page + WhatsApp Conversion",
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Cari Turismo",
    services: ["Diseño UX/UI", "Desarrollo Web", "Animaciones Web", "SEO"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "WhatsApp", "SEO"],
    description: {
      short: localizedText(
        "Sitio editorial para una agencia de turismo en Villa Carlos Paz, pensado para explorar excursiones y abrir consultas contextuales por WhatsApp.",
        "Editorial website for a travel agency in Villa Carlos Paz, designed to explore excursions and start contextual WhatsApp inquiries.",
      ),
      long: localizedText(
        "Cari Turismo organiza excursiones, city tours y traslados desde una experiencia editorial orientada a la decisión. Las rutas de experiencias estáticas, los accesos a WhatsApp según cada propuesta y una estructura mobile-first ayudan a que la información importante aparezca en contexto. La implementación incorpora metadata, datos estructurados y sitemap para sostener una base técnica clara.",
        "Cari Turismo organizes excursions, city tours and transfers through an editorial experience built around decision-making. Static experience routes, WhatsApp access tailored to each offer and a mobile-first structure bring key information into context. The implementation includes metadata, structured data and a sitemap for a clear technical foundation.",
      ),
    },
    coverImage: "/projects/cari-turismo/cover.webp",
    heroImage: "/projects/cari-turismo/hero.webp",
    demoVideo: "/projects/cari-turismo/Demo-Cari.webm",
    gallery: [
      "/projects/cari-turismo/gallery-1.webp",
      "/projects/cari-turismo/gallery-2.webp",
      "/projects/cari-turismo/gallery-3.webp",
    ],
    accentColor: "#048b72",
    featured: true,
    link: "https://www.cariturismo.com.ar/",
    caseStudy: {
      hero: {
        eyebrow: localizedText("Caso de estudio", "Case study"),
        backLabel: localizedText("Ver proyectos", "View projects"),
        title: localizedText(
          "Una forma más clara de elegir una experiencia",
          "A clearer way to choose an experience",
        ),
        description: localizedText(
          "Un sitio editorial para descubrir excursiones, evaluar opciones y abrir una consulta por WhatsApp con el contexto de cada propuesta.",
          "An editorial website to discover excursions, compare options and start a WhatsApp inquiry with each offer's context.",
        ),
        imageAlt: localizedText(
          "Vista del sitio de Cari Turismo con propuestas de excursiones.",
          "Cari Turismo website view featuring excursion options.",
        ),
      },
      snapshot: {
        title: localizedText("El encargo", "The brief"),
        items: [
          { label: localizedText("Marca", "Brand"), value: "Cari Turismo" },
          { label: localizedText("Enfoque", "Focus"), value: localizedText("Turismo local", "Local tourism") },
          { label: localizedText("Canal", "Channel"), value: "WhatsApp" },
        ],
      },
      context: {
        title: localizedText("El contexto", "The context"),
        body: localizedText(
          "Una agencia de turismo necesita explicar experiencias distintas sin convertir la navegación en un listado plano. Cada persona llega con preguntas concretas: qué hacer, cuánto tiempo lleva y cómo consultar.",
          "A travel agency needs to explain different experiences without turning navigation into a flat list. Each visitor arrives with specific questions: what to do, how long it takes and how to ask.",
        ),
      },
      challenge: {
        title: localizedText("El desafío", "The challenge"),
        body: localizedText(
          "Ordenar la exploración para que la información ayude a decidir antes de iniciar una conversación. No se trataba de sumar pantallas, sino de dar contexto a cada excursión y a cada contacto.",
          "Organize exploration so information helps people decide before starting a conversation. The work was not about adding screens, but giving each excursion and contact point the right context.",
        ),
      },
      strategy: {
        title: localizedText("La estrategia", "The strategy"),
        body: localizedText(
          "La arquitectura prioriza rutas estáticas de excursiones y una jerarquía que acompaña el recorrido: descubrir, explorar, confiar y decidir. WhatsApp aparece como una continuación de la propuesta que la persona ya está evaluando.",
          "The architecture prioritizes static excursion routes and a hierarchy that follows the journey: discover, explore, trust and decide. WhatsApp appears as a continuation of the offer the visitor is already considering.",
        ),
      },
      solution: {
        title: localizedText("La solución", "The solution"),
        body: localizedText(
          "Diseñamos una interfaz mobile-first con una dirección editorial local y módulos de contenido que hacen legibles las experiencias. Metadata, datos estructurados y sitemap acompañan las rutas para que el sitio tenga una base técnica consistente.",
          "We designed a mobile-first interface with local editorial direction and content modules that make experiences easy to understand. Metadata, structured data and a sitemap support the routes with a consistent technical foundation.",
        ),
        images: [
          "/projects/cari-turismo/gallery-1.webp",
          "/projects/cari-turismo/gallery-2.webp",
        ],
      },
      decisions: {
        title: localizedText("Decisiones que ordenan el recorrido", "Decisions that organize the journey"),
        items: [
          localizedText("Rutas estáticas para presentar cada experiencia con su propio contexto.", "Static routes to present each experience with its own context."),
          localizedText("Accesos a WhatsApp vinculados a la propuesta que se está consultando.", "WhatsApp entry points linked to the offer being considered."),
          localizedText("Contenido y jerarquía diseñados primero para pantallas móviles.", "Content and hierarchy designed for mobile screens first."),
        ],
      },
      results: {
        title: localizedText("El resultado", "The result"),
        body: localizedText(
          "Una presencia digital que convierte el catálogo en un recorrido de descubrimiento y deja el canal de consulta dentro del momento de decisión.",
          "A digital presence that turns a catalog into a discovery journey and keeps the inquiry channel inside the decision moment.",
        ),
      },
      cta: {
        title: localizedText("¿Tu servicio también necesita contexto antes del contacto?", "Does your service also need context before contact?"),
        label: localizedText("Contanos tu proyecto", "Tell us about your project"),
        relatedServicesTitle: localizedText("Servicios relacionados", "Related services"),
        relatedArticlesTitle: localizedText("Lecturas relacionadas", "Related reading"),
        nextProjectLabel: localizedText("Siguiente proyecto", "Next project"),
      },
      relatedServiceSlugs: ["landing-pages", "desarrollo-web"],
      relatedArticleSlugs: ["cuanto-sale-una-pagina-web-en-argentina-2026"],
    },
    localLanding: "villa-carlos-paz",
    updatedAt: "2026-03-18T09:30:00.000Z",
  },

  {
    id: "ranch-vcp",
    index: "03",
    title: "Ranch VCP",
    metaTitle: localizedText(
      "Ranch VCP: sitio gastronómico, carta y reservas | Synttek",
      "Ranch VCP: restaurant website, menu and reservations | Synttek",
    ),
    subtitle: localizedText(
      "Sitio web + Carta digital + Reservas",
      "Website + Digital Menu + Reservations",
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Ranch VCP",
    services: ["Diseño UX/UI", "Desarrollo Web", "SEO"],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "WhatsApp",
      "SEO Local",
    ],
    description: {
      short: localizedText(
        "Experiencia web gastronómica para Ranch VCP, con carta digital interactiva, armado de pedidos y reservas directas por WhatsApp.",
        "Digital restaurant experience for Ranch VCP, featuring an interactive menu, order building and direct WhatsApp reservations.",
      ),
      long: localizedText(
        "Ranch VCP necesitaba transformar su presencia digital en una experiencia capaz de mostrar el carácter del local y, al mismo tiempo, resolver acciones concretas: descubrir la propuesta, consultar la carta, armar un pedido y reservar una mesa. Diseñamos un sitio gastronómico inmersivo con una dirección de arte nocturna, tipografía editorial y animaciones que transmiten la energía de la marca sin sacrificar claridad ni velocidad. La carta digital organiza hamburguesas, pizzas, lomos, empanadas, picadas y bebidas, permite sumar productos a un pedido y enviarlo directamente por WhatsApp, sin aplicaciones ni registro. También desarrollamos un flujo de reservas que contempla sus dos sucursales de Villa Carlos Paz, además de accesos a mapas, horarios e información clave. Construido con Next.js, TypeScript, Tailwind CSS y GSAP, el resultado combina experiencia mobile-first, SEO local y conversión directa en una plataforma preparada para acompañar el crecimiento del negocio.",
        "Ranch VCP needed to turn its digital presence into an experience that could express the restaurant's character while helping customers complete real actions: discover the offering, browse the menu, build an order and book a table. We designed an immersive restaurant website with a nighttime art direction, editorial typography and motion that captures the brand's energy without sacrificing clarity or speed. The digital menu organizes burgers, pizzas, lomos, empanadas, sharing plates and drinks, lets customers add items to an order and send it directly through WhatsApp, with no app or account required. We also developed a reservation flow for its two Villa Carlos Paz locations, along with map links, opening hours and essential visitor information. Built with Next.js, TypeScript, Tailwind CSS and GSAP, the result combines a mobile-first experience, local SEO and direct conversion in a platform ready to support the business as it grows.",
      ),
    },
    coverImage: "/projects/ranch-vcp/cover.webp",
    heroImage: "/projects/ranch-vcp/hero.webp",
    demoVideo: "/projects/ranch-vcp/Demo-Ranch.webm",
    gallery: [
      "/projects/ranch-vcp/gallery-1.webp",
      "/projects/ranch-vcp/gallery-2.webp",
      "/projects/ranch-vcp/gallery-3.webp",
    ],
    accentColor: "#E8B84B",
    featured: true,
    link: "https://ranchvcp.vercel.app/",
    relatedServiceSlugs: ["landing-pages", "desarrollo-web"],
    localLanding: "villa-carlos-paz",
    updatedAt: "2026-08-03T12:00:00.000Z",
  },
  {
    id: "juicy-branding",
    index: "07",
    title: "Juicy",
    metaTitle: localizedText(
      "Juicy: identidad de marca para gastronomía | Synttek",
      "Juicy: food business brand identity | Synttek",
    ),
    subtitle: localizedText("Identidad de marca", "Brand Identity"),
    category: "Branding",
    year: "2025",
    client: "Juicy Burger",
    services: ["Branding", "Diseño Grafico"],
    tags: ["Illustrator", "Photoshop"],
    description: {
      short: localizedText(
        "Identidad para hamburguesería de Villa Carlos Paz, con un sistema gráfico apetitoso y directo pensado para redes.",
        "Brand identity for a burger joint in Villa Carlos Paz, built around a bold and appetizing graphic system designed for social media.",
      ),
      long: localizedText(
        "Juicy es una hamburguesería de Villa Carlos Paz que necesitaba una identidad con personalidad propia: apetitosa, directa y con la energía de la comida callejera de calidad. Construimos un sistema gráfico cálido basado en una paleta naranja intensa y tipografía de impacto, pensado para funcionar tanto en el local como en el feed de redes sociales, con piezas que priorizan el producto y transmiten sabor a primera vista.",
        "Juicy is a burger joint in Villa Carlos Paz that needed an identity with real personality: appetizing, direct and full of the energy of quality street food. We built a warm graphic system based on an intense orange palette and high-impact typography, designed to work both in-store and across the social media feed, with pieces that put the product front and center and convey flavor at first glance.",
      ),
    },
    coverImage: "/projects/juicy-branding/cover.webp",
    heroImage: "/projects/juicy-branding/hero.webp",
    gallery: [
      "/projects/juicy-branding/banner-1.webp",
      "/projects/juicy-branding/banner-2.webp",
      "/projects/juicy-branding/banner-3.webp",
    ],
    bannerGallery: [
      "/projects/juicy-branding/banner-1.webp",
      "/projects/juicy-branding/banner-2.webp",
      "/projects/juicy-branding/banner-3.webp",
      "/projects/juicy-branding/banner-4.webp",
      "/projects/juicy-branding/banner-5.webp",
      "/projects/juicy-branding/banner-6.webp",
      "/projects/juicy-branding/banner-7.webp",
      "/projects/juicy-branding/banner-8.webp",
      "/projects/juicy-branding/banner-9.webp",
      "/projects/juicy-branding/banner-10.webp",
      "/projects/juicy-branding/banner-11.webp",
      "/projects/juicy-branding/banner-12.webp",
    ],
    accentColor: "#FF6B35",
    featured: false,
    link: null,
    relatedServiceSlugs: ["branding"],
    localLanding: "villa-carlos-paz",
    updatedAt: "2026-08-07T13:00:00.000Z",
  },
  {
    id: "gretta-redes",
    index: "08",
    title: "Gretta Gelato",
    metaTitle: localizedText(
      "Gretta Gelato: diseño de contenido para Instagram | Synttek",
      "Gretta Gelato: Instagram content design | Synttek",
    ),
    subtitle: localizedText(
      "Diseño de contenido para Instagram",
      "Instagram content design",
    ),
    category: "Diseño de Redes",
    year: "2026",
    client: "Gretta Gelato",
    services: ["Diseño de Redes", "Dirección de Arte"],
    tags: ["Photoshop", "Illustrator", "Instagram", "Content Design"],
    description: {
      short: localizedText(
        "Sistema de contenido para Instagram de una heladería artesanal de Buenos Aires, pensado para transmitir producto fresco y hecho a mano.",
        "Instagram content system for an artisanal gelato shop in Buenos Aires, designed to convey fresh, handmade product.",
      ),
      long: localizedText(
        "Gretta Gelato es una heladería artesanal de Buenos Aires que necesitaba que su feed transmitiera lo mismo que el local: producto fresco, hecho a mano y con identidad propia, en lugar de fotos sueltas de helado genéricas. Diseñamos un sistema de contenido con una dirección de arte pastel y apetitosa, fotografía de producto consistente y piezas pensadas tanto para sostenerse solas en el feed como para funcionar en carrusel, con una estructura repetible que el equipo interno puede seguir publicación tras publicación sin perder coherencia visual.",
        "Gretta Gelato is an artisanal gelato shop in Buenos Aires that needed its feed to communicate the same thing as the shop itself: fresh, handmade product with its own identity, instead of generic ice cream photos. We designed a content system with a pastel, appetizing art direction, consistent product photography and pieces built to hold up both alone in the feed and inside a carousel, with a repeatable structure the internal team can follow post after post without losing visual consistency.",
      ),
    },
    coverImage: "/projects/gretta-redes/cover.webp",
    heroImage: "/projects/gretta-redes/hero.webp",
    gallery: [
      "/projects/gretta-redes/posts/post-01-a.webp",
      "/projects/gretta-redes/posts/post-02.webp",
      "/projects/gretta-redes/posts/post-03.webp",
    ],
    posts: [
      {
        id: "post-01",
        type: "carousel",
        format: "4:5",
        images: [
          "/projects/gretta-redes/posts/post-01-a.webp",
          "/projects/gretta-redes/posts/post-01-b.webp",
        ],
      },
      {
        id: "post-02",
        type: "image",
        format: "4:5",
        images: ["/projects/gretta-redes/posts/post-02.webp"],
      },
      {
        id: "post-03",
        type: "image",
        format: "4:5",
        images: ["/projects/gretta-redes/posts/post-03.webp"],
      },
    ],
    accentColor: "#A81B32",
    featured: false,
    link: "https://www.instagram.com/gretta.gelato/",
    relatedServiceSlugs: ["branding"],
    updatedAt: "2026-08-07T14:00:00.000Z",
  },
  {
    id: "muros-redes",
    index: "09",
    title: "Muros",
    metaTitle: localizedText(
      "Muros: contenido para constructora en Instagram | Synttek",
      "Muros: construction company Instagram content | Synttek",
    ),
    subtitle: localizedText(
      "Diseño de contenido para Instagram",
      "Instagram content design",
    ),
    category: "Diseño de Redes",
    year: "2026",
    client: "Muros",
    services: ["Diseño de Redes", "Dirección de Arte"],
    tags: ["Photoshop", "Illustrator", "Instagram", "Content Design"],
    description: {
      short: localizedText(
        "Sistema de contenido para Instagram de una constructora de Villa Carlos Paz, pensado para transmitir solidez y criterio técnico en cada publicación.",
        "Instagram content system for a construction company in Villa Carlos Paz, designed to convey solidity and technical expertise in every post.",
      ),
      long: localizedText(
        "Muros es una constructora de Villa Carlos Paz especializada en hormigón visto que necesitaba una presencia en Instagram a la altura de sus obras: técnica, prolija y con criterio de marca, en lugar de fotos sueltas de cada proyecto. Diseñamos un sistema de contenido con una dirección de arte industrial en naranja, gris hormigón y negro, pensado para explicar procesos constructivos y mostrar avances de obra en formato carrusel, con una estructura repetible que el equipo puede seguir publicación tras publicación sin perder coherencia visual.",
        "Muros is a construction company in Villa Carlos Paz specialized in exposed concrete that needed an Instagram presence as solid as its projects: technical, tidy and brand-consistent, instead of scattered project photos. We designed a content system with an industrial art direction in orange, concrete gray and black, built to explain construction processes and show project progress in carousel format, with a repeatable structure the team can follow post after post without losing visual consistency.",
      ),
    },
    coverImage: "/projects/muros-redes/cover.webp",
    heroImage: "/projects/muros-redes/hero.webp",
    gallery: [
      "/projects/muros-redes/posts/post-01-a.webp",
      "/projects/muros-redes/posts/post-02-a.webp",
    ],
    posts: [
      {
        id: "post-01",
        type: "carousel",
        format: "4:5",
        images: [
          "/projects/muros-redes/posts/post-01-a.webp",
          "/projects/muros-redes/posts/post-01-b.webp",
          "/projects/muros-redes/posts/post-01-c.webp",
        ],
      },
      {
        id: "post-02",
        type: "carousel",
        format: "4:5",
        images: [
          "/projects/muros-redes/posts/post-02-a.webp",
          "/projects/muros-redes/posts/post-02-b.webp",
          "/projects/muros-redes/posts/post-02-c.webp",
          "/projects/muros-redes/posts/post-02-d.webp",
          "/projects/muros-redes/posts/post-02-e.webp",
          "/projects/muros-redes/posts/post-02-f.webp",
        ],
      },
    ],
    accentColor: "#F97102",
    featured: false,
    link: null,
    relatedServiceSlugs: ["branding"],
    localLanding: "villa-carlos-paz",
    updatedAt: "2026-08-07T19:00:00.000Z",
  },
  {
    id: "alquileres-carlos-paz",
    index: "10",
    title: "A Carlos Paz",
    metaTitle: localizedText(
      "A Carlos Paz: evolución técnica de portal turístico | Synttek",
      "A Carlos Paz: tourism portal technical evolution | Synttek",
    ),
    subtitle: localizedText(
      "Evolución técnica + Continuidad operativa",
      "Technical evolution + Operational continuity",
    ),
    category: "Integracion Backend",
    year: "2026",
    client: "A Carlos Paz",
    services: [
      "Desarrollo Web",
      "Evolución de plataforma",
      "Continuidad operativa",
    ],
    tags: ["PHP", "MariaDB", "Docker", "Apache"],
    description: {
      short: localizedText(
        "Evolución técnica de un portal turístico de Villa Carlos Paz, con foco en modernización progresiva y continuidad operativa.",
        "Technical evolution of a tourism portal in Villa Carlos Paz, focused on progressive modernization and operational continuity.",
      ),
      long: localizedText(
        "A Carlos Paz es un portal turístico de Villa Carlos Paz con una operación que no puede detenerse. El trabajo se enfocó en acompañar una evolución técnica progresiva, ordenar el código existente y sostener la continuidad de las funciones que el equipo necesita para operar el sitio.",
        "A Carlos Paz is a tourism portal in Villa Carlos Paz with an operation that cannot stop. The work focused on supporting progressive technical evolution, organizing the existing code and maintaining continuity for the functions the team needs to run the site.",
      ),
    },
    coverImage: "/projects/alquileres-carlos-paz/cover.webp",
    heroImage: "/projects/alquileres-carlos-paz/hero.webp",
    gallery: [],
    accentColor: "#0284c7",
    featured: false,
    link: "https://www.acarlospaz.com/",
    caseStudy: {
      hero: {
        eyebrow: localizedText("Caso de estudio", "Case study"),
        backLabel: localizedText("Ver proyectos", "View projects"),
        title: localizedText("Modernizar sin interrumpir la operación", "Modernizing without interrupting operations"),
        description: localizedText("Una evolución técnica progresiva para un portal turístico que necesita seguir acompañando el trabajo cotidiano.", "A progressive technical evolution for a tourism portal that needs to keep supporting daily work."),
        imageAlt: localizedText("Vista del portal turístico A Carlos Paz.", "A Carlos Paz tourism portal view."),
      },
      snapshot: {
        title: localizedText("El encargo", "The brief"),
        items: [
          { label: localizedText("Proyecto", "Project"), value: "A Carlos Paz" },
          { label: localizedText("Foco", "Focus"), value: localizedText("Evolución técnica", "Technical evolution") },
          { label: localizedText("Prioridad", "Priority"), value: localizedText("Continuidad", "Continuity") },
        ],
      },
      context: { title: localizedText("El contexto", "The context"), body: localizedText("El portal reúne información turística y alquileres en una operación que depende de que el sitio siga disponible. Cualquier cambio debía considerar el sistema existente y el uso cotidiano de sus herramientas.", "The portal brings together tourism and rental information in an operation that depends on the site remaining available. Any change had to consider the existing system and the day-to-day use of its tools.") },
      challenge: { title: localizedText("El desafío", "The challenge"), body: localizedText("Actualizar una plataforma con historia sin convertir el proceso en una interrupción. La modernización necesitaba avanzar con criterio, documentación y validaciones sobre los recorridos operativos relevantes.", "Update a platform with history without turning the process into an interruption. Modernization needed to progress with judgment, documentation and validation across relevant operational journeys.") },
      strategy: { title: localizedText("La estrategia", "The strategy"), body: localizedText("Trabajamos por etapas: relevar el estado del sistema, priorizar cambios que sostuvieran la operación y mantener una base documentada para que las decisiones posteriores tengan contexto.", "We worked in stages: assess the system's state, prioritize changes that sustain operations and keep a documented foundation so future decisions have context.") },
      solution: { title: localizedText("La solución", "The solution"), body: localizedText("La intervención ordenó la evolución de la plataforma alrededor de compatibilidad, mantenibilidad y continuidad operativa. El trabajo deja una base más clara para seguir modernizando sin perder de vista las funciones que el portal necesita hoy.", "The intervention organized the platform's evolution around compatibility, maintainability and operational continuity. The work leaves a clearer foundation for continued modernization without losing sight of the functions the portal needs today."), images: ["/projects/alquileres-carlos-paz/cover.webp"] },
      architecture: { title: localizedText("Una base para seguir evolucionando", "A foundation for continued evolution"), items: [localizedText("Relevamiento del sistema antes de intervenir componentes existentes.", "System assessment before intervening in existing components."), localizedText("Cambios priorizados por impacto sobre la operación cotidiana.", "Changes prioritized by their impact on daily operations."), localizedText("Documentación para sostener futuras etapas de trabajo.", "Documentation to support future work stages.")] },
      results: { title: localizedText("El resultado", "The result"), body: localizedText("Una modernización orientada a preservar continuidad mientras la plataforma construye una base más ordenada para sus próximos pasos.", "A modernization focused on preserving continuity while the platform builds a more organized foundation for its next steps.") },
      cta: { title: localizedText("¿Tu plataforma necesita evolucionar sin frenar el trabajo?", "Does your platform need to evolve without stopping the work?"), label: localizedText("Hablemos de tu plataforma", "Talk about your platform"), relatedServicesTitle: localizedText("Servicios relacionados", "Related services"), relatedArticlesTitle: localizedText("Lecturas relacionadas", "Related reading"), nextProjectLabel: localizedText("Siguiente proyecto", "Next project") },
      relatedServiceSlugs: ["desarrollo-web"],
      relatedArticleSlugs: ["cuanto-sale-una-pagina-web-en-argentina-2026"],
    },
    localLanding: "villa-carlos-paz",
    updatedAt: "2026-05-13T00:00:00.000Z",
  },
  {
    id: "constructora-software",
    index: "11",
    title: "Constructora SaaS",
    metaTitle: localizedText(
      "Constructora SaaS: backoffice para gestión de obras | Synttek",
      "Constructora SaaS: construction management backoffice | Synttek",
    ),
    subtitle: localizedText(
      "Backoffice Multi-tenant + Gestión de Obras",
      "Multi-tenant Backoffice + Project Management",
    ),
    category: "Software",
    year: "2026",
    client: "Constructora SaaS",
    services: [
      "Diseño UX/UI",
      "Desarrollo Web",
      "Arquitectura Frontend",
      "Integracion Backend",
    ],
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
    description: {
      short: localizedText(
        "Backoffice multi-tenant para constructoras: obras, presupuestos, gastos e inventario por organización.",
        "Multi-tenant backoffice for construction companies: projects, budgets, expenses and inventory by organization.",
      ),
      long: localizedText(
        "Constructora SaaS centraliza la operación de una constructora por organización: obras, presupuestos, gastos, inventario y registros de actividad. El producto ordena movimientos de materiales, compras, transferencias y consumos alrededor de los proyectos, con roles definidos y reportes existentes para consultar la operación.",
        "Constructora SaaS centralizes a construction company's operation by organization: projects, budgets, expenses, inventory and activity records. The product organizes material movements, purchases, transfers and consumption around projects, with defined roles and existing reports to review operations.",
      ),
    },
    coverImage: "/projects/constructora-software/cover.webp",
    heroImage: "/projects/constructora-software/hero.webp",
    demoVideo: "/projects/constructora-software/demo.webm",
    gallery: [
      "/projects/constructora-software/gallery-1.webp",
      "/projects/constructora-software/gallery-2.webp",
      "/projects/constructora-software/gallery-3.webp",
    ],
    accentColor: "#2563EB",
    featured: false,
    link: "https://constructora.site/",
    caseStudy: {
      hero: { eyebrow: localizedText("Caso de estudio", "Case study"), backLabel: localizedText("Ver proyectos", "View projects"), title: localizedText("Una operación de obra, ordenada por organización", "A construction operation organized by organization"), description: localizedText("Un backoffice multi-tenant para conectar obras, presupuestos, gastos e inventario en una misma operación.", "A multi-tenant backoffice connecting projects, budgets, expenses and inventory in one operation."), imageAlt: localizedText("Vista del backoffice de Constructora SaaS.", "Constructora SaaS backoffice view.") },
      snapshot: { title: localizedText("El encargo", "The brief"), items: [{ label: localizedText("Producto", "Product"), value: localizedText("Backoffice multi-tenant", "Multi-tenant backoffice") }, { label: localizedText("Usuarios", "Users"), value: "OWNER / ADMIN / MEMBER" }, { label: localizedText("Dominio", "Domain"), value: localizedText("Gestión de obras", "Construction management") }] },
      context: { title: localizedText("El contexto", "The context"), body: localizedText("La información de obra suele vivir repartida entre presupuestos, gastos, stock y conversaciones. El producto necesitaba reunir esos recorridos sin mezclar la operación de una organización con otra.", "Construction information often lives across budgets, expenses, stock and conversations. The product needed to bring those journeys together without mixing one organization's operation with another.") },
      challenge: { title: localizedText("El desafío", "The challenge"), body: localizedText("Modelar una operación que conecta proyectos, etapas, tareas, presupuestos, materiales y movimientos de stock. La complejidad no está en mostrar pantallas: está en sostener relaciones, permisos y registro de lo que cambia.", "Model an operation that connects projects, stages, tasks, budgets, materials and stock movements. The complexity is not showing screens: it is sustaining relationships, permissions and a record of what changes.") },
      strategy: { title: localizedText("La estrategia", "The strategy"), body: localizedText("La base es multi-tenant: cada organización trabaja con sus propios datos y roles OWNER, ADMIN y MEMBER. Sobre esa estructura se organizan autenticación con refresh tokens, recursos de obra y flujos de inventario.", "The foundation is multi-tenant: each organization works with its own data and OWNER, ADMIN and MEMBER roles. Authentication with refresh tokens, construction resources and inventory flows are organized on top of that structure.") },
      solution: { title: localizedText("La solución", "The solution"), body: localizedText("La plataforma reúne proyectos, etapas, tareas y plantillas; presupuestos que pueden vincularse a proyectos; gastos; clientes, proveedores y materiales. El inventario general y por proyecto registra compras, transferencias, consumos, reversos y movimientos, con adjuntos, audit log y reportes existentes.", "The platform brings together projects, stages, tasks and templates; budgets that can be linked to projects; expenses; clients, suppliers and materials. General and project stock records purchases, transfers, consumption, reversals and movements, with attachments, an audit log and existing reports."), images: ["/projects/constructora-software/gallery-1.webp", "/projects/constructora-software/gallery-2.webp"] },
      decisions: { title: localizedText("Decisiones de producto", "Product decisions"), items: [localizedText("Separar organizaciones y roles desde la base del producto.", "Separate organizations and roles from the product's foundation."), localizedText("Vincular presupuestos a obras para conservar el contexto operativo.", "Link budgets to projects to preserve operational context."), localizedText("Registrar movimientos y reversos de stock como parte del flujo, no como una nota manual.", "Record stock movements and reversals as part of the flow, not as a manual note.")] },
      architecture: { title: localizedText("Capas que sostienen la operación", "Layers that sustain operations"), items: [localizedText("Autenticación y refresh tokens para sesiones de usuarios.", "Authentication and refresh tokens for user sessions."), localizedText("Roles OWNER, ADMIN y MEMBER para operar según responsabilidad.", "OWNER, ADMIN and MEMBER roles to operate according to responsibility."), localizedText("Adjuntos, audit log y reportes existentes para acompañar el seguimiento.", "Attachments, audit log and existing reports to support follow-up.")] },
      results: { title: localizedText("El resultado", "The result"), body: localizedText("Un producto que convierte procesos operativos dispersos en una estructura compartida por organización, con los recursos de obra y los movimientos de inventario dentro del mismo sistema.", "A product that turns dispersed operational processes into a shared structure by organization, keeping construction resources and inventory movements in the same system.") },
      cta: { title: localizedText("¿Tu operación ya superó las planillas y los chats?", "Has your operation outgrown spreadsheets and chats?"), label: localizedText("Hablemos de tu software", "Talk about your software"), relatedServicesTitle: localizedText("Servicios relacionados", "Related services"), relatedArticlesTitle: localizedText("Lecturas relacionadas", "Related reading"), nextProjectLabel: localizedText("Siguiente proyecto", "Next project") },
      relatedServiceSlugs: ["software-a-medida", "desarrollo-web"],
      relatedArticleSlugs: [],
    },
    updatedAt: "2026-08-23T12:00:00.000Z",
  },
  {
    id: "synttek-leads-engine",
    index: "12",
    title: "Synttek Leads Engine",
    metaTitle: localizedText(
      "Synttek Leads Engine: CRM y automatización comercial | Synttek",
      "Synttek Leads Engine: CRM and sales automation | Synttek",
    ),
    subtitle: localizedText(
      "CRM + Automatización de Prospección",
      "CRM + Lead Generation Automation",
    ),
    category: "SaaS",
    year: "2026",
    client: "Synttek",
    services: [
      "Desarrollo Web",
      "Arquitectura Frontend",
      "Integracion Backend",
      "Automatizaciones",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Playwright",
      "Zod",
    ],
    description: {
      short: localizedText(
        "Plataforma interna de prospección y CRM que descubre negocios locales, los enriquece automáticamente y organiza el seguimiento comercial en un pipeline estructurado.",
        "Internal prospecting platform and CRM that discovers local businesses, enriches them automatically and organizes sales follow-up in a structured pipeline.",
      ),
      long: localizedText(
        "La prospección manual desde Google Maps significaba buscar negocio por negocio, copiar datos de contacto a mano y perder trazabilidad del seguimiento comercial. Synttek Leads Engine reemplaza ese proceso con una plataforma full-stack que descubre negocios locales a través de Google Places, los enriquece con scraping estático y Playwright para encontrar WhatsApp e Instagram, calcula un score comercial automático y organiza todo en un CRM con vistas Kanban y de lista. Desarrollada con Next.js, TypeScript, Express, PostgreSQL, Supabase, Playwright y Zod, la herramienta centraliza descubrimiento, priorización y seguimiento en un único flujo reutilizable. Es una herramienta interna sin demo pública, pero opera en producción como el motor de prospección de Synttek, reemplazando un proceso manual y fragmentado por un pipeline estructurado.",
        "Manual prospecting through Google Maps meant searching business by business, copying contact details by hand and losing track of sales follow-up. Synttek Leads Engine replaces that process with a full-stack platform that discovers local businesses through Google Places, enriches them with static scraping and Playwright to find WhatsApp and Instagram, calculates an automatic lead score and organizes everything in a CRM with Kanban and list views. Built with Next.js, TypeScript, Express, PostgreSQL, Supabase, Playwright and Zod, the tool centralizes discovery, prioritization and follow-up in a single reusable workflow. It's an internal tool with no public demo, but it runs in production as Synttek's prospecting engine, replacing a manual, fragmented process with a structured pipeline.",
      ),
    },
    coverImage: "/projects/synttek-leads-engine/cover.webp",
    heroImage: "/projects/synttek-leads-engine/hero.webp",
    demoVideo: "/projects/synttek-leads-engine/demo.webm",
    gallery: [
      "/projects/synttek-leads-engine/gallery-1.webp",
      "/projects/synttek-leads-engine/gallery-2.webp",
      "/projects/synttek-leads-engine/gallery-3.webp",
    ],
    accentColor: "#A1E233",
    featured: false,
    link: null,
    relatedServiceSlugs: ["software-a-medida", "automatizaciones"],
    updatedAt: "2026-08-23T12:00:00.000Z",
  },
  {
    id: "portfolio-nicolas-espin",
    index: "13",
    title: "Portfolio Nicolás Espin",
    metaTitle: localizedText(
      "Nicolás Espin | Casos de estudio de productos digitales | Synttek",
      "Nicolás Espin | Digital product case studies | Synttek",
    ),
    subtitle: localizedText(
      "Portfolio Personal + Case Studies",
      "Personal Portfolio + Case Studies",
    ),
    category: "Desarrollo Web",
    year: "2026",
    client: "Nicolás Espin",
    services: ["Diseño UX/UI", "Desarrollo Web", "Animaciones Web"],
    tags: [
      "Next.js",
      "React 19",
      "GSAP",
      "Lenis",
      "Spline",
      "Tailwind CSS v4",
      "next-intl",
    ],
    description: {
      short: localizedText(
        "Portfolio personal de Nicolás Espin, fundador de Synttek: una experiencia editorial con case studies detallados de cada producto lanzado.",
        "Personal portfolio for Nicolás Espin, founder of Synttek: an editorial experience with detailed case studies of every shipped product.",
      ),
      long: localizedText(
        "Como fundador de Synttek, Nicolás necesitaba un espacio propio para mostrar el trabajo detrás de cada proyecto: el problema real, la decisión de arquitectura y el resultado en producción, más allá del logo del cliente. Diseñamos y desarrollamos un portfolio personal con una identidad editorial y contemporánea, con páginas de case study individuales para cada producto, una sección de experiencia profesional y presentación bilingüe ES/EN. La experiencia usa GSAP y Lenis para scroll suave y transiciones con intención, Spline para elementos 3D interactivos y next-intl para internacionalización, todo sobre Next.js, React 19 y Tailwind CSS v4. El resultado es una pieza que funciona como carta de presentación técnica y comercial, mostrando con evidencia real la capacidad de llevar productos de punta a punta.",
        "As the founder of Synttek, Nicolás needed his own space to show the work behind each project: the real problem, the architecture decisions and the result in production, beyond just the client's logo. We designed and built a personal portfolio with an editorial, contemporary identity, with individual case study pages for each product, a professional experience section and a bilingual ES/EN presentation. The experience uses GSAP and Lenis for smooth scroll and intentional transitions, Spline for interactive 3D elements and next-intl for internationalization, all on top of Next.js, React 19 and Tailwind CSS v4. The result is a piece that works as both a technical and commercial calling card, showing real evidence of the ability to ship products end to end.",
      ),
    },
    coverImage: "/projects/portfolio-nicolas-espin/cover.webp",
    heroImage: "/projects/portfolio-nicolas-espin/hero.webp",
    demoVideo: "/projects/portfolio-nicolas-espin/Demo-Portfolio.webm",
    gallery: [
      "/projects/portfolio-nicolas-espin/gallery-1.webp",
      "/projects/portfolio-nicolas-espin/gallery-2.webp",
      "/projects/portfolio-nicolas-espin/gallery-3.webp",
    ],
    accentColor: "#864FFE",
    featured: false,
    link: "https://nicolasespin.vercel.app/",
    relatedServiceSlugs: ["desarrollo-web", "landing-pages"],
    updatedAt: "2026-08-23T12:00:00.000Z",
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

const localizeProject = (project, locale = DEFAULT_LOCALE) => {
  const localizeValue = (value) => {
    if (Array.isArray(value)) {
      return value.map(localizeValue);
    }

    if (value && typeof value === "object") {
      if ("es" in value || "en" in value) {
        return getLocalizedField(value, locale);
      }

      return Object.fromEntries(
        Object.entries(value).map(([key, entry]) => [key, localizeValue(entry)]),
      );
    }

    return value;
  };

  return localizeValue(project);
};

export const projects = projectEntries;

export const getProjects = (locale = DEFAULT_LOCALE) =>
  projectEntries.map((project) => localizeProject(project, locale));

export const getFeaturedProjects = (locale = DEFAULT_LOCALE) =>
  getProjects(locale).filter((project) => project.featured);

export const getProjectById = (id, locale = DEFAULT_LOCALE) => {
  const project = projectEntries.find((entry) => entry.id === id);

  return project ? localizeProject(project, locale) : undefined;
};
