# CLAUDE.md

## 1. OBJETIVO DEL PROYECTO

Este repositorio funciona como una base reutilizable para desarrollar
sitios web profesionales.

La base debe priorizar:

- código limpio;
- estructura clara;
- componentes reutilizables;
- responsive;
- accesibilidad;
- SEO básico;
- facilidad de mantenimiento;
- escalabilidad.

No asumir que todos los proyectos futuros tendrán la misma estética,
estructura o funcionalidades.


## 2. REGLA PRINCIPAL

No modificar código que no sea necesario para cumplir la tarea solicitada.

Si el usuario solicita modificar una sección específica, trabajar
principalmente sobre esa sección.

No aprovechar una solicitud puntual para rediseñar otras partes del sitio.


## 3. ANTES DE MODIFICAR

Antes de escribir código:

1. Analizar la estructura existente.
2. Revisar los archivos relacionados con la tarea.
3. Identificar componentes reutilizables existentes.
4. Determinar qué archivos necesitan modificarse.
5. Detectar posibles dependencias o efectos secundarios.

Si existe una solución reutilizable, priorizarla antes de crear código
duplicado.


## 4. CAMBIOS

Al realizar una modificación:

1. Modificar únicamente lo necesario.
2. Mantener las funcionalidades existentes.
3. Mantener la identidad visual existente salvo indicación contraria.
4. No eliminar contenido sin autorización.
5. No cambiar rutas o nombres de archivos innecesariamente.
6. No agregar dependencias externas sin autorización.
7. No introducir librerías innecesarias.


## 5. DISEÑO

No tomar decisiones importantes de diseño sin indicación.

No cambiar arbitrariamente:

- colores;
- tipografías;
- logos;
- imágenes;
- tamaños;
- espaciados;
- estructura;
- estilo visual.

Si una decisión visual es necesaria para implementar una función,
utilizar la solución más coherente con el diseño existente.


## 6. IMÁGENES

Las imágenes son parte importante del diseño.

Antes de utilizar una imagen:

- comprobar sus dimensiones y proporciones cuando sea necesario;
- determinar si debe mostrarse completa o recortada;
- evitar recortes innecesarios;
- utilizar `object-fit: cover` únicamente cuando el diseño lo requiera;
- utilizar `object-fit: contain` cuando sea importante conservar toda
  la imagen;
- utilizar `object-position` cuando sea necesario controlar el área
  visible.

Nunca asumir que `cover` es la solución correcta para todas las imágenes.


## 7. RESPONSIVE

Todo desarrollo debe funcionar correctamente en:

- desktop;
- tablet cuando corresponda;
- mobile.

No considerar terminada una modificación visual hasta comprobar
su comportamiento en diferentes tamaños de pantalla.

Evitar soluciones que funcionen únicamente en desktop.


## 8. HTML

Utilizar HTML5 semántico.

Priorizar elementos como:

- header;
- nav;
- main;
- section;
- article;
- aside;
- footer.

Mantener una jerarquía correcta de títulos.

Las imágenes deben utilizar atributos `alt` apropiados.


## 9. CSS

Mantener los estilos organizados.

Priorizar:

- variables CSS;
- clases reutilizables;
- componentes;
- layouts consistentes;
- media queries organizadas.

Evitar:

- estilos inline innecesarios;
- valores repetidos;
- CSS duplicado;
- reglas excesivamente específicas;
- `!important` salvo casos justificados.


## 10. JAVASCRIPT

Mantener JavaScript separado del HTML siempre que sea posible.

Priorizar código:

- simple;
- legible;
- reutilizable;
- fácil de mantener.

No utilizar JavaScript cuando CSS o HTML puedan resolver correctamente
la necesidad.


## 11. COMPONENTES

Antes de crear un componente:

1. Buscar si ya existe uno equivalente.
2. Determinar si puede reutilizarse.
3. Si necesita una variante, evaluar crear una variante antes que
   duplicar todo el componente.

Los componentes deben ser suficientemente flexibles para diferentes
proyectos, pero no deben convertirse en sistemas innecesariamente
complejos.


## 12. ACCESIBILIDAD

Mantener buenas prácticas básicas:

- navegación mediante teclado;
- estados `focus-visible`;
- textos alternativos;
- botones accesibles;
- labels adecuados;
- contraste razonable;
- soporte para `prefers-reduced-motion`.


## 13. SEO

Cuando corresponda, mantener:

- `<title>`;
- meta description;
- viewport;
- canonical;
- Open Graph;
- sitemap;
- robots.txt;
- estructura semántica.

No modificar configuraciones SEO existentes sin necesidad.


## 14. CONTENIDO

No inventar información sobre el cliente.

Si falta información necesaria:

- utilizar contenido provisional claramente identificable;
  o
- solicitar la información necesaria.

No presentar información inventada como real.


## 15. DEPENDENCIAS

No instalar librerías, frameworks o paquetes nuevos sin una razón clara.

Antes de agregar una dependencia, evaluar si la funcionalidad puede
resolverse con HTML, CSS o JavaScript nativo.


## 16. VERIFICACIÓN

Después de realizar cambios:

1. Revisar errores de sintaxis.
2. Verificar enlaces afectados.
3. Comprobar que las imágenes carguen.
4. Comprobar responsive.
5. Comprobar que las funcionalidades existentes continúen funcionando.
6. Revisar la consola del navegador cuando corresponda.


## 17. INFORME DE CAMBIOS

Al terminar una tarea, informar brevemente:

### Archivos modificados
- archivo 1
- archivo 2

### Cambios realizados
- cambio 1
- cambio 2

### Verificación
- desktop
- mobile
- funcionalidades relevantes

Si algo no pudo verificarse, indicarlo claramente.


## 18. PRIORIDAD

En caso de conflicto entre instrucciones:

1. Solicitud actual del usuario.
2. Identidad y requisitos específicos del proyecto.
3. Este archivo CLAUDE.md.
4. Convenciones generales de la base.

Nunca interpretar estas reglas como permiso para modificar elementos
que el usuario no solicitó.


## 19. PRINCIPIO GENERAL

La prioridad no es escribir la mayor cantidad de código posible.

La prioridad es producir el cambio correcto, con la menor cantidad
de código innecesario y sin romper lo que ya funciona.