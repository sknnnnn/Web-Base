# 07 — SEO / Analytics / Performance

Solo lo que forma parte de la foundation o que ya es estándar
reutilizable.

## SEO técnico (existente)

Ambas páginas (`index.html`, `secondary-page.html`) incluyen, como
plantilla con `PLACEHOLDER`: `<title>`, meta `description`, `viewport`,
`robots`, `canonical`, Open Graph, Twitter Card y favicon.
`robots.txt` y `sitemap.xml` son de ejemplo (dominio `EJEMPLO-DOMINIO`,
fechas `YYYY-MM-DD`; el sitemap lista ambas páginas).

Al iniciar un proyecto: reemplazar todos los placeholders y ajustar el
sitemap a las páginas reales (quitar `secondary-page.html` si no se
usa). La verificación está en [qa-checklist.md](qa-checklist.md)
(categoría SEO). No se modifican configuraciones SEO existentes sin
necesidad (`CLAUDE.md` §13).

Estructura semántica y jerarquía de títulos: ver
[arquitectura.md](arquitectura.md).

## Performance

Lo que hoy es estándar de la base:

- Sin frameworks, librerías ni build: un CSS y un JS.
- Tipografías del sistema (Arial) en los tokens base: sin carga de
  fuentes web.
- `prefers-reduced-motion` respetado.
- Verificación: sin imágenes sin optimizar evidentes, sin CSS/JS
  bloqueante innecesario, `object-fit` acorde a cada imagen (checklist,
  categoría Performance; Lighthouse opcional).

No hay definidos: presupuesto de performance, estrategia de fuentes web,
formatos/tamaños de imagen estándar ni lazy-loading. → `Por definir`
cuando un proyecto lo resuelva de forma reutilizable.

## Analytics

**No forma parte de la foundation.** Web-Base no incluye analytics ni
tracking (el README de la raíz lo excluye explícitamente). Cada
proyecto decide e implementa el suyo; si un enfoque resulta reutilizable
(p. ej. un snippet opt-in o un estándar de eventos) puede promoverse
según [evolucion.md](evolucion.md). La operación y el análisis de datos
pertenecen al flujo del proyecto / MACARIO.
