# 08 — Evolución de Web-Base

```
Proyecto → aprendizaje reutilizable → Web-Base → siguiente proyecto
```

Web-Base aprende de los proyectos, pero no recibe sus decisiones
particulares.

## Cuándo algo pasa a Web-Base

Candidato si cumple **todas**:

1. Es técnico (tokens, componente, patrón, regla de QA, convención), no
   estratégico ni visual-específico.
2. Ya funcionó en un proyecto real (no es especulativo).
3. Sirve a otro proyecto sin cambios, o cambiando solo valores de
   tokens.
4. Evita complejidad y dependencias innecesarias: se prefiere HTML/CSS/JS
   nativo. Una nueva dependencia solo puede incorporarse si hay una
   justificación técnica clara, aporta valor reutilizable y cuenta con
   autorización explícita (`CLAUDE.md` §4 y §15).
5. No contiene contenido, marca ni identidad de un cliente.

Si se cumple 1–2 pero no 3, queda en el proyecto (o se documenta como
caso de uso, no como componente).

## Dónde queda cada cosa

| Aprendizaje | Destino |
|---|---|
| Decisión visual específica de un proyecto (p. ej. Raíces) | Proyecto / Figma |
| Patrón técnico reutilizable en varios proyectos | Web-Base |
| Regla estratégica de marca | PRANA |
| Metodología interna de organización | MACARIO |
| Solución técnica reutilizable | Web-Base |

## Cómo incorporarlo

1. Terminar y validar el cambio en el proyecto.
2. Generalizarlo: quitar contenido y valores propios, usar tokens
   existentes, preferir una variante antes que un componente nuevo.
3. Implementarlo en Web-Base **como tarea explícita y acotada**, en
   este repositorio (no dentro del repo de un cliente).
4. Actualizar [features.md](features.md) y agregar su checklist en
   [qa-checklist.md](qa-checklist.md) si corresponde.
5. Verificar que los themes existentes y las dos páginas de ejemplo
   siguen funcionando.

## Cómo evitar que Web-Base se llene de decisiones de proyecto

- Contenido de demostración siempre genérico (`WEB BASE`, `PLACEHOLDER`).
- Nada de nombres de clientes, paletas finales ni textos reales.
- Ante la duda, no se promueve: se deja en el proyecto hasta que se
  repita en un segundo caso.
- No se documenta acá lo que ya vive en PRANA, MACARIO o Figma: se
  enlaza.

## Versionado

- El cierre de etapa se marca hoy con commits (`release: close Web-Base
  2.0`); no hay tags ni CHANGELOG. → `Por definir`.
- Los proyectos parten de una copia del Template: no reciben
  automáticamente los cambios posteriores de Web-Base. Estrategia para
  propagar mejoras a proyectos existentes: `Por definir`.

## Hallazgos abiertos (detectados en la auditoría, sin resolver)

Solo documentados; no se modificó código.

1. **Contradicción interna en `README.md`**: "Qué NO contiene" decía
   que no había páginas de ejemplo adicionales, pero existe
   `secondary-page.html` (corregido en la documentación).
2. **Script inline en `<head>` duplicado** en ambas páginas (aplica el
   theme guardado antes del primer paint). Es demo y se elimina al
   iniciar un proyecto, pero contradice "JS separado del HTML".
3. **`localStorage` sin `try/catch`** en el bloque demo de theme y en el
   script inline (puede lanzar excepción con almacenamiento bloqueado).
4. **Loading de formularios**: `.is-loading` + `disabled` se aplican a
   todo `submit`; si un proyecto intercepta el envío (AJAX,
   `preventDefault`) o el usuario vuelve con "atrás" (bfcache), el
   botón podría quedar deshabilitado. Por verificar.
5. **Un solo `style.css` de ~1600 líneas**: sostenible hoy; a medida que
   se sumen features (ver [features.md](features.md)) habrá que decidir
   si se divide (decisión de arquitectura, fuera del alcance actual).
6. **Texto blanco hardcodeado** sobre `--color-primary/secondary`
   (botones, footer): limita themes claros (ya anotado en el QA).
7. **`sitemap.xml` incluye `secondary-page.html`** con placeholders:
   riesgo de publicarlo sin ajustar.
8. **Sin tests automatizados** y sin matriz de navegadores definida.

## Pendiente de documentar (no implementado en esta etapa)

- Handoff Figma → tokens (nomenclatura, Code Connect).
- Convención de commits y estrategia de ramas/PR.
- Estándar de performance (fuentes web, imágenes, lazy-loading).
- Matriz de navegadores soportados para QA.
- Versionado (tags/CHANGELOG) y propagación de mejoras a proyectos.
- Analytics como estándar reutilizable, si algún proyecto lo justifica.
- Features previstos (WhatsApp, galerías, carruseles, catálogos,
  filtros, reservas): documentar solo cuando existan.
