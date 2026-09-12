# Quality gates

Criterios concretos para las etapas 08 (QA, iterativo por bloque) y 09
(Auditoría, gate final único). Usar esta misma tabla en ambas etapas;
la diferencia es el momento (por bloque vs. al final) y el alcance
(un bloque vs. el sitio completo).

| Categoría | Qué se verifica | Herramienta | Quién valida | PASS | FAIL / bloquea |
|---|---|---|---|---|---|
| Estructura | HTML5 semántico, jerarquía de títulos correcta | Lectura manual | Claude | Un solo `<h1>`, jerarquía sin saltos | Headings desordenados o divs sin semántica donde corresponde `section`/`article` |
| Accesibilidad | `alt` en imágenes, `focus-visible`, contraste, navegación por teclado | Lectura manual + contraste (WCAG AA) | Claude | Todo lo anterior presente | Falta `alt`, contraste insuficiente, trampa de foco |
| Responsive | Funciona en desktop/tablet/mobile | Prueba manual en 3 anchos (~375px, ~768px, ~1280px) | Claude | Sin overflow horizontal, sin elementos cortados | Contenido roto en algún ancho |
| Performance | Carga liviana, imágenes optimizadas | Lighthouse o inspección manual | Claude | Sin imágenes sin optimizar evidentes, sin bloqueo de render innecesario | Imágenes pesadas sin optimizar, JS/CSS bloqueante innecesario |
| SEO básico | title, description, canonical, OG, robots, sitemap | Lectura de `<head>` | Claude | Todo presente y coherente con el proyecto real (sin placeholders sin reemplazar) | Placeholders (`[TÍTULO DEL PROYECTO]`, `EJEMPLO-DOMINIO`) todavía presentes |
| Consola | Sin errores/warnings al cargar | DevTools | Claude | Consola limpia | Cualquier error de JS o recurso 404 |
| Links | Todos los enlaces internos y externos resuelven | Revisión manual | Claude | Sin enlaces rotos | Cualquier `href`/`src` roto o `#` sin resolver dejado por error |
| Formularios | Validación básica, feedback de envío, sin exponer datos sensibles | Prueba manual | Claude | Envío y validación funcionan | Formulario no valida o falla silenciosamente |
| Seguridad | Sin credenciales/keys en el código, sin dependencias sin auditar | Revisión manual / `security-review` si aplica | Claude | Sin secretos expuestos | Cualquier secreto o key hardcodeada |
| Tests | Si el proyecto usa Playwright, tests pasan | Playwright (solo si aplica, ver `01-etapas-y-aprobaciones.md`) | Claude | Suite en verde | Cualquier test roto |
| Git | Que los cambios actuales sean solo los esperados para este bloque/alcance | `git status` / `git diff` | Claude | Cambios acotados a lo pedido, sin archivos accidentales ni secretos | Archivos fuera de alcance, `.env`/credenciales, o binarios pesados agregados sin querer |
| Deploy | Preview coincide con lo auditado | Comparación manual preview vs. auditoría | Ignacio | Coincide | Cualquier diferencia de último momento |
| Revisión visual | Coincide con la dirección visual aprobada | Revisión manual | Ignacio | Coincide | Desvío no aprobado de paleta/tipografía/layout |

## Regla de bloqueo

- Un FAIL en Estructura, Accesibilidad, Responsive, SEO, Consola,
  Links, Formularios, Seguridad o Git **bloquea el avance** hasta
  corregirse — son responsabilidad de Claude y no requieren criterio
  humano para resolverse.
- Un FAIL en Performance puede aceptarse como conocido si Ignacio lo
  autoriza explícitamente (por ejemplo, una imagen grande que el
  cliente insiste en usar tal cual).
- Deploy y Revisión visual son validados por Ignacio, no por Claude:
  un PASS de Claude en todo lo demás no habilita el deploy por sí solo
  (ver etapa 09 y 10 en `01-etapas-y-aprobaciones.md`).

Nota sobre Git: durante QA (08) y Auditoría (09) el gate de Git
verifica cambios accidentales/inesperados, no el estado del historial
completo — es normal tener trabajo en curso sin commitear mientras se
desarrolla. Exigir "working tree limpio / estado final de git" recién
corresponde en Cierre (12), como checklist de que el proyecto quedó
prolijo antes de archivarlo (ver `templates/cierre-checklist.md`).
