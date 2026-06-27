# Agents.md — Contexto de agente para Synttek

> Este archivo es la fuente de verdad para cualquier agente que trabaje sobre el proyecto. Antes de ejecutar cualquier tarea, leer este documento completo. Para detalles de features específicas, leer los archivos `.md` correspondientes listados en la sección de documentación.

---

## Índice

1. [Identidad del proyecto](#1-identidad-del-proyecto)
2. [Stack y entorno](#2-stack-y-entorno)
3. [Sistema visual — reglas no negociables](#3-sistema-visual--reglas-no-negociables)
4. [Arquitectura y convenciones](#4-arquitectura-y-convenciones)
5. [Internacionalización](#5-internacionalización)
6. [Skills disponibles](#6-skills-disponibles)
7. [Documentación de features](#7-documentación-de-features)
8. [Reglas de trabajo del agente](#8-reglas-de-trabajo-del-agente)

---

## 1. Identidad del proyecto

- **Nombre correcto de la marca**: `Synttek` — siempre con esta ortografía. Nunca `Syntek`, nunca `SYNTEK`.
- **Tipo de proyecto**: landing page de agencia digital + páginas internas.
- **Audiencia**: clientes potenciales de una agencia de diseño y desarrollo web boutique.
- **Tono**: profesional, contemporáneo, confiante. No corporativo ni genérico.
- **Color de marca**: `#A1E233` (lima). Es el único acento cromático del sistema.
- **Idiomas activos**: español (`es`, locale por defecto) e inglés (`en`).

---

## 2. Stack y entorno

### Runtime y framework

- **Next.js `15.3.2`** con App Router
- **React `19`** + React DOM `19`
- Node.js compatible con Next.js 15

### UI, estilos y animación

- **Tailwind CSS `4`** — sin `tailwind.config.js` clásico, configuración via CSS
- **Framer Motion** (`framer-motion` + `motion`)
- **Lucide React** para iconos
- **`clsx`** + **`tailwind-merge`** (helper `cn()` en `src/lib/utils.js`)

### Internacionalización y formularios

- **`next-intl`** — rutas localizadas bajo `src/app/[locale]`
- **`@emailjs/browser`** — formulario de contacto
- **`react-toastify`** — feedback de estado del formulario

### Scripts

```bash
npm run dev      # desarrollo
npm run build    # producción
npm run start    # servidor producción
npm run lint     # ESLint 9
```

### Variables de entorno requeridas

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
```

---

## 2.1. Reglas de Next.js para agentes

<!-- BEGIN:nextjs-agent-rules -->

# Next.js: leer documentación antes de modificar código

Antes de cualquier tarea relacionada con Next.js, App Router, routing, layouts, metadata, caching, imágenes, Server Components, Client Components, middleware, build o deploy, el agente debe leer la documentación local/versionada disponible en el proyecto.

Prioridad de documentación:

1. Si existe `node_modules/next/dist/docs/`, usar esa documentación como fuente de verdad.
2. Si existe `.next-docs/`, usar esa documentación como fuente de verdad.
3. Si no existe ninguna, ejecutar o sugerir:

```bash
npx @next/codemod@latest agents-md
```

No asumir patrones antiguos de Next.js. La documentación local del proyecto manda sobre el conocimiento previo del agente.

<!-- END:nextjs-agent-rules -->

### Reglas específicas para este proyecto

- Usar Server Components por defecto.
- Usar `"use client"` solo cuando haya estado, eventos, hooks de cliente, browser APIs, `framer-motion`, `useTranslations`, `useLocale` o interacción real.
- No convertir layouts, páginas o secciones completas en Client Components si solo una parte necesita interactividad.
- Mantener las páginas de marketing, servicios, proyectos y blog lo más estáticas posible.
- Usar `generateMetadata` en páginas internas.
- Considerar `generateStaticParams` en rutas dinámicas como proyectos o blog cuando los datos sean estáticos.
- Evitar waterfalls de data fetching.
- Evitar pasar props grandes desde Server Components hacia Client Components.
- Usar `next/image` para imágenes.
- Usar `next/link` para navegación interna.
- Mantener links internos localizados con `/${locale}/ruta`.

## 3. Sistema visual — reglas no negociables

> Esta sección resume las reglas no negociables. El detalle completo de tokens, voz de marca,
> componentes (`Button`, `Badge`, `Input`, `SectionLabel`, `SpotlightCard`) y su estado real de
> implementación vive en [design.md](design.md) — leerlo antes de tocar cualquier cosa visual.

El agente **nunca** debe romper estas reglas al generar o modificar código visual.

### Paleta

| Token           | Valor                                | Uso                                     |
| --------------- | ------------------------------------ | --------------------------------------- |
| `primary1`      | `#A1E233`                            | Acento principal, CTAs, labels activos  |
| `toggle active` | `#B7FF1F`                            | Estado activo del toggle de idioma      |
| `bg dark`       | `#0a0a0a`                            | Fondo base oscuro (dominante)           |
| `bg light`      | `#ffffff`                            | Fondo base claro (definido, poco usado) |
| `surface`       | `bg-neutral-900`                     | Cards y superficies elevadas            |
| `input`         | `bg-neutral-950`                     | Campos de formulario                    |
| `border subtle` | `border-white/5` a `border-white/15` | Bordes de componentes                   |
| `text dark`     | `#171717`                            | Texto en fondos claros                  |
| `text light`    | `#ededed`                            | Texto en fondos oscuros                 |

### Tipografía

- Fuentes importadas: `Geist` y `Geist_Mono` vía `next/font` en `layout.js`
- En la práctica el `body` usa `Helvetica, sans-serif` desde `globals.css` — esto manda
- Titulares: escalas `text-4xl` → `text-6xl`, peso `font-medium` o `font-semibold`
- Labels de sección: uppercase pequeño con icono, componente `TitleSection`

### Efectos y motion

- Animaciones de entrada: preferir `y: 40 → 0` + `opacity: 0 → 1` con easing `[0.16, 1, 0.3, 1]`
- Duraciones típicas: `0.7s` (rápido), `0.9s` (estándar), `1.2s` (épico)
- Trigger de scroll: `useInView` con `once: true` y `margin: "-10%"`
- Stagger entre hijos: `0.08s` a `0.15s`
- **Nunca** usar `ease: "linear"` para transiciones de UI

### Layout y spacing

- Secciones: `py-24` como ritmo vertical base
- Contenedor horizontal: `px-4 md:px-5 lg:px-10 xl:px-24`
- Max width: `max-w-screen-2xl mx-auto`
- Navbar: sticky, `backdrop-blur-md`, borde translúcido

### Radios recurrentes

`rounded-full`, `rounded-md`, `rounded-lg`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl`, `rounded-[27px]`

---

## 4. Arquitectura y convenciones

### Estructura de directorios relevante

```
src/
  app/
    [locale]/
      globals.css        # tema global
      layout.js          # layout por locale + metadata
      page.js            # ensamblado de la landing
    components/
      (common)/          # Navbar, Footer, TitleSection
      *.jsx              # componentes compartidos
    sections/            # bloques de la home
    assets/              # imágenes, logos, banderas
  data/                  # fuentes de verdad estáticas (ej: projects.js)
  i18n/
    navigation.js
    request.js
    routing.js
  lib/
    utils.js             # helper cn()
    animations.js        # variantes de Framer Motion (si existe)
  middleware.js
messages/
  en.json
  es.json
public/
  projects/              # assets de proyectos
```

### Convenciones de código

- Textos visibles **nunca** hardcodeados en componentes — siempre en `messages/`
- IDs de sección son la fuente de verdad para navegación interna (`#services`, `#tools`, `#about`, `#faqs`, `#contact`, `#projects`)
- Componentes client: `"use client"` explícito en la primera línea
- Alias de importación: `@/*` apunta a `src/`
- El helper `cn()` está en `src/lib/utils.js` — usarlo para componer clases condicionales
- Una sección = un archivo en `src/app/sections/`
- La landing se ensambla en `page.js` importando secciones en orden

### Metadata

- `title` base: `Synttek`
- `description` base: `Agencia de desarrollo web`
- Páginas internas extienden con `generateMetadata`

---

## 5. Internacionalización

- Locales: `en` y `es`. Default: `en`
- Todas las rutas viven bajo `src/app/[locale]/`
- Textos en `messages/en.json` y `messages/es.json`, organizados por namespace (`Navigation`, `Hero`, `Services`, `Projects`, etc.)
- Acceso en server components: `getTranslations({ locale, namespace })`
- Acceso en client components: `useTranslations("Namespace")`
- Locale actual en client: `useLocale()`
- Al crear cualquier texto nuevo, añadirlo **en ambos archivos** simultáneamente
- Links internos siempre prefijados: `/${locale}/ruta`

---

## 6. Skills disponibles

El agente debe invocar los skills relevantes **antes** de ejecutar cada tarea. No asumir conocimiento previo del skill: leerlo siempre antes de escribir código relacionado.

### Skills de performance y arquitectura

| Skill                   | Prioridad | Cuándo usarlo                                                                                                                                                                                                                           |
| ----------------------- | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react-best-practices`  |   Crítica | Usar antes de crear, modificar o refactorizar componentes React/Next. Obligatorio para revisar `"use client"`, Server Components, waterfalls, bundle size, imports pesados, renders innecesarios, data fetching y optimización general. |
| `vercel-optimize`       |   Crítica | Usar cuando el proyecto esté deployado en Vercel o cuando se quiera mejorar rendimiento real en producción. Revisar rutas lentas, caché, ISR, middleware, imágenes, build time, uso de funciones y costos.                              |
| `web-design-guidelines` |      Alta | Usar para auditar UI, accesibilidad, performance visual, imágenes, formularios, navegación, animaciones, responsividad, i18n y buenas prácticas generales de interfaz.                                                                  |
| `composition-patterns`  |     Media | Usar al refactorizar componentes grandes, APIs con muchos props booleanos, cards reutilizables, layouts repetidos, providers o componentes difíciles de mantener.                                                                       |

### Skills visuales y de UX

| Skill                    | Prioridad | Cuándo usarlo                                                                                                                                             |
| ------------------------ | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framer-motion-animator` |      Alta | Cualquier tarea que involucre animaciones, transiciones, scroll effects, gestos o motion design. Usar siempre junto con las reglas de motion performance. |
| `frontend-design`        |      Alta | Al crear o rediseñar componentes, secciones o páginas nuevas donde la calidad visual sea crítica.                                                         |
| `ui-ux-pro-max`          |      Alta | Al definir layouts, jerarquía visual, flujos de usuario, interacción, navegación o decisiones de UX.                                                      |
| `seo-audit`              |      Alta | Al tocar metadata, estructura de headings, schema, canonical, hreflang, sitemap, performance de imágenes o páginas nuevas.                                |

### Reglas de invocación

Leer el skill **antes** de escribir cualquier código relacionado con esa área.

Si una tarea toca múltiples áreas, leer todos los skills relevantes. Ejemplos:

- Nueva sección animada de la home: `frontend-design` + `ui-ux-pro-max` + `framer-motion-animator` + `react-best-practices` + `web-design-guidelines`.
- Optimización general de la landing: `react-best-practices` + `web-design-guidelines` + `seo-audit`.
- Revisión post-deploy en Vercel: `vercel-optimize` + `react-best-practices`.
- Refactor de componentes repetidos: `composition-patterns` + `react-best-practices`.
- Nueva página interna de servicio: `seo-audit` + `react-best-practices` + `frontend-design`.
- Cambio de animaciones: `framer-motion-animator` + `react-best-practices` + `web-design-guidelines`.

### Checklist obligatorio de performance

Antes de aprobar cualquier cambio visual o funcional, el agente debe revisar:

1. ¿Este archivo realmente necesita `"use client"`?
2. ¿Se puede mantener como Server Component?
3. ¿Estoy agregando JavaScript al bundle inicial?
4. ¿Estoy importando una librería pesada en una ruta crítica?
5. ¿Hay componentes que deberían cargarse con `next/dynamic`?
6. ¿La imagen principal afecta el LCP?
7. ¿Todas las imágenes usan `next/image`?
8. ¿Las imágenes tienen tamaños definidos para evitar CLS?
9. ¿Las animaciones usan `transform` y `opacity` en lugar de propiedades que disparan layout?
10. ¿La sección sigue siendo mobile-first?
11. ¿Hay textos visibles fuera de `messages/`?
12. ¿La ruta puede seguir siendo estática?
13. ¿El cambio puede empeorar LCP, INP, CLS, bundle size o hydration?

### Reporte final obligatorio del agente

Cuando la tarea tenga impacto en performance, el agente debe terminar con un mini reporte:

```md
## Performance report

- Skills usados:
- Archivos modificados:
- Riesgo de performance:
- Qué mejora:
  - LCP:
  - INP:
  - CLS:
  - Bundle size:
  - Hydration:
  - Caching:
- Validaciones ejecutadas:
  - npm run lint:
  - npm run build:
  - Lighthouse / PageSpeed si aplica:
- Observaciones:
```

## 7. Documentación de features

Cada feature compleja tiene su propio archivo `.md` con especificaciones detalladas. Leer el archivo correspondiente antes de trabajar en esa feature.

| Feature                                                                                                           | Archivo       | Estado                        |
| ----------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------- |
| Sección Projects (landing) + páginas `/projects` y `/projects/[id]`                                               | `proyects.md` | ✅ Documentado                |
| Synttek Design System (tokens, voz de marca, componentes `Button`/`Badge`/`Input`/`SectionLabel`/`SpotlightCard`) | `design.md`   | ✅ Documentado e implementado |
| Blog (`/blogs`, `/blogs/[slug]`) + guía para publicar posts nuevos                                                | `blog.md`     | ✅ Documentado e implementado |

> A medida que se agreguen nuevas features, registrarlas en esta tabla con su archivo y estado.

---

## 8. Reglas de trabajo del agente

### Antes de cada tarea

1. Leer este archivo (`Agents.md`) si no está en contexto
2. Leer el `.md` de la feature específica si existe
3. Invocar los skills relevantes de la sección 6
4. Verificar la estructura actual del proyecto si se van a mover o crear archivos

### Durante la ejecución

- **Nunca romper el sistema visual** descripto en la sección 3
- **Siempre respetar la convención de internacionalización** — todo texto en `messages/`
- **Mantener la coherencia de naming** — la marca es `Synttek`, sin variantes
- Al crear componentes nuevos: seguir el patrón `"use client"` / server component según corresponda
- Al agregar páginas: incluir `generateMetadata` y considerar `generateStaticParams` si es ruta dinámica
- Tailwind v4: no usar `tailwind.config.js` para tokens nuevos — definirlos en `globals.css`
- `next/image` para toda imagen — nunca `<img>` nativo
- Al usar `framer-motion`: importar de `"framer-motion"`, no de `"motion"`

### Calidad del output

- El resultado visual tiene que ser **digno de Awwwards**: único, animado, cohesivo
- Ningún componente nuevo debe verse genérico o "de template"
- Las animaciones deben tener intención — cada motion comunica algo
- Responsividad obligatoria: mobile-first, breakpoints `md` y `lg` como mínimo
- El cursor custom de proyectos (`ProjectCursor`) debe desactivarse en dispositivos táctiles (`@media (pointer: coarse)`)

### Lo que el agente NO debe hacer

- Hardcodear textos visibles fuera de `messages/`
- Crear archivos CSS separados — los estilos van en el componente via Tailwind o `globals.css`
- Usar `<img>` en lugar de `next/image`
- Romper la estructura de rutas localizadas `[locale]`
- Inventar datos de contacto reales (Instagram, LinkedIn, teléfono son placeholders)
- Escribir `Synttek` o `SYNTTEK` en ningún archivo
- Usar `ease: "linear"` en transiciones de UI
- Añadir dependencias nuevas sin mencionarlo explícitamente al usuario
