# Documentación permanente (estructura para Obsidian)

Qué se documenta de forma permanente, para migrar a Obsidian, sin
duplicar el detalle de Linear (tareas) ni el código (GitHub).

## Nivel MACARIO (una sola vez, no por proyecto)

- Arquitectura general del ecosistema (el diagrama de
  ITS / Web-Base / MACARIO OS / Proyectos reales).
- Esta metodología (versión resumida, con link a este repo).
- Principios y estándares (los de `CLAUDE.md` + `01-etapas-y-aprobaciones.md`).
- Decisiones pendientes de nivel ecosistema (ver `PENDIENTES.md`).

## Nivel proyecto (una nota por cliente/proyecto)

Contenido mínimo de la nota, en este orden:

1. Datos básicos: cliente, fecha de inicio, fecha de cierre, repo, URL.
2. Contexto (resumen del `templates/contexto.md` aprobado).
3. Alcance final (resumen del `templates/alcance.md` aprobado).
4. Arquitectura (stack, integraciones activadas: Supabase/Resend/
   PostHog/Sentry/n8n si aplica).
5. Decisiones de dirección visual (paleta, tipografía, por qué).
6. Accesos relevantes (dominio, Cloudflare, sin credenciales en texto
   plano — solo referencia a dónde están guardadas).
7. Pendientes conocidos al momento del cierre.

## Qué NO va a Obsidian

- El detalle de tareas/subtareas de Linear (queda en Linear, se
  referencia por link).
- Historial de commits (queda en GitHub, se referencia por link).
- Contenido especulativo o borradores intermedios de cada etapa (solo
  la versión aprobada final de cada template).

## Criterio de calidad

Alguien que no trabajó en el proyecto debe poder entender arquitectura
y decisiones clave leyendo únicamente la nota de proyecto, en menos de
10 minutos.
