# Metodología Web-Base

Este directorio es el "cómo trabajamos" de MACARIO: la metodología de
12 etapas para llevar un proyecto de "cliente/idea" a "sitio en
producción", usando Web-Base como base técnica.

No reemplaza a `CLAUDE.md` (que regula el comportamiento de Claude a
nivel código). Este directorio regula el proceso de proyecto: qué se
hace, en qué orden, quién aprueba qué.

## Cómo se usa

- Este directorio viaja con Web-Base a cada proyecto nuevo clonado.
- Al arrancar una sesión de Claude Code sobre un proyecto nuevo,
  invocar el skill `metodologia` (o pedirle a Claude que lea este
  directorio) para tener el contexto completo sin repetir la
  explicación en cada proyecto.
- Correr `/nuevo-proyecto` para generar la carpeta `proyecto/` con los
  templates de cada etapa listos para completar.

## Contenido

- `01-etapas-y-aprobaciones.md` — las 12 etapas: objetivo, output,
  quality gate y qué requiere aprobación de Ignacio.
- `02-flujo-nuevo-proyecto.md` — de "tenemos un cliente" a "proyecto
  listo para trabajar".
- `03-quality-gates.md` — criterios PASS/FAIL concretos por categoría.
- `04-integracion-ecosistema.md` — qué vive en Linear, GitHub,
  Obsidian, Web-Base, y qué queda para MACARIO OS a futuro.
- `05-documentacion-permanente.md` — qué se documenta y dónde.
- `templates/` — documentos base de cada etapa, para copiar y
  completar en cada proyecto real.
- `PENDIENTES.md` — decisiones de proceso todavía sin definir.

## Principio

Un proyecto chico pasa las 12 etapas en horas; uno grande, en semanas.
Ninguna etapa se saltea, pero la profundidad se ajusta al tamaño del
proyecto (ver la tabla de obligatorio/opcional en
`01-etapas-y-aprobaciones.md`).
