# QA técnico — Web-Base

Checklist técnico reusable para verificar HTML, CSS, JS y SEO en
cualquier proyecto construido sobre esta base. Es una lista de qué
comprobar, no un proceso de aprobación — eso se gestiona en MACARIO.

| Categoría | Qué verificar | Cómo verificar |
|---|---|---|
| Estructura | HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`); un solo `<h1>`; jerarquía de títulos sin saltos | Lectura manual del marcado |
| Accesibilidad | `alt` en todas las imágenes; `:focus-visible` en elementos interactivos; navegación completa por teclado; labels asociados a inputs; contraste razonable (WCAG AA); soporte para `prefers-reduced-motion` | Lectura manual + revisión de contraste |
| Responsive | Sin overflow horizontal ni elementos cortados en ~375px, ~768px y ~1280px | Prueba manual en los tres anchos |
| Performance | Sin imágenes sin optimizar evidentes; sin CSS/JS bloqueante innecesario; `object-fit`/`object-position` usados según corresponda a cada imagen (no `cover` por defecto) | Inspección manual o Lighthouse |
| SEO | `<title>`, meta `description`, `canonical`, `viewport`, Open Graph, `robots.txt`, `sitemap.xml` presentes y sin placeholders sin reemplazar (`[TÍTULO DEL PROYECTO]`, `EJEMPLO-DOMINIO`, etc.) | Lectura del `<head>` |
| Consola | Sin errores ni warnings al cargar; sin recursos 404 | DevTools |
| Links | Todos los `href`/`src` internos y externos resuelven; sin `#` sin resolver dejado por error | Revisión manual |
| Formularios | Validación básica funcional; feedback de envío; sin exponer datos sensibles en el marcado — detalle completo en la sección "Formularios" más abajo | Prueba manual |
| Seguridad | Sin credenciales, tokens ni claves hardcodeadas en el código | Revisión manual |
| Tests | Si el proyecto usa Playwright, la suite corre en verde (no es requisito de Web-Base en sí) | Playwright, si aplica |
| Git | `git status` / `git diff` acotados a los archivos esperados para el cambio en curso, sin archivos accidentales ni secretos agregados | `git status` / `git diff` |

CSS y JS, además, deben seguir las reglas de `CLAUDE.md` (variables en
vez de valores repetidos, componentes reutilizables, JS separado del
HTML, sin dependencias nuevas sin justificación).

## Formularios

Checklist específico de la Foundation de formularios (`.form-group`,
`.form-label`, `.input`, `.form-help`, `.form-error`, `.form-success`,
`.required-mark`, `.form-group.has-error`, `.form-check`,
`.form-check-group`, `fieldset`/`legend`, `.btn.is-loading`).

### Estructura y accesibilidad

- [ ] Todo `input`, `textarea` y `select` tiene un `label` asociado mediante `for` + `id`.
- [ ] Ningún formulario utiliza `placeholder` como único label.
- [ ] Los campos que necesitan ayuda o error utilizan `aria-describedby`.
- [ ] Los campos en estado de error utilizan `aria-invalid="true"`.
- [ ] Los campos obligatorios utilizan el atributo nativo `required`.
- [ ] Los grupos relacionados de checkbox/radio utilizan `fieldset` + `legend` cuando corresponde.
- [ ] Todos los controles son operables mediante teclado.
- [ ] Todos los controles mantienen un foco visible.

### Estados visuales

- [ ] Estado normal.
- [ ] Estado `:focus-visible`.
- [ ] Estado `:disabled`.
- [ ] Estado de error.
- [ ] Estado de éxito.
- [ ] Mensajes de ayuda correctamente asociados al campo.
- [ ] Indicador de campo requerido correctamente visible.
- [ ] Checkbox y radio siguen siendo controles nativos visibles y operables.

### Submit / loading

- [ ] El botón de envío utiliza `type="submit"` explícitamente.
- [ ] Al enviar correctamente el formulario, el botón muestra `.is-loading`.
- [ ] El botón queda deshabilitado durante el loading.
- [ ] El loading no intercepta ni reemplaza el envío real.
- [ ] No existe validación JS propia de Web-Base.
- [ ] La validación básica se apoya en las capacidades nativas de HTML5.

### Responsive

- [ ] Los controles ocupan correctamente el ancho disponible.
- [ ] Los formularios no generan overflow horizontal.
- [ ] Los layouts basados en `.grid-2` se comportan correctamente en mobile.
- [ ] Los controles siguen siendo utilizables en anchos reducidos.

## Feedback

Checklist específico de la Foundation de feedback inline (`.alert`,
`.alert-info`, `.alert-error`, `.alert-success`).

### Visual

- [ ] Las variantes `info`, `error` y `success` muestran correctamente el fondo `--color-surface`.
- [ ] Las variantes mantienen el borde `--color-border`.
- [ ] El acento izquierdo de 4px utiliza el token correspondiente a cada variante.
- [ ] El radio y spacing son consistentes con los tokens existentes.
- [ ] El contenido interno mantiene padding equilibrado.
- [ ] El `<p>` interno no introduce margen inferior adicional que rompa el spacing del componente.
- [ ] El componente mantiene consistencia visual con Forms, Buttons, Cards y Sections.
- [ ] No presenta apariencia de elemento interactivo.

### Contraste

- [ ] El texto mantiene contraste WCAG AA sobre `--color-surface`.
- [ ] Los acentos info/error/success cumplen el contraste mínimo requerido para elementos no textuales.
- [ ] Los mensajes no dependen únicamente del color para comunicar su significado.

**Nota de mantenimiento:** `--color-success` fue validado en aproximadamente
`3.02:1` contra `--color-surface`, por lo que cualquier cambio futuro a ese
token debe volver a verificarse.

### Accesibilidad

- [ ] `info` utiliza `role="status"`.
- [ ] `success` utiliza `role="status"`.
- [ ] `error` utiliza `role="alert"`.
- [ ] No se agrega `aria-live` redundante cuando ya existe el rol correspondiente.
- [ ] El contenido del mensaje es comprensible sin depender del color.
- [ ] El alert no introduce elementos interactivos ni foco innecesario.
- [ ] Si el mensaje se actualiza dinámicamente, el contenedor con el `role` ya existe en el DOM antes del cambio de contenido.

### Responsive

- [ ] Funciona correctamente a 900px.
- [ ] Funciona correctamente a 600px.
- [ ] Funciona correctamente a 375px.
- [ ] El texto hace wrapping correctamente.
- [ ] No genera overflow horizontal.
- [ ] No requiere un breakpoint adicional.
- [ ] Cuando se utiliza dentro de `.grid-2`, respeta el comportamiento responsive existente.

### Integración

- [ ] Funciona dentro de `.section` y `.container`.
- [ ] Funciona dentro de `.grid-2`.
- [ ] Funciona dentro de `.card` / `.card-content`.
- [ ] Puede convivir con Forms y `.form-error` sin conflictos.
- [ ] Puede convivir con `.btn`, `.btn-primary` y `.btn-outline`.
- [ ] Puede coexistir con `.btn.is-loading` sin interferencias.

### JavaScript

- [ ] Feedback no requiere JavaScript para renderizarse.
- [ ] `main.js` no contiene lógica específica para `.alert`.
- [ ] No existen errores ni warnings de consola asociados a Feedback.
- [ ] El componente funciona como HTML + CSS independiente.
