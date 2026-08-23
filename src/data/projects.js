const DEFAULT_LOCALE = "es";

const localizedText = (es, en) => ({ es, en });

const projectEntries = [
  {
    id: "hotel-california",
    index: "01",
    title: "Hotel California",
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
    updatedAt: "2026-04-09T20:36:11.080Z",
  },
  {
    id: "viajes-cordoba",
    index: "01",
    title: "Viajes Córdoba",
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
        "Landing premium para agencia de turismo en Villa Carlos Paz, diseñada para convertir consultas por WhatsApp con una identidad joven, local y editorial.",
        "Premium landing page for a travel agency in Villa Carlos Paz, designed to turn WhatsApp inquiries into conversions with a young, local and editorial identity.",
      ),
      long: localizedText(
        "Cari Turismo nace como una landing page de alto impacto para una marca turística local de Villa Carlos Paz, enfocada en excursiones, city tours y traslados especiales. El proyecto fue pensado con una arquitectura de conversión centrada en WhatsApp, combinando una dirección visual editorial, tipografía con personalidad, narrativa territorial y una selección curada de experiencias para evitar el típico catálogo plano de agencia. A nivel técnico, la implementación se desarrolló con Next.js, TypeScript, Tailwind CSS y GSAP, priorizando performance, semántica SEO y una experiencia mobile-first. El resultado es una pieza digital joven, confiable y escalable, preparada para posicionar la marca en búsquedas como 'excursiones en Carlos Paz' y transformar tráfico en conversaciones reales con potencial de venta.",
        "Cari Turismo started as a high-impact landing page for a local tourism brand in Villa Carlos Paz, focused on excursions, city tours and special transfers. The project was built around a WhatsApp-centered conversion architecture, combining editorial art direction, personality-driven typography, territory-based storytelling and a curated selection of experiences to avoid the usual flat agency catalog. Technically, it was implemented with Next.js, TypeScript, Tailwind CSS and GSAP, prioritizing performance, SEO semantics and a mobile-first experience. The result is a young, trustworthy and scalable digital piece, prepared to rank for searches such as 'excursions in Carlos Paz' and turn traffic into real conversations with sales potential.",
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
    relatedServiceSlugs: ["landing-pages", "desarrollo-web"],
    updatedAt: "2026-03-18T09:30:00.000Z",
  },

  {
    id: "ranch-vcp",
    index: "03",
    title: "Ranch VCP",
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
    updatedAt: "2026-08-03T12:00:00.000Z",
  },
  {
    id: "juicy-branding",
    index: "07",
    title: "Juicy",
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
    updatedAt: "2026-08-07T13:00:00.000Z",
  },
  {
    id: "gretta-redes",
    index: "08",
    title: "Gretta Gelato",
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
    updatedAt: "2026-08-07T19:00:00.000Z",
  },
  {
    id: "alquileres-carlos-paz",
    index: "10",
    title: "A Carlos Paz",
    subtitle: localizedText(
      "Auditoría de Seguridad + Migración PHP 8.4",
      "Security Audit + PHP 8.4 Migration",
    ),
    category: "Integracion Backend",
    year: "2026",
    client: "A Carlos Paz",
    services: [
      "Auditoría de Seguridad",
      "Migración de Stack",
      "Hardening",
      "Documentación Técnica",
    ],
    tags: ["PHP 8.4", "MySQLi", "MariaDB", "Docker", "Apache", ".htaccess"],
    description: {
      short: localizedText(
        "Portal turístico de Villa Carlos Paz rescatado de un hackeo activo y migrado de PHP legacy a PHP 8.4 con hardening de seguridad completo.",
        "Tourism portal from Villa Carlos Paz rescued from an active hack and migrated from legacy PHP to PHP 8.4 with full security hardening.",
      ),
      long: localizedText(
        "A Carlos Paz es uno de los portales de alquileres turísticos más conocidos de Villa Carlos Paz. El proyecto llegó con dos problemas superpuestos: el código corría sobre PHP 5.6 con 394 llamadas a APIs removidas del lenguaje, y tres archivos maliciosos estaban activos en producción, recolectando IPs de visitantes y redirigiendo tráfico hacia dominios externos sin que el cliente lo supiera. La intervención empezó por el hallazgo más crítico: identificar, aislar y eliminar los archivos comprometidos. Después vino la migración completa del codebase a PHP 8.4 + mysqli en 44 fases documentadas, con doble entorno Docker (PHP 5.6 + PHP 8.4) para validar compatibilidad durante toda la transición. El cierre incluyó hardening real: passwords admin migrados a bcrypt, protección CSRF en formularios críticos, deletes sensibles bloqueados para GET, validación de uploads, cookies de sesión seguras y bloqueo HTTP de residuos legacy. El sitio fue aprobado para producción el 13 de mayo de 2026 corriendo PHP 8.4.21 sin warnings ni fatales en ninguna ruta.",
        "A Carlos Paz is one of the most well-known rental portals in Villa Carlos Paz. The project arrived with two overlapping problems: the codebase ran on PHP 5.6 with 394 calls to APIs removed from the language, and three malicious files were active in production, collecting visitor IPs and silently redirecting traffic to external domains without the client's knowledge. The intervention started with the most critical finding: identifying, isolating and removing the compromised files. Then came the full codebase migration to PHP 8.4 + mysqli across 44 documented phases, using a dual Docker environment (PHP 5.6 + PHP 8.4) to validate compatibility throughout the transition. The closure included real hardening: admin passwords migrated to bcrypt, CSRF protection on critical forms, sensitive deletes blocked on GET, upload validation, secure session cookies and HTTP blocking of legacy artifacts. The site was approved for production on May 13, 2026, running PHP 8.4.21 with no warnings or fatals on any route.",
      ),
    },
    coverImage: "/projects/alquileres-carlos-paz/cover.webp",
    heroImage: "/projects/alquileres-carlos-paz/hero.webp",
    gallery: [],
    accentColor: "#0284c7",
    featured: false,
    link: "https://www.acarlospaz.com/",
    relatedServiceSlugs: ["desarrollo-web"],
    updatedAt: "2026-05-13T00:00:00.000Z",
  },
  {
    id: "constructora-software",
    index: "11",
    title: "Constructora SaaS",
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
      "Redis",
      "Cloudflare R2",
    ],
    description: {
      short: localizedText(
        "Backoffice SaaS multi-tenant para constructoras: obras, presupuestos, gastos e inventario con aislamiento real por organización y trazabilidad total.",
        "Multi-tenant SaaS backoffice for construction companies: projects, budgets, expenses and inventory with real per-organization isolation and full traceability.",
      ),
      long: localizedText(
        "Las constructoras suelen repartir obras, presupuestos y materiales entre planillas y chats que no se comunican entre sí, perdiendo de vista el costo real de cada proyecto. Constructora SaaS nace para resolver ese problema con un backoffice multi-tenant que aísla de verdad los datos de cada organización, sin compartir una sola fila entre clientes. La plataforma centraliza la gestión de obras, presupuestos, gastos e inventario, con movimientos de stock reversibles, reporting y un sistema de roles y permisos validado en la propia API, no solo en la interfaz. Construido con Next.js, NestJS, TypeScript, PostgreSQL, Prisma, Redis y Cloudflare R2, el proyecto se probó con tests de aislamiento entre tenants y trazabilidad de cada movimiento, priorizando arquitectura de producto por sobre la lógica de un CRUD con login encima. El resultado es un sistema completo en producción, pensado para escalar como software a medida real.",
        "Construction companies often spread projects, budgets and materials across spreadsheets and chats that don't talk to each other, losing sight of the real cost of each job. Constructora SaaS was built to solve that with a multi-tenant backoffice that truly isolates each organization's data, without sharing a single row between clients. The platform centralizes project, budget, expense and inventory management, with reversible stock movements, reporting and a role and permission system validated at the API level, not just in the interface. Built with Next.js, NestJS, TypeScript, PostgreSQL, Prisma, Redis and Cloudflare R2, the project was tested for tenant isolation and full traceability of every stock movement, prioritizing product architecture over CRUD-with-a-login logic. The result is a complete system in production, built to scale as real custom software.",
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
    relatedServiceSlugs: ["software-a-medida", "desarrollo-web"],
    updatedAt: "2026-08-23T12:00:00.000Z",
  },
  {
    id: "synttek-leads-engine",
    index: "12",
    title: "Synttek Leads Engine",
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
