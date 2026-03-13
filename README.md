# Syntek

Landing page bilingue para la agencia Syntek, construida con Next.js App Router. El proyecto muestra la propuesta comercial de la agencia, sus servicios, stack de trabajo, presentacion del equipo, preguntas frecuentes y un formulario de contacto conectado a EmailJS.

## Estado actual del proyecto

- Landing principal montada en `src/app/[locale]/page.js`.
- Internacionalizacion activa con `next-intl` para ingles y espanol.
- Navegacion one-page con anclas internas y menu mobile animado.
- Sistema visual oscuro con acento lima y varios efectos interactivos ya implementados.
- Formulario de contacto funcional via EmailJS con toasts de estado.

## Features implementadas

### Navegacion y estructura general

- `Navbar` sticky con blur, logo, links a secciones y switch de idioma ES/EN.
- Menu mobile expandible a pantalla completa con animacion de apertura/cierre.
- Navegacion por anclas a `#services`, `#tools`, `#about`, `#faqs` y `#contact`.
- La opcion `Portfolio` existe en traducciones pero el link esta comentado y no hay seccion implementada.

### Internacionalizacion

- Locales soportados: `en` y `es`.
- Locale por defecto: `en`.
- Rutas localizadas bajo `src/app/[locale]`.
- Middleware que redirige y resuelve idioma con `next-intl`.
- Textos centralizados en `messages/en.json` y `messages/es.json`.

### Secciones visibles de la landing

- `Hero`: titulo principal, CTA y dos mockups laterales arrastrables con punteros animados.
- `Introduction`: bloque con texto revelado progresivamente segun scroll.
- `Services`: grilla responsive con cinco servicios reales cargados desde traducciones:
  - Desarrollo Web
  - Ecommerce
  - Branding
  - Diseno UX/UI
  - Diseno Grafico
- `OurTools`: showcase animado de herramientas y tecnologias usadas por la agencia.
- `About`: presentacion del equipo, bios individuales y tres cards conceptuales (`Quien`, `Que`, `Como`).
- `Faqs`: acordeon con 7 preguntas frecuentes.
- `Contact`: datos de contacto, formulario y feedback visual de envio.
- `CallToAction`: marquee horizontal infinito con mensaje de marca.
- `Footer`: firma final con logo SVG e iconos de contacto.

### Contacto y envio de mensajes

- Integracion con `@emailjs/browser`.
- Inicializacion del cliente EmailJS en `useEffect`.
- Envio del formulario con nombre, email y mensaje.
- Estados de UX cubiertos con `react-toastify`: pending, success y error.
- El correo destino actual esta hardcodeado como `synttek@gmail.com`.
- Instagram y LinkedIn muestran placeholders (`Lorem@Ipsum`, `LoremIpsum`) y no perfiles reales.
- El telefono visible tambien esta hardcodeado en la UI.

## Stack real del proyecto

### Runtime y framework

- Next.js `15.3.2`
- React `19`
- React DOM `19`
- App Router

### UI, animacion y estilos

- Tailwind CSS `4`
- `framer-motion`
- `motion`
- `lucide-react`
- `clsx`
- `tailwind-merge`

### Internacionalizacion y formularios

- `next-intl`
- `@emailjs/browser`
- `react-toastify`

### Calidad y tooling

- ESLint 9 con `eslint-config-next`
- Alias `@/*` configurado en `jsconfig.json`
- PostCSS para Tailwind v4

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Variables de entorno necesarias

El formulario depende de estas variables publicas:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
```

Sin estas variables, la seccion de contacto no puede enviar mensajes.

## Estructura relevante

```text
src/
  app/
    [locale]/
      globals.css        # tema global y utilidades CSS
      layout.js          # layout por locale + metadata
      page.js            # ensamblado de la landing
    components/
      (common)/          # Navbar, Footer, TitleSection
      AboutTeamCard.jsx
      GlowingEffect.jsx
      Pointer.jsx
      SpotlightCard.jsx
      TechColumn.jsx
    sections/            # bloques principales de la home
    assets/              # imagenes, banderas, logo y logos de herramientas
  i18n/
    navigation.js
    request.js
    routing.js
  lib/
    utils.js             # helper cn()
  middleware.js          # locale middleware
messages/
  en.json
  es.json
```

## Lineamientos visuales reales detectados en el codigo

### Paleta y color

- Color principal de marca: `#A1E233` (`primary1`).
- Variante de toggle activo: `#B7FF1F`.
- Fondo base claro definido en CSS: `#ffffff`.
- Fondo base oscuro definido en CSS: `#0a0a0a`.
- Texto base claro/oscuro definido en CSS: `#171717` y `#ededed`.
- Las cards y superficies usan sobre todo `bg-neutral-900` y los campos `bg-neutral-950`.
- Bordes suaves con `border-white/5`, `border-white/10` y `border-white/15`.
- Spotlight en About: `rgba(161, 226, 51, 0.35)`.
- Punteros del hero: etiquetas rosa (`bg-pink-500`) y azul (`bg-blue-500`).

### Tipografia

- Se importan `Geist` y `Geist_Mono` en `layout.js`.
- En el estado actual, el `body` usa `font-family: Helvetica, sans-serif;` desde `globals.css`, asi que Helvetica manda visualmente sobre la configuracion de `next/font`.
- Titulares principales trabajan en escalas grandes (`text-4xl` a `text-6xl`) con peso medio o semibold.
- Los labels de seccion usan uppercase pequeno con icono (`TitleSection`).

### Radios, bordes y sombras

- Radios recurrentes: `rounded-full`, `rounded-md`, `rounded-lg`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl` y `rounded-[27px]`.
- Hero usa borde y sombra en lima sobre mockups laterales.
- Navbar usa borde translucido + `backdrop-blur-md`.
- Cards de servicios y about priorizan borde muy sutil sobre fondo oscuro.

### Spacing y layout

- Secciones principales con ritmo vertical consistente en `py-24`.
- Contenedores horizontales escalonados con `px-4`, `md:px-5`, `lg:px-10`, `xl:px-24`.
- Introduccion rompe ese ritmo con `py-28` y `md:pt-64` para reforzar el efecto de scroll.
- La web mezcla layouts `flex`, `grid` y sticky positioning segun la seccion.

### Motion y efectos

- Hero con animaciones de entrada y elementos draggeables usando `framer-motion`.
- Intro con revelado palabra por palabra ligado al scroll.
- Menu mobile con animacion de alto y opacidad.
- FAQ con acordeon animado (`AnimatePresence`).
- `TechColumn` crea scroll vertical infinito de cards de herramientas.
- `CallToAction` crea un marquee horizontal infinito de 30s que desacelera al hover.
- `SpotlightCard` genera un radial spotlight que sigue el mouse.
- `GlowingEffect` dibuja un borde reactivo con combinacion de `radial-gradient` y `repeating-conic-gradient`.

### Tokens graficos destacados en componentes

- `GlowingEffect` usa una mezcla multicolor real: `#dd7bbb`, `#d79f1e`, `#5a922c`, `#4c7894`.
- `OurTools` aplica un `mask-image` vertical para desvanecer la entrada/salida de columnas.
- `Contact` personaliza autofill y scrollbar para no romper la estetica oscura del formulario.

## Convenciones tecnicas observadas

- La pagina principal se arma como composicion de secciones desacopladas.
- Los textos visibles no viven hardcodeados en componentes, sino en archivos de mensajes por idioma.
- Los ids de seccion son la fuente de verdad para la navegacion interna.
- El helper `cn()` existe para componer clases, aunque en este estado solo lo usa `GlowingEffect`.

## Metadata actual

- `title`: `Syntek`
- `description`: `Agencia de desarrollo web`

## Notas importantes del estado actual

- El proyecto sigue teniendo el fondo claro/oscuro definido en `globals.css`, pero gran parte de la interfaz esta claramente pensada sobre superficies oscuras.
- Hay una inconsistencia de naming de marca en contenidos: aparecen `Syntek`, `Synttek` y `SYNTTEK` segun archivo/traduccion.
- No se detectaron tests automatizados ni secciones extras fuera de las montadas en `page.js`.
