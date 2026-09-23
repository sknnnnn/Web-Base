# 04 — Diseño → Código

Relación entre Figma (dirección visual y prototipado) y la
implementación en Web-Base (realizada principalmente con Claude Code).

> Estado: este documento fija **principios ya vigentes** (tomados de
> `CLAUDE.md` y del comentario "Dirección visual" de `style.css`) y el
> flujo de trabajo actual. Lo que todavía no está estandarizado se
> marca `Por definir`; no se han inventado convenciones de handoff.

## Reparto de responsabilidades

| Qué | Dónde se decide / vive |
|---|---|
| Dirección visual, prototipos, decisiones visuales de un proyecto | Figma (y documentos del proyecto / MACARIO) |
| Tokens, componentes y patrones técnicos reutilizables | Web-Base |
| Implementación del proyecto | Repo del proyecto, con Claude Code |

Web-Base **no** contiene guías de identidad visual de ningún proyecto
(lo indica el propio encabezado de `assets/css/style.css`).

## Cómo se traduce una decisión visual

1. La identidad aprobada (paleta, tipografía) se implementa
   **reemplazando los valores de las variables** de `:root`, no
   agregando estilos por componente.
2. Un componente visual se implementa reutilizando los existentes
   ([features.md](features.md)); si hace falta una diferencia, se crea
   una variante.
3. Las imágenes se resuelven una por una (completa vs. recortada,
   proporción, `object-position`); no se usa `cover` por defecto.
4. Si una decisión visual es necesaria para implementar una función y
   no está definida, se usa la solución más coherente con el diseño
   existente y se informa (`CLAUDE.md` §5).
5. Se verifica en desktop, tablet y mobile (`CLAUDE.md` §7).

## Qué debe estar definido antes de implementar

Mínimo esperado de entrada (lo entrega el proyecto, no Web-Base):

- Diseño de las pantallas/breakpoints relevantes (desktop y mobile como
  mínimo).
- Paleta, tipografías y su uso.
- Imágenes finales o su proporción esperada.
- Contenido real, o placeholders claramente identificables (no se
  inventa información del cliente).
- Estados de los componentes que se usan (hover, foco, error, vacío).

Formato de handoff (nomenclatura de capas/variables en Figma,
correspondencia con los nombres de tokens de `style.css`, uso de Code
Connect): `Por definir`.

## Qué se convierte en token, componente o patrón

| Si el diseño… | Entonces |
|---|---|
| define un color, tipografía, espaciado, radio, sombra | Token (variable CSS) |
| se repite con la misma estructura en varias pantallas | Componente/variante reutilizable |
| es una composición de componentes que reaparece entre proyectos | Patrón (ver `secondary-page.html` como ejemplo) |
| es una decisión puntual de un proyecto | Se queda en el proyecto |

Criterios para promover algo a Web-Base: [evolucion.md](evolucion.md).
