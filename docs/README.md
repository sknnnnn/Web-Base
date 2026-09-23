# Documentación de Web-Base

Índice de la documentación técnica de la foundation. Para una
introducción rápida al repositorio ver el `README.md` de la raíz; las
reglas de trabajo para Claude Code viven en `CLAUDE.md`.

## Rol de Web-Base en el ecosistema

```
PRANA     → marca / negocio externo
MACARIO   → sistema interno de ejecución y producción
Web-Base  → foundation técnica reutilizable   ← este repositorio
Proyectos → implementaciones concretas (un repositorio por proyecto)
```

Web-Base documenta **solo** la base técnica reutilizable. No absorbe:

- estrategia de marca ni reglas de PRANA;
- metodología, etapas, aprobaciones o documentación permanente de
  MACARIO;
- contexto, arquitectura de información, wireframes, blueprint ni
  decisiones visuales de cada proyecto (viven en el proyecto, en
  MACARIO y/o en Figma).

Detalle de qué pertenece y qué no: [proposito.md](proposito.md).

## Índice

| # | Área | Documento | Estado |
|---|---|---|---|
| 01 | Propósito | [proposito.md](proposito.md) | Nuevo |
| 02 | Arquitectura | [arquitectura.md](arquitectura.md) | Nuevo |
| 03 | Desarrollo | [desarrollo.md](desarrollo.md) | Nuevo |
| 04 | Diseño → Código | [diseno-a-codigo.md](diseno-a-codigo.md) | Nuevo |
| 05 | Features reutilizables | [features.md](features.md) | Nuevo |
| 06 | QA | [qa-checklist.md](qa-checklist.md) | Existente, vigente (sin cambios) |
| 07 | SEO / Analytics / Performance | [seo-performance.md](seo-performance.md) | Nuevo |
| 08 | Evolución de Web-Base | [evolucion.md](evolucion.md) | Nuevo |

Los archivos no llevan prefijo numérico para no renombrar
`qa-checklist.md`, que ya está referenciado desde `CLAUDE.md` y desde
el flujo de trabajo. La numeración es solo el orden de lectura sugerido.

## Convención para mantener esta documentación

- Cada documento describe **lo que existe hoy** en el repositorio. Lo
  que aún no está definido se marca como `Por definir` en vez de
  inventarse.
- Si un contenido es específico de un proyecto, de PRANA o de MACARIO,
  no se agrega acá: se enlaza o se deja en su lugar de origen.
- Un cambio en CSS/HTML/JS de la foundation que altere un componente
  documentado debe reflejarse en [features.md](features.md) y, si
  corresponde, en [qa-checklist.md](qa-checklist.md).
