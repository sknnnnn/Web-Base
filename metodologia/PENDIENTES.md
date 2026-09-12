# Pendientes de decisión humana

Puntos de proceso que no resolví por mi cuenta porque son decisiones
de Ignacio, no técnicas. No bloquean usar la metodología tal como
está, pero conviene resolverlos antes de repetirla en muchos proyectos.

1. **Canal de aprobación formal.** ¿Cómo queda registrado que Ignacio
   aprobó un gate — comentario en Linear, mensaje, checkbox en
   Obsidian? Hoy no hay un mecanismo único definido.
2. **Rol del cliente en las aprobaciones.** La metodología asume que
   Ignacio aprueba alcance/visual, pero en la práctica el cliente
   también valida contenido y visual en algún momento. No está
   definido si eso siempre pasa a través de Ignacio o si el cliente
   interactúa directo en algún punto del proceso.
3. **Playwright, ¿default o excepción?** Quedó como opcional según
   tamaño de proyecto (`01-etapas-y-aprobaciones.md`). Podría ser al
   revés: default en todos, se saca si no aplica.
4. **Sentry/PostHog/Resend/n8n, ¿opt-in o paquete estándar?** Quedaron
   como opt-in por proyecto dentro de Arquitectura (05). Si MACARIO
   prefiere activarlos por default en todo proyecto nuevo, cambia esa
   etapa y `04-integracion-ecosistema.md`.
5. **Figma, ¿obligatorio u opcional?** Quedó opcional en Discovery (03)
   y Dirección visual (06), asumiendo que no todos los proyectos
   tienen diseño previo en Figma.
6. **Nomenclatura de repos de proyecto.** No hay una convención de
   nombre definida para los repos que se crean a partir de Web-Base
   (ej. `cliente-slug` vs. nombre libre). Afecta al comando
   `/nuevo-proyecto`.
7. **MACARIO OS.** Por decisión explícita del pedido original, no se
   construye todavía. Esta metodología no depende de que exista, pero
   cuando exista va a absorber parte de lo que hoy es manual (el
   traspaso de información entre Linear/GitHub/Obsidian descrito en
   `04-integracion-ecosistema.md`).

Cuando Ignacio resuelva alguno de estos puntos, actualizar el archivo
correspondiente y borrar el ítem de esta lista.
