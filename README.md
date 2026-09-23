# Web Base

Plantilla maestra reutilizable para desarrollar sitios web profesionales.

## Qué es Web Base

`Web-Base` es la base común de la que parte cada nuevo proyecto web.
Contiene la estructura, el sistema de diseño (CSS), los componentes
reutilizables y la configuración técnica básica (SEO, accesibilidad)
necesarios para empezar un proyecto real de forma rápida y ordenada,
sin reconstruir la arquitectura desde cero cada vez.

`Web-Base` **no es un sitio en producción** ni el sitio de ningún
cliente en particular: es un molde.

## Rol en el ecosistema

```
PRANA → MACARIO → Web-Base → Proyectos
```

- **PRANA**: marca / negocio externo.
- **MACARIO**: sistema interno de ejecución y producción.
- **Web-Base**: foundation técnica reutilizable (este repositorio).
- **Proyectos**: implementaciones concretas, cada una en su repositorio.

Web-Base no absorbe la documentación estratégica de PRANA, de MACARIO
ni de cada proyecto: solo documenta la base técnica y aprende de los
proyectos cuando surge algo realmente reutilizable. Documentación
completa en [`docs/`](docs/README.md).

## Qué contiene

- Estructura HTML5 semántica de una página de ejemplo (`index.html`)
  y una segunda página real (`secondary-page.html`) que demuestra el
  patrón Secondary Page: header, footer y navegación reutilizados sin
  includes ni build step.
- Sistema de diseño en CSS basado en variables (colores, tipografía,
  espaciado, contenedores, sombras, transiciones).
- Sistema de utilidades (grids, flex, anchos, espaciados) y base
  responsive (breakpoints en 900px y 600px).
- Componentes reutilizables en CSS: botones, cards, sistema de
  imágenes, header, footer, formularios (Forms), feedback inline
  (`.alert`) y tablas (`.table`).
- Theming: theme base y una variante alternativa (`data-theme="alt"`)
  que redefine solo los tokens de color, sin tocar componentes.
- Menú mobile funcional (`assets/js/main.js`).
- SEO técnico básico dejado como plantilla (title, description,
  canonical, Open Graph, Twitter Card).
- Favicon genérico de la plantilla.
- `robots.txt` y `sitemap.xml` de ejemplo.
- Accesibilidad básica (`focus-visible`, `aria-*`, soporte para
  `prefers-reduced-motion`).
- Checklist de QA técnico reutilizable (`docs/qa-checklist.md`).
- Documentación técnica de la foundation en `docs/` (propósito,
  arquitectura, desarrollo, diseño → código, features, QA, SEO y
  evolución).

## Qué NO contiene

- Identidad visual, contenido, textos o imágenes de ningún cliente
  real: todo el contenido de `index.html` es de demostración.
- Frameworks, librerías, CMS ni build tools (no usa npm, Vite, React,
  Tailwind, etc.). Es HTML + CSS + JavaScript plano.
- Sistema de inclusión de componentes por servidor o build: los
  componentes son bloques de HTML/CSS reutilizables, no archivos
  separados que se "incluyen" automáticamente.
- Más páginas de ejemplo que `index.html` y `secondary-page.html`, ni
  funcionalidades específicas de un proyecto (formularios conectados,
  analytics, integraciones).
- Documentación estratégica o de contexto de PRANA, MACARIO o de un
  proyecto (contexto, alcance, wireframes, decisiones visuales): vive
  en su lugar de origen.

## Cómo usarlo como punto de partida

1. Clonar o copiar este repositorio como base de un proyecto nuevo,
   en un repositorio propio para ese cliente/proyecto.
2. Reemplazar el contenido, textos, marca e imágenes de demostración
   por los del proyecto real.
3. Adaptar identidad visual (colores, tipografías) modificando las
   variables CSS en `assets/css/style.css` si el proyecto lo requiere.
4. Agregar las páginas, secciones y funcionalidades específicas de
   ese proyecto.
5. `Web-Base` en sí mismo no debe modificarse para desarrollar un
   cliente: los cambios de un proyecto viven en su propio repositorio.

### Elementos que deben reemplazarse/adaptarse al iniciar un proyecto

Todos estos puntos están marcados con comentarios `PLACEHOLDER` en
el código:

- `<title>`, meta `description`, `canonical`, Open Graph y Twitter
  Card en `index.html`.
- Email de contacto (`mailto:`).
- Enlaces de redes sociales y del footer ("Privacidad", "Términos").
- Nombre de marca/cliente en header y footer ("WEB BASE").
- Favicon (`assets/icons/favicon.svg`) por el del cliente.
- Contenido de todas las secciones (hero, servicios, nosotros,
  contacto).
- `robots.txt` y `sitemap.xml` (dominio real y fechas).
- Imágenes reales en `assets/img/` y `assets/icons/`.

## Theming

`Web-Base` puede cambiar de identidad visual sin reescribir
componentes: los colores viven en variables CSS dentro de `:root` en
`assets/css/style.css`, y una segunda variante (`:root[data-theme="alt"]`)
redefine únicamente esos tokens de color (primary, secondary, accent,
background, surface, text, text-muted, border). Spacing, radius,
tipografía, shadows y transitions son compartidos por todos los themes.

Para activar el theme alternativo en un proyecto real:

```html
<html lang="es" data-theme="alt">
```

o vía JS: `document.documentElement.setAttribute('data-theme', 'alt')`.

`index.html` y `secondary-page.html` incluyen un botón de demostración
(`.theme-demo-toggle`, con su lógica en `assets/js/main.js`) que
alterna entre ambos themes y persiste la elección en `localStorage`
solo para validar el sistema — no es parte del contenido de un
proyecto real y debe eliminarse (botón + bloque JS correspondiente)
al iniciar uno.

## Estructura de carpetas

```
Web-Base/
├── CLAUDE.md
├── README.md
├── index.html
├── secondary-page.html
├── robots.txt
├── sitemap.xml
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   └── icons/
│       └── favicon.svg
├── docs/
│   ├── README.md            índice y rol en el ecosistema
│   ├── proposito.md
│   ├── arquitectura.md
│   ├── desarrollo.md
│   ├── diseno-a-codigo.md
│   ├── features.md
│   ├── qa-checklist.md
│   ├── seo-performance.md
│   └── evolucion.md
└── .claude/
    └── commands/
        └── nuevo-proyecto.md
```

## Flujo general: GitHub → Cloudflare

1. Cada proyecto/cliente tiene su propio repositorio en GitHub,
   creado a partir de esta plantilla.
2. El repositorio del proyecto se conecta a Cloudflare Pages para el
   despliegue.
3. Cada push a la rama principal despliega automáticamente el sitio.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Cloudflare Pages

## Principios

- Código simple y mantenible.
- Diseño responsive.
- Componentes reutilizables.
- Buena estructura semántica.
- SEO básico incorporado.
- Accesibilidad básica.
- Evitar código duplicado.
- No agregar funcionalidades innecesarias.

## Estado

Plantilla maestra base, lista para usarse como punto de partida de
nuevos proyectos.
