# blog.md — Cómo publicar un post en el blog

> El blog (`/blogs` + `/blogs/[slug]`) tiene un solo template de artículo, alimentado por un modelo de
> contenido en bloques. Publicar un post nuevo es **agregar un objeto al array `postEntries`** en
> [`src/data/blogPosts.js`](src/data/blogPosts.js) — no hay que tocar ningún componente. Este archivo es
> la referencia para hacerlo bien a la primera.

---

## Índice

1. [Medidas exactas de imágenes](#1-medidas-exactas-de-imágenes)
2. [Estructura de un post](#2-estructura-de-un-post)
3. [Bloques de contenido disponibles](#3-bloques-de-contenido-disponibles)
4. [Paso a paso: agregar un post nuevo](#4-paso-a-paso-agregar-un-post-nuevo)
5. [Reglas y errores comunes](#5-reglas-y-errores-comunes)

---

## 1. Medidas exactas de imágenes

| Imagen | Dónde se usa | Medida recomendada | Formato |
|---|---|---|---|
| **Portada (`image`)** | Card del grid (`16:10`), card destacada, banner del artículo (ancho completo, hasta ~5:1 en desktop grande) | **1600×1000px** mínimo, foco visual centrado (los bordes se recortan en pantallas anchas) | `.webp` (preferido) o `.jpg` |
| **Avatar de autor** | Círculo de 28 a 48px en la UI | **400×400px** cuadrado mínimo | `.webp` |
| **Imagen dentro del cuerpo (`type: "image"`)** | Bloque fijo `16:9` dentro del artículo | **1600×900px** | `.webp` |

Las imágenes van en `src/app/assets/blog/` (crear la carpeta si no existe) y se importan como módulo —
nunca como string de ruta:

```js
import miPortada from "@/app/assets/blog/mi-post-portada.webp";
```

`next/image` ya optimiza el archivo (recorte, formatos, tamaños responsive) — solo importan el ancho/alto
*de origen* para que el recorte automático tenga margen y no se vea pixelado.

---

## 2. Estructura de un post

Cada entrada de `postEntries` (en [`src/data/blogPosts.js`](src/data/blogPosts.js)) acepta estos campos:

| Campo | Obligatorio | Tipo | Descripción |
|---|---|---|---|
| `slug` | Sí | string | Identificador único en la URL (`/blogs/<slug>`). Minúsculas, sin espacios ni tildes. |
| `category` | Sí | string | Una de las categorías existentes (`Estrategia`, `Diseño`, `Desarrollo`, `Automatización`, `Performance`, `Branding`) o una nueva — ver §5. |
| `title` | Sí | `localizedText(es, en)` | Título principal (H1). |
| `titleAccent` | No | `localizedText(es, en)` | Una sub-cadena **exacta** del título (en cada idioma) que se resalta en lima. Si no aparece tal cual en el título, se ignora. |
| `excerpt` | Sí | `localizedText(es, en)` | Bajada corta usada en las cards del listado y en el `<meta description>`. |
| `dek` | No | `localizedText(es, en)` | Bajada larga que aparece debajo del título en el artículo. |
| `authorRoleOverride` | No | `localizedText(es, en)` | Pisa el rol por defecto del autor (ej. mostrar "Director de Diseño" en vez de "Founder · Full-stack") solo para este post. |
| `image` | Sí | import | Portada del post — ver medidas en §1. |
| `author` | Sí | `"nico"` \| `"antto"` | Clave de `AUTHORS` (arriba del archivo). Agregar un autor nuevo ahí si hace falta. |
| `date` | Sí | string `"YYYY-MM-DD"` | Fecha de publicación. Se formatea sola por idioma. |
| `readingMinutes` | Sí | number | Minutos de lectura mostrados en la UI. |
| `featured` | Sí | boolean | Marca el post que aparece como "Destacado" en el listado — **solo uno a la vez**, ver §5. |
| `tags` | No | `localizedText(es, en)[]` | Pills al final del artículo. Libres, no necesitan traducción registrada. |
| `body` | Sí | array de bloques | El contenido del artículo — ver §3. |

---

## 3. Bloques de contenido disponibles

El `body` es un array ordenado: se renderiza tal cual, en el orden en que lo escribís. Podés combinar los
bloques como quieras y poner imágenes, títulos o texto donde te convenga — no hay slots fijos. Todos los
helpers ya están definidos arriba de `postEntries` en `blogPosts.js`:

| Helper | Bloque | Uso |
|---|---|---|
| `heading(es, en)` | Título de sección (H2, con borde lima) | Aparece también en el índice (TOC) lateral del artículo. |
| `subheading(es, en)` | Sub-título (H3, sin TOC) | Para dividir una sección larga sin agregar otra entrada al índice. |
| `paragraph(es, en)` | Párrafo de cuerpo | El bloque más común. |
| `quote(es, en)` | Cita destacada (pull-quote en lima) | Para una frase fuerte, no para citas largas. |
| `code(es, en)` | Bloque de código monoespaciado | El string de código es el mismo en ambos idiomas salvo que quieras traducir comentarios. Las líneas que empiezan con `//`, `/*` o `*` se atenúan automático. |
| `callout(eyebrowEs, eyebrowEn, tituloEs, tituloEn, textoEs, textoEn)` | Card con ícono ✸ + título + texto | Para destacar un dato, herramienta o definición puntual. |
| `colorSwatches([{ hex, es, en }, ...])` | Fila de chips de color | Pensado para posts sobre diseño/marca. |
| `image(src, { captionEs, captionEn, altEs, altEn })` | Imagen `16:9` con caption opcional | `src` es el import de la imagen — ver §1. `alt` cae a `caption` si no lo pasás, y a `postTitle` si tampoco hay caption. |

Ejemplo combinando varios bloques:

```js
body: [
  heading("Por qué importa", "Why it matters"),
  paragraph("Texto en español.", "Text in English."),
  image(miImagenDeEjemplo, { captionEs: "Pie de foto", captionEn: "Caption" }),
  subheading("Un detalle", "A detail"),
  quote("Una frase que se destaca.", "A line that stands out."),
],
```

---

## 4. Paso a paso: agregar un post nuevo

1. **Conseguí/exportá la portada** con las medidas de §1 y guardala en `src/app/assets/blog/`.
2. **Importala** arriba de `src/data/blogPosts.js`, junto a los otros imports de imagen.
3. **Agregá un objeto nuevo** al array `postEntries`, usando la tabla de §2 y los helpers de §3. Copiá un
   post existente como punto de partida — es el camino más rápido.
4. **Si usás una categoría nueva** (no `Estrategia`/`Diseño`/`Desarrollo`/`Automatización`/`Performance`/`Branding`),
   agregala en **ambos** `messages/es.json` y `messages/en.json`, dentro de `BlogPage.categories`:
   ```json
   "categories": {
     "TuCategoríaNueva": "Tu Categoría Nueva"
   }
   ```
   En `en.json` el valor es la traducción al inglés; en `es.json` el valor es igual a la clave.
5. **Si `featured: true`**, asegurate de que ningún otro post tenga `featured: true` al mismo tiempo
   (ver §5).
6. Listo — no hay que tocar `page.js`, `PostDetail.jsx`, `BlogsClient.jsx` ni ningún componente. El
   listado, el filtro por categoría, los "también te puede interesar" y la página de detalle se generan
   solos a partir de este array.

---

## 5. Reglas y errores comunes

- **Un solo `featured: true` por vez.** Es el único post que se muestra en la card grande del listado. Si
  marcás dos, gana el primero que aparece en el array; el resto se trata como post normal.
- **`slug` único** y sin espacios/tildes/mayúsculas — es literalmente la URL.
- **Categoría nueva → traducir en los dos `messages/*.json`.** Si te olvidás, next-intl muestra la clave
  cruda en lugar del texto traducido.
- **`titleAccent` tiene que ser una sub-cadena exacta** del `title` en ese idioma (mismas tildes,
  mayúsculas, etc.). Si no coincide, simplemente no se resalta nada — no rompe la página.
- **Las imágenes siempre se importan**, nunca se referencian como string (`"/blog/foto.webp"`). Eso es lo
  que le permite a `next/image` optimizarlas.
- **`date` en formato `"YYYY-MM-DD"`** — se formatea solo según el idioma activo, no hace falta escribir
  "12 jun 2026" a mano.
