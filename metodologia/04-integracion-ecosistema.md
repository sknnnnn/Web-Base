# Integración con el ecosistema MACARIO

Regla conceptual (no duplicar información entre sistemas):

- **Linear** = qué hacemos (tareas, prioridades, estados).
- **GitHub** = qué construimos (código, branches, commits, PRs).
- **Obsidian** = qué sabemos y por qué (documentación permanente).
- **Web-Base** = cómo trabajamos (esta metodología + la base técnica).
- **MACARIO OS** = cómo coordinaremos todo esto en el futuro (no
  construir todavía).

## Qué pertenece a cada herramienta hoy

| Herramienta | Rol en el proceso | Qué NO debe duplicarse acá |
|---|---|---|
| GitHub | Código del proyecto, branches, commits, PRs | Metodología (vive en Web-Base), tareas (viven en Linear) |
| Linear | Tareas, subtareas, estados, prioridades, seguimiento día a día | Documentación permanente (va a Obsidian), código |
| Claude Code | Implementación, automatización de lo ya aprobado, QA, auditoría | Decisiones comerciales, de alcance o de identidad visual |
| ChatGPT | Análisis, estrategia, revisión, apoyo de arquitectura (uso humano, fuera de esta metodología) | — |
| Figma | Referencias visuales, moodboards, diseño previo (opcional, ver etapa 06) | El sistema de variables CSS final (eso vive en el código) |
| Playwright | QA/E2E, solo en proyectos donde se justifique (ver `01-etapas-y-aprobaciones.md`) | No es parte de Web-Base en sí, es una dependencia por-proyecto |
| Sentry | Monitoreo de errores post-deploy, opt-in por proyecto en Arquitectura (05) | No se configura por default en Web-Base |
| Resend | Emails transaccionales, opt-in por proyecto si hay formularios que lo requieran | — |
| PostHog | Analytics de comportamiento, opt-in por proyecto | No reemplaza a Linear como fuente de "qué hacemos" |
| n8n | Automatizaciones puntuales entre herramientas, opt-in por proyecto | No se usa para orquestar la metodología en sí (eso es manual/Claude Code hasta que exista MACARIO OS) |
| Supabase | Backend/DB, solo si el alcance de un proyecto lo requiere (etapa 05) | Web-Base en sí no tiene backend |
| Cloudflare | Deploy y hosting | — |
| Obsidian | Documentación permanente por proyecto y de MACARIO en general | No es el lugar de las tareas activas |
| MACARIO OS (futuro) | Orquestación entre Linear/GitHub/Obsidian/Web-Base | Hoy no existe: nada de esta metodología depende de que exista |

## Qué información viaja entre sistemas

- De Web-Base (templates completados) → Linear: el desglose de Alcance
  (04) se convierte en issues.
- De Web-Base (templates completados) → Obsidian: el contenido de cada
  etapa migra a la nota permanente del proyecto al llegar a la etapa
  11 (ver `05-documentacion-permanente.md`).
- De GitHub → Cloudflare: deploy automático por push a `main` (cuando
  se apruebe el merge).
- Nada de esto está automatizado hoy (no hay n8n ni MACARIO OS
  conectando estas herramientas); el traspaso es manual, hecho por
  Ignacio o por Claude cuando se le pide explícitamente.
