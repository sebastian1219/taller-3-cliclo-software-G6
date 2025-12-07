Introducción

este proyecto corresponde a la tercera entrega del área ciclo de software. el objetivo es demostrar como integrar buenas practicas de desarrollo moderno en un flujo automatizado que garantice reproducibilidad, calidad del código y seguridad en las dependencias.

se pueden visualizar mejoras 
en las pruebas unitarias con Jest para asegurar la correcta funcionalidad de los Value Objects y componentes críticos.
Linting y formateo automático con ESLint y Prettier, manteniendo un estilo de código consistente.
Automatización en GitHub Actions, que ejecuta pruebas, linting y construcción de la aplicación en cada push.
Construcción de imágenes Docker reproducibles, listas para despliegue en entornos productivos.
Escaneo de vulnerabilidades con Docker Scout, garantizando que las dependencias críticas se mantengan libres de riesgos HIGH/CRITICAL.


Objetivos del Proyecto
El propósito principal de este laboratorio es integrar prácticas de calidad y seguridad dentro de un flujo de CI/CD moderno. Los objetivos específicos son:
Automatizar el ciclo de integración continua (CI/CD) mediante GitHub Actions, asegurando que cada cambio en el repositorio dispare pruebas, linting y construcción de la aplicación.
Garantizar la calidad del código con pruebas unitarias en Jest y reglas de estilo con ESLint y Prettier.
Asegurar reproducibilidad en la construcción de imágenes Docker, evitando configuraciones manuales y asegurando entornos consistentes.
Detectar y mitigar vulnerabilidades en dependencias mediante el uso de Docker Scout y npm audit, priorizando la eliminación de riesgos HIGH/CRITICAL.
Promover buenas prácticas de DevSecOps, integrando seguridad desde la etapa de desarrollo y no como un paso posterior.

para empezar se configuran los archivos utilizados en Npm para verificar que las pruebas unitarias funcionen, además se ingresan en los códigos las variables de entorno de synk y sonarQube, sincronizadas de igual manera desde sus respectivas aplicciones con GitHub por medio de token de acceso.


que es SonarQube Cloud
sirve para analizar automáticamente el código fuente en la nube, detectando errores, bugs, vulnerabilidades de seguridad, y "malos olores" de código, ayudando a los equipos a mantener la calidad del software, mejorar la seguridad y acelerar el desarrollo al integrarse en flujos de trabajo DevOps y CI/CD . Es una olucion Saas que ofrece recomendaciones de corrección, análisis de código abierto y de infraestructura como código (IaC), y es una versión en la nube de la plataforma SonarQUBE.


Funciones principales:
•Detección de problemas: Encuentra errores, vulnerabilidades (OWASP Top 10, inyecciones), secretos codificados y puntos críticos de seguridad.
•Análisis de seguridad (SAST & SCA): Realiza análisis estático (SAST) para encontrar fallos complejos y análisis de composición de software (SCA) para dependencias de terceros.
•Integración DevOps: Se conecta con plataformas como GitHub, GitLab y Bitbucket para analizar código en cada commit o pull request, integrándose en el pipeline de CI/CD.
•Análisis de Infraestructura como Código (IaC): Escanea configuraciones en Terraform, Kubernetes, Docker, etc., para detectar errores de configuración.
•Retroalimentación y Mejora: Proporciona sugerencias detalladas y documentación para que los desarrolladores corrijan el código, mejorando sus habilidades.
•IA para corrección (AI CodeFix): Ofrece recomendaciones de corrección de código impulsadas por inteligencia artificial. 
¿Para quién es?
•Equipos de desarrollo que trabajan en la nube y usan plataformas DevOps/SaaS.
•Proyectos de software que buscan calidad, seguridad y mantenibilidad continua. 

### Reporte de SonarQube
![SonarQube Report](docs/screenshots/sonar_qube.png)


