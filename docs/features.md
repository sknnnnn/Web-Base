# 05 — Features reutilizables

Catálogo de lo que **existe hoy** en `assets/css/style.css`,
`assets/js/main.js` y las páginas de ejemplo. Los nombres de clase son
los reales del código.

Los detalles de verificación de cada uno están en
[qa-checklist.md](qa-checklist.md).

## Componentes y patrones existentes

| Feature | Clases / archivos | JS | Notas |
|---|---|---|---|
| Contenedor y secciones | `.container`, `.section`, `.section-sm`, `.section-lg` | No | Anchos por `--container-*` |
| Botones | `.btn` + `-primary`, `-secondary`, `-outline`, `-ghost`; tamaños `-sm`, `-lg` | No | Estados hover/focus/disabled |
| Enlaces | estilos base | No | |
| Cards | `.card`, `.card-image`, `.card-content`, `.card-title`, `.card-description`, `.card-footer`, `.card-featured`, `.card-grid` | No | Variante sin imagen soportada |
| Sistema de imágenes | `.img`, `.img-cover`, `.img-contain`, `.image-bg`, `.image-bg-contain`, `.image-container`, proporciones `.image-*`, alturas `.image-fixed-*`, `.img-position-*`, `.image-overlay` | No | Ver reglas en [arquitectura.md](arquitectura.md) |
| Layouts / utilidades | `.flex*`, `.items-*`, `.justify-*`, `.gap-*`, `.grid-1..4`, `.grid-auto`, `.mx-auto` | No | Colapsan a 900px / 600px |
| Header y navegación | `.site-header`, `.header-container`, `.header-logo`, `.header-nav`, `.header-actions`, `.mobile-menu-button` | Sí (menú mobile) | Link activo con `aria-current="page"` |
| Footer | `.site-footer`, `.footer-brand`, `.footer-column`, `.footer-bottom`, `.footer-socials` | No | |
| Formularios | `.form-group`, `.form-label`, `.input`, `.form-help`, `.form-error`, `.form-success`, `.required-mark`, `.has-error`, `.form-check`, `.form-check-group` | Solo loading | Validación nativa HTML5; sin validación JS propia |
| Loading de botón | `.btn.is-loading` | Sí | Se activa al enviar; no intercepta el envío |
| Feedback inline | `.alert`, `.alert-info`, `.alert-error`, `.alert-success` | No | `role="status"` / `"alert"` |
| Tablas | `.table`, `.table-responsive`, `.table-striped` | No | Scroll horizontal contenido en mobile |
| Secondary Page | `secondary-page.html` | Reusa `main.js` | Patrón de página interna con header/footer repetidos |

## Theming

Ver también el README de la raíz. Theme base en `:root` y variante
`:root[data-theme="alt"]`, que redefine solo tokens de color. Los
tokens de estado (`--color-success/warning/error`) son iguales en ambos
themes. `.theme-demo-toggle` y su bloque en `main.js` son solo demo y
se eliminan al iniciar un proyecto.

## Previstos por la arquitectura, no implementados

La arquitectura (tokens + componentes + utilidades) permite sumarlos
como variantes o componentes nuevos, pero **hoy no existen** en el
código y no están documentados como funcionalidad:

- WhatsApp, galerías, carruseles, catálogos, filtros, reservas,
  formularios conectados a un backend, analytics.

Cuando un proyecto real implemente alguno y sea reutilizable, se
incorpora siguiendo [evolucion.md](evolucion.md) y se agrega a la tabla
de arriba.
