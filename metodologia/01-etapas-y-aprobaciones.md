# Etapas y aprobaciones

Referencia operativa de las 12 etapas. Detalle completo de cada una
en `templates/` (el output de cada etapa es, literalmente, ese
template completado).

## Las 12 etapas

| # | Etapa | Objetivo en una línea | Output | Quality gate |
|---|---|---|---|---|
| 01 | Intake | Capturar el pedido crudo | Ficha de intake | Quién/qué/por qué/urgencia definidos |
| 02 | Contexto | Entender el negocio del cliente | Doc. de contexto | Cero datos inventados |
| 03 | Discovery | Referencias, inventario, restricciones | Doc. de discovery | Huecos de contenido identificados |
| 04 | Alcance | Qué se construye y qué no | Doc. de alcance | Cada ítem verificable (hecho/no hecho) |
| 05 | Arquitectura | Estructura técnica y stack | Doc. arquitectura + repo creado | 100% del alcance con solución técnica |
| 06 | Dirección visual | Paleta, tipografía, tono | Variables CSS del proyecto | Contraste accesible, sin overrides sueltos |
| 07 | Implementación | Construir el sitio | Código en rama de trabajo | Sin errores de consola, responsive OK |
| 08 | QA | Verificar cada bloque implementado | Reporte de QA | Checklist sin FAIL sin resolución |
| 09 | Auditoría | Gate final único antes de producción | Reporte de auditoría | Todas las categorías en PASS (`03-quality-gates.md`) |
| 10 | Deploy | Publicar | Sitio en producción | Preview = producción |
| 11 | Documentación | Registro permanente | Nota en Obsidian | Legible en <10 min por alguien externo |
| 12 | Cierre | Cierre formal | Proyecto archivado | Cero tareas abiertas sin justificar; working tree limpio y estado final de git verificado |

Notas de dependencia:
- 02→03→04 pueden iterar (un hallazgo de Discovery puede hacer volver a Contexto).
- 07↔08 son iterativos entre sí: se implementa un bloque, se hace QA de ese bloque, se sigue.
- 09 es un gate único (no iterativo), posterior a que 08 dio PASS general.
- 11 se alimenta desde la etapa 01: cada etapa deja su output ya documentable, así 11 es consolidación, no trabajo nuevo.

## Matriz de aprobación (por tipo de decisión)

| Decisión | Claude solo | Claude propone | Ignacio aprueba |
|---|---|---|---|
| Investigar / analizar / resumir | Sí | — | — |
| Reportes, checklists, detectar problemas | Sí | — | — |
| Implementar cambios ya aprobados | Sí | — | — |
| Cambios de alcance | No | Sí | Siempre |
| Cambios de arquitectura importantes | No | Sí | Siempre |
| Identidad visual (colores, tipografía, logo) | No | Sí (alternativas) | Siempre |
| Nuevas dependencias | No | Sí | Siempre |
| Commit / push | No | — | Siempre |
| Merge | No | — | Siempre |
| Deploy / publicación | No | — | Siempre |
| Cambios destructivos | No | Sí (con justificación) | Siempre |
| Decisiones comerciales (precio, plazos, contrato) | No | — | Siempre — fuera del alcance de Claude |
| Cambios que afecten otro repo/proyecto | Nunca, ni propuesto | — | Fuera de alcance total |

## Herramientas por etapa

| Etapa | Principal | Secundaria |
|---|---|---|
| 01 Intake | Linear | Obsidian |
| 02 Contexto | Obsidian | Linear |
| 03 Discovery | Research web | Figma, Obsidian |
| 04 Alcance | Linear | Obsidian |
| 05 Arquitectura | GitHub (repo desde Web-Base) | Supabase (si el alcance lo pide) |
| 06 Dirección visual | Web-Base (variables CSS) | Figma |
| 07 Implementación | Claude Code + GitHub | Cloudflare (preview) |
| 08 QA | Checklist manual | Playwright (si el proyecto lo justifica) |
| 09 Auditoría | Checklist / Lighthouse | Security review |
| 10 Deploy | GitHub + Cloudflare | — |
| 11 Documentación | Obsidian | Linear (enlace) |
| 12 Cierre | Linear | — |

Sentry, PostHog, n8n y Resend no tienen etapa propia: se activan dentro
de Arquitectura (05) solo si el alcance del proyecto puntual los
necesita. Ver `04-integracion-ecosistema.md`.

## Obligatorio vs. opcional según tamaño de proyecto

| Etapa | Proyecto chico (landing 1 página) | Proyecto grande (multi-página / backend) |
|---|---|---|
| 01 Intake | Obligatoria, breve | Obligatoria |
| 02 Contexto | Obligatoria, breve | Obligatoria, completa |
| 03 Discovery | Liviana (puede fusionarse con Contexto) | Obligatoria, completa |
| 04 Alcance | Obligatoria, corta | Obligatoria, detallada |
| 05 Arquitectura | Obligatoria, mínima (sin backend) | Obligatoria, completa |
| 06 Dirección visual | Obligatoria (aunque sea reusar defaults de Web-Base) | Obligatoria |
| 07 Implementación | Obligatoria | Obligatoria |
| 08 QA | Obligatoria, checklist manual | Obligatoria + Playwright |
| 09 Auditoría | Obligatoria, checklist reducida | Obligatoria, completa |
| 10 Deploy | Obligatoria | Obligatoria |
| 11 Documentación | Obligatoria, muy breve | Obligatoria, completa |
| 12 Cierre | Obligatoria | Obligatoria |

Ninguna etapa desaparece: cambia la profundidad, no la existencia.
