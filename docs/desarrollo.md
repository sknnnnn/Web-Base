# 03 — Desarrollo

## Principio

El cambio correcto con la menor cantidad de código posible, sin romper
lo que ya funciona. Las reglas detalladas están en `CLAUDE.md`; este
documento resume el flujo y no las duplica.

## Dos contextos de trabajo

| Contexto | Qué se hace | Dónde |
|---|---|---|
| **Evolucionar la foundation** | Agregar/mejorar componentes, tokens, docs y QA reutilizables | Este repositorio (Web-Base) |
| **Desarrollar un proyecto** | Implementar un sitio concreto | Repositorio propio del proyecto, creado desde el Template |

Los cambios específicos de un cliente **no** se hacen en Web-Base
(ver [proposito.md](proposito.md) y [evolucion.md](evolucion.md)).

## Flujo de implementación

1. **Entrada**: el diseño (Figma) y el contexto del proyecto ya están
   definidos fuera de Web-Base (ver [diseno-a-codigo.md](diseno-a-codigo.md)).
2. **Arranque**: crear el repo desde el Template de GitHub y correr
   `/nuevo-proyecto` (verifica que no sea el repo maestro; no crea
   documentación ni toca la base).
3. **Analizar** antes de escribir: estructura existente, archivos
   relacionados, componentes reutilizables, efectos secundarios
   (`CLAUDE.md` §3).
4. **Implementar** solo lo necesario, reutilizando componentes y tokens
   existentes; una variante antes que un componente nuevo.
5. **Verificar** (`CLAUDE.md` §16 y [qa-checklist.md](qa-checklist.md)).
6. **Informar** archivos modificados, cambios y verificación
   (`CLAUDE.md` §17), indicando qué no pudo verificarse.
7. **Devolver aprendizaje** a Web-Base cuando corresponda
   ([evolucion.md](evolucion.md)).

## Claude Code

- Trabaja con las reglas de `CLAUDE.md` (alcance acotado, no rediseñar
  lo no pedido, no agregar dependencias, no inventar contenido).
- Prioridad ante conflicto: pedido actual del usuario → requisitos del
  proyecto → `CLAUDE.md` → convenciones de la base.
- Comando disponible: `/nuevo-proyecto` (`.claude/commands/nuevo-proyecto.md`).
- Un pedido puntual no autoriza rediseños ni cambios en otras secciones.

## Git / GitHub

- Rama principal: `main`. Repositorio en GitHub; cada proyecto tiene el
  suyo.
- Antes de cada commit: `git status` / `git diff` acotados a los
  archivos esperados, sin archivos accidentales ni secretos.
- `.gitignore` excluye archivos de SO, editores, logs, `CLAUDE.local.md`
  y `.codex/`.
- Convención de mensajes de commit y estrategia de ramas/PR: `Por
  definir` (el historial actual mezcla commits directos y PR).

## Testing y validaciones

- No hay suite de tests automatizada en Web-Base. La validación es
  manual según [qa-checklist.md](qa-checklist.md) (estructura,
  accesibilidad, responsive, consola, links, formularios, SEO,
  seguridad, git).
- Si un proyecto usa Playwright, su suite corre en verde (no es
  requisito de la base).

## Deploy

Flujo general: repo del proyecto en GitHub → conectado a Cloudflare
Pages → cada push a la rama principal despliega automáticamente.
Configuración concreta de dominio, build y entornos: específica de cada
proyecto. Web-Base no tiene build (se publica la carpeta tal cual).
