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

## Qué contiene

- Estructura HTML5 semántica de una página de ejemplo (`index.html`).
- Sistema de diseño en CSS basado en variables (colores, tipografía,
  espaciado, contenedores, sombras, transiciones).
- Sistema de utilidades (grids, flex, anchos, espaciados).
- Componentes reutilizables en CSS: botones, cards, sistema de
  imágenes, header y footer.
- Menú mobile funcional (`assets/js/main.js`).
- SEO técnico básico dejado como plantilla (title, description,
  canonical, Open Graph, Twitter Card).
- Favicon genérico de la plantilla.
- `robots.txt` y `sitemap.xml` de ejemplo.
- Accesibilidad básica (`focus-visible`, `aria-*`, soporte para
  `prefers-reduced-motion`).

## Metodología

`metodologia/` contiene el sistema de trabajo reutilizable de MACARIO:
las 12 etapas de un proyecto (Intake → Cierre), la matriz de qué puede
resolver Claude solo y qué requiere aprobación, los quality gates, la
integración con el resto del ecosistema (Linear, GitHub, Obsidian,
etc.) y los templates a completar en cada proyecto real. Ver
`metodologia/README.md`.

## Qué NO contiene

- Identidad visual, contenido, textos o imágenes de ningún cliente
  real: todo el contenido de `index.html` es de demostración.
- Frameworks, librerías, CMS ni build tools (no usa npm, Vite, React,
  Tailwind, etc.). Es HTML + CSS + JavaScript plano.
- Sistema de inclusión de componentes por servidor o build: los
  componentes son bloques de HTML/CSS reutilizables, no archivos
  separados que se "incluyen" automáticamente.
- Páginas de ejemplo adicionales ni funcionalidades específicas de
  un proyecto (formularios conectados, analytics, integraciones).

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

## Estructura de carpetas

```
Web-Base/
├── CLAUDE.md
├── README.md
├── index.html
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
├── metodologia/
│   ├── README.md
│   ├── 01-etapas-y-aprobaciones.md
│   ├── 02-flujo-nuevo-proyecto.md
│   ├── 03-quality-gates.md
│   ├── 04-integracion-ecosistema.md
│   ├── 05-documentacion-permanente.md
│   ├── PENDIENTES.md
│   └── templates/
└── .claude/
    ├── skills/metodologia/SKILL.md
    └── commands/nuevo-proyecto.md
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
