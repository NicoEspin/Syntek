const DEFAULT_LOCALE = "es";

const localizedText = (es, en) => ({ es, en });

const primaryServiceSlugs = [
  "desarrollo-web",
  "landing-pages",
  "software-a-medida",
  "automatizaciones",
  "ecommerce",
  "branding",
];

const serviceEntries = [
  {
    slug: "desarrollo-web",
    updatedAt: "2026-05-25T00:00:00.000Z",
    shortLabel: localizedText("Desarrollo Web", "Web Development"),
    eyebrow: localizedText(
      "Presencia digital con criterio técnico",
      "Digital presence with technical clarity",
    ),
    title: localizedText(
      "Desarrollo web profesional para empresas y negocios",
      "Professional web development for companies and growing brands",
    ),
    description: localizedText(
      "Diseñamos y desarrollamos sitios web modernos, claros y preparados para convertir visitas en oportunidades reales, sin sacrificar performance, estructura ni escalabilidad.",
      "We design and build modern websites that turn visits into real opportunities without sacrificing performance, structure or scalability.",
    ),
    metaTitle: localizedText(
      "Desarrollo web profesional para empresas | Synttek",
      "Professional web development for companies | Synttek",
    ),
    metaDescription: localizedText(
      "Creamos sitios web profesionales para empresas y negocios que necesitan una presencia digital moderna, clara y optimizada para convertir.",
      "We build professional websites for companies that need a modern, clear and conversion-ready digital presence.",
    ),
    heroPoints: [
      localizedText("Sitios institucionales y comerciales", "Corporate and commercial websites"),
      localizedText("SEO técnico y performance desde el inicio", "Technical SEO and performance from day one"),
      localizedText("Arquitectura preparada para crecer", "Architecture prepared to scale"),
    ],
    idealFor: [
      localizedText("Empresas que necesitan renovar una web desactualizada", "Companies replacing an outdated website"),
      localizedText("Negocios que dependen demasiado de redes sociales", "Businesses relying too much on social platforms"),
      localizedText("Marcas que quieren una base digital más seria para vender", "Brands that need a stronger digital base to sell"),
    ],
    problems: [
      {
        title: localizedText("Sitios que no explican bien lo que vendés", "Sites that fail to explain what you sell"),
        body: localizedText(
          "Si tu propuesta no se entiende rápido, perdés consultas antes de que lleguen al contacto.",
          "If your offer is not clear fast, you lose leads before they ever reach contact.",
        ),
      },
      {
        title: localizedText("Presencia digital que se siente improvisada", "A digital presence that feels improvised"),
        body: localizedText(
          "Muchos negocios tienen una web que existe, pero no transmite confianza ni orden comercial.",
          "Many businesses have a website that technically exists, but it does not communicate trust or commercial clarity.",
        ),
      },
      {
        title: localizedText("Dependencia de soluciones que no escalan", "Dependence on solutions that do not scale"),
        body: localizedText(
          "Cuando la web nace sin criterio técnico, cualquier mejora futura se vuelve lenta, cara y frágil.",
          "When a site is built without technical discipline, every future improvement becomes slow, expensive and fragile.",
        ),
      },
    ],
    includes: [
      {
        title: localizedText("Arquitectura del sitio", "Site architecture"),
        body: localizedText(
          "Jerarquía clara de páginas, contenidos y CTAs para que el usuario entienda qué hacer y por qué.",
          "Clear page, content and CTA hierarchy so users understand what to do and why.",
        ),
      },
      {
        title: localizedText("Diseño visual premium", "Premium visual design"),
        body: localizedText(
          "Interfaces modernas con una dirección estética alineada al valor de tu marca, no una plantilla genérica.",
          "Modern interfaces with an art direction aligned to your brand value, not a generic template.",
        ),
      },
      {
        title: localizedText("Desarrollo sólido", "Solid implementation"),
        body: localizedText(
          "Construcción con foco en performance, mantenibilidad, accesibilidad y buenas prácticas reales.",
          "Implementation focused on performance, maintainability, accessibility and real-world best practices.",
        ),
      },
      {
        title: localizedText("Integraciones clave", "Key integrations"),
        body: localizedText(
          "Formularios, WhatsApp, analytics, CRM, email marketing o herramientas del negocio conectadas donde haga falta.",
          "Forms, WhatsApp, analytics, CRM, email marketing and business tools connected where they matter.",
        ),
      },
    ],
    process: [
      {
        title: localizedText("Diagnóstico", "Discovery"),
        body: localizedText(
          "Entendemos negocio, audiencia, objetivo comercial y restricciones reales antes de diseñar nada.",
          "We understand your business, audience, commercial goal and real constraints before designing anything.",
        ),
      },
      {
        title: localizedText("Dirección visual", "Visual direction"),
        body: localizedText(
          "Traducimos posicionamiento y propuesta de valor en una interfaz clara, contemporánea y persuasiva.",
          "We translate your positioning and value proposition into a clear, contemporary and persuasive interface.",
        ),
      },
      {
        title: localizedText("Construcción", "Build"),
        body: localizedText(
          "Desarrollamos cada bloque con criterio técnico para que el sitio sea rápido, estable y escalable.",
          "We build each block with technical discipline so the site stays fast, stable and scalable.",
        ),
      },
      {
        title: localizedText("Ajuste y lanzamiento", "Refinement and launch"),
        body: localizedText(
          "Revisamos detalles finos, medimos fricción y dejamos la web lista para salir con una base seria.",
          "We refine the details, measure friction points and launch with a strong foundation.",
        ),
      },
    ],
    approachTitle: localizedText(
      "No hacemos webs decorativas. Construimos activos digitales.",
      "We do not build decorative websites. We build digital assets.",
    ),
    approachBody: localizedText(
      "Nuestro enfoque mezcla estrategia, copy, diseño y desarrollo para que la web no sea solo una tarjeta linda, sino una pieza comercial que ordena tu presencia digital y te permite crecer con menos improvisación.",
      "Our approach combines strategy, copy, design and development so the website becomes more than a pretty card. It becomes a commercial asset that organizes your digital presence and helps you grow with less improvisation.",
    ),
    stack: [
      localizedText("Next.js y React para experiencias rápidas", "Next.js and React for fast experiences"),
      localizedText("Tailwind CSS y sistemas visuales consistentes", "Tailwind CSS and consistent visual systems"),
      localizedText("SEO on-page, estructura semántica y metadata cuidada", "On-page SEO, semantic structure and careful metadata"),
      localizedText("Integraciones con formularios, analytics y CRM", "Integrations with forms, analytics and CRM"),
    ],
    faqs: [
      {
        question: localizedText("¿Cuánto tarda crear una web profesional?", "How long does a professional website take?"),
        answer: localizedText(
          "Depende del alcance, pero una web institucional o comercial bien resuelta suele llevar entre 2 y 5 semanas. Si hay integraciones, múltiples páginas o contenido complejo, el tiempo se ajusta al alcance real.",
          "It depends on scope, but a well-built corporate or commercial website usually takes between 2 and 5 weeks. Integrations, multiple pages or complex content extend that timeline according to the real scope.",
        ),
      },
      {
        question: localizedText("¿La web queda optimizada para SEO?", "Will the website be optimized for SEO?"),
        answer: localizedText(
          "Sí. Trabajamos estructura semántica, metadata, performance y buenas prácticas técnicas para que la base SEO quede bien hecha desde el inicio.",
          "Yes. We work on semantic structure, metadata, performance and technical best practices so the SEO foundation is sound from the start.",
        ),
      },
      {
        question: localizedText("¿Pueden integrar WhatsApp, formularios o herramientas externas?", "Can you integrate WhatsApp, forms or external tools?"),
        answer: localizedText(
          "Sí. Podemos conectar formularios, WhatsApp, analytics, CRMs, email marketing u otras herramientas que formen parte de tu proceso comercial.",
          "Yes. We can connect forms, WhatsApp, analytics, CRMs, email marketing and other tools that belong in your sales process.",
        ),
      },
      {
        question: localizedText("¿Trabajan con clientes fuera de Córdoba?", "Do you work with clients outside Cordoba?"),
        answer: localizedText(
          "Sí. Aunque tenemos foco en Córdoba y Argentina, trabajamos de forma remota con marcas y empresas de otras ciudades cuando el proyecto encaja.",
          "Yes. While we focus on Cordoba and Argentina, we work remotely with brands and companies from other cities when the project is a good fit.",
        ),
      },
    ],
    relatedProjectIds: ["hotel-california", "viajes-cordoba", "cari-turismo"],
    relatedServiceSlugs: ["landing-pages", "software-a-medida", "automatizaciones", "ecommerce"],
  },
  {
    slug: "landing-pages",
    updatedAt: "2026-05-25T00:00:00.000Z",
    shortLabel: localizedText("Landing Pages", "Landing Pages"),
    eyebrow: localizedText(
      "Páginas pensadas para captar y convertir",
      "Pages designed to capture and convert",
    ),
    title: localizedText(
      "Landing pages profesionales para vender, captar leads y presentar tu negocio",
      "Professional landing pages to sell, capture leads and present your business",
    ),
    description: localizedText(
      "Creamos landings con una narrativa clara, una estética fuerte y una arquitectura de conversión pensada para campañas, lanzamientos, servicios y negocios locales.",
      "We build landing pages with a clear narrative, strong aesthetics and a conversion architecture designed for campaigns, launches, services and local businesses.",
    ),
    metaTitle: localizedText(
      "Landing pages profesionales para negocios | Synttek",
      "Professional landing pages for businesses | Synttek",
    ),
    metaDescription: localizedText(
      "Diseñamos landing pages profesionales para campañas, productos, servicios y negocios que necesitan explicar mejor su propuesta y convertir más.",
      "We design professional landing pages for campaigns, products, services and businesses that need to communicate their offer clearly and convert more.",
    ),
    heroPoints: [
      localizedText("Campañas, lanzamientos y servicios", "Campaigns, launches and services"),
      localizedText("Copy claro con jerarquía visual fuerte", "Clear copy with strong visual hierarchy"),
      localizedText("WhatsApp, formularios y analytics integrados", "WhatsApp, forms and analytics integrated"),
    ],
    idealFor: [
      localizedText("Negocios que venden un servicio principal", "Businesses selling a primary service"),
      localizedText("Campañas de Google Ads o Instagram", "Google Ads or Instagram campaigns"),
      localizedText("Hoteles, turismo, gastronomía o marcas locales", "Hotels, tourism, hospitality or local brands"),
    ],
    problems: [
      {
        title: localizedText("Campañas que llevan tráfico a páginas flojas", "Campaigns driving traffic to weak pages"),
        body: localizedText(
          "Si el destino no está diseñado para explicar y convertir, el presupuesto publicitario se diluye.",
          "If the destination is not designed to explain and convert, ad spend gets diluted.",
        ),
      },
      {
        title: localizedText("Demasiada información, poca dirección", "Too much information, not enough direction"),
        body: localizedText(
          "Muchas páginas mezclan todo y terminan perdiendo foco. Una buena landing ordena el mensaje y acelera la decisión.",
          "Many pages mix everything together and lose focus. A strong landing page organizes the message and speeds up the decision.",
        ),
      },
      {
        title: localizedText("Poca confianza en el primer impacto", "Low trust in the first impression"),
        body: localizedText(
          "Cuando la estética, el copy y la estructura no están alineados, el usuario duda antes de consultar.",
          "When aesthetics, copy and structure are not aligned, users hesitate before reaching out.",
        ),
      },
    ],
    includes: [
      {
        title: localizedText("Propuesta clara arriba del fold", "A clear offer above the fold"),
        body: localizedText(
          "Mensaje directo, visual fuerte y CTA visible desde el primer scroll.",
          "Direct messaging, strong visuals and visible CTA from the first scroll.",
        ),
      },
      {
        title: localizedText("Bloques de persuasión", "Persuasion blocks"),
        body: localizedText(
          "Problema, solución, beneficios, prueba visual, FAQs y cierre comercial en un recorrido coherente.",
          "Problem, solution, benefits, visual proof, FAQs and commercial close in one coherent journey.",
        ),
      },
      {
        title: localizedText("Captura de consultas", "Lead capture"),
        body: localizedText(
          "Formularios, WhatsApp, botones de contacto y eventos medibles para no perder intención.",
          "Forms, WhatsApp, contact buttons and measurable events so intent is not lost.",
        ),
      },
      {
        title: localizedText("Base técnica seria", "A solid technical base"),
        body: localizedText(
          "Performance, estructura semántica, responsive real y una implementación lista para escalar.",
          "Performance, semantic structure, true responsiveness and an implementation ready to scale.",
        ),
      },
    ],
    process: [
      {
        title: localizedText("Enfoque", "Positioning"),
        body: localizedText(
          "Definimos qué tiene que entender el usuario, qué objeción hay que bajar y qué acción queremos provocar.",
          "We define what the user needs to understand, which objections must be reduced and what action we want to trigger.",
        ),
      },
      {
        title: localizedText("Narrativa", "Narrative"),
        body: localizedText(
          "Construimos una secuencia de contenido que mantenga atención y lleve al siguiente paso con naturalidad.",
          "We build a content sequence that keeps attention and moves people toward the next step naturally.",
        ),
      },
      {
        title: localizedText("Diseño y motion", "Design and motion"),
        body: localizedText(
          "Diseñamos una pieza visual con intención, ritmo y una identidad alineada al valor de la marca.",
          "We design a visual piece with intention, rhythm and an identity aligned to your brand value.",
        ),
      },
      {
        title: localizedText("Activación", "Activation"),
        body: localizedText(
          "Dejamos la landing lista para conectar campañas, medir resultados y capturar consultas reales.",
          "We leave the landing ready to connect campaigns, measure performance and capture real inquiries.",
        ),
      },
    ],
    approachTitle: localizedText(
      "Una landing no es una versión corta de una web. Es una pieza con una sola misión.",
      "A landing page is not a short website. It is a piece with one mission.",
    ),
    approachBody: localizedText(
      "Por eso trabajamos foco, secuencia, objeciones y fricción. Cuando todo apunta a una misma acción, la página deja de decorar y empieza a vender.",
      "That is why we focus on sequence, objections and friction. When everything points toward the same action, the page stops decorating and starts selling.",
    ),
    stack: [
      localizedText("Diseño editorial y jerarquía visual", "Editorial design and visual hierarchy"),
      localizedText("Next.js, React y animaciones suaves con intención", "Next.js, React and intentional motion"),
      localizedText("Integración con WhatsApp, forms y tracking", "Integration with WhatsApp, forms and tracking"),
      localizedText("Optimización para campañas y SEO base", "Optimization for campaigns and baseline SEO"),
    ],
    faqs: [
      {
        question: localizedText("¿Qué diferencia hay entre una landing y una web completa?", "What is the difference between a landing page and a full website?"),
        answer: localizedText(
          "Una landing está pensada para una sola intención principal: vender un servicio, presentar una campaña o captar consultas. Una web completa trabaja una estructura más amplia con más páginas y más recorridos.",
          "A landing page is designed around one main intent: sell a service, present a campaign or capture leads. A full website works with a broader structure, more pages and more journeys.",
        ),
      },
      {
        question: localizedText("¿Sirve para campañas de Instagram o Google Ads?", "Can it be used for Instagram or Google Ads campaigns?"),
        answer: localizedText(
          "Sí. De hecho, una de las mejores razones para hacer una landing es tener una página diseñada específicamente para recibir tráfico pago y convertirlo mejor.",
          "Yes. In fact, one of the best reasons to build a landing page is to have a page designed specifically to receive paid traffic and convert it more effectively.",
        ),
      },
      {
        question: localizedText("¿Puede incluir WhatsApp, formulario y analytics?", "Can it include WhatsApp, forms and analytics?"),
        answer: localizedText(
          "Sí. Podemos integrar canales de contacto y medición para que la landing no solo se vea bien, sino que también te permita seguir resultados reales.",
          "Yes. We can integrate contact and tracking channels so the landing not only looks strong, but also lets you measure real outcomes.",
        ),
      },
      {
        question: localizedText("¿Synttek diseña y desarrolla la landing completa?", "Does Synttek handle both design and development?"),
        answer: localizedText(
          "Sí. Trabajamos dirección visual, contenido, estructura y desarrollo para que la página salga coherente de punta a punta.",
          "Yes. We handle visual direction, content, structure and development so the page launches coherently end to end.",
        ),
      },
    ],
    relatedProjectIds: ["hotel-california", "viajes-cordoba", "cari-turismo"],
    relatedServiceSlugs: ["desarrollo-web", "software-a-medida", "automatizaciones", "ecommerce"],
  },
  {
    slug: "software-a-medida",
    updatedAt: "2026-05-25T00:00:00.000Z",
    shortLabel: localizedText("Software a medida", "Custom Software"),
    eyebrow: localizedText(
      "Procesos más ordenados, menos fricción operativa",
      "Better internal flow, less operational friction",
    ),
    title: localizedText(
      "Software a medida para ordenar procesos y escalar operaciones",
      "Custom software to organize processes and scale operations",
    ),
    description: localizedText(
      "Desarrollamos herramientas internas, plataformas y productos digitales para negocios que ya no pueden seguir resolviendo todo con planillas, parches o herramientas desconectadas.",
      "We develop internal tools, platforms and digital products for businesses that can no longer rely on spreadsheets, workarounds or disconnected tools.",
    ),
    metaTitle: localizedText(
      "Software a medida para empresas | Synttek",
      "Custom software for companies | Synttek",
    ),
    metaDescription: localizedText(
      "Creamos software a medida para empresas que necesitan ordenar procesos, integrar herramientas y escalar con una solución propia.",
      "We build custom software for companies that need to organize processes, integrate tools and scale with a tailored solution.",
    ),
    heroPoints: [
      localizedText("Paneles, plataformas y herramientas internas", "Dashboards, platforms and internal tools"),
      localizedText("Integraciones con APIs y backend", "Integrations with APIs and backend systems"),
      localizedText("Producto pensado para evolucionar", "A product designed to evolve"),
    ],
    idealFor: [
      localizedText("Equipos que trabajan con demasiados procesos manuales", "Teams buried under manual processes"),
      localizedText("Negocios con herramientas que no se hablan entre sí", "Businesses using tools that do not talk to each other"),
      localizedText("Empresas que necesitan una solución propia para crecer", "Companies that need a dedicated solution to grow"),
    ],
    problems: [
      {
        title: localizedText("Planillas y procesos que ya no alcanzan", "Spreadsheets and processes that no longer scale"),
        body: localizedText(
          "Cuando todo depende de trabajo manual, aparecen errores, cuellos de botella y poca visibilidad.",
          "When everything depends on manual work, errors, bottlenecks and low visibility show up fast.",
        ),
      },
      {
        title: localizedText("Herramientas desconectadas", "Disconnected tools"),
        body: localizedText(
          "Usar muchas plataformas sin una lógica unificada genera fricción operativa y decisiones lentas.",
          "Using many tools without a unified logic creates operational friction and slow decision-making.",
        ),
      },
      {
        title: localizedText("Soluciones genéricas que quedan cortas", "Generic tools that stop fitting"),
        body: localizedText(
          "Llega un punto donde adaptar una herramienta externa cuesta más que construir lo correcto.",
          "There is a point where adapting an external tool costs more than building the right thing.",
        ),
      },
    ],
    includes: [
      {
        title: localizedText("Modelado funcional", "Functional modeling"),
        body: localizedText(
          "Bajamos el caos operativo a flujos claros, roles, permisos, pantallas y acciones concretas.",
          "We turn operational chaos into clear flows, roles, permissions, screens and concrete actions.",
        ),
      },
      {
        title: localizedText("Frontend y experiencia", "Frontend and experience"),
        body: localizedText(
          "Interfaces útiles, rápidas y entendibles para que el producto se use de verdad dentro del equipo.",
          "Useful, fast and understandable interfaces so the product gets adopted by the team.",
        ),
      },
      {
        title: localizedText("Integración técnica", "Technical integration"),
        body: localizedText(
          "Conexión con APIs, servicios existentes, autenticación, bases de datos o procesos ya en marcha.",
          "Connection with APIs, existing services, authentication, databases or ongoing processes.",
        ),
      },
      {
        title: localizedText("Base escalable", "Scalable base"),
        body: localizedText(
          "Código mantenible y decisiones que permitan evolucionar la solución sin rehacerla cada seis meses.",
          "Maintainable code and decisions that let the solution evolve without rebuilding it every six months.",
        ),
      },
    ],
    process: [
      {
        title: localizedText("Mapeo del problema", "Problem mapping"),
        body: localizedText(
          "Entendemos cómo trabaja hoy el negocio, dónde se traba y qué impacto tendría resolverlo bien.",
          "We understand how the business works today, where it gets stuck and what impact solving it properly would create.",
        ),
      },
      {
        title: localizedText("Definición del producto", "Product definition"),
        body: localizedText(
          "Priorizamos módulos, reglas, usuarios e integraciones para construir una primera versión útil y sólida.",
          "We prioritize modules, rules, users and integrations to build a useful and solid first version.",
        ),
      },
      {
        title: localizedText("Construcción iterativa", "Iterative build"),
        body: localizedText(
          "Diseñamos y desarrollamos con hitos claros, validando que cada parte resuelva algo real.",
          "We design and build through clear milestones, validating that each part solves something real.",
        ),
      },
      {
        title: localizedText("Evolución", "Evolution"),
        body: localizedText(
          "La solución queda lista para crecer en funcionalidades, usuarios o complejidad sin perder orden.",
          "The solution is prepared to grow in functionality, users or complexity without losing order.",
        ),
      },
    ],
    approachTitle: localizedText(
      "No arrancamos por features. Arrancamos por el problema operativo que te está frenando.",
      "We do not start with features. We start with the operational problem holding you back.",
    ),
    approachBody: localizedText(
      "Esa diferencia cambia todo: evita software inflado, alinea prioridades y hace que la solución tenga valor real para el negocio, no solo para una demo linda.",
      "That difference changes everything: it avoids bloated software, aligns priorities and makes the solution valuable for the business, not just for a nice demo.",
    ),
    stack: [
      localizedText("React y Next.js para interfaces de producto", "React and Next.js for product interfaces"),
      localizedText("Integración con APIs, autenticación y backends existentes", "Integration with APIs, authentication and existing backends"),
      localizedText("Arquitectura preparada para nuevas funcionalidades", "Architecture prepared for future functionality"),
      localizedText("UX orientada a procesos reales del equipo", "UX aligned to real team workflows"),
    ],
    faqs: [
      {
        question: localizedText("¿Cuándo conviene hacer software a medida?", "When does custom software make sense?"),
        answer: localizedText(
          "Conviene cuando tu operación ya no entra cómoda en herramientas genéricas, cuando hay demasiada fricción manual o cuando necesitás una lógica propia para vender, gestionar o producir mejor.",
          "It makes sense when your operation no longer fits comfortably inside generic tools, when manual friction is everywhere or when you need a tailored logic to sell, manage or deliver better.",
        ),
      },
      {
        question: localizedText("¿Pueden integrar el software con herramientas existentes?", "Can the software integrate with existing tools?"),
        answer: localizedText(
          "Sí. De hecho, muchas veces el valor está en conectar lo que ya usás con una capa propia que ordene mejor los flujos y la información.",
          "Yes. In many cases the real value comes from connecting what you already use with a custom layer that organizes flows and data more effectively.",
        ),
      },
      {
        question: localizedText("¿Empiezan con una versión mínima?", "Do you start with a lean first version?"),
        answer: localizedText(
          "Sí. Lo sano es definir un primer alcance útil y validable, y después crecer desde una base bien pensada.",
          "Yes. The healthy approach is to define a useful, testable first scope and then grow from a well-designed base.",
        ),
      },
      {
        question: localizedText("¿Pueden trabajar también la interfaz del producto?", "Can you also handle the product interface?"),
        answer: localizedText(
          "Sí. Combinamos experiencia visual, UX y desarrollo para que el software no solo funcione, sino que también sea claro de usar.",
          "Yes. We combine visual craft, UX and implementation so the software not only works, but is also clear to use.",
        ),
      },
    ],
    relatedProjectIds: ["thumblify", "hotel-california"],
    relatedServiceSlugs: ["desarrollo-web", "landing-pages", "automatizaciones", "ecommerce"],
  },
  {
    slug: "automatizaciones",
    updatedAt: "2026-05-25T00:00:00.000Z",
    shortLabel: localizedText("Automatizaciones", "Automations"),
    eyebrow: localizedText(
      "Menos tareas repetitivas, mejores respuestas",
      "Less repetitive work, better responses",
    ),
    title: localizedText(
      "Automatizaciones para negocios que quieren ahorrar tiempo y responder mejor",
      "Automations for businesses that need to save time and respond better",
    ),
    description: localizedText(
      "Diseñamos flujos para conectar herramientas, responder consultas, ordenar leads, disparar avisos y reducir tareas manuales sin meter complejidad inútil.",
      "We design flows that connect tools, respond to inquiries, organize leads, trigger notifications and reduce manual work without adding useless complexity.",
    ),
    metaTitle: localizedText(
      "Automatizaciones para negocios y equipos | Synttek",
      "Automations for businesses and teams | Synttek",
    ),
    metaDescription: localizedText(
      "Implementamos automatizaciones para negocios que quieren conectar herramientas, ahorrar tiempo y responder mejor a clientes y leads.",
      "We implement automations for businesses that need connected tools, less manual work and faster responses to clients and leads.",
    ),
    heroPoints: [
      localizedText("Leads, formularios y seguimiento", "Leads, forms and follow-up"),
      localizedText("WhatsApp, avisos y tareas internas", "WhatsApp, notifications and internal tasks"),
      localizedText("n8n, APIs e IA cuando suma valor", "n8n, APIs and AI when it adds real value"),
    ],
    idealFor: [
      localizedText("Equipos que repiten tareas todos los días", "Teams repeating the same manual work every day"),
      localizedText("Negocios que pierden consultas por falta de seguimiento", "Businesses losing leads because follow-up is weak"),
      localizedText("Empresas con herramientas que podrían conversar mejor", "Companies whose tools should cooperate more effectively"),
    ],
    problems: [
      {
        title: localizedText("Consultas que quedan colgadas", "Inquiries that get lost"),
        body: localizedText(
          "Si un lead llega y nadie responde a tiempo, el problema no es marketing: es operación.",
          "If a lead arrives and nobody responds on time, the problem is not marketing. It is operations.",
        ),
      },
      {
        title: localizedText("Procesos que dependen de memoria humana", "Processes depending on human memory"),
        body: localizedText(
          "Cuando todo depende de acordarse, copiar, pegar o revisar manualmente, la fricción se multiplica.",
          "When everything depends on remembering, copying, pasting or manually checking, friction multiplies.",
        ),
      },
      {
        title: localizedText("IA usada como adorno", "AI used as decoration"),
        body: localizedText(
          "Meter IA sin proceso es marketing vacío. La usamos cuando realmente mejora respuesta, clasificación o velocidad.",
          "Adding AI without process is empty marketing. We use it when it genuinely improves response, classification or speed.",
        ),
      },
    ],
    includes: [
      {
        title: localizedText("Diseño del flujo", "Flow design"),
        body: localizedText(
          "Mapeamos eventos, disparadores, condiciones y acciones para que la automatización haga exactamente lo que tiene que hacer.",
          "We map events, triggers, conditions and actions so the automation does exactly what it should.",
        ),
      },
      {
        title: localizedText("Integración entre herramientas", "Tool integration"),
        body: localizedText(
          "Conectamos formularios, CRMs, WhatsApp, email, planillas o sistemas internos según la necesidad real.",
          "We connect forms, CRMs, WhatsApp, email, spreadsheets or internal systems according to the real need.",
        ),
      },
      {
        title: localizedText("Notificaciones y seguimiento", "Notifications and follow-up"),
        body: localizedText(
          "Avisos internos, respuestas automáticas, clasificación de leads y tareas disparadas en el momento correcto.",
          "Internal notifications, automated replies, lead qualification and triggered tasks at the right moment.",
        ),
      },
      {
        title: localizedText("Documentación operable", "Operable documentation"),
        body: localizedText(
          "Dejamos el flujo claro para que el equipo entienda qué hace, cómo se usa y cómo escalarlo después.",
          "We document the flow so your team understands what it does, how it is used and how to expand it later.",
        ),
      },
    ],
    process: [
      {
        title: localizedText("Auditoría", "Audit"),
        body: localizedText(
          "Detectamos qué tarea vale la pena automatizar y qué cuello de botella duele de verdad.",
          "We identify which tasks are worth automating and which bottlenecks actually hurt the operation.",
        ),
      },
      {
        title: localizedText("Diseño del flujo", "Flow design"),
        body: localizedText(
          "Definimos entradas, salidas, reglas y herramientas involucradas para evitar automatizaciones frágiles.",
          "We define inputs, outputs, rules and involved tools to avoid fragile automations.",
        ),
      },
      {
        title: localizedText("Implementación", "Implementation"),
        body: localizedText(
          "Construimos el sistema, conectamos servicios y dejamos trazabilidad para entender qué pasó en cada paso.",
          "We build the system, connect services and keep traceability so every step stays understandable.",
        ),
      },
      {
        title: localizedText("Optimización", "Optimization"),
        body: localizedText(
          "Medimos resultados, ajustamos reglas y mejoramos la precisión del flujo en base al uso real.",
          "We measure outcomes, tune rules and improve the flow based on real usage.",
        ),
      },
    ],
    approachTitle: localizedText(
      "Automatizar no es sumar herramientas. Es sacar fricción del sistema.",
      "Automation is not about adding more tools. It is about removing friction from the system.",
    ),
    approachBody: localizedText(
      "Por eso priorizamos flujos simples, estables y trazables. Si el proceso queda más opaco que antes, está mal resuelto.",
      "That is why we prioritize flows that are simple, stable and traceable. If the process becomes more opaque than before, it is badly solved.",
    ),
    stack: [
      localizedText("n8n como orquestador principal", "n8n as the main orchestrator"),
      localizedText("APIs, webhooks y conexiones a medida", "APIs, webhooks and tailored integrations"),
      localizedText("WhatsApp, formularios, email y CRM", "WhatsApp, forms, email and CRM"),
      localizedText("IA aplicada a clasificación o respuesta cuando conviene", "AI applied to classification or response when it is useful"),
    ],
    faqs: [
      {
        question: localizedText("¿Qué tipo de tareas conviene automatizar primero?", "What kinds of tasks should be automated first?"),
        answer: localizedText(
          "Las que se repiten mucho, tienen una lógica clara y hoy consumen tiempo manual: seguimiento de leads, respuestas iniciales, avisos, carga de datos o traspaso entre herramientas.",
          "The ones that repeat often, follow a clear logic and currently consume manual time: lead follow-up, first replies, notifications, data entry or handoffs between tools.",
        ),
      },
      {
        question: localizedText("¿Necesito cambiar todas mis herramientas?", "Do I need to replace all my current tools?"),
        answer: localizedText(
          "No. Muchas automatizaciones útiles nacen conectando mejor lo que ya usás, sin obligarte a tirar todo y empezar de cero.",
          "No. Many valuable automations come from connecting what you already use more effectively, without forcing a full reset.",
        ),
      },
      {
        question: localizedText("¿La IA es obligatoria?", "Is AI required?"),
        answer: localizedText(
          "No. La usamos solo cuando aporta valor real, por ejemplo para clasificar consultas, resumir contexto o asistir respuestas. Si no mejora nada, no la metemos.",
          "No. We only use it when it adds real value, for example to classify inquiries, summarize context or assist replies. If it does not improve anything, we do not force it in.",
        ),
      },
      {
        question: localizedText("¿Pueden documentar el flujo para mi equipo?", "Can you document the flow for my team?"),
        answer: localizedText(
          "Sí. La idea es que el sistema no quede como una caja negra. Dejamos una base entendible para operar y evolucionar.",
          "Yes. The goal is to avoid a black box. We leave an understandable base so the team can operate and evolve it.",
        ),
      },
    ],
    relatedProjectIds: ["thumblify", "cari-turismo"],
    relatedServiceSlugs: ["desarrollo-web", "landing-pages", "software-a-medida", "ecommerce"],
  },
  {
    slug: "ecommerce",
    updatedAt: "2026-05-25T00:00:00.000Z",
    shortLabel: localizedText("Ecommerce", "Ecommerce"),
    eyebrow: localizedText(
      "Experiencias de compra más claras y profesionales",
      "Clearer, more professional buying experiences",
    ),
    title: localizedText(
      "Ecommerce y tiendas online para negocios que quieren vender mejor",
      "Ecommerce and online stores for businesses that want to sell better",
    ),
    description: localizedText(
      "Diseñamos tiendas online, catálogos digitales y recorridos de compra para marcas que necesitan vender por internet con más claridad, confianza y control.",
      "We design online stores, digital catalogs and buying journeys for brands that need to sell online with more clarity, trust and control.",
    ),
    metaTitle: localizedText(
      "Ecommerce y tiendas online para negocios | Synttek",
      "Ecommerce and online stores for businesses | Synttek",
    ),
    metaDescription: localizedText(
      "Creamos ecommerce, tiendas online y catálogos digitales para negocios que quieren vender con una presencia más sólida que solo redes sociales.",
      "We build ecommerce, online stores and digital catalogs for businesses that want a stronger sales presence than social media alone.",
    ),
    heroPoints: [
      localizedText("Tiendas online y catálogos digitales", "Online stores and digital catalogs"),
      localizedText("Experiencia de compra pensada para convertir", "Buying journeys designed to convert"),
      localizedText("Base técnica lista para crecer", "Technical base ready to scale"),
    ],
    idealFor: [
      localizedText("Negocios que hoy venden por Instagram o WhatsApp", "Businesses currently selling through Instagram or WhatsApp"),
      localizedText("Marcas que necesitan una tienda más profesional", "Brands needing a more professional store"),
      localizedText("Equipos que quieren ordenar catálogo, pagos o consultas", "Teams that need better control over catalog, payments or inquiries"),
    ],
    problems: [
      {
        title: localizedText("Vender solo por mensajes sueltos", "Selling through scattered messages only"),
        body: localizedText(
          "Cuando todo depende del chat, el proceso de compra se vuelve lento, confuso y difícil de escalar.",
          "When everything depends on chat, the buying process becomes slow, confusing and hard to scale.",
        ),
      },
      {
        title: localizedText("Catálogo sin estructura", "A catalog without structure"),
        body: localizedText(
          "Sin jerarquía clara de productos, filtros y presentación, la tienda pierde capacidad de conversión.",
          "Without clear product hierarchy, filters and presentation, the store loses conversion power.",
        ),
      },
      {
        title: localizedText("Experiencia poco confiable", "An experience that feels unreliable"),
        body: localizedText(
          "Si la interfaz se ve improvisada, el usuario duda más al momento de comprar o consultar.",
          "If the interface feels improvised, users hesitate more when it is time to buy or inquire.",
        ),
      },
    ],
    includes: [
      {
        title: localizedText("Arquitectura comercial", "Commercial architecture"),
        body: localizedText(
          "Definimos categorías, fichas, destacados y recorridos para que el catálogo se entienda rápido.",
          "We define categories, product detail pages, highlights and journeys so the catalog feels easy to understand.",
        ),
      },
      {
        title: localizedText("Diseño de conversión", "Conversion-focused design"),
        body: localizedText(
          "Trabajamos confianza, claridad y jerarquía visual para reducir fricción en el proceso de compra.",
          "We work on trust, clarity and visual hierarchy to reduce friction in the buying process.",
        ),
      },
      {
        title: localizedText("Integraciones de venta", "Sales integrations"),
        body: localizedText(
          "Podemos integrar pagos, catálogos, consultas, formularios, analytics o procesos complementarios del negocio.",
          "We can integrate payments, catalog systems, inquiries, forms, analytics and supporting business workflows.",
        ),
      },
      {
        title: localizedText("Escalabilidad", "Scalability"),
        body: localizedText(
          "La tienda queda preparada para crecer en productos, campañas, tráfico o complejidad operativa.",
          "The store is prepared to grow in product count, campaigns, traffic or operational complexity.",
        ),
      },
    ],
    process: [
      {
        title: localizedText("Definición comercial", "Commercial definition"),
        body: localizedText(
          "Entendemos cómo vendés hoy, qué fricción existe y qué recorrido de compra conviene construir.",
          "We understand how you sell today, where the friction is and what buying journey makes the most sense.",
        ),
      },
      {
        title: localizedText("Diseño del recorrido", "Journey design"),
        body: localizedText(
          "Organizamos home, categorías, fichas y CTAs para que el usuario llegue más fácil a la acción.",
          "We organize home, categories, product pages and CTAs so users reach action more easily.",
        ),
      },
      {
        title: localizedText("Implementación", "Implementation"),
        body: localizedText(
          "Desarrollamos la experiencia con foco en velocidad, claridad y una base técnica estable.",
          "We implement the experience with focus on speed, clarity and a stable technical foundation.",
        ),
      },
      {
        title: localizedText("Medición", "Measurement"),
        body: localizedText(
          "Dejamos eventos, contacto y puntos de análisis listos para mejorar la conversión con evidencia.",
          "We leave measurement events, contact points and analysis hooks in place so conversion can improve with evidence.",
        ),
      },
    ],
    approachTitle: localizedText(
      "Una tienda no vende por existir. Vende cuando el recorrido baja fricción y construye confianza.",
      "A store does not sell just because it exists. It sells when the journey reduces friction and builds trust.",
    ),
    approachBody: localizedText(
      "Por eso trabajamos experiencia, estructura y dirección visual con el mismo cuidado que la implementación técnica.",
      "That is why we treat experience, structure and visual direction with the same care as the technical implementation.",
    ),
    stack: [
      localizedText("Experiencias ecommerce y catálogos digitales", "Ecommerce experiences and digital catalogs"),
      localizedText("Jerarquía visual, fichas y CTAs claros", "Visual hierarchy, product pages and clear CTAs"),
      localizedText("Integración con pagos, formularios o consultas", "Integration with payments, forms or inquiry flows"),
      localizedText("SEO técnico y performance para páginas comerciales", "Technical SEO and performance for commercial pages"),
    ],
    faqs: [
      {
        question: localizedText("¿Pueden hacer una tienda completa o un catálogo con WhatsApp?", "Can you build a full store or a catalog connected to WhatsApp?"),
        answer: localizedText(
          "Sí. Según el modelo comercial, puede convenir una tienda completa, un catálogo digital o una solución híbrida conectada con WhatsApp y formularios.",
          "Yes. Depending on your business model, a full store, a digital catalog or a hybrid solution connected to WhatsApp and forms may make more sense.",
        ),
      },
      {
        question: localizedText("¿Esto sirve si hoy vendo solo por redes?", "Does this help if I currently sell only through social media?"),
        answer: localizedText(
          "Totalmente. Una tienda o catálogo propio te da más control, mejor presentación y una base mucho más seria para crecer.",
          "Absolutely. A store or owned catalog gives you more control, stronger presentation and a far better base for growth.",
        ),
      },
      {
        question: localizedText("¿Pueden integrar medios de pago o seguimiento?", "Can you integrate payments or tracking?"),
        answer: localizedText(
          "Sí. La implementación puede contemplar pagos, formularios, analytics, contacto, automatizaciones u otras integraciones relevantes.",
          "Yes. The implementation can include payments, forms, analytics, contact flows, automations and other relevant integrations.",
        ),
      },
      {
        question: localizedText("¿La tienda queda lista para campañas futuras?", "Will the store be ready for future campaigns?"),
        answer: localizedText(
          "Sí. La idea es construir una base preparada para sumar tráfico, campañas, nuevos productos o nuevas capas comerciales.",
          "Yes. The goal is to leave a base prepared for more traffic, future campaigns, new products or additional commercial layers.",
        ),
      },
    ],
    relatedProjectIds: ["thumblify", "hotel-california"],
    relatedServiceSlugs: ["desarrollo-web", "landing-pages", "software-a-medida", "automatizaciones", "branding"],
  },
  {
    slug: "branding",
    updatedAt: "2026-05-25T00:00:00.000Z",
    shortLabel: localizedText("Branding", "Branding"),
    eyebrow: localizedText(
      "Identidad visual con criterio y carácter",
      "Visual identity with judgment and character",
    ),
    title: localizedText(
      "Branding para marcas que necesitan verse a la altura de lo que venden",
      "Branding for brands that need to look as strong as what they sell",
    ),
    description: localizedText(
      "Construimos identidades visuales con dirección, sistema y personalidad para negocios que ya no quieren verse improvisados ni genéricos.",
      "We build visual identities with direction, system and personality for businesses that no longer want to look improvised or generic.",
    ),
    metaTitle: localizedText(
      "Branding e identidad visual para marcas | Synttek",
      "Branding and visual identity for brands | Synttek",
    ),
    metaDescription: localizedText(
      "Diseñamos branding e identidad visual para marcas y negocios que necesitan una presencia más sólida, coherente y memorable.",
      "We design branding and visual identity systems for brands that need a stronger, more coherent and more memorable presence.",
    ),
    heroPoints: [
      localizedText("Identidad visual y sistema gráfico", "Visual identity and graphic system"),
      localizedText("Dirección estética con intención comercial", "Art direction with commercial intent"),
      localizedText("Base lista para web, redes y piezas digitales", "A base prepared for web, social and digital assets"),
    ],
    idealFor: [
      localizedText("Marcas nuevas que necesitan nacer con criterio", "New brands that need to launch with judgment"),
      localizedText("Negocios que ya venden bien pero se ven flojos", "Businesses that sell well but still look weak"),
      localizedText("Empresas que necesitan coherencia visual real", "Companies that need real visual consistency"),
    ],
    problems: [
      {
        title: localizedText("Identidades que no transmiten valor", "Identities that fail to communicate value"),
        body: localizedText(
          "Si la marca se ve barata, genérica o desordenada, el usuario lo interpreta antes de leer una sola línea.",
          "If the brand looks cheap, generic or disorganized, users read that before they read a single line.",
        ),
      },
      {
        title: localizedText("Piezas sin sistema", "Assets without a system"),
        body: localizedText(
          "Cuando cada pieza visual se resuelve improvisando, la marca pierde consistencia y autoridad.",
          "When every visual piece is solved through improvisation, the brand loses consistency and authority.",
        ),
      },
      {
        title: localizedText("Estética sin dirección", "Aesthetics without direction"),
        body: localizedText(
          "No alcanza con que algo sea lindo. Tiene que encajar con el negocio, el mercado y la percepción que querés construir.",
          "It is not enough for something to look good. It has to fit the business, the market and the perception you want to build.",
        ),
      },
    ],
    includes: [
      {
        title: localizedText("Dirección visual", "Visual direction"),
        body: localizedText(
          "Definimos el tono estético, el universo visual y el nivel de sofisticación que la marca necesita proyectar.",
          "We define the aesthetic tone, visual universe and level of sophistication the brand needs to project.",
        ),
      },
      {
        title: localizedText("Sistema gráfico", "Graphic system"),
        body: localizedText(
          "Construimos una lógica de colores, tipografía, recursos y composición que sostenga la identidad más allá del logo.",
          "We build a logic of color, typography, visual resources and composition that supports the identity beyond the logo.",
        ),
      },
      {
        title: localizedText("Aplicación digital", "Digital application"),
        body: localizedText(
          "La identidad se piensa para web, redes, piezas de campaña o productos digitales, no como un archivo aislado.",
          "The identity is designed for websites, social, campaigns or digital products, not as an isolated file.",
        ),
      },
      {
        title: localizedText("Coherencia operable", "Operable consistency"),
        body: localizedText(
          "La marca queda lista para aplicarse con criterio, sin depender siempre de improvisación o gusto del momento.",
          "The brand is left ready to be applied with judgment, without depending on improvisation or shifting taste.",
        ),
      },
    ],
    process: [
      {
        title: localizedText("Lectura de marca", "Brand reading"),
        body: localizedText(
          "Entendemos negocio, posicionamiento y percepción actual antes de diseñar cualquier forma o estilo.",
          "We understand the business, positioning and current perception before designing any form or style.",
        ),
      },
      {
        title: localizedText("Dirección estética", "Aesthetic direction"),
        body: localizedText(
          "Probamos caminos visuales con intención hasta encontrar una dirección que sostenga la narrativa correcta.",
          "We test visual directions with intention until we find the one that supports the right narrative.",
        ),
      },
      {
        title: localizedText("Sistema", "System"),
        body: localizedText(
          "Bajamos la identidad a reglas, recursos y aplicaciones para que no quede en una idea suelta.",
          "We turn the identity into rules, resources and applications so it does not remain a loose idea.",
        ),
      },
      {
        title: localizedText("Implementación", "Implementation"),
        body: localizedText(
          "La conectamos con el resto del ecosistema digital para que la marca realmente se sienta coherente en uso.",
          "We connect it with the rest of the digital ecosystem so the brand feels coherent in real use.",
        ),
      },
    ],
    approachTitle: localizedText(
      "Una marca no se fortalece con decoración. Se fortalece con dirección.",
      "A brand is not strengthened by decoration. It is strengthened by direction.",
    ),
    approachBody: localizedText(
      "Por eso trabajamos el branding como sistema y no como pieza suelta: la identidad tiene que verse bien, pero sobre todo tiene que sostener percepción, consistencia y valor comercial.",
      "That is why we treat branding as a system, not a loose asset: the identity has to look good, but above all it has to sustain perception, consistency and commercial value.",
    ),
    stack: [
      localizedText("Dirección visual y sistema gráfico", "Visual direction and graphic system"),
      localizedText("Identidad lista para web y producto digital", "Identity prepared for web and digital product"),
      localizedText("Aplicaciones pensadas con criterio contemporáneo", "Applications designed with contemporary judgment"),
      localizedText("Coherencia entre marca, interfaz y presencia digital", "Coherence between brand, interface and digital presence"),
    ],
    faqs: [
      {
        question: localizedText("¿Branding es solo hacer un logo?", "Is branding just about creating a logo?"),
        answer: localizedText(
          "No. El logo es una parte. El branding real define tono, sistema visual, coherencia y percepción de marca en todos los puntos de contacto.",
          "No. The logo is only one part. Real branding defines tone, visual system, coherence and brand perception across all touchpoints.",
        ),
      },
      {
        question: localizedText("¿Puede conectarse con la web o una landing?", "Can branding connect directly with a website or landing page?"),
        answer: localizedText(
          "Sí. De hecho, ahí es donde más valor tiene. Una identidad bien pensada hace que la web se vea más coherente, confiable y memorable.",
          "Yes. In fact, that is where it becomes most valuable. A well-built identity makes the website feel more coherent, trustworthy and memorable.",
        ),
      },
      {
        question: localizedText("¿Sirve para marcas nuevas y también para rediseños?", "Does it work for both new brands and redesigns?"),
        answer: localizedText(
          "Sí. Podemos construir una identidad desde cero o reordenar una marca que ya existe pero quedó vieja, floja o inconsistente.",
          "Yes. We can build an identity from scratch or reorganize an existing brand that has become outdated, weak or inconsistent.",
        ),
      },
      {
        question: localizedText("¿Entregan una identidad aplicable o solo una propuesta visual?", "Do you deliver an identity that can be applied, or just a visual concept?"),
        answer: localizedText(
          "La idea es dejar una base aplicable. No nos interesa vender humo visual si después nadie puede usarlo con criterio.",
          "The goal is to leave an applicable foundation. We are not interested in selling visual smoke if nobody can use it with judgment afterwards.",
        ),
      },
    ],
    relatedProjectIds: ["nox-branding", "hotel-california"],
    relatedServiceSlugs: ["desarrollo-web", "landing-pages", "ecommerce"],
  },
];

const localizeService = (service, locale = DEFAULT_LOCALE) => ({
  ...service,
  shortLabel: service.shortLabel[locale] ?? service.shortLabel[DEFAULT_LOCALE],
  eyebrow: service.eyebrow[locale] ?? service.eyebrow[DEFAULT_LOCALE],
  title: service.title[locale] ?? service.title[DEFAULT_LOCALE],
  description: service.description[locale] ?? service.description[DEFAULT_LOCALE],
  metaTitle: service.metaTitle[locale] ?? service.metaTitle[DEFAULT_LOCALE],
  metaDescription:
    service.metaDescription[locale] ?? service.metaDescription[DEFAULT_LOCALE],
  heroPoints: service.heroPoints.map(
    (item) => item[locale] ?? item[DEFAULT_LOCALE],
  ),
  idealFor: service.idealFor.map((item) => item[locale] ?? item[DEFAULT_LOCALE]),
  problems: service.problems.map((item) => ({
    title: item.title[locale] ?? item.title[DEFAULT_LOCALE],
    body: item.body[locale] ?? item.body[DEFAULT_LOCALE],
  })),
  includes: service.includes.map((item) => ({
    title: item.title[locale] ?? item.title[DEFAULT_LOCALE],
    body: item.body[locale] ?? item.body[DEFAULT_LOCALE],
  })),
  process: service.process.map((item) => ({
    title: item.title[locale] ?? item.title[DEFAULT_LOCALE],
    body: item.body[locale] ?? item.body[DEFAULT_LOCALE],
  })),
  approachTitle:
    service.approachTitle[locale] ?? service.approachTitle[DEFAULT_LOCALE],
  approachBody:
    service.approachBody[locale] ?? service.approachBody[DEFAULT_LOCALE],
  stack: service.stack.map((item) => item[locale] ?? item[DEFAULT_LOCALE]),
  faqs: service.faqs.map((item) => ({
    question: item.question[locale] ?? item.question[DEFAULT_LOCALE],
    answer: item.answer[locale] ?? item.answer[DEFAULT_LOCALE],
  })),
});

export const services = serviceEntries;

export const getPrimaryServiceSlugs = () => primaryServiceSlugs;

export const getPrimaryServices = (locale = DEFAULT_LOCALE) =>
  primaryServiceSlugs
    .map((slug) => getServiceBySlug(slug, locale))
    .filter(Boolean);

export const getServiceBySlug = (slug, locale = DEFAULT_LOCALE) => {
  const service = serviceEntries.find((entry) => entry.slug === slug);
  return service ? localizeService(service, locale) : undefined;
};
