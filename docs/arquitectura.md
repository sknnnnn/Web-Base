# 02 — Arquitectura

Descripción del estado actual del repositorio. No define cambios: si
algo aquí deja de ser cierto, se actualiza este documento.

## Estructura base

```
Web-Base/
├── CLAUDE.md               reglas de trabajo para Claude Code
├── README.md               introducción al repositorio
├── index.html              página de ejemplo (home)
├── secondary-page.html     segunda página (patrón Secondary Page)
├── robots.txt / sitemap.xml
├── assets/
│   ├── css/style.css       único archivo de estilos
│   ├── js/main.js          único archivo de JavaScript
│   ├── img/                imágenes (vacío en la base)
│   └── icons/favicon.svg   favicon genérico
├── docs/                   esta documentación
└── .claude/commands/nuevo-proyecto.md
```

## HTML y componentes

- HTML5 semántico: `header.site-header`, `nav.header-nav`, `main`,
  `section`, `footer.site-footer`. Un solo `<h1>` y jerarquía sin saltos.
- Los "componentes" son bloques de HTML + clases CSS que se copian; no
  hay includes, plantillas ni build. `index.html` y `secondary-page.html`
  repiten header y footer a propósito (patrón Secondary Page): un cambio
  en header/footer debe replicarse en ambas páginas.
- Antes de crear un componente se busca uno equivalente y se prefiere
  crear una variante (`CLAUDE.md` §11).

## CSS

Un solo archivo (`assets/css/style.css`), organizado por bloques con
encabezado `/* === NOMBRE === */`, en este orden aproximado: dirección
visual/tokens → themes → reset → contenedor y secciones → utilidades →
accesibilidad y reduced-motion → tipografía → botones → cards →
sistema de imágenes → layouts (flex/grid) → header → footer →
formularios → feedback → tablas → demo de theme.

- Esta sección (tokens, themes y componentes CSS) constituye la Visual
  Foundation de Web-Base; ver [sistema-visual.md](sistema-visual.md).
- **Tokens** en `:root`: colores (`--color-*`, incluidos los de estado
  success/warning/error), tipografía (`--font-*`, `--font-size-*`),
  espaciado (`--space-*`), contenedores (`--container-*`), radios,
  sombras, transiciones y `--z-sticky`.
- **Theming**: `:root[data-theme="alt"]` redefine únicamente tokens de
  color. Componentes, spacing, radios, tipografía y sombras son
  compartidos. Ver [features.md](features.md#theming).
- Los tokens son el **primer mecanismo** para adaptar la base a la
  identidad de un proyecto (reemplazando sus valores). No es el único:
  un proyecto puede necesitar componentes, composiciones o estilos
  propios, que viven en su repositorio (ver
  [diseno-a-codigo.md](diseno-a-codigo.md)).
- Reglas: variables antes que valores repetidos, clases reutilizables,
  sin `!important` injustificado, sin estilos inline innecesarios.

## JavaScript

Un solo archivo (`assets/js/main.js`), en IIFEs independientes, sin
dependencias:

| Bloque | Función |
|---|---|
| Menú mobile | Alterna `.is-open` en `.header-nav` y `aria-expanded` del botón; cierra al elegir un link |
| Loading en formularios | Al enviar cualquier `<form>`, agrega `.is-loading` y deshabilita el `[type="submit"]`; no intercepta el envío ni valida |
| Demo de theme | Alterna `data-theme` y persiste en `localStorage`; **es solo demo** y se elimina al iniciar un proyecto |

Criterio: no usar JS donde HTML/CSS alcanzan; los componentes de
feedback y tablas no requieren JS.

## Assets

- `assets/img/`: vacío en la base. Cada proyecto aporta sus imágenes.
- `assets/icons/favicon.svg`: genérico, se reemplaza por el del cliente.
- Imágenes: se decide caso por caso entre mostrar completa
  (`.img-contain`, `.image-bg-contain`) o recortar (`.img-cover`,
  `.image-bg`) y se controla el área visible con `.img-position-*`. El
  contenedor define proporción (`.image-square`, `-landscape`,
  `-standard`, `-portrait`, `-wide`) o altura fija (`.image-fixed-*`).
  No asumir `cover` por defecto (`CLAUDE.md` §6).

## Responsive

- Enfoque desktop-first con `max-width`: breakpoints en **900px** y
  **600px**, repetidos por bloque dentro del CSS (cada componente trae
  su propio `@media`).
- Verificación de referencia: ~375px, ~768px y ~1280px.
- Las grillas (`.grid-2/3/4`, `.card-grid`) colapsan con esos mismos
  breakpoints.

## Accesibilidad

- `:focus-visible` global, `aria-expanded` en el menú, `aria-current`
  en la navegación, `role="status"`/`"alert"` en `.alert`,
  `aria-describedby`/`aria-invalid` en formularios.
- `prefers-reduced-motion` respetado.
- Contraste: WCAG AA; valores límite conocidos en
  [qa-checklist.md](qa-checklist.md) (nota de `--color-success`).

## Convenciones reutilizables

- Naming: clases en kebab-case por componente (`.card-title`,
  `.form-help`); modificadores como clases independientes (`.btn-primary`,
  `.alert-error`); estados con prefijo `is-` / `has-` (`.is-open`,
  `.is-loading`, `.has-error`).
- Placeholders de proyecto marcados con comentarios `PLACEHOLDER` y
  textos entre corchetes (`[TÍTULO DEL PROYECTO]`, `EJEMPLO-DOMINIO`).
- Sin dependencias externas nuevas sin autorización (`CLAUDE.md` §4, §15).
