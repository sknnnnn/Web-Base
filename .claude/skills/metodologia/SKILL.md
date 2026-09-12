---
name: metodologia
description: Metodología de trabajo de MACARIO para proyectos web nuevos construidos sobre Web-Base — 12 etapas desde Intake hasta Cierre, con matriz de aprobaciones y quality gates. Usar al iniciar sesión de Claude Code sobre un proyecto nuevo clonado de Web-Base, cuando haga falta saber en qué etapa está el proyecto, qué sigue, o qué requiere aprobación de Ignacio antes de avanzar.
---

# Metodología MACARIO / Web-Base

Este skill asume que se está trabajando en el repositorio de un
proyecto real (clonado de Web-Base), no en el repositorio maestro
Web-Base en sí. Reemplaza tener que explicarle a Claude el proceso
completo en cada proyecto nuevo. Al invocarlo, leer bajo demanda (no
cargar todo de una vez) los archivos de `metodologia/` en la raíz del
repo:

- `metodologia/01-etapas-y-aprobaciones.md` — las 12 etapas, quality
  gates, y la matriz de qué puede hacer Claude solo vs. qué requiere
  aprobación de Ignacio. Leer esto primero, siempre.
- `metodologia/02-flujo-nuevo-proyecto.md` — si el proyecto está
  arrancando (etapas 01-05).
- `metodologia/03-quality-gates.md` — si se está en QA (08) o
  Auditoría (09).
- `metodologia/04-integracion-ecosistema.md` — si hay dudas de qué
  herramienta usar para qué (Linear vs. GitHub vs. Obsidian).
- `metodologia/templates/` — los documentos a completar en cada etapa.

## Regla dura, no negociable

Nunca commit, push, merge, deploy, ni cambios de alcance/arquitectura/
identidad visual/dependencias sin aprobación explícita de Ignacio,
sin importar en qué etapa se esté. Ver la matriz completa en
`01-etapas-y-aprobaciones.md` antes de asumir que algo se puede hacer
solo.

## Cómo usar esto en una sesión

1. Identificar en qué etapa está el proyecto (revisar qué templates de
   `metodologia/templates/` ya están completados en `proyecto/`).
2. Leer únicamente el/los archivo(s) de `metodologia/` relevantes a
   esa etapa — no todos de una vez.
3. Antes de avanzar de etapa, verificar el quality gate correspondiente
   en `01-etapas-y-aprobaciones.md`.
4. Si la etapa requiere aprobación humana, pedirla explícitamente en
   vez de asumir que se puede continuar.
