# design.md — Synttek Design System (importado desde Claude Design)

> Documenta el **Synttek Design System**, importado vía MCP desde el proyecto de Claude Design
> [`Synttek Design System`](https://claude.ai/design/p/5c3b9f67-fc43-4853-8412-65f514ce8a11)
> (`projectId: 5c3b9f67-fc43-4853-8412-65f514ce8a11`, tipo `PROJECT_TYPE_DESIGN_SYSTEM`). Ese proyecto fue
> generado a partir de este mismo repo (`github.com/NicoEspin/Syntek`) y lo formaliza: le da nombre a los
> tokens que ya existían como valores sueltos, agrega un acento secundario (violeta) y fija por escrito la
> voz de marca. Este archivo es el mapeo entre ese spec y lo que **realmente existe en este código** —
> amplía la sección 3 de [AGENTS.md](AGENTS.md) y queda registrado en su tabla de features (§7).

---

## Índice

1. [Identidad y voz de marca](#1-identidad-y-voz-de-marca)
2. [Tokens de color](#2-tokens-de-color)
3. [Tipografía](#3-tipografía)
4. [Spacing, radios, bordes y sombras](#4-spacing-radios-bordes-y-sombras)
5. [Motion](#5-motion)
6. [Iconografía y elementos de marca](#6-iconografía-y-elementos-de-marca)
7. [Componentes](#7-componentes)
8. [Estado real de implementación](#8-estado-real-de-implementación)
9. [Decisiones de alcance — qué NO se tocó y por qué](#9-decisiones-de-alcance--qué-no-se-tocó-y-por-qué)

---

## 1. Identidad y voz de marca

- **Marca**: `Synttek` (doble t) — siempre. Nunca `Syntek` ni `SYNTEK`. Ya era la regla en
  [AGENTS.md](AGENTS.md) §1 y ya es así en todo el código vivo (`SITE_NAME` en `src/lib/site.js`,
  `messages/en.json`, `messages/es.json`). La inconsistencia que detectó el spec importado vivía solo en
  documentación (`README.md`, `proyects.md`) — corregida en este cambio, ver §8.
- **Posicionamiento**: agencia boutique de desarrollo de software, Córdoba, Argentina. *"No resolvemos
  problemas, creamos soluciones."*
- **Idiomas**: español (voseo argentino: *"Contanos", "querés", "¿Cómo te llamás?"*) e inglés, en paralelo,
  nunca auto-detectados.
- **Voz**: directa, técnica sin ser fría, declarativa, un poco contraria. El recurso retórico recurrente es
  el reframe **"No es X. Es Y."** (*"La estética no es decoración — es persuasión"*, *"No vendemos paquetes
  vacíos"*, *"Diseñamos para negocio, no para Dribbble"*).
- **CTAs** siempre específicos y atados a un paso real: *"Comencemos", "Solicitar una propuesta", "Contanos
  tu proyecto"* — nunca genéricos tipo "Get Started".
- **Casing**: sentence case en titulares y body. UPPERCASE solo para labels pequeños trackeados (eyebrows,
  nav). Números de índice en mono (`01`, `02`).
- **Evitar**: innovador/innovative, premium (salvo diferenciador real), revolucionario, solución integral,
  framing de IA como buzzword.
- **Sin emoji.** El único glyph decorativo recurrente es el asterisco de 8 puntas **✸** (`U+2738`) en lima,
  para puntuar contenido looping/repetido (el marquee de `CallToAction`).

Verificado contra `messages/es.json`: ya cumple — voseo en todos los namespaces, los CTAs y los ejemplos de
"No X, Y" del spec aparecen casi literales en `Services`, `ServicesIndexPage` y `About`. No se modificó
ningún texto.

---

## 2. Tokens de color

Tema oscuro únicamente (no hay theme claro en producción).

| Token | Valor | Uso |
|---|---|---|
| `--color-background` / `bg-base` | `#0A0A0A` | Fondo dominante de toda la página |
| `bg-elevated` | `#060606` | Navbar / overlays |
| `neutral-900` | `#171717` | Superficie de cards (ya es el default de Tailwind) |
| `neutral-950` | `#0a0a0a` | Campos de formulario (ya es el default de Tailwind) |
| `neutral-800` | `#262626` | Borde de `SpotlightCard` (ya es el default de Tailwind) |
| `--color-fg-1` | `#EDEDED` | Texto primario |
| `--color-fg-2` | `rgba(237,237,237,.72)` | Texto secundario fuerte |
| `--color-fg-3` | `rgba(237,237,237,.45)` | Labels secundarios / inactivo |
| `--color-fg-4` | `rgba(237,237,237,.28)` | Labels tenues, fantasmas |
| `--color-fg-muted` | `rgba(237,237,237,.18)` | Micro-texto, divisores sobre texto |
| `--color-accent` (= `--color-primary1`) | `#A1E233` | **El** acento — CTAs, estados activos, links, el ✸ |
| `--color-accent-hover` | `#B6F53D` | Hover sobre superficies de acento sólido |
| `--color-accent-press` | `#8FCC2A` | Pressed |
| `--color-on-accent` | `#0A0A0A` | Texto/ícono sobre fondo de acento |
| `--color-violet` | `#864FFE` | **Acento secundario** — énfasis decorativo, gradientes lima→violeta, tinte de categoría. Nunca en CTAs primarios |
| `--color-violet-hover` / `-press` / `-deep` | `#9466FF` / `#6E3FE0` / `#614694` | Variantes de violeta |
| `--color-on-violet` | `#EDEDED` | Texto/ícono sobre fondo violeta |

La jerarquía de texto se construye **por opacidad**, no con tonos nuevos. La escala de neutros ya coincidía
1:1 con la paleta default de Tailwind (`neutral-800/900/950`), así que no se redeclaró — solo se documenta
acá. Washes traslúcidos de acento/violeta (`accent-08/15/25/35`, `violet-08/15/25/35`) se siguen expresando
con el modificador de opacidad de Tailwind (`bg-accent/8`, `border-violet/25`, etc.) en vez de tokens
nuevos, porque Tailwind ya resuelve eso automáticamente sobre cualquier color del theme.

El violeta es **net-new**: no existía ningún uso de un segundo acento antes de este cambio. Queda
disponible como token pero no se forzó en ninguna sección — el spec lo define como decorativo/opcional,
no como reemplazo del lima.

---

## 3. Tipografía

- Familia única: **Geist Sans** (next/font, ya cargada en `layout.js`), estirada en un rango extremo: negro
  900 a 60–88px para display, hasta uppercase trackeado de 10–11px para labels. Body en **light (300)**.
  **Geist Mono** para datos/labels técnicos e índices.
- El principio de pairing es **escala + peso**, nunca familia (no hay una segunda tipografía serif/display).
- **Bug conocido, corregido en este cambio**: `globals.css` forzaba `font-family: Helvetica, sans-serif` en
  `body`, pisando la fuente que `layout.js` ya cargaba. Ahora usa `var(--font-sans)` → Geist.

| Token | Valor | Uso |
|---|---|---|
| `--text-display-xl` | `clamp(2.4rem, 6vw, 5.5rem)` | Headline del hero |
| `--text-display-lg` | `clamp(2.4rem, 6.5vw, 6.5rem)` | Hero de sección / About |
| `--text-display-md` | `clamp(2.2rem, 4.5vw, 4rem)` | Heading de sección |
| `--text-display-sm` | `clamp(1.8rem, 3vw, 2.5rem)` | Sub-sección |
| `--leading-display` | `0.95` | Line-height de los display de arriba |
| `--tracking-display` | `-0.02em` | Letter-spacing de los display de arriba |
| `--tracking-label` | `0.18em` | Labels uppercase / nav |
| `--tracking-eyebrow` | `0.22em` | Eyebrows |
| `--tracking-max` | `0.28em` | Eyebrows más anchos |

Estos valores ya estaban hardcodeados como clases arbitrarias casi idénticas en `Hero.jsx`, `About.jsx` y
`Contact.jsx` (`text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] tracking-tight`, etc.). Ahora son utilidades
con nombre (`text-display-xl leading-display tracking-display`). El headline de `Hero.jsx` (`text-display-xl`)
y el de `About.jsx` (`text-display-lg`) ya las consumen completas — su `clamp()` coincidía exacto con uno de
los cuatro tamaños. El de `Contact.jsx` usa un `clamp(2rem,5.5vw,5.5rem)` propio que no coincide con ningún
tamaño de la escala, así que mantiene su tamaño arbitrario y solo adoptó `leading-display`/`tracking-display`
— ver §8.

---

## 4. Spacing, radios, bordes y sombras

- **Spacing**: escala base de 4px. La escala de Tailwind (`--spacing: 0.25rem`) ya produce exactamente los
  mismos números que el spec (`py-24` = 96px, `py-28` = 112px) — no requirió ningún cambio.
- **Radios**: `rounded-3xl` (24px) es **el** radio de card. Botones/badges/pills usan `rounded-full`.
  Imágenes y separadores de sección son **sharp (0px)** — nunca redondeados. `rounded-3xl` y `rounded-full`
  de Tailwind ya coinciden exactamente con el spec, así que no se tocó la escala de radios.
  - ⚠️ El spec interno de `sm/md/lg/xl` (`6/8/12/20px`) está desplazado un paso respecto al default de
    Tailwind (`4/6/8/12px` para esos mismos nombres). **No se redefinió** `--radius-sm/md/lg/xl` en
    `@theme`, porque eso cambiaría visualmente cualquier otro uso de esas clases en el sitio. Donde haga
    falta el radio exacto del spec (ej. `radius-field` = 12px) se usa el nombre Tailwind que da ese pixelaje
    (`rounded-xl` = 12px), no se inventan tokens nuevos para esto.
- **Bordes**: profundidad = hairlines de 1px, nunca shadow pesado. Escalera: `white/5–6` (default) →
  `white/10` (hover) → `white/15` (focus/énfasis) → `accent/25` (acento). Ya es exactamente el patrón que
  usa todo el sitio (`border-white/5`, `border-white/10`, etc. — confirmado en `AGENTS.md` §3).
- **Sombras**: casi inexistentes a propósito. Las dos únicas sancionadas:

| Token | Valor | Uso |
|---|---|---|
| `--shadow-float` | `0 24px 60px rgba(0,0,0,.55)` | Mockups draggables del hero |
| `--shadow-nav` | `0 20px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.04)` | Navbar al hacer scroll |

`shadow-float` reemplaza el valor arbitrario `shadow-[0_24px_60px_rgba(0,0,0,0.55)]` que estaba repetido
dos veces en `Hero.jsx` (CodeCard y DashboardCard) — ver §8.

---

## 5. Motion

- Easing de la casa: **`cubic-bezier(0.16, 1, 0.3, 1)`** ("premium"). Nunca `ease: "linear"`.
- Duraciones: `200ms` (rápido/fast) · `300ms` (estándar/base) · `500ms` (lento/slow).
- Patrones: clip-reveal de headlines, stagger-in al hacer scroll (`opacity 0→1, y +30→0`), underline lima
  deslizante en nav activo, spotlight de cursor en cards, mockups del hero draggables (spring), marquee
  infinito (30s, desacelera al hover).
- `useInView({ once: true, margin: "-10%" })` para triggers de scroll; stagger entre hijos de `0.08–0.15s`.

Todo esto ya está implementado en JS vía `framer-motion` en cada sección (el array `[0.16, 1, 0.3, 1]` se
repite como constante `ease` en `Hero.jsx`, `About.jsx`, `Contact.jsx`, etc.). Lo nuevo es que ahora también
existe como utilidad CSS (`--ease-premium`, `--ease-subtle`) para los casos que no pasan por
`framer-motion` — los componentes nuevos (`Button`, `Input`) ya la usan.

---

## 6. Iconografía y elementos de marca

- **Íconos de interfaz**: [Lucide](https://lucide.dev) (`lucide-react`), trazo ~1.5–2px, estilo outline. Ya
  es la librería usada en todo el repo.
- **Logos de marca/tech/social**: SVGs reales de cada vendor en `src/app/assets` — nunca redibujados.
- **Flecha diagonal** (`↗`, path `M1 7L7 1M7 1H2M7 1V6`): se agrega a los CTAs principales. Ya está en el
  botón primario del Hero y ahora también en el componente `Button` nuevo (prop `arrow`).
- **El asterisco ✸** (`&#10040;`, `U+2738`): la única marca decorativa recurrente, en lima, para contenido
  looping (`CallToAction`) y para el label "pill" de sección. Se usa inline donde hace falta — no se creó
  una clase CSS global (`.syn-asterisk`) porque hoy solo hay un consumidor real (`TitleSection`); si aparece
  un segundo uso, vale la pena extraerla.
- **Sin emoji. Sin icon font.**

---

## 7. Componentes

Componentes del design system y su contraparte en este repo (Tailwind + `cn()`, no inline styles — para
seguir la convención del resto del código):

| Componente del spec | Variantes / props | Archivo en este repo |
|---|---|---|
| `Button` | `primary · secondary · ghost · accentOutline`, `sm · md · lg`, `arrow`, `href` | [`src/app/components/Button.jsx`](src/app/components/Button.jsx) — **nuevo** |
| `Badge` | `neutral · accent · solid · outline`, `dot`, `pulse` | [`src/app/components/Badge.jsx`](src/app/components/Badge.jsx) — **nuevo** |
| `Input` | `multiline`, `label` | [`src/app/components/Input.jsx`](src/app/components/Input.jsx) — **nuevo** |
| `SectionLabel` (variant `pill`) | — | [`src/app/components/(common)/TitleSection.jsx`](src/app/components/(common)/TitleSection.jsx) — **reconciliado** |
| `SpotlightCard` | `spotlightColor`, `className` | [`src/app/components/SpotlightCard.jsx`](src/app/components/SpotlightCard.jsx) — **reconciliado y puesto en uso** |
| `Card` | — | no se creó — ver §9 |

---

## 8. Estado real de implementación

| Pieza | Estado | Dónde | Nota |
|---|---|---|---|
| Naming `Synttek` | ✅ | `src/lib/site.js`, `messages/*.json` ya correctos · `README.md`, `proyects.md` corregidos | `proyects.md` tenía una regla que decía literalmente lo contrario ("usar `Syntek` sin doble t") — corregida |
| Voz / voseo / CTAs / reframe "No X, Y" | ✅ ya cumplía | `messages/es.json`, `messages/en.json` | Verificado contra el spec, sin cambios de copy |
| Paleta base (bg/fg/accent lima) | ✅ ya cumplía | hardcodeado en cada sección + `--color-primary1` | Sin cambios — coincidía exacto |
| Jerarquía de texto por opacidad (`fg-1..4`) | ✅ formalizado | `globals.css` → `--color-fg-*` | Antes solo `text-white/72` ad-hoc; ahora también disponible con nombre |
| Acento secundario violeta | ⚠️ token nuevo, sin adoptar | `globals.css` → `--color-violet*` | Disponible para uso futuro; el spec lo marca como opcional/decorativo |
| Escala display + tracking/leading | ✅ formalizado y adoptado | `globals.css` + headline de `Hero.jsx` (`text-display-xl`), `About.jsx` (`text-display-lg`), `Contact.jsx` (solo `leading-display`/`tracking-display`) | El tamaño de `Contact.jsx` es un `clamp()` propio que no coincide con ningún token de la escala — se dejó intacto |
| Bug de Helvetica en `body` | ✅ corregido | `globals.css` | Pasa a `var(--font-sans)` → Geist |
| Easing "premium" / shadows | ✅ formalizado y adoptado | `globals.css` + `Hero.jsx` (shadow-float) + `Button`/`Input` nuevos | — |
| `Button` / `Badge` / `Input` | ⚠️ nuevos, disponibles — no retro-adoptados | `src/app/components/*.jsx` | Los CTAs/badges/inputs existentes (Hero, Contact, Footer) son piezas a medida con shimmer/drag/EmailJS ya pulidas — no se reemplazaron para no arriesgar una regresión visual. Usar los componentes nuevos para trabajo nuevo |
| `SectionLabel` (pill) | ✅ reconciliado | `TitleSection.jsx` | Ícono `Sparkles` (lucide) reemplazado por el glyph ✸ canónico; borde y tracking ajustados al spec |
| `SpotlightCard` | ✅ reconciliado y puesto en uso | `SpotlightCard.jsx` + `About.jsx` | Color default de blanco → lima; estaba sin ningún uso real en el sitio — ahora reemplaza el card estático de los "Pilares" en About (`rounded-2xl` → `rounded-3xl`, el radio de card correcto) |
| Guidelines de logo / asterisco / iconografía | ✅ documentado | §6 de este archivo | No requirió cambios de código más allá de `TitleSection` |

---

## 9. Decisiones de alcance — qué NO se tocó y por qué

- **No se retrofitearon** los CTAs de `Hero`/`Contact`/`Footer`, los badges hand-rolled del Hero
  (eyebrow, "En vivo", deltas de métricas) ni el form de `Contact` a los componentes nuevos. Ya cumplen el
  spec visualmente (mismos colores, radios, tipografía) pero tienen shimmer, drag y estados de EmailJS
  hechos a mano con `framer-motion` — reemplazarlos arriesgaba una regresión visual en piezas ya pulidas sin
  pedido explícito de hacerlo.
- **No se forzó** el acento violeta en ninguna sección existente — el spec lo define como secundario/
  opcional, no como reemplazo del lima.
- **No se creó `Card.jsx`**: no se detectó un caso real que lo necesite hoy; el patrón
  "neutral-900 + hairline + rounded-3xl" ya se resuelve con clases Tailwind directas donde aparece.
- **No se redefinió** la escala de radios (`rounded-sm/md/lg/xl`) de Tailwind a los valores del spec interno
  pese a estar desplazada un paso, porque eso habría cambiado el tamaño de esas clases en *todo* el sitio,
  no solo en lo nuevo.
- **No se tocó el resto de `proyects.md`** (ejemplos de copy con `Syntek` suelto en casos de uso ilustrativos)
  — es la documentación de otra feature ya implementada; solo se corrigió la regla de naming que
  contradecía directamente a este archivo.
