import card1 from "@/app/assets/card1.webp";
import card3 from "@/app/assets/card3.webp";
import threeD from "@/app/assets/3D.webp";
import nico from "@/app/assets/nico.webp";
import antto from "@/app/assets/antto.webp";

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
    name: "Antto Ferreyra",
    role: localizedText("Diseño & Automatización", "Design & Automation"),
    bio: localizedText(
      "Diseña sistemas y automatizaciones que conectan herramientas reales con decisiones reales. Para Antto, la automatización es proceso, no decoración.",
      "Designs systems and automations that connect real tools to real decisions. For Antto, automation is process, not decoration.",
    ),
    image: antto,
  },
};

const heading = (es, en) => ({ type: "heading", text: localizedText(es, en) });
const paragraph = (es, en) => ({ type: "paragraph", text: localizedText(es, en) });
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
  items: items.map(({ hex, es, en }) => ({ hex, label: localizedText(es, en) })),
});

const postEntries = [
  {
    slug: "activos-digitales",
    category: "Estrategia",
    variant: "editorial",
    title: localizedText(
      "No construimos sitios decorativos. Construimos activos digitales.",
      "We don't build decorative websites. We build digital assets.",
    ),
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
    featured: true,
    tags: [localizedText("Estrategia", "Strategy"), localizedText("Producto", "Product"), localizedText("Conversión", "Conversion")],
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
    variant: "immersive",
    title: localizedText(
      "Automatizaciones con IA: qué automatizar y qué dejar quieto.",
      "Automating with AI: what to automate and what to leave alone.",
    ),
    excerpt: localizedText(
      "La IA no es decoración. Es proceso. Dónde un workflow multiplica al equipo y dónde solo agrega ruido.",
      "AI isn't decoration. It's process. Where a workflow multiplies the team, and where it just adds noise.",
    ),
    dek: localizedText(
      "No todo lo que se puede automatizar conviene automatizarlo. La pregunta correcta no es \"se puede\" — es \"vale la pena\".",
      "Not everything that can be automated should be. The right question isn't \"can we\" — it's \"is it worth it\".",
    ),
    image: threeD,
    author: "antto",
    date: "2026-06-04",
    readingMinutes: 8,
    featured: false,
    tags: [localizedText("Automatización", "Automation"), localizedText("IA", "AI"), localizedText("Procesos", "Process")],
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
    variant: "editorial",
    title: localizedText(
      "Diseño que convierte: la estética como persuasión.",
      "Design that converts: aesthetics as persuasion.",
    ),
    excerpt: localizedText(
      "Cada pantalla, interacción y detalle visual existe para mover al usuario al siguiente paso. No para impresionar.",
      "Every screen, interaction and visual detail exists to move the user to the next step. Not to impress.",
    ),
    dek: localizedText(
      "Cada decisión visual que tomás en tu sitio impacta directamente en cuánto confía el usuario en vos. No es diseño por diseño — es estrategia.",
      "Every visual decision you make on your site directly impacts how much the user trusts you. It's not design for design's sake — it's strategy.",
    ),
    authorRoleOverride: localizedText("Director de Diseño · Synttek", "Design Director · Synttek"),
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
      heading("Color como decisión estratégica", "Color as a strategic decision"),
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
    variant: "immersive",
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
    tags: [localizedText("Performance", "Performance"), localizedText("Core Web Vitals", "Core Web Vitals"), localizedText("Next.js", "Next.js")],
    body: [
      paragraph(
        "Cada 100ms de demora le cuesta conversión a cualquier sitio, sin excepción. No es una opinión — es el dato que repiten todos los estudios de Core Web Vitals desde 2021.",
        "Every 100ms of delay costs any site conversion, no exceptions. That's not an opinion — it's the number every Core Web Vitals study has repeated since 2021.",
      ),
      heading("Por qué 0.8s es el límite", "Why 0.8s is the line"),
      paragraph(
        "Por encima de ese umbral, la percepción de \"rápido\" se rompe. El usuario no mide milisegundos — siente fricción, y la fricción se traduce directo en abandono.",
        "Above that threshold, the perception of \"fast\" breaks down. Users don't measure milliseconds — they feel friction, and friction translates directly into abandonment.",
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
    variant: "immersive",
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
    tags: [localizedText("Branding", "Branding"), localizedText("Identidad", "Identity"), localizedText("Criterio", "Judgment")],
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
      heading("Qué sostiene una marca fuera del moodboard", "What holds a brand together outside the moodboard"),
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
    variant: "editorial",
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
    tags: [localizedText("Next.js", "Next.js"), localizedText("Arquitectura", "Architecture"), localizedText("Desarrollo", "Development")],
    body: [
      heading("Decisiones que importan en el día 1", "Decisions that matter on day one"),
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
        caption: block.caption ? getLocalizedField(block.caption, locale) : undefined,
      };
    default:
      return block;
  }
};

const localizePost = (post, locale = DEFAULT_LOCALE) => ({
  ...post,
  title: getLocalizedField(post.title, locale),
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

export const getRelatedBlogPosts = (slug, locale = DEFAULT_LOCALE, limit = 2) => {
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
