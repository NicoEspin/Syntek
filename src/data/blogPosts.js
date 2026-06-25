import card1 from "@/app/assets/card1.webp";
import card3 from "@/app/assets/card3.webp";
import threeD from "@/app/assets/3D.webp";
import nico from "@/app/assets/nico.webp";
import antto from "@/app/assets/antto.webp";
import preciosWebArgentina2026 from "@/app/assets/blog/precio-web.webp";

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
    slug: "activos-digitales",
    category: "Estrategia",
    title: localizedText(
      "No construimos sitios decorativos. Construimos activos digitales.",
      "We don't build decorative websites. We build digital assets.",
    ),
    titleAccent: localizedText("activos digitales", "digital assets"),
    excerpt: localizedText(
      "Un sitio lindo que no mueve a nadie es un gasto. Cómo pensamos cada proyecto como una inversión con retorno medible.",
      "A pretty site that moves no one is an expense. How we treat every project as an investment with measurable return.",
    ),
    dek: localizedText(
      "No alcanza con que se vea bien. Tiene que mover una métrica real — y eso cambia cómo lo construimos.",
      "Looking good isn't enough. It has to move a real metric — and that changes how we build it.",
    ),
    image: card1,
    author: "nico",
    date: "2026-06-12",
    readingMinutes: 6,
    featured: false,
    tags: [
      localizedText("Estrategia", "Strategy"),
      localizedText("Producto", "Product"),
      localizedText("Conversión", "Conversion"),
    ],
    body: [
      heading("Qué es un activo digital", "What a digital asset actually is"),
      paragraph(
        "Un sitio decorativo se paga una vez y empieza a perder valor desde el día uno. Un activo digital se paga una vez y sigue generando retorno: leads, ventas, posicionamiento, ahorro de tiempo operativo.",
        "A decorative site gets paid once and starts losing value on day one. A digital asset gets paid once and keeps generating return: leads, sales, positioning, saved operational time.",
      ),
      paragraph(
        "La diferencia no está en el presupuesto — está en la pregunta que hacemos antes de diseñar la primera pantalla: ¿qué métrica de negocio se mueve con esto?",
        "The difference isn't budget — it's the question we ask before designing the first screen: which business metric does this move?",
      ),
      quote(
        "Si no podés nombrar la métrica que tu sitio va a mover, todavía no estás listo para diseñarlo.",
        "If you can't name the metric your site is going to move, you're not ready to design it yet.",
      ),
      heading("Cómo lo medimos", "How we measure it"),
      paragraph(
        "Cada proyecto sale con una hipótesis de retorno: más leads, menor tiempo de carga, mayor conversión, menos tickets de soporte. La revisamos a los 30 y 90 días con datos reales, no con sensaciones.",
        "Every project ships with a return hypothesis: more leads, lower load time, higher conversion, fewer support tickets. We review it at 30 and 90 days with real data, not gut feeling.",
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
    slug: "performance",
    category: "Performance",
    title: localizedText(
      "Performance no es un lujo: 0.8s o nada.",
      "Performance isn't a luxury: 0.8s or nothing.",
    ),
    excerpt: localizedText(
      "Por qué la velocidad de carga es una decisión de negocio antes que técnica, y cómo la medimos en cada entrega.",
      "Why load speed is a business decision before a technical one, and how we measure it on every delivery.",
    ),
    dek: localizedText(
      "0.8 segundos no es una cifra de vanidad técnica. Es la diferencia entre un visitante que se queda y uno que rebota.",
      "0.8 seconds isn't a vanity technical metric. It's the difference between a visitor who stays and one who bounces.",
    ),
    image: card1,
    author: "antto",
    date: "2026-05-19",
    readingMinutes: 7,
    featured: false,
    tags: [
      localizedText("Performance", "Performance"),
      localizedText("Core Web Vitals", "Core Web Vitals"),
      localizedText("Next.js", "Next.js"),
    ],
    body: [
      paragraph(
        "Cada 100ms de demora le cuesta conversión a cualquier sitio, sin excepción. No es una opinión — es el dato que repiten todos los estudios de Core Web Vitals desde 2021.",
        "Every 100ms of delay costs any site conversion, no exceptions. That's not an opinion — it's the number every Core Web Vitals study has repeated since 2021.",
      ),
      heading("Por qué 0.8s es el límite", "Why 0.8s is the line"),
      paragraph(
        'Por encima de ese umbral, la percepción de "rápido" se rompe. El usuario no mide milisegundos — siente fricción, y la fricción se traduce directo en abandono.',
        'Above that threshold, the perception of "fast" breaks down. Users don\'t measure milliseconds — they feel friction, and friction translates directly into abandonment.',
      ),
      quote(
        "La velocidad no es una característica técnica. Es la primera promesa que tu sitio cumple o rompe.",
        "Speed isn't a technical feature. It's the first promise your site keeps or breaks.",
      ),
      heading("Cómo lo logramos", "How we get there"),
      paragraph(
        "Imágenes optimizadas y servidas en el formato correcto, JavaScript que carga solo lo que la pantalla necesita, y cero dependencias que no podamos justificar. Cada decisión técnica se mide contra ese presupuesto de 0.8s.",
        "Optimized images served in the right format, JavaScript that only loads what the screen needs, and zero dependencies we can't justify. Every technical decision gets measured against that 0.8s budget.",
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
    slug: "nextjs-en-produccion",
    category: "Desarrollo",
    title: localizedText(
      "Next.js en producción: decisiones que no se pagan caras en 18 meses.",
      "Next.js in production: decisions that don't cost you in 18 months.",
    ),
    excerpt: localizedText(
      "Arquitecturas limpias y código mantenible. Las elecciones técnicas que tomamos para que el proyecto crezca sin romperse.",
      "Clean architectures and maintainable code. The technical choices we make so the project grows without breaking.",
    ),
    dek: localizedText(
      "El código que se escribe rápido hoy es el que se reescribe caro en 18 meses. La arquitectura es la única deuda que cobra interés.",
      "Code written fast today is code rewritten expensively in 18 months. Architecture is the only debt that charges interest.",
    ),
    image: card3,
    author: "antto",
    date: "2026-05-02",
    readingMinutes: 9,
    featured: false,
    tags: [
      localizedText("Next.js", "Next.js"),
      localizedText("Arquitectura", "Architecture"),
      localizedText("Desarrollo", "Development"),
    ],
    body: [
      heading(
        "Decisiones que importan en el día 1",
        "Decisions that matter on day one",
      ),
      paragraph(
        "Server Components por default, Client Components solo donde hace falta interactividad real. Esa única regla evita la mitad de los problemas de performance que vemos en proyectos migrados desde Create React App.",
        "Server Components by default, Client Components only where real interactivity is needed. That single rule avoids half the performance problems we see in projects migrated from Create React App.",
      ),
      paragraph(
        "Datos tipados desde la fuente, no inferidos a mitad de camino. Si el dato cambia de forma en el backend, queremos que el build falle — no que el usuario vea una pantalla en blanco en producción.",
        "Typed data from the source, not inferred halfway through. If the data shape changes on the backend, we want the build to fail — not the user to see a blank screen in production.",
      ),
      quote(
        "La arquitectura correcta no se nota el primer mes. Se nota el mes 18, cuando el resto sigue creciendo sin romperse.",
        "The right architecture doesn't show in month one. It shows in month 18, when everything else keeps growing without breaking.",
      ),
      heading("Lo que evitamos a propósito", "What we avoid on purpose"),
      paragraph(
        "Dependencias que resuelven un problema que no tenemos, abstracciones tempranas para una escala que todavía no llegó, y estado global donde alcanza con props. Cada capa que no se justifica hoy es una capa que alguien va a tener que entender mañana.",
        "Dependencies that solve a problem we don't have, early abstractions for a scale that hasn't arrived yet, and global state where props are enough. Every layer that isn't justified today is a layer someone will have to understand tomorrow.",
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
