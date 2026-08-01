# CLAUDE.md — Contexto de agente para la landing de Synttek

> Fuente de verdad para Claude Code. Leer este archivo completo antes de ejecutar cualquier tarea.
> Para features específicas, leer los `.md` listados en la sección 7.

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

- **Nombre correcto**: `Synttek` — siempre con esta ortografía. Nunca `Syntek`, nunca `SYNTTEK`.
- **Tipo**: landing page de agencia digital + páginas internas.
- **Audiencia**: dueños/as de negocios locales en crecimiento que ya venden pero tienen su presencia digital improvisada. No son perfiles tech.
- **Propuesta de Synttek**: no "hacer páginas web" — ordenar la presencia digital para que el negocio capture más consultas, se vea profesional y dependa menos de procesos manuales.
- **Tono**: profesional, contemporáneo, confiante. Español rioplatense. Sin tecnicismos en el copy visible.
- **Color de marca**: `#A1E233` (verde neón). Es el único color de acción del sistema.
- **Idiomas activos**: español (`es`, locale por defecto) e inglés (`en`).
- **Objetivo visual**: nivel Awwwards — efectos que sorprendan sin ser ruido, animaciones con intención.

---

## 2. Stack y entorno

### Dependencias

```json
{
  "next": "^15.5.12",
  "react": "^19.0.0",
  "framer-motion": "^12.10.4",
  "motion": "^12.15.0",
  "next-intl": "^4.1.0",
  "lucide-react": "^0.511.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.0",
  "@emailjs/browser": "^4.4.1",
  "react-toastify": "^11.0.5"
}
```

### Reglas críticas del stack

- **Animaciones**: usar siempre `"framer-motion"`, nunca el package `"motion"` (aunque esté en deps)
- **Estilos**: Tailwind CSS v4 — config en `@theme` dentro de CSS. **Sin `tailwind.config.js`**
- **Imágenes**: `next/image` siempre. Nunca `<img>` nativo
- **Navegación**: `next/link` para links internos
- **Clases condicionales**: helper `cn()` en `src/lib/utils.js` (combina `clsx` + `tailwind-merge`)
- **Nuevas dependencias**: mencionar explícitamente al usuario antes de instalar cualquiera

### Scripts

```bash
npm run dev      # desarrollo con Turbopack
npm run build    # build de producción
npm run start    # servidor de producción
npm run lint     # ESLint 9
```

### Variables de entorno requeridas

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
```

---

## 2.1 Reglas de Next.js 15 (App Router)

- **Server Components por defecto**. Agregar `"use client"` solo cuando haya: estado, eventos del browser, hooks de cliente, `framer-motion`, `useTranslations`, `useLocale` o browser APIs.
- No convertir layouts o secciones enteras en Client Components si solo una parte necesita interactividad.
- Páginas de marketing: mantenerlas lo más estáticas posible.
- Páginas internas: incluir `generateMetadata`.
- Rutas dinámicas con datos estáticos: considerar `generateStaticParams`.
- No crear waterfalls de data fetching.
- No pasar props grandes de Server → Client Components.
- Links internos siempre prefijados: `/${locale}/ruta`.

---

## 3. Sistema visual — reglas no negociables

> El detalle completo de tokens, componentes (`Button`, `Badge`, `Input`, `SectionLabel`, `SpotlightCard`) y estado de implementación vive en `design.md`. Leerlo antes de tocar cualquier cosa visual.

### Paleta de colores

| Token / uso          | Valor                                 |
| -------------------- | ------------------------------------- |
| Acento principal     | `#A1E233` (`--color-accent`)          |
| Acento hover         | `#B6F53D` (`--color-accent-hover`)    |
| Acento press         | `#8FCC2A` (`--color-accent-press`)    |
| Texto sobre acento   | `#0A0A0A` (`--color-on-accent`)       |
| Acento secundario    | `#864FFE` (`--color-violet`)          |
| Fondo base           | `#0A0A0A` (bg-background)             |
| Superficie (cards)   | `bg-neutral-900`                      |
| Input                | `bg-neutral-950`                      |
| Texto principal      | `#EDEDED` (`--color-fg-1`)            |
| Texto secundario     | `rgba(237,237,237,0.72)` (fg-2)       |
| Texto terciario      | `rgba(237,237,237,0.45)` (fg-3)       |
| Borde sutil          | `border-white/5` a `border-white/15`  |

### Tipografía

- **Fuentes**: `Geist` (sans) y `Geist_Mono` (mono) vía `next/font/google` en `layout.js`
- El `body` usa `Helvetica, sans-serif` desde `globals.css` — esto manda en producción
- **Escalas display** (usar variables, no valores hardcodeados):
  ```css
  --text-display-xl: clamp(2.4rem, 6vw, 5.5rem)
  --text-display-lg: clamp(2.4rem, 6.5vw, 6.5rem)
  --text-display-md: clamp(2.2rem, 4.5vw, 4rem)
  --text-display-sm: clamp(1.8rem, 3vw, 2.5rem)
  --leading-display: 0.95
  --tracking-display: -0.02em
  ```
- Titulares: peso `font-medium` o `font-semibold`
- Labels de sección: uppercase con icono, componente `TitleSection`

### Easings del proyecto (no inventar nuevos)

```css
--ease-premium: cubic-bezier(0.16, 1, 0.3, 1)   /* entradas dramáticas */
--ease-subtle: cubic-bezier(0.4, 0, 0.2, 1)      /* movimientos continuos */
```

En JS para framer-motion:
```js
const EASE_PREMIUM = [0.16, 1, 0.3, 1]
const EASE_SUBTLE  = [0.4, 0, 0.2, 1]
```

### Motion — reglas base

- Entradas: `y: 28 → 0` + `opacity: 0 → 1` con `EASE_PREMIUM`
- Duraciones: `0.7s` (rápido), `0.9s` (estándar)
- Trigger: `useInView` con `once: true` y `margin: "-8% 0px"`
- Stagger entre hijos: `0.08s`
- **Nunca** `ease: "linear"` en transiciones de UI
- **Solo** animar `transform` y `opacity` — nunca `width`, `height`, `margin`, `padding`
- **Siempre** incluir `useReducedMotion()` para respetar preferencias del usuario

### Layout y spacing

- Secciones: `py-24` como ritmo vertical base
- Contenedor: `px-4 md:px-5 lg:px-10 xl:px-24`
- Max width: `max-w-screen-2xl mx-auto`
- Navbar: sticky, `backdrop-blur-md`, borde translúcido

### Shadows

```css
--shadow-float: 0 24px 60px rgba(0,0,0,0.55)
--shadow-nav: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)
```

---

## 4. Arquitectura y convenciones

### Estructura de directorios

```
src/
  app/
    [locale]/
      globals.css              # @theme Tailwind v4 — fuente de verdad de tokens
      layout.js                # fonts Geist + Geist_Mono, providers globales
      nueva-home/
        page.js                # landing nueva (/es/nueva-home) ← trabajo principal
    components/
      (common)/                # Navbar, Footer, TitleSection
      *.jsx                    # componentes compartidos
    sections/
      home-v2/                 # secciones específicas de la nueva landing
        HeroV2.jsx
        TransformSection.jsx
        SolutionsSection.jsx
        ProcessSection.jsx
        FaqV2.jsx
        CtaFinalV2.jsx
      Projects/                # usado también en la landing
      Services/
      Contact/
    assets/                    # imágenes, logos, banderas
  data/                        # datos estáticos (projects.js, etc.)
  i18n/
    navigation.js
    request.js
    routing.js
  lib/
    utils.js                   # helper cn()
  middleware.js
messages/
  en.json
  es.json
public/
  projects/
```

### Convenciones

- Textos visibles **nunca** hardcodeados — siempre en `messages/en.json` y `messages/es.json`
- IDs de sección para navegación: `#services`, `#tools`, `#about`, `#faqs`, `#contact`, `#projects`
- `"use client"` explícito en la primera línea del archivo
- Alias `@/*` apunta a `src/`
- Una sección = un archivo en `src/app/sections/`
- Tokens nuevos → `globals.css` bajo `@theme`. **Nunca** `tailwind.config.js`
- El helper `cn()` de `src/lib/utils.js` para componer clases condicionales

---

## 5. Internacionalización

- Locales: `es` (default) y `en`
- Rutas bajo `src/app/[locale]/`
- La nueva landing: `src/app/[locale]/nueva-home/page.js`
- Acceso en server components: `getTranslations({ locale, namespace })`
- Acceso en client components: `useTranslations("Namespace")`
- Locale actual en client: `useLocale()`
- Al crear texto nuevo: agregarlo **en ambos** `messages/` simultáneamente
- Links internos: siempre `/${locale}/ruta`

---

## 6. Skills disponibles

Estas skills contienen las reglas, patrones de código y contexto específico del proyecto.
**Invocarlas antes de escribir código en su área correspondiente.**

### Skills de Synttek (específicas de este proyecto)

| Skill | Cuándo invocarla |
|---|---|
| `synttek-landing` | **Siempre primero.** Cualquier tarea en la landing `/es/nueva-home`. Contiene stack, tokens, estructura de archivos y buyer persona. |
| `synttek-motion` | Cualquier animación, efecto de scroll, transición o interacción. Patrones de framer-motion v12 listos para usar. |
| `synttek-copy` | Escribir o revisar cualquier texto visible: headlines, subtítulos, CTAs, bullets, FAQ. |
| `synttek-perf` | Agregar imágenes, componentes, scripts o animaciones nuevas. Auditar performance. Pre-deploy. |

### Combinaciones por tipo de tarea

| Tarea | Skills a invocar |
|---|---|
| Nueva sección animada | `synttek-landing` + `synttek-motion` + `synttek-perf` |
| Reescribir copy de una sección | `synttek-landing` + `synttek-copy` |
| Agregar imagen o asset nuevo | `synttek-landing` + `synttek-perf` |
| Implementar efecto específico | `synttek-landing` + `synttek-motion` |
| Revisar sección completa | `synttek-landing` + `synttek-copy` + `synttek-perf` |
| Auditar antes de un deploy | `synttek-landing` + `synttek-perf` |
| Cualquier duda sobre el proyecto | `synttek-landing` |

### Regla de invocación

Leer el contenido del skill **antes** de escribir cualquier código relacionado con esa área.
Si la tarea toca múltiples áreas, invocar todos los skills relevantes antes de empezar.

---

## 7. Documentación de features

| Feature | Archivo | Estado |
|---|---|---|
| Sección Projects + páginas `/projects` y `/projects/[id]` | `proyects.md` | ✅ Documentado |
| Design System (tokens, componentes, voz de marca) | `design.md` | ✅ Documentado e implementado |
| Blog (`/blogs`, `/blogs/[slug]`) + guía de publicación | `blog.md` | ✅ Documentado e implementado |

> Al agregar nuevas features, registrarlas en esta tabla con su archivo y estado.

---

## 8. Reglas de trabajo del agente

### Antes de cada tarea

1. Leer este archivo si no está en contexto
2. Leer el `.md` de la feature específica si existe (sección 7)
3. Invocar los skills relevantes de la sección 6
4. Verificar la estructura actual del proyecto si se van a mover o crear archivos

### Durante la ejecución

- **Nunca romper el sistema visual** de la sección 3
- **Todo texto visible en `messages/`** — nunca hardcodeado en componentes
- **`framer-motion`** para animaciones, nunca el package `motion`
- **`next/image`** para imágenes, nunca `<img>` nativo
- **Mobile-first obligatorio** — breakpoints `md` y `lg` como mínimo
- **Tailwind v4**: tokens nuevos en `globals.css`, nunca en `tailwind.config.js`
- **La marca es `Synttek`** — sin variantes de ortografía

### Lo que el agente NO debe hacer

- Hardcodear textos visibles fuera de `messages/`
- Crear archivos CSS separados — estilos via Tailwind o en `globals.css`
- Usar `<img>` en lugar de `next/image`
- Romper la estructura de rutas `[locale]`
- Inventar datos de contacto reales (son placeholders)
- Escribir `Syntek` o `SYNTTEK` en ningún archivo
- Usar `ease: "linear"` en transiciones de UI
- Agregar dependencias sin mencionar explícitamente al usuario
- Animar propiedades que no sean `transform` u `opacity`
- Dejar `opacity: 0` en SSR en el H1 del hero o imagen del LCP
- Omitir `useReducedMotion()` en efectos de framer-motion

### Checklist de performance (antes de aprobar cualquier cambio)

1. ¿Este archivo realmente necesita `"use client"`?
2. ¿Estoy agregando JavaScript al bundle inicial innecesariamente?
3. ¿Hay secciones below-the-fold que deberían cargarse con `next/dynamic`?
4. ¿La imagen principal del hero tiene `priority`?
5. ¿Todas las imágenes usan `next/image` con `width`, `height`, `alt` y `sizes`?
6. ¿Las imágenes pesan más de 120kb? → comprimir antes de commitear
7. ¿Las animaciones usan solo `transform` y `opacity`?
8. ¿El H1 y la imagen del LCP son visibles en SSR (`opacity: 1` en el HTML inicial)?
9. ¿El parallax está deshabilitado en mobile (< 768px)?
10. ¿Todos los efectos tienen `useReducedMotion()` como fallback?
11. ¿Los touch targets tienen `min-height: 44px`?
12. ¿El cambio puede empeorar LCP, CLS, INP o bundle size?

### Reporte final en tareas con impacto en performance

```md
## Performance report

- Skills usados:
- Archivos modificados:
- Riesgo de performance: [bajo / medio / alto]
- Impacto esperado:
  - LCP:
  - CLS:
  - INP:
  - Bundle size:
- Validaciones:
  - [ ] npm run lint
  - [ ] npm run build
  - [ ] PageSpeed Insights mobile (si aplica)
- Observaciones:
```
