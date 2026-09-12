---
description: Scaffolding de un proyecto nuevo clonado desde Web-Base — crea proyecto/ con los templates de las etapas 01-06 listos para completar.
---

Este comando prepara un proyecto NUEVO, en su propio repositorio
clonado desde Web-Base. Su única responsabilidad es ese scaffolding
inicial — **no** es una forma de acumular proyectos dentro de
Web-Base. Web-Base es la plantilla maestra y nunca debe convertirse en
contenedor de trabajo real de ningún cliente (ver `README.md`, sección
"Cómo usarlo como punto de partida").

Hacer, en este orden:

1. Confirmar que existe `metodologia/templates/` en este repo. Si no
   existe, avisar que este comando solo aplica sobre un proyecto
   clonado de Web-Base y detenerse.
2. Verificar que este repo NO sea el repositorio maestro `Web-Base`
   en sí (revisar el remoto de git y/o preguntar directamente si hay
   dudas). Si parece ser el propio Web-Base, o no hay certeza de que
   sea un clon para un cliente específico, **detenerse y preguntar**
   antes de crear nada — nunca asumir.
3. Preguntar el nombre del cliente/proyecto si no se dio como
   argumento.
4. Crear la carpeta `proyecto/` en la raíz de este repo (el proyecto
   nuevo, no Web-Base) si no existe.
5. Copiar dentro de `proyecto/` los siguientes templates, sin
   modificar los originales en `metodologia/templates/`:
   - `intake.md`
   - `contexto.md`
   - `discovery.md`
   - `alcance.md`
   - `arquitectura.md`
   - `direccion-visual.md`
6. En `proyecto/intake.md`, completar el campo `[NOMBRE DEL
   PROYECTO/CLIENTE]` con el nombre dado y `[YYYY-MM-DD]` con la fecha
   de hoy. No completar ningún otro campo ni inventar información:
   el resto se completa con el cliente durante Intake real.
7. Informar al usuario qué se creó y recordar que el siguiente paso es
   completar `proyecto/intake.md` (etapa 01) antes de avanzar a
   Contexto.

Límites:
- No crear ningún otro archivo. No tocar `assets/`, `index.html` ni
  nada fuera de `proyecto/`.
- No usar, copiar ni referenciar contenido, nombres o datos de otros
  proyectos (Raíces, Onda, GXK, CONCRETO, ITS o cualquier cliente
  real): este comando es genérico para cualquier proyecto nuevo.
- No hacer commit ni push.
