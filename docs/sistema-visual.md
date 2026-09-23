# 09 — Sistema visual base

## Objetivo

Web-Base tiene una **Visual Foundation mínima y reutilizable**: una base
coherente para que los proyectos no partan de cero al resolver, de forma
consistente:

- jerarquía tipográfica;
- spacing;
- layout y contenedores;
- roles semánticos de color;
- radios y sombras;
- transiciones y estados;
- responsive;
- componentes y patrones reutilizables.

Esto da una base coherente, **no una estética final**. Web-Base no
impone la identidad visual de los proyectos ni es un template estético
cerrado: los valores actuales son genéricos y existen para ser
adaptados.

## Tres capas

| Capa | Rol | Dónde vive |
|---|---|---|
| **1. Web-Base — Visual Foundation** | Define cómo se construyen interfaces de forma consistente | Este repositorio |
| **2. Proyecto — Design System** | Adapta la foundation a un producto concreto | Repositorio del proyecto |
| **3. Figma — Dirección visual / Art Direction** | Define la identidad visual del proyecto | Figma / documentos del proyecto |

### 1. Web-Base — Visual Foundation

- tokens;
- tipografía base;
- spacing;
- contenedores y grids;
- breakpoints;
- colores semánticos;
- radios y sombras;
- estados;
- primitives / componentes;
- accesibilidad y `prefers-reduced-motion`.

### 2. Proyecto — Design System

El proyecto adapta la foundation con:

- valores de tokens;
- componentes específicos;
- variantes;
- composiciones;
- layouts particulares;
- reglas necesarias para el producto.

Estas decisiones viven en el repositorio del proyecto.

### 3. Figma — Dirección visual / Art Direction

Figma define:

- identidad;
- paleta final;
- tipografías;
- composición;
- tratamiento de imágenes;
- motion;
- jerarquías visuales;
- referencias y dirección de arte.

Web-Base no absorbe estas decisiones. Cómo se traducen a código:
[diseno-a-codigo.md](diseno-a-codigo.md).

## Foundation actual

Implementación vigente: `assets/css/style.css`. Inventario de
componentes y patrones: [features.md](features.md). Estructura del CSS:
[arquitectura.md](arquitectura.md).

**Tokens existentes** (en `:root`):

- colores (`--color-*`), incluidos los de estado
  `success` / `warning` / `error`;
- tipografía y tamaños (`--font-*`, `--font-size-*`);
- spacing (`--space-*`);
- containers (`--container-*`);
- radios (`--radius-*`);
- sombras (`--shadow-*`);
- transiciones (`--transition-*`);
- z-index (`--z-sticky`).

**Patrones reutilizables existentes:**

- botones;
- cards;
- imágenes;
- header / navegación;
- formularios;
- feedback;
- tablas;
- grids / layouts;
- themes (base y `data-theme="alt"`).

## Principios

1. Semántica antes que estética.
2. Tokens antes que duplicación.
3. Base antes que excepción.
4. Flexibilidad sin complejidad innecesaria.
5. La identidad pertenece al proyecto.
6. Accesibilidad y responsive forman parte del sistema visual.
7. No formalizar como regla global algo que todavía no esté
   suficientemente validado.

## Por definir

- Escala definitiva de spacing.
- Escala tipográfica.
- Nomenclatura completa de tokens.
- Breakpoints y comportamiento responsive definitivo.
- Inventario definitivo de primitives y componentes.
- Estados y variantes.
- Handoff Figma → tokens.
- Correspondencia Figma / CSS.
- Versionado del sistema visual.

Estos puntos se consolidarán con uso real en proyectos y con Figma para
la dirección visual de cada proyecto. Hasta entonces, lo que existe en
`style.css` es la base vigente, no una especificación cerrada.

## Criterio de evolución

Un patrón visual o técnico puede promoverse a Web-Base cuando aparece en
proyectos reales y demuestra reutilización, siguiendo
[evolucion.md](evolucion.md).

> El objetivo no es que todos los proyectos se vean iguales. El objetivo
> es que todos puedan construirse sobre una base coherente.
