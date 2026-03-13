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

## 3. Sistema visual — reglas no negociables

El agente **nunca** debe romper estas reglas al generar o modificar código visual.

### Paleta
| Token | Valor | Uso |
|---|---|---|
| `primary1` | `#A1E233` | Acento principal, CTAs, labels activos |
| `toggle active` | `#B7FF1F` | Estado activo del toggle de idioma |
| `bg dark` | `#0a0a0a` | Fondo base oscuro (dominante) |
| `bg light` | `#ffffff` | Fondo base claro (definido, poco usado) |
| `surface` | `bg-neutral-900` | Cards y superficies elevadas |
| `input` | `bg-neutral-950` | Campos de formulario |
| `border subtle` | `border-white/5` a `border-white/15` | Bordes de componentes |
| `text dark` | `#171717` | Texto en fondos claros |
| `text light` | `#ededed` | Texto en fondos oscuros |

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

El agente debe invocar los skills relevantes **antes** de ejecutar cada tarea. No asumir conocimiento previo del skill — leerlo siempre.

| Skill | Cuándo usarlo |
|---|---|
| `framer-motion-animator` | Cualquier tarea que involucre animaciones, transiciones, scroll effects, gestos o motion design |
| `frontend-design` | Al crear o rediseñar componentes, secciones o páginas nuevas donde la calidad visual es crítica |
| `ui-ux-pro-max` | Al definir layouts, jerarquía visual, flujos de usuario o tomar decisiones de UX |
| `seo-audit` | Al tocar metadata, estructura de headings, performance de imágenes, o agregar páginas nuevas |

### Regla de invocación
Leer el skill **antes** de escribir cualquier código relacionado con esa área. Si una tarea toca múltiples áreas (ej: nueva sección animada con SEO), leer todos los skills relevantes antes de empezar.

---

## 7. Documentación de features

Cada feature compleja tiene su propio archivo `.md` con especificaciones detalladas. Leer el archivo correspondiente antes de trabajar en esa feature.

| Feature | Archivo | Estado |
|---|---|---|
| Sección Projects (landing) + páginas `/projects` y `/projects/[id]` | `projects.md` | ✅ Documentado |

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