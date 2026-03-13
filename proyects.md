# projects.md — Integración de la sección Projects en Syntek

> Guía exhaustiva para implementar la sección `#projects` en la landing, la página `/projects` y la ruta dinámica `/projects/[id]`. El objetivo es un resultado digno de Awwwards: animado, único, oscuro y cohesivo con el sistema visual ya establecido.

---

## Índice

1. [Visión de diseño](#1-visión-de-diseño)
2. [Estructura de datos — proyectos](#2-estructura-de-datos--proyectos)
3. [Internacionalización — mensajes](#3-internacionalización--mensajes)
4. [Componentes compartidos nuevos](#4-componentes-compartidos-nuevos)
5. [Sección Projects (landing)](#5-sección-projects-landing)
6. [Página /projects](#6-página-projects)
7. [Página /projects/[id]](#7-página-projectsid)
8. [Animaciones — sistema Framer Motion](#8-animaciones--sistema-framer-motion)
9. [Routing y navegación](#9-routing-y-navegación)
10. [Actualización del Navbar](#10-actualización-del-navbar)
11. [Assets y recursos visuales](#11-assets-y-recursos-visuales)
12. [Checklist de implementación](#12-checklist-de-implementación)

---

## 1. Visión de diseño

### Concepto central: "Obra en vitrina"

Cada proyecto es tratado como una **pieza de galería de arte digital**. La interfaz replica la frialdad curada de un museo de arte contemporáneo fusionada con la crudeza de una agencia de diseño de vanguardia.

### Principios visuales

- **Dark-first absoluto**: fondos `#0a0a0a` / `#0d0d0d`. El fondo nunca es blanco ni gris claro en estas páginas.
- **Acento lima `#A1E233`**: se usa con disciplina, no como relleno. Aparece en números de índice, bordes de hover, etiquetas de categoría activas y el cursor custom.
- **Tipografía editorial**: los títulos de proyecto usan una escala masiva (`clamp(3rem, 8vw, 9rem)`). Los números de índice son enormes y fantasma (`opacity: 0.07`), actuando como textura de fondo.
- **Motion como lenguaje**: no hay elementos estáticos al hacer scroll. Todo tiene intención. Se evitan las animaciones genéricas de fade-in; se prioriza la dirección, el clip-path reveal y el stagger.
- **Grid rotado y asimétrico**: la grilla de proyectos alterna alineaciones (imagen izquierda / imagen derecha) con un gap deliberado que rompe la monotonía.
- **Cursor custom**: en toda la sección y páginas de proyectos se activa un cursor circular con la etiqueta `VIEW` que sigue al mouse.

### Referencias estéticas
- Locomotive Scroll + Awwwards sites de agencias europeas (Resn, Ueno, Fantasy)
- Gestión de viewport con clipping masivo al hover sobre cada proyecto
- Número índice como fondo decorativo (estilo editorial de revista de arquitectura)

---

## 2. Estructura de datos — proyectos

### Archivo: `src/data/projects.js`

Crear este archivo como **fuente de verdad** de los proyectos. Es estático (no requiere API) y se puede reemplazar más adelante por un CMS o fetch.

```js
// src/data/projects.js

export const projects = [
  {
    id: "forma-studio",
    index: "01",
    title: "Forma Studio",
    subtitle: "Brand Identity + Web",
    category: "Branding",
    year: "2024",
    client: "Forma Studio AR",
    services: ["Branding", "Diseño UX/UI", "Desarrollo Web"],
    tags: ["Next.js", "Framer Motion", "Figma"],
    description: {
      short: "Identidad visual completa y plataforma web para estudio de arquitectura boutique en Buenos Aires.",
      long: "Forma Studio llegó a Syntek con una necesidad clara: una identidad que comunicara precisión, calidez y contemporaneidad. Desarrollamos desde cero el sistema de marca —logotipo, tipografía, paleta, iconografía— y lo tradujimos a una web que funciona como portfolio interactivo. La arquitectura de información prioriza los proyectos del estudio con galerías inmersivas de pantalla completa y transiciones de página fluidas."
    },
    // Reemplazar con rutas reales de imágenes en /public/projects/
    coverImage: "/projects/forma-studio/cover.jpg",
    heroImage: "/projects/forma-studio/hero.jpg",
    gallery: [
      "/projects/forma-studio/gallery-1.jpg",
      "/projects/forma-studio/gallery-2.jpg",
      "/projects/forma-studio/gallery-3.jpg",
    ],
    accentColor: "#C8F04A",
    featured: true,
    link: "https://formastudio.com.ar",
  },
  {
    id: "verde-ecommerce",
    index: "02",
    title: "Verde",
    subtitle: "Ecommerce Platform",
    category: "Ecommerce",
    year: "2024",
    client: "Verde Organic",
    services: ["Ecommerce", "Desarrollo Web", "Diseño UX/UI"],
    tags: ["Shopify", "Liquid", "Custom Theme"],
    description: {
      short: "Tienda online de cosmética orgánica con experiencia de compra sensorial y checkout optimizado.",
      long: "Verde es una marca de cosméticos orgánicos que necesitaba una plataforma de venta que reflejara su filosofía: lenta, consciente y bella. Diseñamos un tema custom sobre Shopify con microinteracciones que guían al usuario sin apresurarlo. El resultado fue un aumento del 40% en la tasa de conversión respecto al tema anterior."
    },
    coverImage: "/projects/verde/cover.jpg",
    heroImage: "/projects/verde/hero.jpg",
    gallery: [
      "/projects/verde/gallery-1.jpg",
      "/projects/verde/gallery-2.jpg",
      "/projects/verde/gallery-3.jpg",
    ],
    accentColor: "#A1E233",
    featured: true,
    link: "https://verdecosmetica.com",
  },
  {
    id: "pulso-app",
    index: "03",
    title: "Pulso",
    subtitle: "UI/UX + Design System",
    category: "Diseño UX/UI",
    year: "2023",
    client: "Pulso Fintech",
    services: ["Diseño UX/UI", "Design System"],
    tags: ["Figma", "Design System", "Prototipado"],
    description: {
      short: "Design system completo y rediseño de app de finanzas personales para el mercado latinoamericano.",
      long: "Pulso es una fintech que opera en Argentina, Chile y Colombia. El equipo de producto necesitaba unificar la experiencia entre plataformas y acelerar el tiempo de desarrollo de nuevas features. Creamos un design system de 200+ componentes en Figma con documentación exhaustiva, tokens de diseño y guidelines de accesibilidad WCAG 2.1 AA."
    },
    coverImage: "/projects/pulso/cover.jpg",
    heroImage: "/projects/pulso/hero.jpg",
    gallery: [
      "/projects/pulso/gallery-1.jpg",
      "/projects/pulso/gallery-2.jpg",
      "/projects/pulso/gallery-3.jpg",
    ],
    accentColor: "#5B8DEF",
    featured: true,
    link: null, // proyecto confidencial, sin link externo
  },
  {
    id: "nox-branding",
    index: "04",
    title: "NOX",
    subtitle: "Brand Identity",
    category: "Branding",
    year: "2023",
    client: "NOX Nightclub",
    services: ["Branding", "Diseño Gráfico"],
    tags: ["Illustrator", "Photoshop", "Motion"],
    description: {
      short: "Identidad para club nocturno de alta gama en Córdoba con sistema gráfico modular.",
      long: "NOX necesitaba una identidad que funcionara tanto en la frialdad de un cartel exterior como en el calor de un flyer digital de redes sociales. Construimos un sistema modular basado en formas geométricas cortantes y tipografía de impacto, con guías claras para que el equipo interno pudiera aplicarlo sin perder coherencia."
    },
    coverImage: "/projects/nox/cover.jpg",
    heroImage: "/projects/nox/hero.jpg",
    gallery: [
      "/projects/nox/gallery-1.jpg",
      "/projects/nox/gallery-2.jpg",
      "/projects/nox/gallery-3.jpg",
    ],
    accentColor: "#FF3366",
    featured: false,
    link: null,
  },
  {
    id: "atlas-web",
    index: "05",
    title: "Atlas",
    subtitle: "Web Development",
    category: "Desarrollo Web",
    year: "2023",
    client: "Atlas Consultora",
    services: ["Desarrollo Web", "Diseño UX/UI"],
    tags: ["Next.js", "Tailwind", "Sanity CMS"],
    description: {
      short: "Plataforma de contenidos y captación de leads para consultora de RRHH con CMS headless.",
      long: "Atlas Consultora publicaba artículos de manera manual cada semana, sin poder medir el impacto ni captar leads de forma estructurada. Construimos una plataforma sobre Next.js + Sanity CMS que permite al equipo editorial publicar contenido desde un panel visual sin tocar código, con SEO técnico optimizado y formularios integrados a su CRM."
    },
    coverImage: "/projects/atlas/cover.jpg",
    heroImage: "/projects/atlas/hero.jpg",
    gallery: [
      "/projects/atlas/gallery-1.jpg",
      "/projects/atlas/gallery-2.jpg",
      "/projects/atlas/gallery-3.jpg",
    ],
    accentColor: "#FFB347",
    featured: false,
    link: "https://atlasconsultora.com.ar",
  },
];

// Helper: obtener solo los proyectos destacados para la landing
export const featuredProjects = projects.filter((p) => p.featured);

// Helper: obtener proyecto por id
export const getProjectById = (id) => projects.find((p) => p.id === id);
```

> **Nota de implementación**: las rutas de imágenes (`/projects/...`) deben existir en `/public/`. Hasta tener assets reales, usar imágenes placeholder de alta calidad (ver sección Assets).

---

## 3. Internacionalización — mensajes

### Añadir a `messages/es.json`

```json
{
  "Projects": {
    "sectionLabel": "Proyectos",
    "sectionTitle": "Trabajo\nselecto.",
    "sectionSubtitle": "Una selección de proyectos donde estrategia, diseño y tecnología convergen.",
    "viewAll": "Ver todos los proyectos",
    "viewProject": "Ver proyecto",
    "backToProjects": "← Proyectos",
    "allProjects": "Todos",
    "categories": {
      "Branding": "Branding",
      "Ecommerce": "Ecommerce",
      "Diseño UX/UI": "Diseño UX/UI",
      "Desarrollo Web": "Desarrollo Web",
      "Diseño Gráfico": "Diseño Gráfico"
    },
    "detail": {
      "client": "Cliente",
      "year": "Año",
      "services": "Servicios",
      "technologies": "Tecnologías",
      "visitSite": "Visitar sitio",
      "nextProject": "Siguiente proyecto",
      "overview": "Overview"
    },
    "pageTitle": "Proyectos — Syntek",
    "pageDescription": "Portfolio de proyectos de Syntek: diseño web, branding, ecommerce y UX/UI."
  }
}
```

### Añadir a `messages/en.json`

```json
{
  "Projects": {
    "sectionLabel": "Projects",
    "sectionTitle": "Selected\nwork.",
    "sectionSubtitle": "A selection of projects where strategy, design and technology converge.",
    "viewAll": "View all projects",
    "viewProject": "View project",
    "backToProjects": "← Projects",
    "allProjects": "All",
    "categories": {
      "Branding": "Branding",
      "Ecommerce": "Ecommerce",
      "Diseño UX/UI": "UI/UX Design",
      "Desarrollo Web": "Web Development",
      "Diseño Gráfico": "Graphic Design"
    },
    "detail": {
      "client": "Client",
      "year": "Year",
      "services": "Services",
      "technologies": "Technologies",
      "visitSite": "Visit site",
      "nextProject": "Next project",
      "overview": "Overview"
    },
    "pageTitle": "Projects — Syntek",
    "pageDescription": "Syntek's project portfolio: web design, branding, ecommerce and UX/UI."
  }
}
```

---

## 4. Componentes compartidos nuevos

### 4.1 `ProjectCursor.jsx`

Cursor circular custom que aparece al entrar en zonas de proyectos. Reemplaza el cursor nativo dentro de los wrappers marcados.

**Archivo**: `src/app/components/ProjectCursor.jsx`

```jsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor custom para secciones de proyectos.
 * Se activa / desactiva con los eventos onMouseEnter / onMouseLeave
 * del contenedor padre (pasados como props o manejados internamente
 * mediante un data-attribute).
 *
 * Uso:
 *   <div data-cursor-zone>
 *     <ProjectCursor />
 *     ...contenido...
 *   </div>
 */
export default function ProjectCursor({ label = "VIEW" }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scaleVal = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const scale = useSpring(scaleVal, { damping: 18, stiffness: 250 });

  useEffect(() => {
    const zones = document.querySelectorAll("[data-cursor-zone]");

    const onMove = (e) => {
      cursorX.set(e.clientX - 40); // centrado en el círculo de 80px
      cursorY.set(e.clientY - 40);
    };

    const onEnter = () => scaleVal.set(1);
    const onLeave = () => scaleVal.set(0);

    zones.forEach((zone) => {
      zone.addEventListener("mouseenter", onEnter);
      zone.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      zones.forEach((zone) => {
        zone.removeEventListener("mouseenter", onEnter);
        zone.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [cursorX, cursorY, scaleVal]);

  return (
    <motion.div
      style={{ x, y, scale }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none w-20 h-20 rounded-full bg-[#A1E233] flex items-center justify-center mix-blend-difference"
    >
      <span className="text-black text-[10px] font-semibold tracking-[0.2em] uppercase select-none">
        {label}
      </span>
    </motion.div>
  );
}
```

---

### 4.2 `ProjectCard.jsx`

Card de proyecto reutilizable en la landing y en `/projects`. Maneja dos variantes: `featured` (tamaño completo, imagen dominante) y `grid` (formato compacto para la página listado).

**Archivo**: `src/app/components/ProjectCard.jsx`

```jsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

/**
 * ProjectCard
 * @param {Object} project  - objeto de projects.js
 * @param {string} variant  - "featured" | "grid"
 * @param {number} index    - posición en la lista (para stagger)
 * @param {string} locale   - "es" | "en"
 */
export default function ProjectCard({ project, variant = "grid", index = 0, locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${locale}/projects/${project.id}`);
  };

  // ─── FEATURED VARIANT (landing section) ───────────────────────────────────
  if (variant === "featured") {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        onClick={handleClick}
        data-cursor-zone
        className={`
          group relative cursor-none overflow-hidden
          flex flex-col md:flex-row gap-0
          ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
          border border-white/5 rounded-2xl
          bg-neutral-900/60 backdrop-blur-sm
          hover:border-[#A1E233]/30
          transition-colors duration-500
        `}
      >
        {/* Número índice fantasma */}
        <span
          className="absolute top-4 right-6 text-[8rem] font-black leading-none text-white/[0.04] select-none pointer-events-none z-0"
          aria-hidden
        >
          {project.index}
        </span>

        {/* Imagen */}
        <div className="relative md:w-[55%] aspect-[4/3] md:aspect-auto overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            {/* Overlay verde al hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ backgroundColor: project.accentColor }}
            />
          </motion.div>
        </div>

        {/* Contenido textual */}
        <div className="relative z-10 flex flex-col justify-between p-8 md:p-12 md:w-[45%]">
          <div>
            {/* Categoría + año */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#A1E233] text-xs font-semibold tracking-[0.2em] uppercase">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-white/30 text-xs tracking-widest">{project.year}</span>
            </div>

            {/* Título */}
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 tracking-tight">
              {project.title}
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
              {project.subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase text-white/40 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-3 text-white/50 group-hover:text-[#A1E233] transition-colors duration-300">
            <span className="text-sm tracking-wider uppercase font-medium">Ver proyecto</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </div>
        </div>
      </motion.article>
    );
  }

  // ─── GRID VARIANT (página /projects) ──────────────────────────────────────
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleClick}
      data-cursor-zone
      className="group relative cursor-none overflow-hidden rounded-xl border border-white/5 hover:border-[#A1E233]/20 bg-neutral-900/40 transition-all duration-500"
    >
      {/* Imagen con clip reveal en hover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Categoría badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase bg-black/60 backdrop-blur-sm text-[#A1E233] border border-[#A1E233]/20">
            {project.category}
          </span>
        </div>

        {/* Índice */}
        <div className="absolute bottom-4 right-4 text-white/20 text-xs font-mono">
          {project.index}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-[#A1E233] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/35 text-xs tracking-wide">{project.subtitle}</p>
          </div>
          <span className="text-white/20 text-xs shrink-0 mt-1">{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}
```

---

### 4.3 `ProjectsFilterBar.jsx`

Barra de filtrado por categoría para la página `/projects`. Animada con indicador deslizante.

**Archivo**: `src/app/components/ProjectsFilterBar.jsx`

```jsx
"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const categories = ["Todos", "Branding", "Ecommerce", "Diseño UX/UI", "Desarrollo Web", "Diseño Gráfico"];

export default function ProjectsFilterBar({ onFilter, activeCategory = "Todos" }) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`
            relative px-4 py-2 text-xs tracking-widest uppercase font-medium rounded-full
            transition-colors duration-300 border
            ${activeCategory === cat
              ? "text-black border-[#A1E233] bg-[#A1E233]"
              : "text-white/40 border-white/10 hover:text-white hover:border-white/30"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
```

---

## 5. Sección Projects (landing)

### Archivo: `src/app/sections/Projects.jsx`

Esta sección vive en la landing entre `OurTools` y `About`, o bien entre `About` y `Faqs` — el orden exacto se define en `page.js`.

```jsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import TitleSection from "@/app/components/(common)/TitleSection";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Cursor custom — solo visible dentro de la sección */}
      <ProjectCursor />

      {/* Fondo sutil con gradiente radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(161,226,51,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="px-4 md:px-5 lg:px-10 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Header de sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <TitleSection label={t("sectionLabel")} />
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-4 tracking-tight whitespace-pre-line"
            >
              {t("sectionTitle")}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/35 text-sm leading-relaxed max-w-xs"
          >
            {t("sectionSubtitle")}
          </motion.p>
        </div>

        {/* Lista de proyectos destacados */}
        <div className="flex flex-col gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="featured"
              index={i}
              locale={locale}
            />
          ))}
        </div>

        {/* CTA — ver todos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href={`/${locale}/projects`}
            className="
              group inline-flex items-center gap-3
              px-8 py-4 rounded-full
              border border-white/10 hover:border-[#A1E233]/50
              text-white/60 hover:text-[#A1E233]
              text-sm tracking-widest uppercase
              transition-all duration-400
              backdrop-blur-sm bg-white/[0.02]
            "
          >
            {t("viewAll")}
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

### Añadir la sección en `src/app/[locale]/page.js`

```jsx
// Importar la sección
import Projects from "@/app/sections/Projects";

// Añadir en el JSX, entre OurTools y About (o según preferencia de orden):
<OurTools />
<Projects />
<About />
```

---

## 6. Página /projects

### Estructura de rutas a crear

```
src/app/[locale]/projects/
  page.js          ← lista de todos los proyectos con filtro
  layout.js        ← layout propio (puede heredar del [locale] layout)
```

### Archivo: `src/app/[locale]/projects/page.js`

```jsx
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ProjectsClient from "./ProjectsClient";
import { projects } from "@/data/projects";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function ProjectsPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Projects" });

  return <ProjectsClient projects={projects} locale={locale} translations={t.raw} />;
}
```

### Archivo: `src/app/[locale]/projects/ProjectsClient.jsx`

El componente cliente maneja el filtrado interactivo y las animaciones.

```jsx
"use client";
import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";
import ProjectsFilterBar from "@/app/components/ProjectsFilterBar";

export default function ProjectsClient({ projects, locale }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filtered = useMemo(() => {
    if (activeCategory === "Todos") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
      <ProjectCursor />

      <div className="px-4 md:px-5 lg:px-10 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 text-white/30 hover:text-[#A1E233] text-xs tracking-widest uppercase mb-12 transition-colors duration-300"
          >
            ← Syntek
          </Link>
        </motion.div>

        {/* Header */}
        <div ref={headerRef} className="mb-16">
          {/* Número decorativo enorme */}
          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(5rem,15vw,16rem)] font-black leading-none text-white/[0.03] select-none"
              aria-hidden
            >
              WORK
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-tight leading-tight -mt-[clamp(2rem,8vw,9rem)]"
            >
              Todos los
              <br />
              <span className="text-[#A1E233]">proyectos.</span>
            </motion.h1>
          </div>

          {/* Línea divisora animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-px w-full bg-white/10 mt-12 mb-10"
          />

          {/* Filtros + contador */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <ProjectsFilterBar
              onFilter={setActiveCategory}
              activeCategory={activeCategory}
            />
            <span className="text-white/20 text-xs font-mono tabular-nums shrink-0">
              {filtered.length.toString().padStart(2, "0")} proyectos
            </span>
          </div>
        </div>

        {/* Grid de proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="grid"
                index={i}
                locale={locale}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
```

---

## 7. Página /projects/[id]

### Estructura de rutas

```
src/app/[locale]/projects/[id]/
  page.js           ← server component con generateStaticParams
  ProjectDetail.jsx ← client component con todas las animaciones
```

### Archivo: `src/app/[locale]/projects/[id]/page.js`

```jsx
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

// Genera paths estáticos para todos los proyectos × locales
export async function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, id: p.id }))
  );
}

export async function generateMetadata({ params: { id } }) {
  const project = getProjectById(id);
  if (!project) return {};
  return {
    title: `${project.title} — Syntek`,
    description: project.description.short,
  };
}

export default function ProjectPage({ params: { locale, id } }) {
  unstable_setRequestLocale(locale);
  const project = getProjectById(id);
  if (!project) notFound();

  // Calcular proyecto siguiente (circular)
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return <ProjectDetail project={project} nextProject={nextProject} locale={locale} />;
}
```

### Archivo: `src/app/[locale]/projects/[id]/ProjectDetail.jsx`

Este es el componente más complejo y visual. Incluye:
- Hero de pantalla completa con imagen de fondo parallax
- Reveal de título con clip-path
- Sección de metadata lateral fija (sticky)
- Galería de imágenes con lightbox
- Sección "siguiente proyecto" que transiciona al proyecto siguiente

```jsx
"use client";
import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectCursor from "@/app/components/ProjectCursor";

export default function ProjectDetail({ project, nextProject, locale }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-15%" });

  // Parallax en el hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <ProjectCursor label="←" />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[90vh] overflow-hidden flex items-end"
      >
        {/* Imagen parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </motion.div>

        {/* Contenido del hero */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 px-4 md:px-5 lg:px-10 xl:px-24 pb-16 max-w-screen-2xl mx-auto w-full"
        >
          {/* Back link */}
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors duration-300"
              >
                ← Proyectos
              </Link>
            </motion.div>
          </div>

          {/* Categoría + Año */}
          <div className="flex items-center gap-4 mb-4 overflow-hidden">
            <motion.div
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase px-3 py-1 rounded-full border"
                style={{ color: project.accentColor, borderColor: `${project.accentColor}40` }}
              >
                {project.category}
              </span>
              <span className="text-white/30 text-xs tracking-widest">{project.year}</span>
            </motion.div>
          </div>

          {/* Título principal — clip path reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[clamp(3rem,9vw,9rem)] font-semibold leading-[0.95] tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/40 text-base md:text-lg mt-3"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── CONTENIDO ─────────────────────────────────────── */}
      <section ref={contentRef} className="px-4 md:px-5 lg:px-10 xl:px-24 max-w-screen-2xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">

          {/* Columna principal */}
          <div>
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <span className="text-[#A1E233] text-xs tracking-[0.25em] uppercase font-semibold mb-4 block">
                Overview
              </span>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                {project.description.long}
              </p>
            </motion.div>

            {/* Galería de imágenes */}
            <div className="space-y-4">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: i === 0 ? "16/9" : i === 1 ? "4/3" : "16/9" }}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — imagen ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, calc(100vw - 400px)"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna lateral sticky */}
          <aside>
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Metadata card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/8 rounded-2xl p-6 bg-neutral-900/50 backdrop-blur-sm space-y-6"
              >
                {[
                  { label: "Cliente", value: project.client },
                  { label: "Año", value: project.year },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-1">
                      {label}
                    </span>
                    <span className="text-white text-sm">{value}</span>
                  </div>
                ))}

                <div>
                  <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-2">
                    Servicios
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] tracking-widest uppercase text-white/50 border border-white/10 px-2 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-2">
                    Tecnologías
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-widest uppercase text-[#A1E233]/70 border border-[#A1E233]/15 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón visitar sitio */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full flex items-center justify-center gap-2
                      py-3 px-5 rounded-full
                      bg-[#A1E233] hover:bg-[#b7ff1f]
                      text-black text-xs tracking-widest uppercase font-semibold
                      transition-colors duration-300
                    "
                  >
                    Visitar sitio
                    <span>↗</span>
                  </a>
                )}
              </motion.div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── SIGUIENTE PROYECTO ────────────────────────────── */}
      <Link
        href={`/${locale}/projects/${nextProject.id}`}
        data-cursor-zone
        className="group block relative overflow-hidden cursor-none"
      >
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <Image
            src={nextProject.coverImage}
            alt={nextProject.title}
            fill
            className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        </div>

        <div className="relative z-10 px-4 md:px-5 lg:px-10 xl:px-24 py-24 max-w-screen-2xl mx-auto">
          <span className="text-white/25 text-xs tracking-[0.25em] uppercase block mb-6">
            Siguiente proyecto
          </span>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="overflow-hidden">
              <motion.h2
                initial={false}
                whileInView={{ y: 0 }}
                className="text-white text-[clamp(2.5rem,6vw,6rem)] font-semibold tracking-tight leading-tight group-hover:text-[#A1E233] transition-colors duration-500"
              >
                {nextProject.title}
              </motion.h2>
              <p className="text-white/30 mt-2">{nextProject.subtitle}</p>
            </div>

            <div className="flex items-center gap-3 text-[#A1E233] shrink-0">
              <span className="text-sm tracking-widest uppercase">Ver proyecto</span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}
```

---

## 8. Animaciones — sistema Framer Motion

### Variantes reutilizables recomendadas

Crear `src/lib/animations.js` para centralizar las variantes:

```js
// src/lib/animations.js

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const clipReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: (i = 0) => ({
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};
```

### Estrategia de animación por sección

| Elemento | Animación | Trigger |
|---|---|---|
| Título de sección (landing) | `fadeUp` con `useInView` | Scroll entra al viewport |
| Número índice fantasma | Fade opacity `0.04 → 0.08` en hover | `whileHover` |
| Cards de proyectos | `fadeUp` staggered | Scroll `useInView` |
| Imagen dentro de card | `scale 1 → 1.05` | `whileHover` |
| Hero de detalle - título | Clip path `inset(100% 0 0 0) → inset(0%)` | Montaje del componente |
| Hero - parallax imagen | `y: 0 → 30%` | `useScroll` |
| Filtros | Cambio de clase instantáneo + fade del grid | `AnimatePresence` |
| Sidebar metadata | Slide `x: 20 → 0` + fade | Scroll `useInView` |
| Siguiente proyecto imagen | `opacity 0.3 → 0.5` + `scale 1.05 → 1` | `group-hover` en link |

---

## 9. Routing y navegación

### Actualizar `src/i18n/routing.js` (si usa pathnames)

```js
export const routing = createLocalizedPathnamesNavigation({
  locales,
  defaultLocale,
  pathnames: {
    "/": "/",
    "/projects": {
      en: "/projects",
      es: "/projects",
    },
    "/projects/[id]": {
      en: "/projects/[id]",
      es: "/projects/[id]",
    },
  },
});
```

> **Nota**: si el routing actual no usa `pathnames` (routing simple), no es necesario este cambio; los links `/${locale}/projects` y `/${locale}/projects/${id}` funcionan directamente.

### Ancla de la landing

El `id` de la sección en la landing es `projects`, por tanto el link de navegación interna es `#projects`. Esto es consistente con el sistema de anclas del navbar.

---

## 10. Actualización del Navbar

### Descomentar el link de Portfolio → renombrar a Projects

En el archivo del Navbar, donde el link a Portfolio estaba comentado:

```jsx
// ANTES (comentado o con texto Portfolio)
{/* <Link href="#portfolio">Portfolio</Link> */}

// DESPUÉS — dos opciones según el contexto:

// Opción A: ancla interna desde la landing
<Link href="#projects">
  {t("Navigation.projects")}
</Link>

// Opción B: link a la página completa
<Link href={`/${locale}/projects`}>
  {t("Navigation.projects")}
</Link>
```

### Añadir a los mensajes

```json
// messages/es.json → Navigation
"projects": "Proyectos"

// messages/en.json → Navigation
"projects": "Projects"
```

---

## 11. Assets y recursos visuales

### Estructura de carpetas en `/public`

```
public/
  projects/
    forma-studio/
      cover.jpg       ← imagen cuadrada / 4:3, mínimo 1400px ancho
      hero.jpg        ← imagen panorámica 16:9, mínimo 2000px ancho
      gallery-1.jpg
      gallery-2.jpg
      gallery-3.jpg
    verde/
      ...
    pulso/
      ...
    nox/
      ...
    atlas/
      ...
```

### Placeholders durante desarrollo

Usar imágenes placeholder de alta calidad mientras se consiguen los assets reales. Opciones recomendadas:

1. **Unsplash Source API** (sin clave):
   ```
   https://source.unsplash.com/1400x900/?design,branding
   ```

2. **Picsum Photos** (más predecible por seed):
   ```
   https://picsum.photos/seed/forma/1400/900
   ```

3. **Mejor práctica local**: crear un script que descargue placeholders:
   ```bash
   # scripts/download-placeholders.sh
   mkdir -p public/projects/forma-studio
   curl "https://picsum.photos/seed/forma/1400/1050" -o public/projects/forma-studio/cover.jpg
   curl "https://picsum.photos/seed/forma2/2000/1125" -o public/projects/forma-studio/hero.jpg
   # ... etc
   ```

> **Importante**: `next/image` no puede usar URLs externas por defecto. Si se usan placeholders externos durante desarrollo, añadir los dominios a `next.config.js`:
>
> ```js
> images: {
>   remotePatterns: [
>     { protocol: "https", hostname: "picsum.photos" },
>     { protocol: "https", hostname: "source.unsplash.com" },
>   ],
> },
> ```

---

## 12. Checklist de implementación

Seguir este orden para evitar errores de dependencias:

### Fase 1 — Datos y tipos
- [ ] Crear `src/data/projects.js` con los 5 proyectos de ejemplo
- [ ] Añadir claves `Projects` a `messages/es.json` y `messages/en.json`
- [ ] Crear carpeta `public/projects/` y añadir assets (o placeholders)
- [ ] Actualizar `next.config.js` con `remotePatterns` si se usan placeholders externos

### Fase 2 — Componentes base
- [ ] Crear `src/app/components/ProjectCursor.jsx`
- [ ] Crear `src/app/components/ProjectCard.jsx`
- [ ] Crear `src/app/components/ProjectsFilterBar.jsx`
- [ ] (Opcional) Crear `src/lib/animations.js`

### Fase 3 — Sección landing
- [ ] Crear `src/app/sections/Projects.jsx`
- [ ] Importar y montar `<Projects />` en `src/app/[locale]/page.js`
- [ ] Descomentar / actualizar link de `Projects` en el Navbar

### Fase 4 — Página listado
- [ ] Crear `src/app/[locale]/projects/page.js`
- [ ] Crear `src/app/[locale]/projects/ProjectsClient.jsx`
- [ ] (Opcional) Crear `src/app/[locale]/projects/layout.js` si se necesita metadata extra

### Fase 5 — Página detalle
- [ ] Crear `src/app/[locale]/projects/[id]/page.js`
- [ ] Crear `src/app/[locale]/projects/[id]/ProjectDetail.jsx`
- [ ] Verificar que `generateStaticParams` cubre todos los locales × ids

### Fase 6 — QA y ajuste visual
- [ ] Revisar que el cursor custom no se superpone al cursor del Navbar
- [ ] Verificar responsividad en móvil (el cursor no aparece en touch)
- [ ] Revisar que `AnimatePresence` en el filtro no causa flash
- [ ] Confirmar que `next/image` no lanza errores de dominio en producción
- [ ] Normalizar la inconsistencia de naming (`Syntek` / `Synttek`) en todos los textos nuevos

---

## Consideraciones finales

- **Performance**: las imágenes de galería se cargan con `loading="lazy"` por defecto en `next/image`. El hero usa `priority` para evitar LCP alto.
- **Accesibilidad**: todos los `ProjectCard` son `<article>` con `alt` descriptivo en las imágenes. El cursor custom no interfiere con navegación por teclado porque es `pointer-events-none`.
- **Cursor en mobile**: añadir `@media (pointer: coarse)` en el `ProjectCursor` para ocultarlo en dispositivos táctiles, donde el cursor custom no tiene sentido.
- **`"use client"` boundary**: `Projects.jsx` (sección landing), `ProjectsClient.jsx` y `ProjectDetail.jsx` son todos client components. Los `page.js` son server components que les pasan los datos.
- **Consistencia de marca**: usar siempre `Syntek` (sin doble t) en todos los textos nuevos que se creen.