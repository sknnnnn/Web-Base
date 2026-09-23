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

Web-Base no es una etapa obligatoria ni rígida del workflow. Cumple dos
funciones:

- **Durante la implementación**: foundation técnica reutilizable
  (tokens, componentes, patrones, QA técnico) de la que parte el
  proyecto.
- **Después de los proyectos**: repositorio donde se consolidan los
  patrones, componentes y aprendizajes que resultaron reutilizables
  (ver [evolucion.md](evolucion.md)).

Las etapas previas (investigación, UX/UI, Figma) y la operación
pertenecen a MACARIO y a cada proyecto.

## Qué pertenece a Web-Base

- Su propio sistema técnico y visual base: tokens por defecto, theming
  (`:root` y `data-theme`) y el aspecto base de sus componentes, con su
  documentación.
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

Web-Base sí documenta su sistema visual base. Lo que no documenta es la
identidad visual, la dirección de arte y las decisiones específicas de
cada proyecto: eso permanece en el proyecto correspondiente y/o en
Figma.

Regla práctica: si al leerlo solo tiene sentido para un proyecto o una
marca, no va en Web-Base. Si sirve tal cual (o con tokens distintos) a
otro proyecto, es candidato (ver [evolucion.md](evolucion.md)).

Historial: la carpeta `metodologia/` y el skill `metodologia` se
retiraron de este repositorio en Web-Base 2.0 justamente porque
pertenecían a MACARIO. El comando `/nuevo-proyecto` solo hace el
arranque técnico mínimo y remite a MACARIO para la documentación.
