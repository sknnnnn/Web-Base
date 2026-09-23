# 01 — Propósito

## Qué es Web-Base

Foundation técnica reutilizable para producir sitios web profesionales
de manera consistente: estructura HTML semántica, sistema de diseño en
CSS (variables/tokens), componentes, base responsive, accesibilidad y
SEO técnico básico. Es HTML + CSS + JavaScript plano, sin build step ni
dependencias.

No es un sitio en producción ni el sitio de un cliente: es el molde del
que parte cada proyecto (repositorio independiente creado desde el
Template de GitHub).

## Qué problema resuelve

Evita reconstruir la arquitectura técnica en cada proyecto y evita que
los proyectos diverjan en calidad base (semántica, accesibilidad,
responsive, SEO). Además, es el lugar donde el aprendizaje técnico de
los proyectos reales se vuelve reutilizable (ver [evolucion.md](evolucion.md)).

## Ubicación en el ecosistema

```
PRANA → MACARIO → Web-Base → Proyectos
```

| Capa | Qué es | Dónde vive su documentación |
|---|---|---|
| PRANA | Marca / negocio externo | En PRANA |
| MACARIO | Sistema interno de ejecución y producción (metodología, etapas, aprobaciones, documentación permanente de proyectos) | En MACARIO |
| Web-Base | Foundation técnica reutilizable | Este repositorio |
| Proyectos | Implementaciones concretas | En cada proyecto (repo propio) + Figma + MACARIO |

Flujo de trabajo en el que Web-Base participa:

```
Investigación / contexto → UX/UI → Figma → implementación con Claude Code
   → Web-Base / componentes reutilizables → proyecto → QA → analytics / operación
```

Web-Base interviene desde la implementación en adelante (tokens,
componentes, patrones, QA técnico). Las etapas previas y la operación
pertenecen a MACARIO y a cada proyecto.

## Qué pertenece a Web-Base

- Tokens y sistema de theming (`:root` y `data-theme`).
- Componentes y patrones técnicos reutilizables en más de un proyecto.
- Convenciones de HTML, CSS y JS, y reglas de trabajo con Claude Code.
- Checklist de QA técnico.
- Configuración técnica base (SEO técnico como plantilla, `robots.txt`,
  `sitemap.xml`, favicon genérico).
- Aprendizajes técnicos ya validados en proyectos reales que sirven a
  otros proyectos.

## Qué NO pertenece a Web-Base

| Contenido | Dónde vive |
|---|---|
| Estrategia, posicionamiento o reglas de marca | PRANA |
| Metodología, etapas, aprobaciones, plantillas de documentación de proyecto | MACARIO |
| Contexto, alcance, arquitectura de información, blueprint, wireframes de un proyecto | Proyecto / MACARIO |
| Decisiones visuales específicas (paleta final, tipografías, imágenes, layouts) | Proyecto / Figma |
| Contenido, textos e imágenes de un cliente | Proyecto |
| Integraciones, analytics o funcionalidades específicas de un proyecto | Proyecto |

Regla práctica: si al leerlo solo tiene sentido para un proyecto o una
marca, no va en Web-Base. Si sirve tal cual (o con tokens distintos) a
otro proyecto, es candidato (ver [evolucion.md](evolucion.md)).

Historial: la carpeta `metodologia/` y el skill `metodologia` se
retiraron de este repositorio en Web-Base 2.0 justamente porque
pertenecían a MACARIO. El comando `/nuevo-proyecto` solo hace el
arranque técnico mínimo y remite a MACARIO para la documentación.
