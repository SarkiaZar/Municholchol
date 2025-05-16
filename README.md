# Municipalidad de Cholchol - Sitio Web

Este proyecto es un rediseño del sitio web de la Municipalidad de Cholchol, enfocado en mejorar la experiencia del usuario y la accesibilidad.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Construcción

Para construir el proyecto para producción:
```bash
npm run build
```

## Características Implementadas

- Diseño responsivo para todos los dispositivos
- Formulario de contacto con validaciones
- Interactividad dinámica
- Accesibilidad web
- Componentes reutilizables
- Validaciones en tiempo real
- Animaciones suaves
- Optimización de rendimiento 

## Registro de Conversación y Cambios

A continuación se incluye el historial de conversación mantenido durante el desarrollo, con dudas, soluciones, instrucciones y recomendaciones:

[INICIO DE CONVERSACIÓN]

- El usuario solicitó rediseñar el sitio web de la Municipalidad de Cholchol, con enfoque en experiencia de usuario, responsividad e interactividad.
- Se implementaron banners profesionales y mensajes de bienvenida en todas las páginas de Municipio y Servicios, usando imágenes y colores institucionales.
- Se eliminaron los mensajes de bienvenida antiguos para evitar duplicidad y mejorar la experiencia visual.
- Se agregó una galería de imágenes históricas en la página de Historia usando imágenes de `/images/about/`.
- El pie de página fue rediseñado para verse más profesional, con mejor organización, iconos, enlaces rápidos y el logo institucional destacado.
- Todas las páginas (excepto la principal) muestran un fondo con el logo institucional, overlay blanco translúcido y tamaño ajustado para que el logo sea visible y no se recorte.
- Las noticias destacadas en la página principal ahora muestran imágenes reales de `/images/news/`.
- La sección de servicios municipales en la página principal muestra todos los servicios de la barra de navegación, cada uno con su imagen de fondo y enlace correspondiente.
- El mapa de la página principal apunta a la ubicación real de la municipalidad y la dirección textual está actualizada.
- Se implementó un componente global para que, al navegar a una nueva página, la vista se desplace automáticamente al inicio.
- Todos los banners, cards y secciones son responsivos y accesibles, con contraste adecuado y textos claros.
- Se unificó la paleta de colores institucionales en todo el sitio y se mejoró la jerarquía visual y la legibilidad de los textos.
- Se configuró Vite para permitir conexiones desde la red local agregando `host: '0.0.0.0'` en `vite.config.ts`.
- Se explicó cómo permitir el acceso desde dispositivos móviles en la misma red local y cómo configurar el firewall de Windows.
- Se aclaró que para acceso externo (fuera de la red local) se requiere port forwarding y no se recomienda para desarrollo.
- El usuario solicitó guardar toda la conversación como registro en este archivo.

[FIN DE CONVERSACIÓN]

# Bitácora de Rediseño - Municipalidad de Cholchol

## Resumen del Proceso
Durante la conversación, se realizó un rediseño integral del sitio web de la Municipalidad de Cholchol, enfocado en mejorar la experiencia de usuario, la responsividad, la interactividad y la profesionalidad visual, tomando como inspiración sitios municipales modernos.

## Cambios Realizados

- **Diseño y Experiencia de Usuario:**
  - Se mejoró la jerarquía visual y la cercanía al usuario en todas las páginas.
  - Se eliminaron mensajes de bienvenida antiguos y se implementaron banners de bienvenida profesionales con imágenes y colores institucionales (azul, amarillo oscuro, verde agua).
  - Se aseguró la responsividad y la correcta visualización en dispositivos móviles y de escritorio.

- **Páginas y Secciones:**
  - Se rediseñaron y mejoraron las páginas principales: Municipio, Servicios, Historia, Noticias, Contacto, entre otras.
  - Se agregaron galerías de imágenes históricas en la sección Historia.
  - Se mejoró el footer para hacerlo más profesional y coherente con la identidad institucional.
  - Se implementó un fondo institucional con el logo en páginas internas.
  - Las secciones de Noticias y Servicios ahora muestran imágenes reales y enlaces funcionales.
  - El mapa de la página principal fue configurado con la ubicación real de la municipalidad.

- **Interactividad y Navegación:**
  - Se implementó un componente de scroll automático para que, al navegar entre páginas, la vista se desplace al inicio.
  - Se mejoró la navegación para que sea fluida y profesional.

- **Configuración y Acceso en Red Local:**
  - Se configuró Vite para permitir conexiones desde la red local (`host: '0.0.0.0'` en `vite.config.ts`).
  - Se brindó soporte detallado para permitir el acceso desde dispositivos móviles en la misma red, incluyendo instrucciones para configurar el firewall de Windows y recomendaciones sobre el uso de IP local y puertos.

- **Metodología de Trabajo:**
  - Los cambios se aplicaron directamente en el código, página por página, notificando el progreso y asegurando que todas las páginas relevantes tuvieran los banners, fondos y mensajes solicitados.
  - No se generó documentación adicional fuera de esta bitácora.
  - El avance fue reportado en tiempo real, permitiendo al usuario ver los cambios a medida que se implementaban.

---

Esta bitácora resume el proceso y las decisiones tomadas durante el rediseño, sirviendo como registro de los cambios aplicados al sitio web de la Municipalidad de Cholchol. 