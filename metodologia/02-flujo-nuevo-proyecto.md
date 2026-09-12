# Flujo de nuevo proyecto

De "tenemos un cliente / una idea" a "proyecto preparado para
trabajar". Cubre las etapas 01-05 (Intake → Arquitectura); de ahí en
adelante es el ciclo normal de trabajo (Implementación → Cierre).

## Qué información se obtiene del cliente

- Pedido en sus propias palabras, canal de contacto, urgencia (→ 01).
- Qué hace el negocio, a quién le vende, restricciones de marca/legal (→ 02).
- Contenido y activos existentes: textos, logo, fotos, sitio actual (→ 03).
- Validación del alcance propuesto (→ 04).
- Validación de la dirección visual (→ 06).

## Qué se define internamente (sin pedírselo al cliente)

- Estructura técnica y stack (→ 05).
- Desglose de tareas en Linear (→ 04, 05).
- Checklist de QA y auditoría a aplicar (→ 08, 09).

## Qué se documenta

- Cada etapa deja su output en `metodologia/templates/` completado,
  guardado en el repo del proyecto (carpeta `proyecto/`) y linkeado
  desde Obsidian una vez cerrado (ver `05-documentacion-permanente.md`).

## Qué se convierte en tareas (Linear)

- El desglose de Alcance (04) es lo primero que se convierte en tareas.
- Arquitectura (05) puede sumar tareas técnicas específicas (setup de
  integraciones, por ejemplo).
- Nada de Intake/Contexto/Discovery se convierte en tareas por sí
  mismo: son insumo, no trabajo ejecutable todavía.

## Qué decisiones requieren aprobación (recordatorio)

Alcance, arquitectura importante, identidad visual y toda dependencia
nueva — ver la matriz completa en `01-etapas-y-aprobaciones.md`.

## Pasos concretos

1. Intake (01): completar `templates/intake.md`.
2. Contexto (02): completar `templates/contexto.md`, validar con Ignacio.
3. Discovery (03): completar `templates/discovery.md`.
4. Alcance (04): completar `templates/alcance.md`, aprobar, pasar a Linear.
5. Arquitectura (05): completar `templates/arquitectura.md`, aprobar,
   **recién ahí** crear el repo del proyecto a partir de Web-Base.
6. A partir de acá, el proyecto ya "está preparado para trabajar":
   sigue el ciclo normal (Dirección visual → Implementación → QA →
   Auditoría → Deploy → Documentación → Cierre).

Correr `/nuevo-proyecto` automatiza el paso 0: crea la carpeta
`proyecto/` en el repo nuevo con los templates de 01-06 ya copiados y
con la fecha de inicio completada, para no arrancar cada proyecto
copiando archivos a mano.
