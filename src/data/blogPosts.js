import antto from "@/app/assets/antto.webp";
import automatizarWhatsapp from "@/app/assets/blog/como-automatizar-consultas-whatsapp-negocio.webp";
import diseñoRedes from "@/app/assets/blog/diseño-synttek.webp";
import paginaNegocio from "@/app/assets/blog/pagina-negocio.webp";
import preciosWebArgentina2026 from "@/app/assets/blog/precio-web.webp";
import nico from "@/app/assets/nico.webp";
import agenteIA from "@/app/assets/blog/agente-de-ia.webp";
import landingPage from "@/app/assets/blog/que-es-una-landing-page.webp";

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
  {
    slug: "como-automatizar-consultas-whatsapp-negocio",
    category: "Automatización",
    title: localizedText(
      "Cómo automatizar las consultas de WhatsApp de tu negocio",
      "How to automate your business's WhatsApp inquiries",
    ),
    titleAccent: localizedText("consultas de WhatsApp", "WhatsApp inquiries"),
    excerpt: localizedText(
      "Descubrí cómo automatizar las consultas de WhatsApp para responder más rápido, clasificar oportunidades, registrar datos y derivar cada conversación al lugar correcto.",
      "Discover how to automate your business's WhatsApp inquiries to respond faster, classify opportunities, log data, and route every conversation to the right place.",
    ),
    dek: localizedText(
      "Automatizar WhatsApp no es instalar un chatbot que contesta cualquier cosa. Es ordenar un sistema completo que recibe, interpreta, clasifica y responde consultas, y que sabe cuándo pasarle la conversación a una persona.",
      "Automating WhatsApp is not about installing a chatbot that answers anything. It is about organizing a full system that receives, interprets, classifies, and answers inquiries, and knows when to hand the conversation to a person.",
    ),
    image: automatizarWhatsapp,
    author: "antto",
    date: "2026-08-10",
    readingMinutes: 9,
    featured: false,
    tags: [
      localizedText("Automatización", "Automation"),
      localizedText("WhatsApp Business", "WhatsApp Business"),
      localizedText("Atención al Cliente", "Customer Service"),
      localizedText("Pymes", "SMBs"),
    ],
    body: [
      paragraph(
        "WhatsApp suele convertirse en uno de los canales comerciales más importantes de un negocio, incluso sin que nadie lo haya planeado así. Ahí llegan las consultas por precios, las dudas sobre horarios, los pedidos de disponibilidad, las reservas y los presupuestos. El problema aparece cuando ese canal crece más rápido que la capacidad de respuesta: los mensajes se acumulan, las respuestas se demoran y algunas consultas terminan perdiéndose entre notificaciones.",
        "WhatsApp often becomes one of a business's most important sales channels, even if nobody planned it that way. That is where price questions arrive, along with doubts about hours, requests for availability, bookings, and quote requests. The problem shows up when that channel grows faster than the team's ability to respond: messages pile up, replies get delayed, and some inquiries end up lost among notifications.",
      ),
      paragraph(
        "Automatizar las consultas de WhatsApp no significa reemplazar esa conversación por un robot que contesta cualquier cosa. Significa ordenar la atención: que las preguntas frecuentes se resuelvan solas, que la información se registre en un solo lugar y que una persona del equipo intervenga exactamente cuando hace falta, con todo el contexto ya armado.",
        "Automating WhatsApp inquiries does not mean replacing that conversation with a bot that answers anything. It means organizing the way inquiries are handled: letting frequent questions resolve themselves, keeping information logged in one place, and having a team member step in exactly when needed, with the context already built.",
      ),
      callout(
        "Respuesta rápida",
        "Quick answer",
        "Automatizar WhatsApp es organizar un sistema, no instalar un chatbot",
        "Automating WhatsApp means organizing a system, not installing a chatbot",
        "Automatizar las consultas de WhatsApp implica recibir el mensaje, interpretar qué necesita esa persona, buscar información en las herramientas del negocio, responder o ejecutar una acción, registrar lo que pasó y derivar la conversación a alguien del equipo cuando la situación lo requiere.",
        "Automating WhatsApp inquiries means receiving the message, understanding what the person needs, checking the business's own tools for information, answering or executing an action, logging what happened, and handing the conversation to a team member when the situation calls for it.",
      ),

      heading(
        "Qué significa automatizar las consultas de WhatsApp",
        "What it means to automate WhatsApp inquiries",
      ),
      paragraph(
        "Automatizar las consultas de WhatsApp puede incluir varias tareas encadenadas: recibir el mensaje, identificar qué intención tiene la persona que escribe, pedir los datos que falten para poder responder, consultar información actualizada del negocio, contestar una pregunta frecuente, clasificar esa conversación como una oportunidad concreta, dejar un registro de lo que ocurrió, ejecutar una acción puntual como agendar un turno y, si corresponde, pasar la conversación a un integrante del equipo.",
        "Automating WhatsApp inquiries can include several linked tasks: receiving the message, identifying what the person writing it needs, asking for any missing details, checking up-to-date information from the business, answering a frequent question, classifying that conversation as a real opportunity, logging what happened, executing a specific action such as booking an appointment and, when needed, handing the conversation over to a team member.",
      ),
      paragraph(
        "Ahí está la diferencia principal con una respuesta automática básica. Un mensaje predefinido que contesta siempre lo mismo puede servir para un aviso de horario fuera de atención, pero no resuelve una consulta real. Un sistema conectado con las herramientas del negocio, en cambio, puede leer un calendario, consultar un catálogo, completar un formulario o avisar a alguien del equipo, porque no vive aislado: forma parte de un proceso más amplio.",
        "That is the main difference from a basic automated reply. A canned message that always says the same thing can work fine for an out-of-hours notice, but it does not resolve a real inquiry. A system connected to the business's own tools, on the other hand, can read a calendar, check a catalog, fill out a form, or notify someone on the team, because it is not isolated — it is part of a larger process.",
      ),

      heading(
        "Qué consultas se pueden automatizar",
        "Which inquiries can be automated",
      ),
      paragraph(
        "No todas las consultas requieren el mismo tratamiento, pero muchas de las que llegan todos los días a WhatsApp se repiten con una lógica bastante predecible. Preguntas sobre precios y servicios, horarios y ubicación, disponibilidad de productos, reservas y turnos, estado de un pedido, solicitudes de presupuesto o dudas frecuentes suelen tener una respuesta clara que no necesita intervención humana cada vez. También es posible automatizar la primera atención fuera del horario comercial, para que ninguna consulta quede sin una respuesta inicial, y automatizar la captura y clasificación de potenciales clientes, para que el equipo comercial reciba la información ya ordenada.",
        "Not every inquiry needs the same treatment, but many of the ones that arrive on WhatsApp every day follow a fairly predictable pattern. Questions about prices and services, hours and location, product availability, bookings and appointments, order status, quote requests, or frequent questions usually have a clear answer that does not need a person involved every time. It is also possible to automate the first response outside business hours, so no inquiry goes without an initial reply, and to automate the capture and classification of potential customers, so the sales team receives the information already organized.",
      ),
      paragraph(
        "Lo que no conviene automatizar por completo son las conversaciones sensibles, excepcionales o que requieren negociación. Un reclamo, una situación puntual o una consulta compleja necesitan la mirada de una persona. Por eso una buena automatización no intenta resolver todo: identifica qué puede resolver sola y qué tiene que pasar a manos de alguien del equipo.",
        "What should not be fully automated are sensitive, exceptional, or negotiation-heavy conversations. A complaint, a specific situation, or a complex request needs a person's judgment. That is why good automation does not try to solve everything: it identifies what it can resolve on its own and what needs to move into a team member's hands.",
      ),

      heading(
        "Cómo funciona una automatización de WhatsApp",
        "How a WhatsApp automation works",
      ),
      paragraph(
        "Aunque cada negocio tiene su propia lógica, el recorrido básico de una automatización de WhatsApp suele seguir una secuencia parecida. El cliente envía una consulta. El sistema interpreta qué necesita, ya sea con reglas predefinidas o con un modelo de lenguaje que reconoce la intención del mensaje. Si falta información, la solicita de forma ordenada, sin pedir todo de una vez. Cuando corresponde, consulta datos en sistemas externos: un calendario, un catálogo, una base de precios o un CRM. Con esa información responde la consulta o ejecuta una acción concreta, como reservar un horario o generar un pedido. Después registra el resultado de la conversación y, si la situación lo requiere, deriva el caso a una persona con todo el contexto ya reunido.",
        "Even though every business has its own logic, the basic path of a WhatsApp automation usually follows a similar sequence. The customer sends an inquiry. The system interprets what they need, either through predefined rules or a language model that recognizes the message's intent. If information is missing, it asks for it in an orderly way, without requesting everything at once. When needed, it checks external systems: a calendar, a catalog, a pricing database, or a CRM. With that information, it answers the inquiry or executes a specific action, such as booking a time slot or generating an order. It then logs the outcome and, if the situation calls for it, hands the case to a person with the context already gathered.",
      ),
      paragraph(
        "Un ejemplo simple ayuda a verlo completo: alguien escribe preguntando si hay disponibilidad para un servicio el próximo sábado. El sistema identifica la intención, pregunta el horario preferido, consulta la agenda, confirma un turno disponible, informa el precio, registra la reserva y avisa al negocio que hay un nuevo turno confirmado. Si la persona pide una condición especial que el sistema no puede resolver, la conversación pasa directamente a alguien del equipo, que ya tiene todos los datos necesarios para continuar sin pedirle de nuevo lo mismo al cliente.",
        "A simple example helps show the whole picture: someone writes asking whether a service is available next Saturday. The system identifies the intent, asks for a preferred time, checks the calendar, confirms an available slot, shares the price, logs the booking, and notifies the business that a new appointment was confirmed. If the person asks for a special condition the system cannot resolve, the conversation moves directly to a team member, who already has everything needed to continue without asking the customer to repeat themselves.",
      ),

      heading(
        "Qué herramientas puede conectar el sistema",
        "Which tools the system can connect to",
      ),
      paragraph(
        "Una automatización de WhatsApp no funciona aislada: su valor está justamente en conectarse con las herramientas que el negocio ya usa. Puede integrarse con la WhatsApp Business Platform para gestionar los mensajes, con un CRM para ordenar leads y seguimiento comercial, con una agenda o calendario para reservas y turnos, con formularios para completar datos, con un ecommerce o un sistema de reservas para procesar pedidos, con una base de datos o planillas para consultar y actualizar información, con email para enviar confirmaciones, y con un panel administrativo para que el equipo supervise lo que va pasando. Herramientas como n8n suelen usarse para conectar estos sistemas entre sí sin depender de desarrollos a medida para cada integración.",
        "A WhatsApp automation does not work in isolation — its value comes precisely from connecting to the tools a business already uses. It can integrate with the WhatsApp Business Platform to manage messages, a CRM to organize leads and follow-up, a calendar for bookings and appointments, forms to collect data, an ecommerce or booking system to process orders, a database or spreadsheets to check and update information, email to send confirmations, and an admin panel so the team can oversee what is happening. Tools like n8n are often used to connect these systems without needing custom development for every integration.",
      ),
      paragraph(
        "No existe una combinación de herramientas que funcione igual para todos los negocios. La arquitectura correcta depende del proceso real que ya tiene cada empresa: qué sistemas usa, cómo se organiza el equipo y qué información necesita quedar registrada. Por eso, antes de elegir qué conectar, conviene entender bien cómo se maneja hoy la atención.",
        "There is no single combination of tools that works the same way for every business. The right architecture depends on the real process each company already has: which systems it uses, how the team is organized, and what information needs to be logged. That is why, before choosing what to connect, it is worth understanding how inquiries are actually handled today.",
      ),

      heading(
        "Automatización tradicional o inteligencia artificial",
        "Traditional automation or artificial intelligence",
      ),
      subheading(
        "Reglas y menús para procesos predecibles",
        "Rules and menus for predictable processes",
      ),
      paragraph(
        "Cuando las consultas siguen un patrón claro y repetible, un sistema basado en reglas y menús de opciones suele ser suficiente. Es predecible, fácil de mantener y funciona bien para procesos como reservar un turno, consultar un horario o elegir entre un conjunto cerrado de opciones.",
        "When inquiries follow a clear, repeatable pattern, a system based on rules and option menus is usually enough. It is predictable, easy to maintain, and works well for processes like booking a slot, checking a schedule, or choosing from a closed set of options.",
      ),
      subheading(
        "Inteligencia artificial para interpretar lenguaje más flexible",
        "Artificial intelligence to interpret more flexible language",
      ),
      paragraph(
        "Cuando las consultas llegan escritas de formas muy distintas, con errores, abreviaciones o preguntas poco estructuradas, un modelo de lenguaje puede interpretar mejor la intención real del mensaje. Ahí es donde la automatización con inteligencia artificial aporta más, porque entiende variaciones que un menú fijo no puede cubrir.",
        "When inquiries arrive written in many different ways, with typos, abbreviations, or loosely structured questions, a language model can better interpret the message's real intent. This is where AI-driven automation adds the most value, since it understands variations a fixed menu cannot cover.",
      ),
      subheading(
        "Un enfoque híbrido, la opción más frecuente",
        "A hybrid approach, the most common option",
      ),
      paragraph(
        "En la práctica, la mayoría de las automatizaciones que funcionan bien combinan ambos enfoques: reglas claras para lo que es predecible, e inteligencia artificial para interpretar lo que no lo es tanto. Usar inteligencia artificial no significa dejar que el sistema responda sin control: siempre conviene definir límites, validaciones y un criterio claro de cuándo derivar la conversación a una persona.",
        "In practice, most automations that work well combine both approaches: clear rules for what is predictable, and artificial intelligence to interpret what is not. Using artificial intelligence does not mean letting the system respond without control: it is always worth defining limits, validations, and a clear criterion for when to hand the conversation to a person.",
      ),

      heading(
        "Cuándo derivar la conversación a una persona",
        "When to hand the conversation to a person",
      ),
      paragraph(
        "Ninguna automatización debería intentar resolver el cien por ciento de las conversaciones. Hay situaciones que necesitan intervención humana: un reclamo, una negociación, un presupuesto complejo, información ambigua que el sistema no puede interpretar con seguridad, un cliente prioritario, una excepción fuera de lo habitual o, simplemente, alguien que pide explícitamente hablar con una persona. También conviene derivar cuando la confianza en la interpretación del mensaje es baja: es preferible pasar la conversación a tiempo antes que responder algo incorrecto.",
        "No automation should try to resolve one hundred percent of conversations. Some situations need human intervention: a complaint, a negotiation, a complex quote, ambiguous information the system cannot interpret with confidence, a priority customer, an unusual exception, or simply someone explicitly asking to speak with a person. It is also worth handing off a conversation when confidence in the message's interpretation is low: it is better to pass it along in time than to respond incorrectly.",
      ),
      paragraph(
        "Una automatización bien diseñada no corta la conversación de golpe cuando deriva un caso. Le entrega al equipo el contexto que ya se recopiló: qué preguntó la persona, qué datos dio y en qué punto quedó la conversación. Así se evita que el cliente tenga que repetir todo desde cero.",
        "A well-designed automation does not cut the conversation off abruptly when it hands off a case. It gives the team the context already gathered: what the person asked, what details they provided, and where the conversation stands. This way the customer does not have to repeat everything from scratch.",
      ),
      quote(
        "Una buena automatización no reemplaza al equipo. Le saca el trabajo repetitivo de encima para que pueda ocuparse de las conversaciones que realmente necesitan su criterio.",
        "Good automation does not replace the team. It takes the repetitive work off their hands so they can focus on the conversations that actually need their judgment.",
      ),

      heading("Beneficios para el negocio", "Benefits for the business"),
      paragraph(
        "Cuando el sistema está bien pensado, los beneficios se notan en el día a día: respuestas iniciales más rápidas, atención disponible fuera del horario comercial, menos tiempo dedicado a tareas repetitivas, consultas organizadas por tipo y urgencia, un registro consistente de cada conversación, mejor seguimiento de oportunidades comerciales y una distribución más clara del trabajo entre las distintas áreas del negocio. Todo eso permite atender más consultas sin que el trabajo manual crezca en la misma proporción.",
        "When the system is well designed, the benefits show up in everyday operations: faster initial replies, availability outside business hours, less time spent on repetitive tasks, inquiries organized by type and urgency, a consistent log of every conversation, better tracking of sales opportunities, and a clearer distribution of work across the business's different areas. All of that makes it possible to handle more inquiries without manual work growing at the same rate.",
      ),
      paragraph(
        "Es importante ser realistas: automatizar WhatsApp no garantiza más ventas ni resultados automáticos. Lo que sí ofrece es un canal más ordenado, con menos fricción para el cliente y menos carga operativa para el equipo, que son condiciones necesarias para vender mejor, aunque no las únicas.",
        "It is important to be realistic: automating WhatsApp does not guarantee more sales or automatic results. What it does offer is a more organized channel, with less friction for the customer and less operational load for the team — necessary conditions for selling better, though not the only ones.",
      ),

      heading(
        "Errores frecuentes al automatizar WhatsApp",
        "Common mistakes when automating WhatsApp",
      ),
      subheading(
        "Automatizar un proceso que ya estaba desordenado",
        "Automating a process that was already disorganized",
      ),
      paragraph(
        "Automatizar algo que no funciona bien manualmente no lo arregla, lo replica más rápido. Antes de automatizar conviene ordenar el proceso real: qué información se necesita, en qué orden y quién debería intervenir en cada etapa.",
        "Automating something that does not work well manually does not fix it, it just replicates it faster. Before automating, it is worth organizing the real process first: what information is needed, in what order, and who should step in at each stage.",
      ),
      subheading(
        "Crear conversaciones demasiado rígidas",
        "Building overly rigid conversations",
      ),
      paragraph(
        "Cuando el sistema solo puede seguir un camino fijo, cualquier mensaje inesperado lo deja sin respuesta útil. Conviene prever variaciones razonables y, sobre todo, una salida clara cuando el sistema no entiende.",
        "When the system can only follow one fixed path, any unexpected message leaves it without a useful reply. It is worth planning for reasonable variations and, above all, a clear way out when the system does not understand.",
      ),
      subheading(
        "No ofrecer una salida hacia una persona",
        "Not offering a way to reach a person",
      ),
      paragraph(
        "Si la única opción es seguir hablando con el sistema, algunos clientes se van a frustrar. Siempre debería existir una forma simple de pedir hablar con alguien del equipo.",
        "If the only option is to keep talking to the system, some customers will get frustrated. There should always be a simple way to ask to speak with someone on the team.",
      ),
      subheading(
        "Pedir demasiados datos al principio",
        "Asking for too much information upfront",
      ),
      paragraph(
        "Solicitar toda la información de golpe, antes de haber generado algo de valor en la conversación, suele hacer que la persona abandone. Es mejor pedir los datos de a poco, a medida que son necesarios.",
        "Requesting all the information at once, before the conversation has offered any value, tends to make people drop off. It is better to ask for data gradually, as it becomes necessary.",
      ),
      subheading(
        "No contemplar errores o mensajes inesperados",
        "Not accounting for errors or unexpected messages",
      ),
      paragraph(
        "Un audio, una imagen o una pregunta fuera de lo previsto pueden hacer que el sistema quede trabado. Conviene definir qué pasa en esos casos, incluso si la respuesta es simplemente derivar la conversación.",
        "A voice note, an image, or an unplanned question can leave the system stuck. It is worth defining what happens in those cases, even if the answer is simply to hand off the conversation.",
      ),
      subheading(
        "Responder sin consultar información actualizada",
        "Responding without checking up-to-date information",
      ),
      paragraph(
        "Si el sistema contesta con datos que no están conectados a la información real del negocio, como stock, precios o disponibilidad, el riesgo de generar confusión o malestar es alto.",
        "If the system answers with data that is not connected to the business's real information, such as stock, prices, or availability, the risk of causing confusion or frustration is high.",
      ),
      subheading(
        "No registrar ni medir las conversaciones",
        "Not logging or measuring conversations",
      ),
      paragraph(
        "Sin un registro claro es imposible saber qué consultas se repiten más, dónde se traba la automatización o qué conviene mejorar. Medir es lo que permite ajustar el sistema con el tiempo.",
        "Without a clear record, it is impossible to know which inquiries repeat the most, where the automation gets stuck, or what is worth improving. Measuring is what allows the system to be adjusted over time.",
      ),
      subheading(
        "Querer automatizar todo desde la primera versión",
        "Trying to automate everything from the first version",
      ),
      paragraph(
        "Intentar cubrir cada escenario posible desde el primer día suele generar proyectos largos, caros y difíciles de mantener. Conviene empezar por lo que se repite más y crecer desde ahí.",
        "Trying to cover every possible scenario from day one tends to produce long, expensive, and hard-to-maintain projects. It is better to start with what repeats the most and grow from there.",
      ),

      heading("Cómo empezar paso a paso", "How to get started, step by step"),
      paragraph(
        "Un proceso razonable para automatizar las consultas de WhatsApp de un negocio suele seguir estos pasos: analizar cuáles son las consultas que más se repiten, elegir un caso de uso concreto para empezar, diseñar el recorrido conversacional de ese caso, definir qué integraciones y reglas hacen falta, construir una primera versión acotada, probarla con situaciones reales y, a partir de los resultados, medir, corregir y ampliar el alcance de a poco.",
        "A reasonable process for automating a business's WhatsApp inquiries usually follows these steps: analyze which inquiries repeat the most, choose one specific use case to start with, design the conversational path for that case, define which integrations and rules are needed, build a limited first version, test it with real situations, and, based on the results, measure, correct, and gradually expand its scope.",
      ),

      heading(
        "Cuánto puede automatizar realmente un negocio",
        "How much a business can actually automate",
      ),
      paragraph(
        "La respuesta depende de varios factores: el volumen de consultas, qué tan repetitivas son, la calidad y disponibilidad de los datos del negocio, y las integraciones que sea posible construir. Un negocio con pocas consultas por día y procesos muy variables va a automatizar menos que uno con alto volumen y consultas predecibles.",
        "The answer depends on several factors: the volume of inquiries, how repetitive they are, the quality and availability of the business's data, and which integrations are feasible to build. A business with few daily inquiries and highly variable processes will automate less than one with high volume and predictable inquiries.",
      ),
      paragraph(
        "La recomendación general es empezar por lo repetitivo, lo que consume tiempo sin aportar demasiado criterio humano, y mantener la intervención de una persona en las decisiones comerciales, las negociaciones y los casos especiales. No se trata de automatizar por automatizar, sino de liberar tiempo del equipo para las conversaciones que realmente lo necesitan.",
        "The general recommendation is to start with what is repetitive — what takes up time without requiring much human judgment — and keep a person involved in commercial decisions, negotiations, and special cases. It is not about automating for its own sake, but about freeing up the team's time for the conversations that truly need it.",
      ),
      quote(
        "La pregunta no es si conviene automatizar WhatsApp, sino qué parte de esa conversación puede resolverse sola sin perder calidad de atención.",
        "The question is not whether it makes sense to automate WhatsApp, but which part of that conversation can be resolved on its own without losing quality of service.",
      ),

      heading(
        "Automatizar WhatsApp con una solución adaptada a tu negocio",
        "Automating WhatsApp with a solution built for your business",
      ),
      paragraph(
        "La mejor solución para automatizar las consultas de WhatsApp no empieza eligiendo un chatbot ni una herramienta de moda. Empieza por entender cómo llegan hoy las consultas, qué preguntas se repiten, qué información falta y en qué punto del proceso se pierde tiempo o se pierden clientes.",
        "The best solution for automating WhatsApp inquiries does not start by picking a chatbot or a trendy tool. It starts by understanding how inquiries arrive today, which questions repeat, what information is missing, and where in the process time or customers are being lost.",
      ),
      paragraph(
        "En Synttek analizamos ese proceso junto al equipo del negocio y desarrollamos automatizaciones conectadas con las herramientas que ya usan: agenda, CRM, catálogo, formularios o sistemas internos, para que las consultas de WhatsApp se resuelvan más rápido y las conversaciones que necesitan una persona lleguen con todo el contexto necesario.",
        "At Synttek, we analyze that process together with the business's team and build automations connected to the tools they already use — calendar, CRM, catalog, forms, or internal systems — so WhatsApp inquiries get resolved faster and the conversations that need a person arrive with all the necessary context.",
      ),
      callout(
        "Próximo paso",
        "Next step",
        "Contanos cómo llegan hoy las consultas de tu negocio",
        "Tell us how inquiries reach your business today",
        "Si estás pensando en automatizar las consultas de WhatsApp de tu negocio, escribinos. Podemos ayudarte a analizar el proceso actual y definir qué automatización tiene sentido para tu caso, sin prometer más de lo que un sistema bien diseñado puede cumplir.",
        "If you are thinking about automating your business's WhatsApp inquiries, message us. We can help you analyze the current process and define what automation makes sense for your case, without promising more than a well-designed system can actually deliver.",
      ),

      heading("Preguntas frecuentes", "Frequently asked questions"),
      subheading(
        "¿Se pueden automatizar las consultas de WhatsApp Business?",
        "Can WhatsApp Business inquiries be automated?",
      ),
      paragraph(
        "Sí. La WhatsApp Business Platform permite conectar el número del negocio con sistemas externos para automatizar respuestas, clasificar conversaciones y ejecutar acciones, siempre respetando las políticas de la plataforma.",
        "Yes. The WhatsApp Business Platform allows the business's number to connect with external systems to automate replies, classify conversations, and execute actions, always within the platform's policies.",
      ),
      subheading(
        "¿Necesito inteligencia artificial para automatizar WhatsApp?",
        "Do I need artificial intelligence to automate WhatsApp?",
      ),
      paragraph(
        "No siempre. Muchos procesos predecibles funcionan bien con reglas y menús de opciones. La inteligencia artificial suma valor cuando las consultas llegan con lenguaje más variado o cuando conviene interpretar mejor la intención de cada mensaje.",
        "Not always. Many predictable processes work well with rules and option menus. Artificial intelligence adds value when inquiries arrive in more varied language or when it helps to better interpret each message's intent.",
      ),
      subheading(
        "¿La automatización puede derivar una conversación a una persona?",
        "Can the automation hand a conversation off to a person?",
      ),
      paragraph(
        "Sí, y debería poder hacerlo siempre que la situación lo requiera. Una buena automatización identifica cuándo un caso necesita intervención humana y le entrega al equipo el contexto ya recopilado.",
        "Yes, and it should be able to whenever the situation calls for it. Good automation identifies when a case needs human intervention and gives the team the context already gathered.",
      ),
      subheading(
        "¿Se puede conectar WhatsApp con un CRM o una agenda?",
        "Can WhatsApp be connected to a CRM or a calendar?",
      ),
      paragraph(
        "Sí. Es una de las integraciones más comunes: permite que las consultas queden registradas como oportunidades y que las reservas o turnos se confirmen directamente contra la disponibilidad real.",
        "Yes. It is one of the most common integrations: it allows inquiries to be logged as opportunities and bookings or appointments to be confirmed directly against real availability.",
      ),
      subheading(
        "¿Qué consultas conviene automatizar primero?",
        "Which inquiries should be automated first?",
      ),
      paragraph(
        "Conviene empezar por las que más se repiten y tienen una respuesta clara, como precios, horarios, disponibilidad o preguntas frecuentes. Desde ahí, la automatización puede ampliarse a procesos más complejos.",
        "It is best to start with the ones that repeat the most and have a clear answer, such as prices, hours, availability, or frequently asked questions. From there, automation can expand to more complex processes.",
      ),
      subheading(
        "¿Una automatización de WhatsApp funciona fuera del horario comercial?",
        "Does a WhatsApp automation work outside business hours?",
      ),
      paragraph(
        "Sí. Uno de sus principales beneficios es dar una primera respuesta aunque el negocio esté cerrado, para que ninguna consulta quede sin atención inicial hasta que el equipo esté disponible.",
        "Yes. One of its main benefits is providing an initial response even when the business is closed, so no inquiry goes without a first reply until the team is available.",
      ),
    ],
  },
  {
    slug: "que-es-una-landing-page",
    category: "Desarrollo",
    title: localizedText("Qué es una landing page", "What is a landing page"),
    titleAccent: localizedText(
      "y por qué convierte más que tu sitio web",
      "and why it converts better than your website",
    ),
    excerpt: localizedText(
      "Una landing page no es tu sitio web. Tiene un solo objetivo, un solo llamado a la acción y ninguna distracción. Así convierte más.",
      "A landing page is not your website. It has one goal, one call to action, and zero distractions. That's why it converts better.",
    ),
    dek: localizedText(
      "Si tenés un negocio y estás pagando publicidad, cada visita que no convierte es plata tirada. Acá te explicamos qué es una landing page, en qué se diferencia de un sitio web y cuándo usar cada una.",
      "If you're running paid ads and visitors aren't converting, you're burning money. Here's what a landing page is, how it differs from a website, and when to use each.",
    ),
    image: landingPage, // reemplazar con: landingPageImg
    author: "nico",
    date: "2026-08-12",
    readingMinutes: 6,
    featured: false,
    tags: [
      localizedText("Landing page", "Landing page"),
      localizedText("Desarrollo web", "Web development"),
      localizedText("Conversiones", "Conversions"),
      localizedText("Marketing digital", "Digital marketing"),
    ],
    body: [
      paragraph(
        "Tenés un negocio. Ponés plata en publicidad o en redes sociales. La gente llega a tu sitio web. Y después... nada. Se van sin hacer nada. Sin llamar, sin escribir, sin comprar.",
        "You have a business. You put money into ads or social media. People land on your website. And then... nothing. They leave without doing anything. No call, no message, no purchase.",
      ),
      paragraph(
        "El problema, casi siempre, no es la publicidad. Es el destino al que mandás a esas personas.",
        "The problem, almost always, isn't the ad. It's where you're sending those people.",
      ),
      heading(
        "Un sitio web y una landing page no son lo mismo",
        "A website and a landing page are not the same thing",
      ),
      paragraph(
        "Un sitio web es tu presencia completa en internet. Tiene páginas de servicios, galería, blog, sobre nosotros, contacto. Es para que quien ya te conoce te investigue, para que Google te encuentre, para que un cliente que te buscó por nombre sepa que existís.",
        "A website is your full online presence. It has service pages, gallery, blog, about us, contact. It's for people who already know you, for Google to find you, for someone who searched your name to confirm you exist.",
      ),
      paragraph(
        "Una landing page tiene un solo objetivo. Una sola acción que querés que haga el visitante. Y todo en esa página está diseñado para que esa acción ocurra.",
        "A landing page has a single goal. One action you want the visitor to take. And everything on that page is designed to make that action happen.",
      ),
      callout(
        "La diferencia clave",
        "The key difference",
        "Sitio web vs. landing page",
        "Website vs. landing page",
        "Un sitio web tiene menú, múltiples secciones, varios destinos posibles. Una landing page no tiene menú, no tiene distracciones, y todo lleva al mismo lugar: el botón de acción.",
        "A website has a menu, multiple sections, many possible paths. A landing page has no menu, no distractions, and everything leads to one place: the action button.",
      ),
      heading(
        "¿Cuándo necesitás una landing page?",
        "When do you need a landing page?",
      ),
      paragraph(
        "La regla es simple: cada vez que invertís en traer tráfico con un objetivo específico, necesitás una landing page. No tu sitio web completo.",
        "The rule is simple: whenever you invest in driving traffic with a specific goal, you need a landing page. Not your full website.",
      ),
      subheading("Publicidad en Google o Meta", "Google or Meta ads"),
      paragraph(
        'Si alguien hace clic en un anuncio que dice "Instalación de aire acondicionado en Córdoba" y llega a la página de inicio de tu empresa, ya perdiste. No sabe qué hacer. Ve opciones. Se va.',
        "If someone clicks an ad that says \"Air conditioning installation in Córdoba\" and lands on your company homepage, you've already lost them. They don't know what to do. They see options. They leave.",
      ),
      paragraph(
        "Si llega a una página que dice exactamente eso, muestra el precio, explica cómo funciona el servicio y tiene un botón de WhatsApp: convertís.",
        "If they land on a page that says exactly that, shows the price, explains how the service works, and has a WhatsApp button: you convert.",
      ),
      subheading("Promociones o lanzamientos", "Promotions or launches"),
      paragraph(
        "Estás lanzando un producto nuevo o tenés una promo por tiempo limitado. No querés que el visitante se pierda navegando tu sitio. Querés que haga una sola cosa: aprovechar la promo.",
        "You're launching a new product or running a time-limited promo. You don't want the visitor wandering around your site. You want them to do one thing: take the offer.",
      ),
      subheading("Formularios de captura de leads", "Lead capture forms"),
      paragraph(
        "Ofrecés algo a cambio de datos de contacto: una consulta gratis, un presupuesto, un PDF. Una landing page con ese único objetivo convierte mucho más que un formulario enterrado en tu sitio web.",
        "You offer something in exchange for contact info: a free consultation, a quote, a PDF. A landing page with that single goal converts far better than a form buried somewhere on your website.",
      ),
      heading(
        "Qué tiene que tener una landing page para convertir",
        "What a high-converting landing page needs",
      ),
      paragraph(
        "No alcanza con quitar el menú. Una landing page bien hecha tiene elementos específicos, en un orden específico, con un propósito claro.",
        "Removing the menu isn't enough. A well-built landing page has specific elements, in a specific order, with a clear purpose.",
      ),
      subheading(
        "1. Un titular que habla del resultado, no del servicio",
        "1. A headline that speaks to the result, not the service",
      ),
      paragraph(
        '"Diseño web profesional" no le dice nada a nadie. "Conseguí más clientes con una web que trabaja mientras vos dormís" le habla directamente a quien tiene ese problema.',
        '"Professional web design" means nothing to anyone. "Get more clients with a website that works while you sleep" speaks directly to the person who has that problem.',
      ),
      subheading(
        "2. Un subtítulo que explica cómo",
        "2. A subtitle that explains how",
      ),
      paragraph(
        "El titular captura la atención. El subtítulo dice quién sos y qué hacés. Es el momento de ser específico: servicio, zona geográfica, para quién.",
        "The headline grabs attention. The subtitle says who you are and what you do. That's when you get specific: service, location, target audience.",
      ),
      subheading("3. Prueba social visible", "3. Visible social proof"),
      paragraph(
        "Reseñas de clientes, casos de éxito, logos de marcas con las que trabajaste. Las personas no le creen a lo que una empresa dice de sí misma. Le creen a lo que dicen otros.",
        "Client reviews, case studies, logos of brands you've worked with. People don't believe what a company says about itself. They believe what others say.",
      ),
      subheading(
        "4. Un llamado a la acción claro y único",
        "4. One clear and singular call to action",
      ),
      paragraph(
        'Un solo botón. Una sola acción. "Pedí tu presupuesto", "Escribinos por WhatsApp", "Reservá tu lugar". No des opciones: guiá.',
        'One button. One action. "Request your quote", "Message us on WhatsApp", "Reserve your spot". Don\'t give options: lead.',
      ),
      subheading("5. Sin menú de navegación", "5. No navigation menu"),
      paragraph(
        "El menú es una invitación a irse. En una landing page, cada salida que no sea la acción deseada es una conversión perdida. Eliminarlo es un cambio que impacta directamente en los resultados.",
        "A menu is an invitation to leave. In a landing page, every exit that isn't the desired action is a lost conversion. Removing it directly impacts results.",
      ),
      heading(
        "Landing page vs. sitio web: no son excluyentes",
        "Landing page vs. website: they're not mutually exclusive",
      ),
      paragraph(
        "No se trata de elegir uno o el otro. Un negocio serio necesita las dos cosas.",
        "It's not about choosing one or the other. A serious business needs both.",
      ),
      paragraph(
        "El sitio web construye autoridad, posiciona en Google, da contexto a quien te busca directamente. La landing page convierte el tráfico pagado y las campañas específicas.",
        "The website builds authority, ranks on Google, gives context to people who search you directly. The landing page converts paid traffic and specific campaigns.",
      ),
      paragraph(
        "La combinación ideal es: un sitio web sólido como base, y landing pages puntuales para cada campaña o servicio que querés destacar.",
        "The ideal combination is: a solid website as your foundation, and targeted landing pages for each campaign or service you want to push.",
      ),
      quote(
        "Una landing page bien hecha no es un gasto. Es el lugar donde tu inversión en publicidad finalmente se convierte en clientes.",
        "A well-built landing page isn't an expense. It's where your advertising investment finally turns into clients.",
      ),
      heading(
        "¿Cuánto tarda en hacerse una landing page?",
        "How long does a landing page take?",
      ),
      paragraph(
        "En Synttek entregamos landing pages en 7 a 14 días hábiles, dependiendo de la complejidad y si el cliente ya tiene el copy y las imágenes. El proceso incluye diseño, desarrollo, integración de formularios o WhatsApp, y optimización para móviles y velocidad.",
        "At Synttek we deliver landing pages in 7 to 14 business days, depending on complexity and whether the client already has copy and images. The process includes design, development, form or WhatsApp integration, and mobile and speed optimization.",
      ),
      paragraph(
        "Si venís con publicidad activa y tu sitio actual no está convirtiendo, ese es el primer problema que hay que resolver.",
        "If you're running active ads and your current site isn't converting, that's the first problem to solve.",
      ),
      callout(
        "¿Necesitás una landing page?",
        "Do you need a landing page?",
        "Hablemos",
        "Let's talk",
        "Contanos de tu negocio y te decimos si lo que necesitás es una landing page, un sitio web completo o las dos cosas. Sin compromiso.",
        "Tell us about your business and we'll tell you whether you need a landing page, a full website, or both. No strings attached.",
      ),
    ],
  },

  // ─────────────────────────────────────────────
  // POST 2 — "Agente de IA para negocios Argentina"
  // ─────────────────────────────────────────────
  {
    slug: "agente-ia-para-negocios-argentina",
    category: "Automatización",
    title: localizedText(
      "Agente de IA para negocios en Argentina",
      "AI agent for businesses in Argentina",
    ),
    titleAccent: localizedText(
      "qué es, para qué sirve y cómo implementarlo",
      "what it is, what it's for, and how to implement it",
    ),
    excerpt: localizedText(
      "Un agente de IA puede responder consultas, calificar leads y automatizar tareas repetitivas, las 24 horas. Sin contratar más gente.",
      "An AI agent can answer queries, qualify leads, and automate repetitive tasks, 24 hours a day. Without hiring more people.",
    ),
    dek: localizedText(
      "Cada vez más negocios argentinos preguntan cómo usar inteligencia artificial para ahorrar tiempo y atender mejor a sus clientes. Acá explicamos qué es un agente de IA, cómo funciona en la práctica y en qué casos tiene sentido implementarlo.",
      "More and more Argentine businesses are asking how to use artificial intelligence to save time and serve their clients better. Here's what an AI agent is, how it works in practice, and when it makes sense to implement one.",
    ),
    image: agenteIA, // reemplazar con: agenteIaImg
    author: "nico",
    date: "2026-08-12",
    readingMinutes: 7,
    featured: false,
    tags: [
      localizedText("Inteligencia artificial", "Artificial intelligence"),
      localizedText("Automatización", "Automation"),
      localizedText("Agente de IA", "AI agent"),
      localizedText("Argentina", "Argentina"),
      localizedText("WhatsApp", "WhatsApp"),
    ],
    body: [
      paragraph(
        "El teléfono suena. Alguien escribe por WhatsApp a las 11 de la noche preguntando precio y disponibilidad. Mañana a la mañana también hay tres consultas nuevas. Y mientras tanto, vos o tu equipo están ocupados con el trabajo real.",
        "The phone rings. Someone messages on WhatsApp at 11pm asking about price and availability. Tomorrow morning there'll be three more new inquiries. And meanwhile, you or your team are busy with actual work.",
      ),
      paragraph(
        "Ese desfasaje entre la demanda de atención y el tiempo disponible es el problema que resuelve un agente de IA.",
        "That gap between demand for attention and available time is the problem an AI agent solves.",
      ),
      heading("Qué es un agente de IA", "What is an AI agent"),
      paragraph(
        "Un agente de IA es un sistema automatizado que puede recibir preguntas, entenderlas, consultar información de tu negocio y responder de forma coherente — sin intervención humana.",
        "An AI agent is an automated system that can receive questions, understand them, look up your business information, and respond coherently — without human intervention.",
      ),
      paragraph(
        "No es un chatbot con respuestas predefinidas que frustra al usuario cuando pregunta algo que no estaba en el guión. Es un sistema conectado a un modelo de lenguaje que puede entender preguntas en lenguaje natural y responder con información real de tu negocio.",
        "It's not a chatbot with predefined responses that frustrates users when they ask something off-script. It's a system connected to a language model that can understand natural language questions and respond with real information about your business.",
      ),
      callout(
        "Diferencia clave",
        "Key difference",
        "Chatbot vs. agente de IA",
        "Chatbot vs. AI agent",
        "Un chatbot tradicional responde según un árbol de decisiones fijo. Si no encontró la respuesta, falla. Un agente de IA razona sobre la pregunta, consulta la información disponible y genera una respuesta apropiada, aunque la pregunta sea nueva.",
        "A traditional chatbot responds according to a fixed decision tree. If it can't find the answer, it fails. An AI agent reasons about the question, looks up available information, and generates an appropriate response — even for brand-new questions.",
      ),
      heading(
        "Para qué lo usa un negocio en Argentina",
        "How businesses in Argentina use it",
      ),
      paragraph(
        "Los casos de uso más concretos que vemos en negocios locales son estos:",
        "The most concrete use cases we see in local businesses are these:",
      ),
      subheading(
        "Atención por WhatsApp fuera del horario comercial",
        "WhatsApp support outside business hours",
      ),
      paragraph(
        "El 70% de las consultas a negocios locales en Argentina llegan por WhatsApp. Muchas de esas consultas llegan de noche o el fin de semana. Un agente conectado a tu número puede responder preguntas frecuentes, dar precios, confirmar disponibilidad y agendar una llamada — sin que nadie del equipo tenga que estar disponible.",
        "70% of inquiries to local businesses in Argentina come through WhatsApp. Many arrive at night or on weekends. An agent connected to your number can answer FAQs, quote prices, confirm availability, and schedule a call — without anyone on your team needing to be available.",
      ),
      subheading(
        "Calificación de leads antes de la primera llamada",
        "Lead qualification before the first call",
      ),
      paragraph(
        "No todas las consultas son iguales. Algunas son de personas listas para comprar. Otras son consultas exploratorias que no van a ningún lado. Un agente puede hacer las preguntas correctas, identificar si la persona es un cliente potencial real y priorizar a quién le respondés primero.",
        "Not all inquiries are equal. Some are from people ready to buy. Others are exploratory and go nowhere. An agent can ask the right questions, identify whether someone is a real potential client, and prioritize who you respond to first.",
      ),
      subheading(
        "Respuestas automáticas en formularios de contacto",
        "Automatic responses to contact forms",
      ),
      paragraph(
        "Cuando alguien completa un formulario en tu sitio web, un agente puede enviarle una respuesta personalizada en segundos: confirmación de recepción, información inicial relevante, próximo paso claro. Sin esperar a que alguien lo vea manualmente.",
        "When someone fills out a contact form on your website, an agent can send them a personalized response in seconds: confirmation of receipt, relevant initial information, clear next step. Without waiting for someone to manually check it.",
      ),
      subheading(
        "Soporte interno para el equipo",
        "Internal support for your team",
      ),
      paragraph(
        "No solo para clientes. Un agente entrenado con documentación interna puede responder preguntas del equipo: procedimientos, precios actualizados, información de productos, políticas. Menos tiempo buscando en carpetas, más tiempo trabajando.",
        "Not just for clients. An agent trained on internal documentation can answer team questions: procedures, updated prices, product information, policies. Less time searching through folders, more time working.",
      ),
      heading("Cómo funciona en la práctica", "How it works in practice"),
      paragraph(
        "El proceso de implementar un agente de IA para un negocio tiene tres etapas:",
        "Implementing an AI agent for a business has three stages:",
      ),
      subheading(
        "1. Definir qué tiene que saber y qué tiene que hacer",
        "1. Define what it needs to know and what it needs to do",
      ),
      paragraph(
        "Un agente no sabe nada de tu negocio por defecto. Hay que alimentarlo con información: precios, servicios, condiciones, horarios, formas de pago, preguntas frecuentes. Cuanto más específica sea esa información, mejores van a ser las respuestas.",
        "An agent knows nothing about your business by default. You need to feed it information: prices, services, terms, hours, payment methods, FAQs. The more specific that information, the better the responses.",
      ),
      subheading(
        "2. Conectarlo al canal donde están tus clientes",
        "2. Connect it to the channel where your clients are",
      ),
      paragraph(
        "WhatsApp Business API, Instagram DMs, formularios de contacto, chat en el sitio web. El agente vive donde viven tus clientes. No al revés.",
        "WhatsApp Business API, Instagram DMs, contact forms, website chat. The agent lives where your clients are. Not the other way around.",
      ),
      subheading(
        "3. Definir cuándo pasa la conversación a una persona real",
        "3. Define when the conversation passes to a real person",
      ),
      paragraph(
        "Un buen agente sabe hasta dónde puede llegar solo. Cuando la consulta es compleja, cuando el cliente quiere hablar con alguien, o cuando hay que cerrar una venta importante, la conversación se transfiere a una persona del equipo — con todo el contexto de lo que ya se habló.",
        "A good agent knows how far it can go alone. When the inquiry is complex, when the client wants to speak to someone, or when there's an important sale to close, the conversation transfers to a team member — with full context of everything already discussed.",
      ),
      heading("¿Qué tecnología se usa?", "What technology is used?"),
      paragraph(
        "En Synttek usamos n8n como plataforma de automatización para conectar los distintos sistemas, y APIs de modelos de lenguaje como GPT-4o o Claude para el procesamiento de lenguaje natural. La integración con WhatsApp se hace vía WhatsApp Business API a través de proveedores habilitados.",
        "At Synttek we use n8n as the automation platform to connect different systems, and language model APIs like GPT-4o or Claude for natural language processing. WhatsApp integration is done via the WhatsApp Business API through authorized providers.",
      ),
      paragraph(
        "El stack no es lo más importante. Lo que importa es que el sistema responda bien, escale sin explotar y sea fácil de actualizar cuando cambian los precios o los servicios.",
        "The tech stack isn't the most important thing. What matters is that the system responds well, scales without breaking, and is easy to update when prices or services change.",
      ),
      heading(
        "¿Para qué tipo de negocio tiene sentido?",
        "What type of business benefits most?",
      ),
      paragraph(
        "Un agente de IA tiene más impacto cuando hay volumen de consultas repetitivas. Si respondés diez veces por día la misma pregunta sobre precio o disponibilidad, ahí hay tiempo recuperable.",
        "An AI agent has the most impact when there's a volume of repetitive inquiries. If you answer the same question about price or availability ten times a day, that's recoverable time.",
      ),
      paragraph(
        "Los rubros donde más lo vemos implementado en Argentina: inmobiliarias, estudios de medicina estética, servicios de turismo, estudios contables, e-commerce, negocios de servicios a domicilio (plomeros, electricistas, técnicos), y cualquier negocio que tenga un equipo de ventas que se satura de consultas.",
        "The industries where we see it implemented most in Argentina: real estate agencies, aesthetic medicine clinics, tourism services, accounting firms, e-commerce, home service businesses (plumbers, electricians, technicians), and any business with a sales team overwhelmed by inquiries.",
      ),
      quote(
        "El objetivo no es reemplazar a las personas. Es liberarlas de las tareas repetitivas para que puedan enfocarse en lo que realmente requiere criterio humano.",
        "The goal isn't to replace people. It's to free them from repetitive tasks so they can focus on what genuinely requires human judgment.",
      ),
      heading(
        "¿Cuánto cuesta implementar un agente de IA?",
        "How much does it cost to implement an AI agent?",
      ),
      paragraph(
        "El costo depende de la complejidad: cuántos canales hay que integrar, qué tan compleja es la lógica de calificación de leads, si hay que conectarlo a sistemas existentes como un CRM o una base de datos de productos.",
        "The cost depends on complexity: how many channels to integrate, how complex the lead qualification logic is, whether it needs to connect to existing systems like a CRM or product database.",
      ),
      paragraph(
        "Una implementación básica — agente respondiendo por WhatsApp con información del negocio y derivación a humano — puede estar lista en dos semanas. Las integraciones más complejas con CRM, calendarios y múltiples canales toman más tiempo.",
        "A basic implementation — agent responding on WhatsApp with business information and human handoff — can be ready in two weeks. More complex integrations with CRM, calendars, and multiple channels take longer.",
      ),
      callout(
        "¿Querés saber si tiene sentido para tu negocio?",
        "Want to know if it makes sense for your business?",
        "Hablemos sin compromiso",
        "Let's talk, no strings attached",
        "Contanos qué tipo de consultas recibís y cuánto tiempo le dedica tu equipo. Te decimos si un agente de IA ayuda y cómo lo implementaríamos.",
        "Tell us what kind of inquiries you receive and how much time your team spends on them. We'll tell you if an AI agent helps and how we'd implement it.",
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
