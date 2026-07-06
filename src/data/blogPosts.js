import card3 from "@/app/assets/card3.webp";
import threeD from "@/app/assets/3D.webp";
import nico from "@/app/assets/nico.webp";
import antto from "@/app/assets/antto.webp";
import preciosWebArgentina2026 from "@/app/assets/blog/precio-web.webp";
import diseñoRedes from "@/app/assets/blog/diseño-synttek.webp";
import paginaNegocio from "@/app/assets/blog/pagina-negocio.webp";

const DEFAULT_LOCALE = "es";

const localizedText = (es, en) => ({ es, en });

export const AUTHORS = {
  nico: {
    name: "Nicolás Espín",
    role: localizedText("Founder · Full-stack", "Founder · Full-stack"),
    bio: localizedText(
      "Construye interfaces que combinan dirección visual precisa y una base técnica sólida. Para Nico, cada proyecto es una hipótesis de negocio.",
      "Builds interfaces that combine precise visual direction with a solid technical foundation. For Nico, every project is a business hypothesis.",
    ),
    image: nico,
  },
  antto: {
    name: "Antto Cattalano",
    role: localizedText(
      "Co-Founder · Diseño Gráfico & UX/UI",
      "Co-Founder · Diseño Gráfico & UX/UI",
    ),
    bio: localizedText(
      "Diseña sistemas y automatizaciones que conectan herramientas reales con decisiones reales. Para Antto, la automatización es proceso, no decoración.",
      "Designs systems and automations that connect real tools to real decisions. For Antto, automation is process, not decoration.",
    ),
    image: antto,
  },
};

const heading = (es, en) => ({ type: "heading", text: localizedText(es, en) });
const subheading = (es, en) => ({
  type: "subheading",
  text: localizedText(es, en),
});
const paragraph = (es, en) => ({
  type: "paragraph",
  text: localizedText(es, en),
});
const quote = (es, en) => ({ type: "quote", text: localizedText(es, en) });
const code = (es, en) => ({ type: "code", code: localizedText(es, en) });
const callout = (eyebrowEs, eyebrowEn, titleEs, titleEn, textEs, textEn) => ({
  type: "callout",
  eyebrow: localizedText(eyebrowEs, eyebrowEn),
  title: localizedText(titleEs, titleEn),
  text: localizedText(textEs, textEn),
});
const colorSwatches = (items) => ({
  type: "colorSwatches",
  items: items.map(({ hex, es, en }) => ({
    hex,
    label: localizedText(es, en),
  })),
});
// src: imagen importada (import foo from "@/app/assets/blog/foo.webp"). caption/alt son opcionales.
const image = (src, { captionEs, captionEn, altEs, altEn } = {}) => ({
  type: "image",
  src,
  caption: captionEs ? localizedText(captionEs, captionEn) : undefined,
  alt: altEs ? localizedText(altEs, altEn) : undefined,
});

const postEntries = [
  {
    slug: "cuanto-sale-una-pagina-web-en-argentina-2026",
    category: "Desarrollo",
    title: localizedText(
      "Cuánto sale una página web en Argentina en 2026",
      "How much does a website cost in Argentina in 2026",
    ),
    titleAccent: localizedText("página web", "website"),
    excerpt: localizedText(
      "Una guía clara para entender cuánto puede costar una página web profesional en Argentina, qué incluye cada tipo de proyecto y cómo elegir la opción adecuada para tu negocio.",
      "A clear guide to understand how much a professional website can cost in Argentina, what each type of project includes, and how to choose the right option for your business.",
    ),
    dek: localizedText(
      "Los precios de una web pueden variar mucho según el objetivo, la cantidad de secciones, el nivel de diseño, si necesitás autogestión, ecommerce, animaciones o integraciones. En esta guía te mostramos valores orientativos en ARS para tomar una mejor decisión.",
      "Website prices can vary a lot depending on the goal, number of sections, design level, self-management needs, ecommerce, animations, or integrations. In this guide, we show estimated ARS prices to help you make a better decision.",
    ),
    image: preciosWebArgentina2026,
    author: "nico",
    date: "2026-06-24",
    readingMinutes: 8,
    featured: true,
    tags: [
      localizedText("Desarrollo Web", "Web Development"),
      localizedText("Precios", "Pricing"),
      localizedText("Argentina", "Argentina"),
      localizedText("Pymes", "SMBs"),
    ],
    body: [
      paragraph(
        "Una de las preguntas más comunes antes de contratar una web es simple: ¿cuánto sale hacer una página web en Argentina?",
        "One of the most common questions before hiring a website project is simple: how much does it cost to build a website in Argentina?",
      ),
      paragraph(
        "La respuesta depende del tipo de proyecto. No cuesta lo mismo una web simple para presentar un negocio que un catálogo autogestionable, un ecommerce completo o una experiencia digital con animaciones, efectos visuales y desarrollo a medida.",
        "The answer depends on the type of project. A simple website to present a business is not the same as a self-managed catalog, a complete ecommerce store, or a custom digital experience with animations and visual effects.",
      ),
      callout(
        "Respuesta rápida",
        "Quick answer",
        "En 2026, una web profesional puede partir desde $250.000 ARS",
        "In 2026, a professional website can start from ARS $250,000",
        "En Synttek, los proyectos web simples parten desde $250.000 ARS. Los catálogos autogestionables comienzan desde $300.000 ARS, los sitios institucionales suelen ubicarse entre $400.000 y $500.000 ARS, los ecommerce desde $500.000 ARS y las experiencias web más avanzadas desde $800.000 ARS.",
        "At Synttek, simple website projects start from ARS $250,000. Self-managed catalogs start from ARS $300,000, institutional websites usually range between ARS $400,000 and ARS $500,000, ecommerce projects start from ARS $500,000, and more advanced web experiences start from ARS $800,000.",
      ),
      paragraph(
        "Estos valores son orientativos y pueden variar según el alcance, la cantidad de secciones, el nivel de diseño, las funcionalidades, la carga de contenido, las integraciones y el grado de personalización que necesite cada negocio.",
        "These values are estimates and may vary depending on scope, number of sections, design level, features, content loading, integrations, and the level of customization each business needs.",
      ),

      heading(
        "Precios orientativos de páginas web en Argentina",
        "Estimated website prices in Argentina",
      ),
      paragraph(
        "Para entender mejor cuánto puede costar una página web, conviene separar los proyectos por tipo de solución. Cada formato responde a una necesidad distinta: presencia profesional, catálogo, venta online, posicionamiento institucional o diferenciación visual.",
        "To better understand how much a website can cost, it helps to separate projects by type of solution. Each format responds to a different need: professional presence, catalog, online sales, institutional positioning, or visual differentiation.",
      ),
      callout(
        "Web simple",
        "Simple website",
        "Desde $250.000 ARS",
        "From ARS $250,000",
        "Ideal para profesionales, emprendimientos o negocios que necesitan una presencia online clara, moderna y confiable. Sirve para explicar qué hacés, mostrar servicios, sumar información de contacto y recibir consultas.",
        "Ideal for professionals, startups, or businesses that need a clear, modern, and trustworthy online presence. It helps explain what you do, show services, add contact information, and receive inquiries.",
      ),
      callout(
        "Catálogo virtual",
        "Virtual catalog",
        "Desde $300.000 ARS",
        "From ARS $300,000",
        "Pensado para negocios que necesitan mostrar productos, servicios o promociones sin vender directamente desde la web. Es una gran opción para comercios que trabajan por WhatsApp y quieren actualizar su catálogo de forma autogestionable.",
        "Designed for businesses that need to show products, services, or promotions without selling directly through the website. It is a great option for stores that work through WhatsApp and want to update their catalog by themselves.",
      ),
      callout(
        "Sitio institucional",
        "Institutional website",
        "Entre $400.000 y $500.000 ARS",
        "Between ARS $400,000 and ARS $500,000",
        "Recomendado para empresas que necesitan una presencia digital más sólida. Puede incluir secciones de servicios, sobre la empresa, casos, preguntas frecuentes, contacto, integración con WhatsApp y una estructura pensada para transmitir confianza.",
        "Recommended for companies that need a stronger digital presence. It can include service sections, about the company, case studies, frequently asked questions, contact, WhatsApp integration, and a structure designed to build trust.",
      ),
      callout(
        "Ecommerce",
        "Ecommerce",
        "Desde $500.000 ARS",
        "From ARS $500,000",
        "Una tienda online requiere más funcionalidades: productos, categorías, carrito, checkout, medios de pago, gestión de pedidos y una experiencia clara para que el usuario pueda comprar sin fricción.",
        "An online store requires more features: products, categories, cart, checkout, payment methods, order management, and a clear experience so users can buy without friction.",
      ),
      callout(
        "Web avanzada",
        "Advanced website",
        "Desde $800.000 ARS",
        "From ARS $800,000",
        "Para marcas que quieren una experiencia digital diferencial, con dirección visual más profunda, animaciones, interacciones avanzadas, elementos 3D o desarrollo más personalizado. Este tipo de proyecto no busca solo informar, sino generar impacto y recordación.",
        "For brands that want a distinctive digital experience, with deeper visual direction, animations, advanced interactions, 3D elements, or more custom development. This type of project is not just about informing, but about creating impact and memorability.",
      ),

      heading(
        "Por qué una web puede costar $250.000 o más de $800.000",
        "Why a website can cost ARS $250,000 or more than ARS $800,000",
      ),
      paragraph(
        "El precio de una página web no depende solamente de cuántas pantallas tenga. También influyen el nivel de diseño, la estrategia de contenido, la calidad del desarrollo, la posibilidad de autogestionar información, las integraciones y el objetivo comercial del proyecto.",
        "The price of a website does not depend only on how many screens it has. It is also affected by the design level, content strategy, development quality, self-management capabilities, integrations, and the commercial goal of the project.",
      ),
      quote(
        "Una web no debería evaluarse solo por lo que cuesta hacerla, sino por lo que puede ayudar a ordenar, comunicar y vender.",
        "A website should not be judged only by what it costs to build, but by what it can help organize, communicate, and sell.",
      ),
      subheading(
        "Cantidad de secciones y contenido",
        "Number of sections and content",
      ),
      paragraph(
        "Una web de una sola página no requiere el mismo trabajo que un sitio con múltiples secciones, páginas de servicios, casos, blog, catálogo o panel de administración. Cuanto más contenido haya que estructurar, diseñar y cargar, mayor será el alcance del proyecto.",
        "A one-page website does not require the same work as a site with multiple sections, service pages, case studies, blog, catalog, or admin panel. The more content needs to be structured, designed, and uploaded, the bigger the project scope.",
      ),
      subheading("Diseño personalizado", "Custom design"),
      paragraph(
        "No es lo mismo adaptar una estructura simple que diseñar una experiencia visual a medida. Cuando una marca necesita diferenciarse, cuidar cada interacción y construir una presencia más premium, el proceso requiere más dirección visual, iteración y desarrollo.",
        "Adapting a simple structure is not the same as designing a custom visual experience. When a brand needs to stand out, refine every interaction, and build a more premium presence, the process requires more visual direction, iteration, and development.",
      ),
      subheading(
        "Autogestión y funcionalidades",
        "Self-management and features",
      ),
      paragraph(
        "Si necesitás editar productos, subir promociones, gestionar pedidos o actualizar contenido sin depender de un desarrollador, el proyecto necesita una estructura autogestionable. Eso suma valor, pero también requiere más planificación y desarrollo.",
        "If you need to edit products, upload promotions, manage orders, or update content without depending on a developer, the project needs a self-managed structure. That adds value, but also requires more planning and development.",
      ),
      subheading("Ecommerce e integraciones", "Ecommerce and integrations"),
      paragraph(
        "Un ecommerce no es solo una web con productos. Necesita una experiencia de compra clara, lógica de carrito, checkout, medios de pago, gestión de pedidos y, muchas veces, integraciones con herramientas externas. Por eso suele partir desde un valor más alto.",
        "An ecommerce project is not just a website with products. It needs a clear buying experience, cart logic, checkout, payment methods, order management, and often integrations with external tools. That is why it usually starts from a higher price point.",
      ),
      subheading(
        "Animaciones, 3D y experiencia premium",
        "Animations, 3D, and premium experience",
      ),
      paragraph(
        "Las animaciones, los elementos 3D y las interacciones avanzadas pueden elevar mucho la percepción de una marca, pero también requieren más tiempo de diseño, pruebas, optimización y desarrollo para que la experiencia se vea bien y funcione rápido.",
        "Animations, 3D elements, and advanced interactions can significantly elevate brand perception, but they also require more design time, testing, optimization, and development so the experience looks good and performs fast.",
      ),

      heading(
        "Qué tipo de web conviene según tu negocio",
        "Which type of website fits your business",
      ),
      paragraph(
        "Antes de pedir un presupuesto, conviene entender qué necesitás lograr. No todos los negocios necesitan empezar con una web compleja, y no todos deberían quedarse con una presencia básica.",
        "Before asking for a quote, it is important to understand what you need to achieve. Not every business needs to start with a complex website, and not every business should stay with a basic online presence.",
      ),
      callout(
        "Si necesitás presencia",
        "If you need presence",
        "Empezá con una web simple",
        "Start with a simple website",
        "Es ideal si querés verte profesional, explicar tus servicios y tener un lugar claro al que enviar potenciales clientes desde Instagram, WhatsApp, Google o una tarjeta de presentación.",
        "It is ideal if you want to look professional, explain your services, and have a clear place to send potential clients from Instagram, WhatsApp, Google, or a business card.",
      ),
      callout(
        "Si vendés por WhatsApp",
        "If you sell through WhatsApp",
        "Elegí un catálogo autogestionable",
        "Choose a self-managed catalog",
        "Un catálogo virtual permite mostrar productos o promociones sin obligarte a implementar un ecommerce completo. Es especialmente útil para comercios locales, gastronomía, indumentaria, servicios y negocios con precios o stock variable.",
        "A virtual catalog allows you to show products or promotions without forcing you to implement a complete ecommerce store. It is especially useful for local stores, food businesses, fashion, services, and businesses with changing prices or stock.",
      ),
      callout(
        "Si sos empresa",
        "If you are a company",
        "Invertí en un sitio institucional",
        "Invest in an institutional website",
        "Un sitio institucional ayuda a ordenar tu propuesta, mostrar servicios, construir autoridad y transmitir confianza. Es una buena opción para constructoras, estudios, consultoras, empresas de servicios, marcas B2B y negocios en crecimiento.",
        "An institutional website helps organize your value proposition, show services, build authority, and transmit trust. It is a good option for construction companies, studios, consulting firms, service companies, B2B brands, and growing businesses.",
      ),
      callout(
        "Si querés vender online",
        "If you want to sell online",
        "Necesitás un ecommerce",
        "You need ecommerce",
        "Cuando el objetivo es vender directamente desde la web, necesitás una tienda online con una experiencia clara, rápida y preparada para convertir visitas en compras.",
        "When the goal is to sell directly from the website, you need an online store with a clear, fast experience designed to convert visits into purchases.",
      ),
      callout(
        "Si querés diferenciarte",
        "If you want to stand out",
        "Pensá en una experiencia web premium",
        "Think about a premium web experience",
        "Cuando la web es parte central de la percepción de marca, vale la pena trabajar una experiencia más personalizada, con mejor dirección visual, animaciones, narrativa, performance y detalles que hagan que el sitio se recuerde.",
        "When the website is a central part of brand perception, it is worth working on a more personalized experience, with better visual direction, animations, storytelling, performance, and details that make the site memorable.",
      ),

      heading(
        "Entonces, ¿cuánto debería invertir tu negocio?",
        "So, how much should your business invest?",
      ),
      paragraph(
        "La mejor inversión no siempre es la más barata ni la más cara. Es la que mejor responde al momento actual de tu negocio. Si todavía estás validando una idea, probablemente una web simple sea suficiente. Si ya tenés productos, clientes y una operación activa, un catálogo, un sitio institucional o un ecommerce pueden tener mucho más sentido.",
        "The best investment is not always the cheapest or the most expensive. It is the one that best responds to the current stage of your business. If you are still validating an idea, a simple website may be enough. If you already have products, clients, and an active operation, a catalog, an institutional site, or ecommerce may make much more sense.",
      ),
      paragraph(
        "Una página web profesional no debería ser solo una pieza visual. Debería ayudarte a ordenar tu mensaje, explicar mejor lo que vendés, generar confianza y facilitar el próximo paso: una consulta, una reserva, una compra o una reunión.",
        "A professional website should not be just a visual piece. It should help you organize your message, explain what you sell more clearly, build trust, and make the next step easier: an inquiry, a booking, a purchase, or a meeting.",
      ),
      quote(
        "La pregunta correcta no es cuánto sale una web, sino qué tiene que lograr para que esa inversión tenga sentido.",
        "The right question is not how much a website costs, but what it needs to achieve for that investment to make sense.",
      ),

      heading(
        "En Synttek diseñamos webs según el objetivo del negocio",
        "At Synttek, we design websites based on the business goal",
      ),
      paragraph(
        "En Synttek desarrollamos sitios web, catálogos virtuales, ecommerce y experiencias digitales a medida para negocios que quieren verse más profesionales, ordenar su presencia online y convertir mejor.",
        "At Synttek, we build websites, virtual catalogs, ecommerce stores, and custom digital experiences for businesses that want to look more professional, organize their online presence, and convert better.",
      ),
      paragraph(
        "Podemos ayudarte a definir si te conviene empezar con una web simple, un catálogo autogestionable, un sitio institucional, una tienda online o una experiencia más avanzada con animaciones y desarrollo personalizado.",
        "We can help you define whether it makes sense to start with a simple website, a self-managed catalog, an institutional site, an online store, or a more advanced experience with animations and custom development.",
      ),
      callout(
        "Próximo paso",
        "Next step",
        "Pedí una orientación para tu proyecto",
        "Ask for guidance for your project",
        "Contanos qué necesitás, en qué etapa está tu negocio y qué objetivo querés lograr con la web. Te ayudamos a pensar la opción más adecuada antes de avanzar con una propuesta.",
        "Tell us what you need, what stage your business is in, and what goal you want to achieve with the website. We help you think through the right option before moving forward with a proposal.",
      ),
    ],
  },
  {
    slug: "automatizar-con-ia",
    category: "Automatización",
    title: localizedText(
      "Automatizaciones con IA: qué automatizar y qué dejar quieto.",
      "Automating with AI: what to automate and what to leave alone.",
    ),
    excerpt: localizedText(
      "La IA no es decoración. Es proceso. Dónde un workflow multiplica al equipo y dónde solo agrega ruido.",
      "AI isn't decoration. It's process. Where a workflow multiplies the team, and where it just adds noise.",
    ),
    dek: localizedText(
      'No todo lo que se puede automatizar conviene automatizarlo. La pregunta correcta no es "se puede" — es "vale la pena".',
      'Not everything that can be automated should be. The right question isn\'t "can we" — it\'s "is it worth it".',
    ),
    image: threeD,
    author: "antto",
    date: "2026-06-04",
    readingMinutes: 8,
    featured: false,
    tags: [
      localizedText("Automatización", "Automation"),
      localizedText("IA", "AI"),
      localizedText("Procesos", "Process"),
    ],
    body: [
      paragraph(
        "La IA generativa bajó tanto la barrera de entrada que automatizar dejó de ser una decisión técnica y se volvió una decisión de criterio.",
        "Generative AI lowered the barrier so much that automating stopped being a technical decision and became a judgment call.",
      ),
      heading("Dónde sí funciona", "Where it actually works"),
      paragraph(
        "Tareas repetitivas con un patrón claro: clasificar leads, responder consultas frecuentes, sincronizar datos entre herramientas. Ahí un workflow multiplica al equipo sin agregar riesgo.",
        "Repetitive tasks with a clear pattern: qualifying leads, answering frequent questions, syncing data between tools. There, a workflow multiplies the team without adding risk.",
      ),
      quote(
        "Automatizar lo que no entendés todavía solo automatiza el error, más rápido.",
        "Automating what you don't understand yet just automates the mistake, faster.",
      ),
      heading("Dónde agrega ruido", "Where it adds noise"),
      paragraph(
        "Decisiones con contexto humano, juicio de marca o pocas repeticiones al mes. Ahí el costo de mantenimiento supera el tiempo que ahorra.",
        "Decisions with human context, brand judgment, or low monthly volume. There, the maintenance cost outweighs the time saved.",
      ),
    ],
  },
  {
    slug: "diseno-que-convierte",
    category: "Diseño",
    title: localizedText(
      "Diseño que convierte: la estética como persuasión.",
      "Design that converts: aesthetics as persuasion.",
    ),
    titleAccent: localizedText("convierte", "converts"),
    excerpt: localizedText(
      "Cada pantalla, interacción y detalle visual existe para mover al usuario al siguiente paso. No para impresionar.",
      "Every screen, interaction and visual detail exists to move the user to the next step. Not to impress.",
    ),
    dek: localizedText(
      "Cada decisión visual que tomás en tu sitio impacta directamente en cuánto confía el usuario en vos. No es diseño por diseño — es estrategia.",
      "Every visual decision you make on your site directly impacts how much the user trusts you. It's not design for design's sake — it's strategy.",
    ),
    authorRoleOverride: localizedText(
      "Director de Diseño · Synttek",
      "Design Director · Synttek",
    ),
    image: card3,
    author: "nico",
    date: "2026-05-28",
    readingMinutes: 5,
    featured: false,
    tags: [
      localizedText("Diseño Web", "Web Design"),
      localizedText("Branding", "Branding"),
      localizedText("Estrategia", "Strategy"),
      localizedText("UX", "UX"),
    ],
    body: [
      heading("Por qué el diseño vende", "Why design sells"),
      paragraph(
        "El 94% de las primeras impresiones de un producto digital están relacionadas con el diseño. No con la funcionalidad, no con el precio, no con las reseñas — con cómo se ve. Eso es poder, y la mayoría de las empresas lo desperdicia.",
        "94% of first impressions of a digital product are design-related. Not functionality, not price, not reviews — how it looks. That's power, and most companies waste it.",
      ),
      paragraph(
        "En Synttek cada decisión visual — desde la jerarquía tipográfica hasta el espaciado entre secciones — está tomada con una hipótesis de negocio detrás. La estética es el argumento silencioso que convence antes de que el usuario lea una sola palabra.",
        "At Synttek every visual decision — from type hierarchy to section spacing — carries a business hypothesis behind it. Aesthetics are the silent argument that convinces before the user reads a single word.",
      ),
      quote(
        "La estética no es decoración — es el primer argumento que le hacés a tu usuario.",
        "Aesthetics aren't decoration — they're the first argument you make to your user.",
      ),
      heading("Los primeros 50 milisegundos", "The first 50 milliseconds"),
      paragraph(
        "Un estudio de la Universidad de Carleton determinó que los usuarios forman una impresión visual en tan solo 50 milisegundos. Eso es 20 veces más rápido que un parpadeo. En ese tiempo no leen nada.",
        "A Carleton University study found that users form a visual impression in just 50 milliseconds — 20 times faster than a blink. In that time, they read nothing.",
      ),
      paragraph(
        "Perciben la paleta, la densidad, el peso tipográfico y la jerarquía. Si esa percepción no genera confianza inmediata, todo lo que sigue es marketing perdido.",
        "They perceive palette, density, type weight and hierarchy. If that perception doesn't build instant trust, everything that follows is wasted marketing.",
      ),
      code(
        "/* Tokens de jerarquía visual — Synttek */\n:root {\n  --text-display-xl: clamp(2.4rem, 6vw, 5.5rem);\n  --fw-black:         900;\n  --tracking-display: -0.02em;\n  --leading-display:  0.95;\n}",
        "/* Visual hierarchy tokens — Synttek */\n:root {\n  --text-display-xl: clamp(2.4rem, 6vw, 5.5rem);\n  --fw-black:         900;\n  --tracking-display: -0.02em;\n  --leading-display:  0.95;\n}",
      ),
      heading("Tipografía que habla", "Typography that speaks"),
      paragraph(
        "La tipografía hace el 80% del trabajo visual. La elección de familia, peso, tracking y leading comunica personalidad antes de que el lector procese el significado. No es un detalle — es la voz de tu marca.",
        "Typography does 80% of the visual work. The choice of family, weight, tracking and leading communicates personality before the reader processes meaning. It's not a detail — it's your brand's voice.",
      ),
      callout(
        "Sistema tipográfico",
        "Type system",
        "Geist Sans + Geist Mono",
        "Geist Sans + Geist Mono",
        "Una familia estirada en escala extrema: 900 para display, 300 para cuerpo. El contraste de peso reemplaza el contraste de familia.",
        "One family stretched across an extreme range: 900 for display, 300 for body. Weight contrast replaces family contrast.",
      ),
      paragraph(
        "Usar una sola familia tipográfica obliga a construir jerarquía con escala y peso, no con contraste de familia. El resultado es más coherente, más técnico, más memorable.",
        "Using a single type family forces you to build hierarchy with scale and weight, not family contrast. The result is more coherent, more technical, more memorable.",
      ),
      subheading(
        "Por qué evitamos mezclar familias",
        "Why we avoid mixing families",
      ),
      paragraph(
        "Cada familia tipográfica nueva que sumás es una decisión más que el usuario tiene que procesar sin darse cuenta. Geist Sans hace todo el trabajo — display, body y labels — con un solo conjunto de reglas.",
        "Every new type family you add is one more decision the user has to process without noticing. Geist Sans does all the work — display, body and labels — with a single set of rules.",
      ),
      heading(
        "Color como decisión estratégica",
        "Color as a strategic decision",
      ),
      paragraph(
        "En Synttek usamos un solo acento: lime #A1E233. No porque nos guste el verde — sino porque un acento único aplicado con disciplina genera más memorabilidad que tres colores aplicados al azar.",
        "At Synttek we use a single accent: lime #A1E233. Not because we like green — a single accent applied with discipline builds more memorability than three colors applied at random.",
      ),
      colorSwatches([
        { hex: "#0A0A0A", es: "Base", en: "Base" },
        { hex: "#A1E233", es: "Acento", en: "Accent" },
        { hex: "#864FFE", es: "Violeta", en: "Violet" },
        { hex: "#EDEDED", es: "Texto", en: "Text" },
      ]),
      paragraph(
        "La restricción no es una limitación — es la herramienta. Cuando el usuario ve lime en tu interfaz, sabe que importa. Es el único color que pide atención; por eso funciona.",
        "Restriction isn't a limitation — it's the tool. When the user sees lime in your interface, they know it matters. It's the only color asking for attention; that's why it works.",
      ),
    ],
  },
  {
    slug: "branding-con-criterio",
    category: "Branding",
    title: localizedText(
      "Branding con criterio, no con ruido.",
      "Branding with judgment, not noise.",
    ),
    excerpt: localizedText(
      "Una identidad fuerte aclara, no decora. Cómo construimos marcas que se sostienen fuera del moodboard.",
      "A strong identity clarifies, it doesn't decorate. How we build brands that hold up outside the moodboard.",
    ),
    dek: localizedText(
      "Una identidad fuerte no se mide por cuántos colores tiene — se mide por cuánto recordás después de cerrar la pestaña.",
      "A strong identity isn't measured by how many colors it has — it's measured by how much you remember after closing the tab.",
    ),
    image: threeD,
    author: "nico",
    date: "2026-05-10",
    readingMinutes: 5,
    featured: false,
    tags: [
      localizedText("Branding", "Branding"),
      localizedText("Identidad", "Identity"),
      localizedText("Criterio", "Judgment"),
    ],
    body: [
      paragraph(
        "El branding no es el logo. Es el conjunto de decisiones que hacen que tu marca se sienta igual en una landing, en un PDF y en una respuesta de soporte.",
        "Branding isn't the logo. It's the set of decisions that make your brand feel the same on a landing page, in a PDF, and in a support reply.",
      ),
      heading("El error del moodboard", "The moodboard mistake"),
      paragraph(
        "Una identidad que solo existe en un PDF de 40 páginas no es una identidad — es un ejercicio estético. El criterio real se prueba cuando hay que aplicar la marca a algo que nadie diseñó a propósito: un email de error, un ticket de soporte, una factura.",
        "An identity that only exists in a 40-page PDF isn't an identity — it's an aesthetic exercise. Real judgment is tested when you have to apply the brand to something nobody designed on purpose: an error email, a support ticket, an invoice.",
      ),
      quote(
        "Si tu identidad solo funciona en la presentación de venta, todavía no tenés una identidad.",
        "If your identity only works in the sales deck, you don't have an identity yet.",
      ),
      heading(
        "Qué sostiene una marca fuera del moodboard",
        "What holds a brand together outside the moodboard",
      ),
      paragraph(
        "Un acento, no una paleta. Una familia tipográfica, no tres. Una voz, repetida con disciplina en cada texto que sale de la marca. La restricción es lo que la hace reconocible — no la cantidad de elementos.",
        "One accent, not a palette. One type family, not three. One voice, repeated with discipline across every piece of copy the brand puts out. Restriction is what makes it recognizable — not the number of elements.",
      ),
      paragraph(
        "Construimos sistemas de marca pensados para sobrevivir fuera del entorno controlado donde nacieron: con reglas claras, no con un PDF bonito que nadie vuelve a abrir.",
        "We build brand systems meant to survive outside the controlled environment where they were born: with clear rules, not a pretty PDF nobody reopens.",
      ),
    ],
  },
  {
    slug: "necesito-una-web-para-mi-negocio",
    category: "Desarrollo",
    title: localizedText(
      "Necesito una web para mi negocio: por dónde empezar y qué tipo de página conviene",
      "I need a website for my business: where to start and what type of site makes sense",
    ),
    titleAccent: localizedText(
      "web para mi negocio",
      "website for my business",
    ),
    excerpt: localizedText(
      "Si sentís que tu negocio necesita una web, esta guía te ayuda a entender qué tipo de sitio te conviene, qué debería incluir y cómo evitar pagar por algo que no responde a tus objetivos reales.",
      "If you feel your business needs a website, this guide helps you understand what type of site makes sense, what it should include, and how to avoid paying for something that does not respond to your real goals.",
    ),
    dek: localizedText(
      "No todos los negocios necesitan la misma web. Algunos necesitan presencia profesional, otros un catálogo, otros una tienda online y otros una plataforma más completa. La clave está en definir qué tiene que lograr la web antes de pedir un presupuesto.",
      "Not every business needs the same website. Some need professional presence, others need a catalog, others need an online store, and others need a more complete platform. The key is defining what the website needs to achieve before asking for a quote.",
    ),
    image: paginaNegocio,
    author: "nico",
    date: "2026-06-06",
    readingMinutes: 7,
    featured: false,
    tags: [
      localizedText("Desarrollo Web", "Web Development"),
      localizedText("Negocios", "Business"),
      localizedText("Pymes", "SMBs"),
      localizedText("Estrategia Digital", "Digital Strategy"),
    ],
    body: [
      paragraph(
        "Si llegaste a buscar “necesito una web para mi negocio”, probablemente ya entendiste algo importante: tu negocio necesita un lugar propio, profesional y claro donde las personas puedan conocerte, entender qué ofrecés y dar el siguiente paso.",
        "If you searched for “I need a website for my business”, you probably already understood something important: your business needs its own professional and clear place where people can discover you, understand what you offer, and take the next step.",
      ),
      paragraph(
        "El problema es que, cuando empezás a pedir presupuestos, aparecen muchas opciones: landing page, web institucional, catálogo virtual, ecommerce, sitio autogestionable, página con WhatsApp, tienda online, panel de administración. Y no siempre queda claro qué necesitás realmente.",
        "The problem is that when you start asking for quotes, many options appear: landing page, institutional website, virtual catalog, ecommerce, self-managed site, WhatsApp website, online store, admin panel. And it is not always clear what you actually need.",
      ),
      callout(
        "Respuesta rápida",
        "Quick answer",
        "Si necesitás una web para tu negocio, primero definí el objetivo",
        "If you need a website for your business, define the goal first",
        "Antes de pensar en diseño, precio o tecnología, la pregunta más importante es: ¿qué tiene que lograr la web? Puede ser generar consultas por WhatsApp, mostrar productos, vender online, transmitir confianza, explicar servicios o captar leads.",
        "Before thinking about design, price, or technology, the most important question is: what does the website need to achieve? It could generate WhatsApp inquiries, show products, sell online, build trust, explain services, or capture leads.",
      ),

      heading(
        "No necesitás “una web”: necesitás una herramienta para tu negocio",
        "You do not need “a website”: you need a tool for your business",
      ),
      paragraph(
        "Una página web no debería ser solo una tarjeta digital bonita. Bien pensada, puede funcionar como una herramienta comercial: ordena tu propuesta, responde dudas frecuentes, mejora la percepción de tu marca y facilita que una persona te contacte, reserve, compre o pida un presupuesto.",
        "A website should not be just a pretty digital business card. When planned correctly, it can work as a commercial tool: it organizes your offer, answers frequent questions, improves brand perception, and makes it easier for someone to contact you, book, buy, or request a quote.",
      ),
      paragraph(
        "Por eso, antes de contratar una web, conviene pensar menos en “quiero una página” y más en “quiero que mi negocio consiga algo concreto con esta página”. Esa diferencia cambia completamente el proyecto.",
        "That is why, before hiring a website, it is better to think less about “I want a page” and more about “I want my business to achieve something specific with this page”. That difference completely changes the project.",
      ),
      quote(
        "Una buena web no empieza por el diseño. Empieza por entender qué necesita vender, explicar o resolver tu negocio.",
        "A good website does not start with design. It starts by understanding what your business needs to sell, explain, or solve.",
      ),

      heading(
        "Qué tipo de web conviene según tu negocio",
        "What type of website makes sense for your business",
      ),
      paragraph(
        "No todos los negocios están en la misma etapa. Un profesional independiente, un restaurante, una constructora, una tienda de productos y una empresa de servicios no necesitan exactamente la misma solución.",
        "Not all businesses are in the same stage. An independent professional, a restaurant, a construction company, a product store, and a service company do not need exactly the same solution.",
      ),

      callout(
        "Opción 1",
        "Option 1",
        "Landing page o web simple",
        "Landing page or simple website",
        "Ideal si necesitás presencia profesional, explicar qué hacés, mostrar servicios principales, sumar testimonios, tener botones de WhatsApp y aparecer mejor preparado cuando alguien te busca.",
        "Ideal if you need professional presence, explain what you do, show main services, add testimonials, include WhatsApp buttons, and look better prepared when someone searches for you.",
      ),
      paragraph(
        "Este tipo de web suele ser suficiente para profesionales, emprendimientos, servicios locales o negocios que todavía están validando su propuesta. El objetivo principal es transmitir confianza y generar consultas.",
        "This type of website is usually enough for professionals, startups, local services, or businesses that are still validating their offer. The main goal is to build trust and generate inquiries.",
      ),

      callout(
        "Opción 2",
        "Option 2",
        "Web institucional",
        "Institutional website",
        "Recomendada para empresas que necesitan explicar mejor su propuesta, ordenar sus servicios, mostrar experiencia, sumar preguntas frecuentes, tener varias secciones y construir una presencia más sólida.",
        "Recommended for companies that need to better explain their offer, organize their services, show experience, add frequently asked questions, include multiple sections, and build a stronger presence.",
      ),
      paragraph(
        "Una web institucional tiene más estructura que una landing. Puede incluir páginas de servicios, sobre la empresa, casos, clientes, contacto, blog y contenido pensado para posicionar mejor en Google.",
        "An institutional website has more structure than a landing page. It can include service pages, about the company, case studies, clients, contact, blog, and content designed to rank better on Google.",
      ),

      callout(
        "Opción 3",
        "Option 3",
        "Catálogo virtual",
        "Virtual catalog",
        "Conviene si vendés productos o servicios que la gente necesita ver antes de consultar, pero todavía no querés implementar un ecommerce completo.",
        "It makes sense if you sell products or services that people need to see before asking, but you do not want to implement a full ecommerce store yet.",
      ),
      paragraph(
        "Un catálogo virtual es muy útil para negocios que venden por WhatsApp: gastronomía, indumentaria, muebles, turismo, estética, repuestos, comercios locales o marcas con productos variables. La web muestra la oferta y el cierre de venta puede seguir ocurriendo por WhatsApp.",
        "A virtual catalog is very useful for businesses that sell through WhatsApp: food, fashion, furniture, tourism, beauty, spare parts, local stores, or brands with changing products. The website shows the offer and the sale can still close through WhatsApp.",
      ),

      callout(
        "Opción 4",
        "Option 4",
        "Ecommerce",
        "Ecommerce",
        "Es la opción correcta cuando querés que el usuario pueda elegir productos, agregarlos al carrito, pagar online y completar la compra desde la web.",
        "This is the right option when you want users to choose products, add them to the cart, pay online, and complete the purchase from the website.",
      ),
      paragraph(
        "Un ecommerce requiere más planificación porque no es solo diseño: incluye productos, categorías, carrito, checkout, medios de pago, gestión de pedidos, mensajes automáticos y una experiencia de compra clara.",
        "An ecommerce project requires more planning because it is not just design: it includes products, categories, cart, checkout, payment methods, order management, automatic messages, and a clear buying experience.",
      ),

      callout(
        "Opción 5",
        "Option 5",
        "Web con sistema o panel propio",
        "Website with custom system or admin panel",
        "Tiene sentido cuando la web no solo muestra información, sino que también necesita gestionar procesos: stock, pedidos, usuarios, reservas, ventas, contenido o automatizaciones.",
        "It makes sense when the website does not only show information, but also needs to manage processes: stock, orders, users, bookings, sales, content, or automations.",
      ),
      paragraph(
        "Esta opción es más robusta y suele ser recomendable para negocios que ya tienen operación activa, procesos repetitivos o una visión de crecimiento a futuro.",
        "This option is more robust and is usually recommended for businesses that already have active operations, repetitive processes, or a future growth vision.",
      ),

      heading(
        "Cómo saber qué web necesita tu negocio",
        "How to know what website your business needs",
      ),
      paragraph(
        "Una forma simple de decidir es pensar en el próximo paso que querés que haga una persona cuando entra a tu web.",
        "A simple way to decide is to think about the next step you want someone to take when they enter your website.",
      ),

      subheading(
        "Si querés que te consulten por WhatsApp",
        "If you want people to contact you through WhatsApp",
      ),
      paragraph(
        "Probablemente te convenga una landing page, una web simple o un catálogo virtual con llamados a la acción claros. Lo importante es que el usuario entienda rápido qué ofrecés y tenga un botón visible para escribirte.",
        "You probably need a landing page, a simple website, or a virtual catalog with clear calls to action. The important thing is that the user quickly understands what you offer and has a visible button to message you.",
      ),

      subheading(
        "Si querés explicar mejor tus servicios",
        "If you want to better explain your services",
      ),
      paragraph(
        "Te conviene una web institucional con secciones bien ordenadas: servicios, beneficios, proceso de trabajo, preguntas frecuentes, casos o ejemplos y contacto. Esto ayuda mucho cuando vendés algo que requiere confianza antes de contratar.",
        "You need an institutional website with well-organized sections: services, benefits, work process, frequently asked questions, cases or examples, and contact. This helps a lot when you sell something that requires trust before hiring.",
      ),

      subheading("Si querés mostrar productos", "If you want to show products"),
      paragraph(
        "Un catálogo virtual puede ser el primer paso ideal. Permite mostrar productos, categorías, precios, promociones o disponibilidad sin obligarte a tener una tienda online completa desde el día uno.",
        "A virtual catalog can be the ideal first step. It allows you to show products, categories, prices, promotions, or availability without forcing you to have a full online store from day one.",
      ),

      subheading(
        "Si querés vender directamente desde la web",
        "If you want to sell directly from the website",
      ),
      paragraph(
        "En ese caso necesitás un ecommerce. La prioridad no es solo que se vea bien, sino que comprar sea fácil, rápido y claro desde el celular.",
        "In that case, you need ecommerce. The priority is not only that it looks good, but that buying is easy, fast, and clear from mobile.",
      ),

      subheading(
        "Si querés ordenar procesos internos",
        "If you want to organize internal processes",
      ),
      paragraph(
        "Si además de la web necesitás gestionar información, pedidos, stock, reservas o clientes, puede convenir pensar en una solución con panel propio o sistema a medida.",
        "If, in addition to the website, you need to manage information, orders, stock, bookings, or clients, it may make sense to think about a solution with a custom admin panel or system.",
      ),

      heading(
        "Qué debería incluir una web profesional para un negocio",
        "What a professional business website should include",
      ),
      paragraph(
        "Más allá del tipo de proyecto, hay elementos que toda web profesional debería cuidar. No se trata solo de tener una página publicada, sino de que esa página ayude a generar confianza.",
        "Beyond the type of project, there are elements every professional website should take care of. It is not only about having a published page, but about making that page help build trust.",
      ),

      callout(
        "Base mínima",
        "Minimum base",
        "Claridad, confianza y próximo paso",
        "Clarity, trust, and next step",
        "Una buena web tiene que explicar qué hacés, para quién es, por qué deberían elegirte y qué tiene que hacer el usuario después: escribirte, reservar, comprar, pedir presupuesto o agendar una reunión.",
        "A good website needs to explain what you do, who it is for, why people should choose you, and what the user should do next: message you, book, buy, request a quote, or schedule a meeting.",
      ),

      paragraph(
        "También debería estar adaptada a celular, cargar rápido, tener textos claros, botones visibles, información de contacto, diseño coherente con la marca y una estructura preparada para que Google pueda entender el contenido.",
        "It should also be mobile-friendly, load fast, have clear copy, visible buttons, contact information, design aligned with the brand, and a structure prepared so Google can understand the content.",
      ),

      heading(
        "Errores comunes al contratar una web para tu negocio",
        "Common mistakes when hiring a website for your business",
      ),

      subheading("Elegir solo por precio", "Choosing only by price"),
      paragraph(
        "El presupuesto importa, pero una web demasiado barata puede salir cara si después no representa bien tu negocio, no carga rápido, no se entiende o no te permite crecer.",
        "Budget matters, but a very cheap website can become expensive if it does not represent your business well, does not load fast, is hard to understand, or does not allow you to grow.",
      ),

      subheading(
        "Pedir una web sin definir el objetivo",
        "Asking for a website without defining the goal",
      ),
      paragraph(
        "Si no está claro qué tiene que lograr la web, es muy difícil tomar buenas decisiones de diseño, contenido y funcionalidad. Una web para conseguir consultas no se piensa igual que una web para vender online.",
        "If it is not clear what the website needs to achieve, it is very hard to make good design, content, and functionality decisions. A website to get inquiries is not planned the same way as a website to sell online.",
      ),

      subheading(
        "Copiar una web de referencia sin adaptar la estrategia",
        "Copying a reference website without adapting the strategy",
      ),
      paragraph(
        "Las referencias sirven, pero tu web tiene que responder a tu negocio, tu público, tu oferta y tu forma de vender. Copiar una estética sin entender el fondo suele generar sitios lindos pero poco útiles.",
        "References are useful, but your website needs to respond to your business, your audience, your offer, and your way of selling. Copying an aesthetic without understanding the strategy often creates pretty but not very useful websites.",
      ),

      subheading("No pensar en el contenido", "Not thinking about content"),
      paragraph(
        "Muchas webs fallan no por el diseño, sino porque no explican bien. Los textos tienen que ser claros, concretos y orientados a responder las dudas reales de tus clientes.",
        "Many websites fail not because of design, but because they do not explain well. The copy needs to be clear, specific, and focused on answering your customers’ real questions.",
      ),

      heading("Entonces, ¿por dónde empezar?", "So, where should you start?"),
      paragraph(
        "Antes de pedir una web, hacete estas preguntas: qué vendés, a quién le vendés, qué dudas tiene esa persona antes de comprar, cómo querés que te contacte y qué información necesita ver para confiar en tu negocio.",
        "Before asking for a website, ask yourself these questions: what do you sell, who do you sell to, what doubts does that person have before buying, how do you want them to contact you, and what information do they need to see to trust your business.",
      ),
      paragraph(
        "Con esas respuestas, es mucho más fácil definir si necesitás una landing page, una web institucional, un catálogo virtual, un ecommerce o una solución más personalizada.",
        "With those answers, it is much easier to define whether you need a landing page, an institutional website, a virtual catalog, ecommerce, or a more custom solution.",
      ),
      quote(
        "La web correcta no es la más grande ni la más cara. Es la que mejor acompaña el momento actual de tu negocio.",
        "The right website is not the biggest or the most expensive. It is the one that best supports your business’s current stage.",
      ),

      heading(
        "En Synttek podemos ayudarte a definir la web correcta",
        "At Synttek, we can help you define the right website",
      ),
      paragraph(
        "En Synttek diseñamos y desarrollamos páginas web para negocios que quieren verse más profesionales, ordenar su presencia digital y convertir mejor sus visitas en consultas, reservas o ventas.",
        "At Synttek, we design and develop websites for businesses that want to look more professional, organize their digital presence, and better convert visits into inquiries, bookings, or sales.",
      ),
      paragraph(
        "Podemos ayudarte a pensar la solución adecuada según tu etapa: una web simple, una landing page, un catálogo virtual, un ecommerce, una web institucional o una plataforma más completa con panel de administración.",
        "We can help you think through the right solution depending on your stage: a simple website, a landing page, a virtual catalog, ecommerce, an institutional website, or a more complete platform with an admin panel.",
      ),
      callout(
        "Próximo paso",
        "Next step",
        "Contanos qué necesitás para tu negocio",
        "Tell us what your business needs",
        "Si estás pensando “necesito una web para mi negocio”, escribinos. Te ayudamos a entender qué tipo de página te conviene, qué debería incluir y cuál es la mejor forma de empezar.",
        "If you are thinking “I need a website for my business”, message us. We help you understand what type of website makes sense, what it should include, and the best way to start.",
      ),
    ],
  },
  {
    slug: "diseno-para-redes-sociales",
    category: "Diseño",
    title: localizedText(
      "Diseño para redes sociales: cómo hacer que tu marca se vea más profesional",
      "Social media design: how to make your brand look more professional",
    ),
    titleAccent: localizedText("redes sociales", "social media"),
    excerpt: localizedText(
      "El diseño para redes sociales no se trata solo de hacer publicaciones lindas. Se trata de construir una presencia visual clara, coherente y profesional que ayude a tu marca a comunicar mejor.",
      "Social media design is not just about making nice posts. It is about building a clear, consistent, and professional visual presence that helps your brand communicate better.",
    ),
    dek: localizedText(
      "Placas, historias, carruseles, portadas y piezas visuales pueden cambiar por completo la percepción de una marca. En esta guía te contamos qué incluye el diseño para redes sociales, cuándo conviene contratarlo y cómo usarlo estratégicamente.",
      "Posts, stories, carousels, covers, and visual pieces can completely change how a brand is perceived. In this guide, we explain what social media design includes, when it makes sense to hire it, and how to use it strategically.",
    ),
    image: diseñoRedes,
    author: "antto",
    date: "2026-07-06",
    readingMinutes: 7,
    featured: false,
    tags: [
      localizedText("Diseño", "Design"),
      localizedText("Redes Sociales", "Social Media"),
      localizedText("Branding", "Branding"),
      localizedText("Marketing Digital", "Digital Marketing"),
    ],
    body: [
      paragraph(
        "Cuando un negocio empieza a tomarse en serio su presencia digital, una de las primeras necesidades que aparece es simple: mejorar cómo se ve en redes sociales.",
        "When a business starts taking its digital presence seriously, one of the first needs that appears is simple: improving how it looks on social media.",
      ),
      paragraph(
        "Instagram, Facebook, LinkedIn o TikTok no son solo canales para publicar contenido. También funcionan como una vidriera digital. Muchas personas conocen una marca por primera vez a través de una publicación, una historia, un reel o una portada destacada.",
        "Instagram, Facebook, LinkedIn, or TikTok are not just channels for posting content. They also work as a digital storefront. Many people discover a brand for the first time through a post, a story, a reel, or a highlight cover.",
      ),
      callout(
        "Respuesta rápida",
        "Quick answer",
        "El diseño para redes sociales ayuda a que tu marca se vea más clara, profesional y confiable",
        "Social media design helps your brand look clearer, more professional, and more trustworthy",
        "No se trata solo de decorar publicaciones. Un buen diseño ordena la comunicación, mejora la percepción de la marca y hace que cada pieza visual tenga un objetivo: informar, vender, educar, generar confianza o llevar al usuario al siguiente paso.",
        "It is not just about decorating posts. Good design organizes communication, improves brand perception, and makes every visual piece have a goal: inform, sell, educate, build trust, or move the user to the next step.",
      ),

      heading(
        "Qué es el diseño para redes sociales",
        "What social media design is",
      ),
      paragraph(
        "El diseño para redes sociales es la creación de piezas visuales pensadas para comunicar una marca en plataformas digitales. Puede incluir placas para el feed, historias, carruseles, portadas de reels, anuncios, banners, miniaturas, plantillas y contenido gráfico para campañas.",
        "Social media design is the creation of visual pieces designed to communicate a brand on digital platforms. It can include feed posts, stories, carousels, reel covers, ads, banners, thumbnails, templates, and graphic content for campaigns.",
      ),
      paragraph(
        "Pero el diseño no debería empezar en la herramienta. Antes de abrir Canva, Figma, Photoshop o Illustrator, hay una pregunta más importante: qué necesita comunicar la marca y qué acción queremos que haga la persona que ve esa pieza.",
        "But design should not start in the tool. Before opening Canva, Figma, Photoshop, or Illustrator, there is a more important question: what does the brand need to communicate and what action do we want the person seeing that piece to take.",
      ),
      quote(
        "Una publicación linda puede llamar la atención. Una publicación bien pensada puede construir confianza y generar una acción.",
        "A nice post can catch attention. A well-planned post can build trust and generate action.",
      ),

      heading(
        "Por qué tu negocio necesita una identidad visual coherente en redes",
        "Why your business needs a consistent visual identity on social media",
      ),
      paragraph(
        "Una marca que publica con estilos, colores, tipografías y mensajes diferentes todo el tiempo puede verse improvisada, aunque el producto o servicio sea bueno. La falta de coherencia visual hace que sea más difícil recordar la marca y entender qué ofrece.",
        "A brand that posts with different styles, colors, fonts, and messages all the time can look improvised, even if the product or service is good. Lack of visual consistency makes it harder to remember the brand and understand what it offers.",
      ),
      paragraph(
        "En cambio, cuando las piezas visuales siguen una misma línea estética, la marca empieza a sentirse más sólida. El usuario reconoce el contenido más rápido, percibe más profesionalismo y entiende mejor el mensaje.",
        "On the other hand, when visual pieces follow the same aesthetic line, the brand starts feeling stronger. The user recognizes the content faster, perceives more professionalism, and understands the message better.",
      ),
      callout(
        "Clave estratégica",
        "Strategic key",
        "El diseño no reemplaza al contenido, lo potencia",
        "Design does not replace content, it enhances it",
        "Un buen diseño ayuda a que una idea se entienda mejor. Ordena la información, jerarquiza lo importante y hace que el mensaje sea más fácil de consumir.",
        "Good design helps an idea be understood better. It organizes information, gives hierarchy to what matters, and makes the message easier to consume.",
      ),

      heading(
        "Qué piezas incluye el diseño para redes sociales",
        "What pieces social media design includes",
      ),
      paragraph(
        "El diseño para redes puede adaptarse a distintos objetivos: vender, educar, informar, posicionar, anunciar una promoción o simplemente mantener una presencia activa y profesional.",
        "Social media design can adapt to different goals: selling, educating, informing, positioning, announcing a promotion, or simply maintaining an active and professional presence.",
      ),

      callout(
        "Feed",
        "Feed",
        "Placas para publicaciones",
        "Feed posts",
        "Son piezas visuales pensadas para comunicar una idea concreta: un servicio, una promoción, una frase, un beneficio, una novedad o un mensaje institucional.",
        "These are visual pieces designed to communicate a specific idea: a service, a promotion, a phrase, a benefit, news, or an institutional message.",
      ),
      callout(
        "Historias",
        "Stories",
        "Diseños rápidos y accionables",
        "Fast and actionable designs",
        "Las historias funcionan muy bien para comunicar novedades, promociones, recordatorios, encuestas, lanzamientos o mensajes más directos con llamados a la acción.",
        "Stories work very well for communicating updates, promotions, reminders, polls, launches, or more direct messages with calls to action.",
      ),
      callout(
        "Carruseles",
        "Carousels",
        "Contenido educativo o explicativo",
        "Educational or explanatory content",
        "Los carruseles permiten desarrollar una idea en varias pantallas. Son ideales para explicar procesos, mostrar beneficios, educar al público o presentar una propuesta con más profundidad.",
        "Carousels allow an idea to be developed across multiple slides. They are ideal for explaining processes, showing benefits, educating the audience, or presenting an offer in more depth.",
      ),
      callout(
        "Reels",
        "Reels",
        "Portadas y recursos visuales",
        "Covers and visual assets",
        "Aunque el reel sea video, el diseño sigue siendo importante: portada, textos en pantalla, separadores, marcos, placas de cierre y recursos que ayuden a reforzar la identidad de la marca.",
        "Even if a reel is video, design is still important: cover, on-screen text, separators, frames, closing slides, and assets that help reinforce the brand identity.",
      ),
      callout(
        "Plantillas",
        "Templates",
        "Sistema visual reutilizable",
        "Reusable visual system",
        "Las plantillas ayudan a mantener coherencia y velocidad. Sirven para que una marca pueda publicar con una estética consistente sin diseñar todo desde cero cada vez.",
        "Templates help maintain consistency and speed. They allow a brand to publish with a consistent aesthetic without designing everything from scratch each time.",
      ),

      heading(
        "Diseño para redes sociales no es solo hacer posts lindos",
        "Social media design is not just making pretty posts",
      ),
      paragraph(
        "Uno de los errores más comunes es pensar que el diseño para redes sociales consiste únicamente en hacer publicaciones atractivas. La estética importa, pero si la pieza no comunica bien, no se entiende o no tiene una intención clara, el diseño queda incompleto.",
        "One of the most common mistakes is thinking that social media design is only about making attractive posts. Aesthetics matter, but if the piece does not communicate well, is not understood, or has no clear intention, the design is incomplete.",
      ),
      paragraph(
        "Una buena pieza para redes debería responder al menos cuatro preguntas: qué se quiere comunicar, a quién está dirigido, qué debe entender la persona y qué acción debería hacer después.",
        "A good social media piece should answer at least four questions: what needs to be communicated, who it is for, what the person should understand, and what action they should take next.",
      ),

      subheading(
        "Diseño con objetivo comercial",
        "Design with a commercial goal",
      ),
      paragraph(
        "Si el objetivo es vender, el diseño tiene que destacar el producto, el beneficio, la promoción o el llamado a la acción. No alcanza con que se vea bien: tiene que ayudar a que la persona avance.",
        "If the goal is to sell, the design needs to highlight the product, benefit, promotion, or call to action. Looking good is not enough: it needs to help the person move forward.",
      ),

      subheading(
        "Diseño con objetivo educativo",
        "Design with an educational goal",
      ),
      paragraph(
        "Si el objetivo es educar, la pieza necesita jerarquía, ritmo y claridad. Los carruseles, por ejemplo, funcionan mejor cuando cada pantalla tiene una idea concreta y guía al usuario paso a paso.",
        "If the goal is to educate, the piece needs hierarchy, rhythm, and clarity. Carousels, for example, work better when each slide has one specific idea and guides the user step by step.",
      ),

      subheading("Diseño con objetivo de marca", "Design with a brand goal"),
      paragraph(
        "Si el objetivo es posicionar la marca, la coherencia visual se vuelve fundamental. Colores, tipografías, tono, composición y estilo deberían construir una sensación reconocible en el tiempo.",
        "If the goal is to position the brand, visual consistency becomes essential. Colors, fonts, tone, composition, and style should build a recognizable feeling over time.",
      ),

      heading(
        "Cuándo conviene contratar diseño para redes sociales",
        "When it makes sense to hire social media design",
      ),
      paragraph(
        "No todos los negocios necesitan publicar todos los días, pero casi todos necesitan verse profesionales cuando alguien entra a su perfil. Si tus redes son el primer punto de contacto con potenciales clientes, el diseño deja de ser un detalle.",
        "Not every business needs to post every day, but almost every business needs to look professional when someone enters its profile. If your social media is the first point of contact with potential customers, design stops being a detail.",
      ),
      callout(
        "Señales claras",
        "Clear signs",
        "Tu marca necesita mejorar su diseño en redes si...",
        "Your brand needs to improve its social media design if...",
        "Tus publicaciones se ven desordenadas, no hay una línea visual clara, cada pieza parece de una marca distinta, te cuesta comunicar promociones o sentís que tu perfil no transmite el nivel real de tu negocio.",
        "Your posts look messy, there is no clear visual line, each piece looks like it belongs to a different brand, it is hard to communicate promotions, or you feel your profile does not reflect the real level of your business.",
      ),
      paragraph(
        "También conviene contratar diseño cuando estás por lanzar un nuevo servicio, ordenar la comunicación mensual, profesionalizar tu marca, crear campañas o preparar contenido para vender mejor.",
        "It also makes sense to hire design when you are about to launch a new service, organize monthly communication, professionalize your brand, create campaigns, or prepare content to sell better.",
      ),

      heading(
        "Qué debería tener un buen diseño para redes sociales",
        "What good social media design should have",
      ),
      paragraph(
        "Un buen diseño para redes no depende solo de una imagen atractiva. Necesita criterio visual, jerarquía, consistencia y adaptación al formato donde se va a publicar.",
        "Good social media design does not depend only on an attractive image. It needs visual judgment, hierarchy, consistency, and adaptation to the format where it will be published.",
      ),

      subheading("Identidad visual clara", "Clear visual identity"),
      paragraph(
        "La marca debería tener colores, tipografías, estilos gráficos y criterios de composición definidos. Esto permite que cada publicación se sienta parte del mismo sistema.",
        "The brand should have defined colors, fonts, graphic styles, and composition criteria. This allows every post to feel part of the same system.",
      ),

      subheading("Jerarquía de información", "Information hierarchy"),
      paragraph(
        "No todo puede tener el mismo peso. Un buen diseño define qué se lee primero, qué acompaña y qué acción se espera del usuario.",
        "Not everything can have the same weight. Good design defines what is read first, what supports it, and what action is expected from the user.",
      ),

      subheading("Adaptación a cada formato", "Adaptation to each format"),
      paragraph(
        "Una historia no se diseña igual que una placa de feed, una portada de reel o un carrusel. Cada formato tiene tiempos de lectura, proporciones y comportamientos distintos.",
        "A story is not designed the same way as a feed post, a reel cover, or a carousel. Each format has different reading times, proportions, and behaviors.",
      ),

      subheading("Mensaje concreto", "Specific message"),
      paragraph(
        "Una pieza visual debería comunicar una idea principal. Cuando una publicación intenta decir demasiadas cosas al mismo tiempo, pierde fuerza y se vuelve difícil de entender.",
        "A visual piece should communicate one main idea. When a post tries to say too many things at the same time, it loses strength and becomes harder to understand.",
      ),

      heading(
        "Errores comunes en el diseño para redes sociales",
        "Common mistakes in social media design",
      ),

      subheading(
        "Usar demasiados estilos al mismo tiempo",
        "Using too many styles at the same time",
      ),
      paragraph(
        "Cambiar colores, tipografías, fondos y estilos en cada publicación puede hacer que el perfil se vea desordenado. La variedad es útil, pero necesita una base visual coherente.",
        "Changing colors, fonts, backgrounds, and styles in every post can make the profile look messy. Variety is useful, but it needs a consistent visual base.",
      ),

      subheading(
        "Poner demasiado texto en una sola pieza",
        "Putting too much text in one piece",
      ),
      paragraph(
        "Las redes se consumen rápido. Si el usuario tiene que esforzarse demasiado para entender una publicación, probablemente pase de largo. El diseño debería simplificar, no complicar.",
        "Social media is consumed quickly. If the user has to make too much effort to understand a post, they will probably skip it. Design should simplify, not complicate.",
      ),

      subheading("Diseñar sin estrategia", "Designing without strategy"),
      paragraph(
        "Publicar por publicar puede mantener activo un perfil, pero no necesariamente construye marca. El diseño funciona mejor cuando responde a una estrategia de comunicación.",
        "Posting just for the sake of posting can keep a profile active, but it does not necessarily build a brand. Design works better when it responds to a communication strategy.",
      ),

      subheading(
        "Copiar tendencias sin adaptarlas",
        "Copying trends without adapting them",
      ),
      paragraph(
        "Las tendencias pueden servir como referencia, pero no todas encajan con todas las marcas. Una estética viral puede llamar la atención, pero si no representa al negocio, puede generar una percepción equivocada.",
        "Trends can be useful as references, but not all of them fit every brand. A viral aesthetic can catch attention, but if it does not represent the business, it can create the wrong perception.",
      ),

      heading(
        "Cómo trabajamos el diseño para redes sociales en Synttek",
        "How we work on social media design at Synttek",
      ),
      paragraph(
        "En Synttek diseñamos piezas visuales para redes sociales con una mirada estratégica. No buscamos solo que una publicación se vea bien, sino que ayude a comunicar mejor lo que la marca ofrece.",
        "At Synttek, we design visual pieces for social media with a strategic perspective. We do not only aim for a post to look good, but for it to help communicate better what the brand offers.",
      ),
      paragraph(
        "Podemos diseñar placas, historias, carruseles, portadas de reels, plantillas y sistemas visuales para que tu marca tenga una presencia más prolija, atractiva y alineada con sus objetivos comerciales.",
        "We can design feed posts, stories, carousels, reel covers, templates, and visual systems so your brand has a cleaner, more attractive presence aligned with its commercial goals.",
      ),
      quote(
        "El objetivo no es llenar el feed. El objetivo es construir una presencia visual que haga que tu marca se entienda, se recuerde y se perciba mejor.",
        "The goal is not to fill the feed. The goal is to build a visual presence that makes your brand easier to understand, remember, and perceive.",
      ),

      heading(
        "Diseño para redes sociales: una inversión en percepción",
        "Social media design: an investment in perception",
      ),
      paragraph(
        "Cada publicación comunica algo, incluso cuando no está bien diseñada. Puede comunicar profesionalismo, claridad y confianza; o puede comunicar improvisación, desorden y falta de criterio.",
        "Every post communicates something, even when it is not well designed. It can communicate professionalism, clarity, and trust; or it can communicate improvisation, disorder, and lack of judgment.",
      ),
      paragraph(
        "Por eso, invertir en diseño para redes sociales no es solo invertir en estética. Es invertir en cómo las personas perciben tu marca antes de escribirte, pedir un presupuesto o comprar.",
        "That is why investing in social media design is not only investing in aesthetics. It is investing in how people perceive your brand before messaging you, asking for a quote, or buying.",
      ),
      callout(
        "Próximo paso",
        "Next step",
        "Mejorá la presencia visual de tu marca",
        "Improve your brand's visual presence",
        "Si sentís que tus redes no reflejan el nivel real de tu negocio, podemos ayudarte a crear una línea visual más profesional, clara y consistente.",
        "If you feel your social media does not reflect the real level of your business, we can help you create a more professional, clear, and consistent visual line.",
      ),
    ],
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

const localizeBlock = (block, locale) => {
  switch (block.type) {
    case "heading":
    case "subheading":
    case "paragraph":
      return { ...block, text: getLocalizedField(block.text, locale) };
    case "quote":
      return { ...block, text: getLocalizedField(block.text, locale) };
    case "code":
      return { ...block, code: getLocalizedField(block.code, locale) };
    case "callout":
      return {
        ...block,
        eyebrow: getLocalizedField(block.eyebrow, locale),
        title: getLocalizedField(block.title, locale),
        text: getLocalizedField(block.text, locale),
      };
    case "colorSwatches":
      return {
        ...block,
        items: block.items.map((item) => ({
          ...item,
          label: getLocalizedField(item.label, locale),
        })),
      };
    case "image":
      return {
        ...block,
        caption: block.caption
          ? getLocalizedField(block.caption, locale)
          : undefined,
        alt: block.alt ? getLocalizedField(block.alt, locale) : undefined,
      };
    default:
      return block;
  }
};

const localizePost = (post, locale = DEFAULT_LOCALE) => ({
  ...post,
  title: getLocalizedField(post.title, locale),
  titleAccent: post.titleAccent
    ? getLocalizedField(post.titleAccent, locale)
    : undefined,
  excerpt: getLocalizedField(post.excerpt, locale),
  dek: post.dek ? getLocalizedField(post.dek, locale) : undefined,
  tags: (post.tags || []).map((tag) => getLocalizedField(tag, locale)),
  authorRoleOverride: post.authorRoleOverride
    ? getLocalizedField(post.authorRoleOverride, locale)
    : undefined,
  body: (post.body || []).map((block) => localizeBlock(block, locale)),
  author: {
    key: post.author,
    name: AUTHORS[post.author].name,
    role: getLocalizedField(AUTHORS[post.author].role, locale),
    bio: getLocalizedField(AUTHORS[post.author].bio, locale),
    image: AUTHORS[post.author].image,
  },
});

export const blogPosts = postEntries;

export const getBlogPosts = (locale = DEFAULT_LOCALE) =>
  postEntries.map((post) => localizePost(post, locale));

export const getFeaturedBlogPost = (locale = DEFAULT_LOCALE) =>
  getBlogPosts(locale).find((post) => post.featured);

export const getBlogPostBySlug = (slug, locale = DEFAULT_LOCALE) => {
  const post = postEntries.find((entry) => entry.slug === slug);

  return post ? localizePost(post, locale) : undefined;
};

export const getRelatedBlogPosts = (
  slug,
  locale = DEFAULT_LOCALE,
  limit = 2,
) => {
  const all = getBlogPosts(locale);
  const current = all.find((post) => post.slug === slug);

  if (!current) {
    return [];
  }

  const sameCategory = all.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = all.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
};
