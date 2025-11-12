# Proyecto: Plataforma de Ligas Deportivas Online

**Descripción:**  
Plataforma web desarrollada para gestionar ligas deportivas online de forma profesional, permitiendo a los usuarios crear, gestionar y participar en competiciones de diferentes deportes con automatización de partidos, encuestas de horarios y control de resultados.

---

## Funcionalidades principales

- **Creación de ligas deportivas:**  
  Los usuarios pueden crear ligas de distintos deportes y definir reglas básicas de la competición. Cada liga genera un enlace único para que otros participantes puedan unirse fácilmente.

- **Gestión de jornadas y partidos:**  
  - Los administradores de la liga establecen los días en los que se juegan los partidos de cada jornada.  
  - Antes del inicio de la jornada, se abre una encuesta para los miembros con los horarios disponibles.  
  - Los partidos se generan automáticamente según las respuestas de los participantes.  
  - Se envían notificaciones por correo electrónico a todos los jugadores asignados a cada partido.  

- **Resultados y validación:**  
  - Al finalizar un partido, los resultados se introducen en la plataforma.  
  - Los contrincantes deben aceptar el resultado para validar oficialmente la jornada.  

- **Sistema de suscripción:**  
  - Para poder crear ligas, los usuarios deben pagar una suscripción.  
  - Control de accesos y privilegios según tipo de usuario (participante vs administrador).  

- **Registro e inicio de sesión funcional:**  
  - Registro con verificación por correo electrónico.  
  - Inicio de sesión seguro con control de sesión y recuperación de contraseña.  

---

## Tecnologías y herramientas utilizadas

- **Backend:** Laravel (PHP) para toda la lógica del servidor, autenticación, suscripciones y generación automática de partidos.  
- **Base de datos:** MySQL, gestión eficiente de ligas, usuarios y resultados.  
- **Frontend:** Blade Templates, HTML, CSS y JavaScript para una experiencia de usuario clara e interactiva.  
- **Notificaciones:** Emails automáticos para participantes de cada partido.  
- **Seguridad:** Autenticación, verificación de email y control de roles y permisos.  

---

## Flujo del proyecto

1. Registro del usuario y verificación de correo.  
2. Inicio de sesión y acceso a dashboard personal.  
3. Creación de liga mediante suscripción activa.  
4. Invitación a miembros mediante enlace único.  
5. Configuración de jornada y apertura de encuesta de horarios.  
6. Generación automática de partidos según disponibilidad de los miembros.  
7. Envío de notificaciones por correo electrónico a los participantes.  
8. Introducción de resultados y validación por los contrincantes.  

---

## Aprendizajes y habilidades desarrolladas

- Desarrollo completo de **aplicaciones web con Laravel**, incluyendo rutas, controladores, modelos y vistas.  
- Implementación de **sistema de suscripción y pagos**.  
- Automatización de procesos complejos (generación de partidos, encuestas, notificaciones).  
- Gestión de **autenticación segura y roles de usuario**.  
- Coordinación de **flujos de trabajo de usuario y validación de resultados** en un entorno multiusuario.  
- Mejora de la experiencia de usuario mediante front-end intuitivo y notificaciones automáticas.  

---

**Estado del proyecto:** Completamente funcional para ciertos deportes; algunas ligas y deportes presentan errores pendientes de corrección.


