# TaskManager

## Descripción del Proyecto

TaskManager es una aplicación web diseñada para facilitar la gestión y administración de tareas dentro de un equipo de trabajo. Su objetivo es permitir la organización de actividades, mejorar la colaboración entre los integrantes y optimizar el seguimiento de tareas pendientes, en proceso y finalizadas.

Este proyecto fue desarrollado como parte de la práctica integradora de la asignatura **Gestión de Configuración y Control de Versiones**, aplicando estrategias de trabajo colaborativo mediante Git y GitHub.

---

## Objetivos

* Gestionar tareas de manera eficiente.
* Implementar un flujo de trabajo colaborativo utilizando Git y GitHub.
* Aplicar buenas prácticas de control de versiones.
* Utilizar ramas para el desarrollo de nuevas funcionalidades y corrección de errores.
* Implementar Pull Requests para la integración segura de cambios.

---

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Visual Studio Code

---

## Estructura del Proyecto

```text
TaskManager
│
├── index.html
├── css
│   └── estilos.css
├── js
│   └── app.js
├── assets
└── README.md
```

---

## Integrantes del Equipo

| Integrante | Rol             | Responsabilidad                          |
| ---------- | --------------- | ---------------------------------------- |
| Xana       | Administrador   | Gestión de ramas y aprobaciones          |
| Dulce      | Desarrollador 1 | Desarrollo de interfaz de usuario        |
| Guillermo  | Desarrollador 2 | Desarrollo de funcionalidades JavaScript |
| Alvaro     | Desarrollador 3 | Documentación del proyecto               |

---

## Estrategia de Ramas

### Rama Principal

```text
main
```

Contiene las versiones estables del proyecto.

### Rama de Integración

```text
develop
```

Recibe los cambios aprobados provenientes de las ramas de funcionalidad.

### Ramas de Funcionalidad

```text
feature/interfaz
feature/login
feature/documentacion
```

Utilizadas para desarrollar nuevas características sin afectar la estabilidad del proyecto.

### Rama de Corrección

```text
hotfix/error-menu
```

Utilizada para solucionar errores detectados en el sistema.

---

## Flujo de Trabajo

1. Clonar el repositorio.
2. Crear o cambiar a la rama correspondiente.
3. Realizar modificaciones.
4. Registrar cambios mediante commits descriptivos.
5. Enviar cambios al repositorio remoto.
6. Crear un Pull Request.
7. Revisar y aprobar cambios.
8. Integrar cambios a `develop`.
9. Integrar cambios de `develop` a `main`.

---

## Políticas de Pull Request

* No se permiten cambios directos sobre la rama `main`.
* Todo desarrollo debe realizarse desde una rama `feature/*`.
* Todo cambio debe integrarse mediante Pull Request.
* Cada Pull Request debe incluir:

  * Título descriptivo.
  * Descripción de cambios realizados.
  * Evidencia de pruebas.

---

## Políticas de Combinación de Ramas

| Rama Destino | Recibe Cambios Desde |
| ------------ | -------------------- |
| develop      | feature/*            |
| main         | develop              |

---

## Ejemplos de Commits

```bash
git commit -m "Agrega menú principal"
git commit -m "Implementa validación de formulario"
git commit -m "Actualiza documentación del proyecto"
```

---

## Repositorio

Agregar aquí la URL del repositorio GitHub:

```text
https://github.com/usuario/TaskManager
```

---

## Conclusiones

Durante el desarrollo de esta práctica se aplicaron estrategias de control de versiones utilizando Git y GitHub, permitiendo el trabajo colaborativo mediante ramas, commits y Pull Requests. Estas herramientas facilitan la integración de cambios, reducen conflictos y mejoran la organización del desarrollo de software en equipo.
