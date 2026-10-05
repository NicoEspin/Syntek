# Guía de implementación — `/nueva-home`

## Objetivo

Construir una nueva versión de la Home de Synttek en la ruta:

```txt
/nueva-home
```

La implementación debe tomar como referencia visual y de motion una secuencia de imágenes extraídas de un video. Estas referencias ya están organizadas en el proyecto dentro de:

```txt
/images-new-design
```

La nueva Home debe conservar el contenido, posicionamiento y servicios de Synttek, pero adoptar la composición visual, ritmo, profundidad, jerarquía, tratamiento editorial y lenguaje de animación observados en las imágenes de referencia.

> Importante: no se debe copiar la marca, copy, logos ni identidad visual de Relay. Las referencias sirven para reconstruir la lógica visual, compositiva y de motion, adaptándola completamente a Synttek.

---

# Regla fundamental: usar `image-to-code`

Para todo trabajo basado en las imágenes de `/images-new-design`, el agente **debe utilizar obligatoriamente la skill**:

| Skill | Nombre de invocación | Uso |
|---|---|---|
| image-to-code-skill | `image-to-code` | Pipeline image-first: analizar referencias visuales, entender composición y estados, y luego implementar el frontend para igualar la referencia. |

Esta skill fue añadida recientemente y **puede no estar documentada todavía en `AGENTS.md`**.

Por ese motivo:

> **No asumir que la skill no existe porque no aparezca en `AGENTS.md`. Debe llamarse explícitamente como `image-to-code` siempre que se trabaje con los frames de referencia.**

Su uso es especialmente importante para:

- analizar composición;
- detectar jerarquía visual;
- entender spacing;
- proporciones;
- tamaño y ubicación de cards;
- relación entre secciones;
- reconstruir transiciones entre frames;
- interpretar estados intermedios para animaciones;
- analizar el comportamiento del beam;
- implementar layouts siguiendo los keyframes seleccionados.

---

# Principio de trabajo

No reconstruir la página a partir de una única imagen.

La carpeta `/images-new-design` representa distintos estados de una misma experiencia.

Los frames deben interpretarse como:

```txt
estado inicial
→ transición
→ estado estable
→ scroll
→ nueva sección
→ transición
→ siguiente estado
```

Por lo tanto, cuando dos o más imágenes correspondan a una misma sección, deben estudiarse juntas para entender:

- qué elementos se desplazan;
- cuáles permanecen sticky;
- cuáles aparecen o desaparecen;
- qué cambia de tamaño;
- qué cambia de opacidad;
- cómo evoluciona el background;
- qué elementos se superponen;
- cómo se comporta el beam con el scroll.

La implementación final debe reproducir esta lógica y no simplemente replicar screenshots estáticos.

---

# Stack del proyecto

Seguir el stack actual de Synttek y las convenciones existentes del repositorio.

Stack esperado:

```txt
Next.js App Router
React 19
TypeScript cuando corresponda
Tailwind CSS 4
GSAP
ScrollTrigger
Framer Motion solo para microinteracciones si ya existe o si realmente aporta valor
```

Priorizar GSAP + ScrollTrigger para animaciones ligadas al scroll.

No incorporar nuevas librerías pesadas sin necesidad.

---

# Ruta

Crear la nueva página en:

```txt
app/nueva-home/page.tsx
```

No modificar ni reemplazar la Home actual durante esta etapa.

La ruta `/nueva-home` funciona como entorno de desarrollo y validación del nuevo diseño.

---

# Arquitectura recomendada

Separar la página en componentes pequeños y mantenibles.

Ejemplo:

```txt
components/
└── nueva-home/
    ├── NewHomeNavbar.tsx
    ├── NewHomeHero.tsx
    ├── AnimatedBeamBackground.tsx
    ├── NewHomeManifesto.tsx
    ├── NewHomeServices.tsx
    ├── NewHomeSystems.tsx
    ├── NewHomeOperations.tsx
    ├── NewHomeMetrics.tsx
    ├── NewHomeOffer.tsx
    ├── NewHomeFinalCta.tsx
    └── NewHomeFooter.tsx
```

Si una sección requiere componentes internos complejos:

```txt
components/
└── nueva-home/
    ├── operations/
    │   ├── OperationsDashboard.tsx
    │   ├── ActivityHeatmap.tsx
    │   ├── MetricRing.tsx
    │   └── WorkflowGraph.tsx
```

Evitar una única página gigantesca.

---

# Orden visual de la nueva Home

La experiencia objetivo se divide aproximadamente en:

```txt
01. Navbar
02. Hero
03. Transition / Beam movement
04. Manifesto
05. Capabilities / Services
06. Interstitial statement
07. Reliability / Systems
08. Operations / Dashboard
09. Metrics / Proof
10. Offer / Modalidades
11. Final CTA
12. Footer
```

---

# Dirección visual general

La nueva Home debe sentirse:

- premium;
- tecnológica;
- cinematográfica;
- editorial;
- sobria;
- experimental sin perder usabilidad;
- con profundidad;
- con motion integrado al layout.

## Base visual

```txt
background: casi negro
accent: verde ácido / lime
secondary glow: verde amarillento
secondary beam hints: azul muy sutil
cards: negro translúcido
borders: líneas finas y discretas
typography: grotesk sans + serif editorial selectiva
```

No convertir el diseño en un dashboard genérico.

La interfaz debe mantener un fuerte carácter de marca.

---

# Background global: Animated Beam

El beam del background es uno de los elementos más importantes de todo el diseño.

No debe tratarse como un fondo decorativo estático.

Debe implementarse como un sistema visual global y animado.

Componente recomendado:

```txt
AnimatedBeamBackground.tsx
```

## Comportamiento del beam

### Entrada

Al cargar `/nueva-home`:

- el beam comienza fuera o parcialmente fuera del viewport;
- entra desde la esquina superior derecha;
- se revela de forma progresiva;
- no aparece de golpe;
- aumenta su brillo y presencia a medida que entra al Hero;
- su movimiento inicial debe sentirse cinematográfico y fluido.

### Hero

En el Hero:

- el beam es más brillante;
- tiene más definición;
- el glow es más fuerte;
- puede tener varias líneas o strands;
- puede mostrar pequeños hints azulados;
- debe concentrarse visualmente cerca del panel principal sin dificultar lectura.

### Scroll

A medida que se baja por la página:

- el beam sigue cruzando toda la experiencia;
- continúa moviéndose;
- cambia levemente de posición;
- se hace menos brillante;
- se vuelve más atmosférico;
- aparece detrás de distintas secciones;
- puede desplazarse de izquierda a derecha o viceversa según el frame;
- debe mantener continuidad visual entre secciones.

### Parte inferior

En las últimas secciones:

- el beam debe estar mucho más tenue;
- puede reaparecer con algo más de intensidad cerca de la sección de ofertas o CTA si la referencia lo sugiere;
- nunca debe competir con el contenido.

---

# Técnica recomendada para el beam

No usar únicamente:

```css
linear-gradient(...)
```

como solución principal.

La referencia tiene mayor profundidad que un gradiente común.

Priorizar alguna de estas estrategias:

### Opción A — SVG animado

- múltiples paths;
- blur;
- opacity;
- masks;
- animated transforms;
- glow;
- paths duplicados con distintas intensidades.

### Opción B — Canvas / WebGL

Solo si el proyecto ya tiene infraestructura adecuada o si SVG no alcanza.

### Opción C — Capas CSS + SVG

Probablemente la opción más equilibrada:

```txt
blurred gradient base
+
animated SVG strands
+
ambient glow layers
+
small particles / dots
```

Evitar costo excesivo de render.

---

# Requisitos de performance

El beam debe:

- tener `pointer-events: none`;
- evitar layout shifts;
- usar transforms y opacity siempre que sea posible;
- no provocar repaint excesivo;
- respetar `prefers-reduced-motion`;
- tener versión simplificada en mobile si fuera necesario.

---

# Navbar

La navbar debe permanecer consistente durante toda la experiencia.

Características:

- dark;
- minimal;
- sticky;
- alto contraste;
- links discretos;
- CTA destacado;
- status pill.

Contenido Synttek sugerido:

```txt
Synttek

Servicios
Proyectos
Proceso
Contacto

[sistemas, sitios e IA]
[Hablemos]
```

No copiar elementos de Relay literalmente.

---

# Hero

Referencias iniciales de `/images-new-design` deben analizarse con `image-to-code`.

El Hero debe mantener:

- composición asimétrica;
- contenido principal a la izquierda;
- panel visual grande a la derecha;
- beam fuerte cruzando detrás;
- gran headline;
- CTA principal;
- CTA secundario;
- microcopy técnica.

## Copy sugerido

Eyebrow:

```txt
estudio digital / software / IA
```

Heading:

```txt
Creamos sistemas que hacen avanzar negocios.
```

Supporting copy:

```txt
Desarrollamos sitios web, software a medida, automatizaciones e inteligencia artificial aplicada para empresas que quieren crecer con procesos más inteligentes.
```

CTA:

```txt
Contanos tu proyecto
```

Secondary CTA:

```txt
Ver proyectos
```

Microcopy:

```txt
web / software / automatización / IA
```

---

# Hero visual

El panel visual del Hero debe estar relacionado con Synttek.

No usar UI ficticia irrelevante.

Concepto recomendado:

```txt
Lead
→ IA
→ CRM
→ WhatsApp
→ Conversión
```

Debe sentirse como un sistema real.

Puede mostrar:

- nodos;
- workflows;
- branches;
- métricas;
- estados;
- outputs;
- ejecuciones.

No imitar marcas de herramientas externas de manera innecesaria.

---

# Manifesto

Sección inspirada en la referencia editorial tipo:

```txt
Most of a process is glue.
```

Adaptar el concepto a Synttek.

Copy sugerido:

```txt
La tecnología no debería complicar tu negocio.

Debería hacerlo avanzar.
```

Supporting text:

```txt
En Synttek diseñamos sitios, software y automatizaciones que ordenan procesos, conectan herramientas y transforman trabajo manual en sistemas claros, medibles y escalables.
```

Debe mantener:

- gran headline;
- palabra o frase serif italic;
- layout editorial;
- mucho aire;
- beam más tenue;
- algún panel técnico secundario.

---

# Services / Capabilities

Mostrar servicios principales:

```txt
Desarrollo web
Software a medida
Automatizaciones
IA aplicada
```

Servicios secundarios:

```txt
E-commerce
SEO / SEM
Branding
Contenidos
```

Cada card debe contener información visual realista:

- métricas;
- micro gráficos;
- barras;
- líneas;
- nodos;
- pequeños diagramas.

No llenar las cards con ornamentos genéricos.

---

# Systems / Reliability

Objetivo:

Transmitir que Synttek no solo diseña interfaces, sino sistemas sólidos.

Heading sugerido:

```txt
Sólidos en las cosas que importan.
```

Subcopy:

```txt
Arquitectura clara, código mantenible, integraciones bien pensadas y despliegues preparados para crecer con el negocio.
```

Cards sugeridas:

## Card 1

```txt
Una base técnica consistente
```

Visual:

```txt
website
API
database
automations
CMS
```

## Card 2

```txt
Automatización donde viven tus datos
```

Visual:

- CRM;
- WhatsApp;
- formularios;
- paneles internos;
- integraciones.

---

# Operations / Dashboard

Esta sección debe adaptar la estética tipo dashboard de las referencias.

Objetivo:

Mostrar cómo Synttek convierte operaciones en sistemas visibles.

Heading:

```txt
Procesos visibles. Decisiones más claras.
```

Elementos visuales posibles:

```txt
lead activity
workflows
automation rate
tasks reduced
conversion follow-up
active systems
response times
```

Preferir métricas relacionadas con Synttek y sus servicios.

---

# Metrics / Proof

Heading sugerido:

```txt
Números que respaldan el trabajo.
```

Ejemplos:

```txt
94
IA discoverability

<1s
interacción percibida

+20
proyectos desarrollados
```

> Verificar que cualquier métrica utilizada sea real antes de publicarla.

La referencia visual debe seguirse en:

- grid;
- tamaño de números;
- distribución;
- barras;
- líneas;
- soporte de copy.

---

# Offer / Modalidades

La referencia original muestra pricing SaaS.

En Synttek debe reinterpretarse como modalidades de solución.

Ejemplo:

## Landing

```txt
AR$300k
```

- enfoque en conversión;
- diseño premium;
- contacto / WhatsApp;
- SEO base.

## Web corporativa

```txt
AR$500k
```

- múltiples secciones;
- posicionamiento;
- contenidos;
- estructura profesional.

## Sistema / solución a medida

```txt
a medida
```

- backend;
- panel;
- automatizaciones;
- integraciones;
- escalabilidad.

No convertir la sección en suscripciones mensuales si eso no corresponde al negocio.

---

# Final CTA

Mantener una sección visualmente fuerte.

Copy sugerido:

```txt
Contanos el proyecto que querés construir.
```

Subcopy:

```txt
Web, software, automatización o IA aplicada. Si hay una oportunidad de mejorar tu negocio con tecnología, la podemos diseñar juntos.
```

CTA:

```txt
Hablemos
```

Alternativa:

```txt
Escribir por WhatsApp
```

---

# Footer

Debe incluir:

```txt
Synttek

Servicios
Proyectos
Sobre nosotros
Blog
Contacto

Instagram
LinkedIn
WhatsApp
```

Brand statement:

```txt
Synttek diseña experiencias digitales, software y automatizaciones para negocios que quieren avanzar con claridad.
```

---

# Estrategia de animaciones

Las animaciones deben reconstruirse comparando frames.

No inventarlas sin analizar las referencias.

Para cada sección:

1. abrir las imágenes relacionadas;
2. utilizar `image-to-code`;
3. identificar estado inicial;
4. identificar estado final;
5. identificar frames intermedios;
6. definir qué propiedades cambian;
7. implementar timeline.

---

# Propiedades a observar entre frames

Analizar especialmente:

```txt
translateX
translateY
scale
opacity
blur
clip-path
mask
rotation
background-position
beam position
beam intensity
card overlap
sticky behavior
z-index
```

---

# GSAP / ScrollTrigger

Usar GSAP para:

- reveal de secciones;
- sticky scenes;
- scrub animations;
- cards que se desplazan con scroll;
- beam progression;
- opacity transitions;
- controlled parallax;
- panel scale;
- cinematic entrance.

Ejemplo conceptual:

```txt
Hero
↓
beam grows
↓
hero UI shifts upward
↓
beam crosses center
↓
manifesto enters
↓
cards appear
↓
beam softens
```

No usar GSAP para cosas que CSS resuelva mejor.

---

# Motion guidelines

El motion debe sentirse:

```txt
slow
precise
intentional
premium
subtle
continuous
```

Evitar:

- bounce;
- elastic effects;
- movimientos rápidos;
- exageración;
- elementos flotando sin razón;
- parallax excesivo.

---

# Sticky sections

Algunos estados de referencia sugieren escenas en las que:

- navbar permanece;
- parte del contenido queda fijado;
- el beam se mueve;
- otro panel cruza;
- la siguiente sección entra.

Reproducir esto usando:

```txt
position: sticky
```

y ScrollTrigger cuando sea necesario.

Evitar hacks de alturas arbitrarias si una estructura sticky clara puede resolverlo.

---

# Uso de las imágenes

La carpeta:

```txt
/images-new-design
```

debe tratarse como fuente visual principal de esta implementación.

Antes de modificar una sección:

1. identificar qué imágenes corresponden a ella;
2. analizar todas juntas;
3. ejecutar `image-to-code`;
4. extraer reglas visuales;
5. implementar;
6. comparar visualmente;
7. iterar.

No mirar una imagen aislada si existen frames cercanos que muestran la transición.

---

# Mapeo general de referencias

La secuencia seleccionada representa aproximadamente:

```txt
frames iniciales
→ intro / hero reveal

hero estable
→ layout principal

hero scroll
→ beam movement

manifesto
→ editorial statement

cards
→ capabilities

interstitial
→ statement verde

system cards
→ reliability

dashboard
→ operations

metrics
→ proof

pricing
→ solution modes

CTA
→ conversion + footer
```

Los nombres reales de los archivos pueden consultarse en `/images-new-design`.

---

# Workflow esperado para el agente

## Fase 1 — Setup

- crear `/nueva-home`;
- crear componentes base;
- crear background global;
- asegurar z-index correcto.

## Fase 2 — Hero

- analizar frames iniciales con `image-to-code`;
- recrear composición;
- adaptar contenido a Synttek;
- implementar beam inicial.

## Fase 3 — Core sections

- Manifesto;
- Services;
- Systems.

## Fase 4 — Dashboard / proof

- Operations;
- Metrics.

## Fase 5 — Commercial sections

- Offers;
- CTA;
- Footer.

## Fase 6 — Motion

- volver a recorrer frames;
- implementar transiciones;
- ajustar ScrollTrigger;
- refinar beam.

## Fase 7 — Responsive

- adaptar desktop a tablet/mobile;
- simplificar beam si hace falta;
- preservar jerarquía.

## Fase 8 — Performance

- revisar CLS;
- revisar CPU/GPU usage;
- evitar animaciones costosas;
- verificar images/fonts;
- reduced motion.

---

# Responsive

Las referencias son principalmente desktop.

En mobile no intentar literalmente apilar el diseño sin pensar.

Principios:

- simplificar dashboards;
- convertir grids en stacks;
- reducir cantidad de UI secundaria;
- preservar headline;
- mantener el beam pero con menor intensidad;
- reducir blur costoso;
- evitar horizontal overflow;
- mantener CTAs visibles.

---

# Accesibilidad

La implementación debe:

- tener headings jerárquicos;
- utilizar botones y links reales;
- mantener contraste;
- soportar keyboard navigation;
- respetar reduced motion;
- usar contenido semántico;
- no esconder información crítica exclusivamente detrás de una animación.

---

# SEO

`/nueva-home` es inicialmente una ruta de prueba.

No romper el SEO existente de Synttek.

No migrar metadatos de la Home actual todavía.

Una vez aprobada visual y funcionalmente:

- revisar title;
- description;
- canonical;
- structured data;
- headings;
- internal links;
- IA discoverability.

---

# Restricciones

## No hacer

- no copiar textos de Relay;
- no copiar logo Relay;
- no copiar branding Relay;
- no generar un único componente gigante;
- no usar screenshots como backgrounds para simular UI;
- no crear una Home estática sin motion;
- no ignorar los frames intermedios;
- no usar un gradiente común como sustituto final del beam;
- no reemplazar la Home actual hasta aprobación;
- no omitir `image-to-code`.

---

# Definition of Done

La primera versión de `/nueva-home` se considera correctamente implementada cuando:

- existe la ruta `/nueva-home`;
- la Home actual no fue modificada;
- todos los bloques principales están componentizados;
- las imágenes de `/images-new-design` fueron usadas como referencias;
- la skill `image-to-code` fue utilizada;
- el Hero refleja claramente la composición objetivo;
- el beam aparece desde upper-right y cruza toda la página;
- el beam permanece animado durante la experiencia;
- el beam es más intenso en Hero y más suave más abajo;
- las transiciones principales responden al scroll;
- las cards y dashboards están adaptados a Synttek;
- el contenido pertenece a Synttek;
- el layout es responsive;
- reduced motion está contemplado;
- no existen errores de consola relevantes;
- el código está dividido en componentes mantenibles.

---

# Prioridad de fidelidad

Al comparar implementación vs referencias, priorizar en este orden:

```txt
1. composición
2. jerarquía
3. spacing
4. proporciones
5. motion
6. background beam
7. tipografía
8. UI details
9. responsive adaptation
```

No sacrificar la composición general por copiar pequeños detalles.

---

# Nota para cualquier agente que retome este trabajo

Si estás leyendo este archivo en una sesión nueva:

1. revisar primero `/images-new-design`;
2. leer esta guía completa;
3. revisar el código actual de `/nueva-home`;
4. utilizar obligatoriamente `image-to-code` para cualquier sección basada en las imágenes;
5. comparar múltiples frames antes de implementar animaciones;
6. mantener el beam como sistema visual continuo y no como backgrounds independientes por sección;
7. no modificar la Home productiva hasta que `/nueva-home` esté aprobada.

La intención final es construir una nueva Home de Synttek con el nivel de detalle, ritmo y sofisticación visual de las referencias, pero completamente adaptada a la identidad, contenido, servicios y posicionamiento de Synttek.
