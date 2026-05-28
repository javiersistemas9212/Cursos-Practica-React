# 🎓 Plataforma de Cursos - Proyecto de Práctica React

¡Bienvenido al repositorio de mi **Plataforma de Cursos**! Este es un proyecto de aprendizaje y práctica personal diseñado para profundizar en el ecosistema de **React**, dominando la gestión de estado, los efectos secundarios, el flujo global de datos y la optimización de lógica mediante Hooks (tanto nativos como personalizados).

La aplicación simula un entorno educativo digital donde los usuarios pueden iniciar sesión, navegar por módulos de aprendizaje y resolver cuestionarios interactivos.

---

## 🧠 Glosario de Hooks Utilizados (Aprendizaje)

Para resolver las diferentes necesidades de la plataforma, se implementaron los siguientes Hooks de React:

### 1. `useState`
* **¿Qué hace?:** Permite añadir estado local a los componentes funcionales de React para recordar datos entre renders.
* **Uso en el proyecto:** Lo utilizamos para controlar el estado de elementos visuales dinámicos, como saber qué opción del quiz seleccionó el alumno en un momento dado (`selectedAnswer`) o para manejar los campos de texto de los formularios de login de manera controlada.

### 2. `useEffect`
* **¿Qué hace?:** Ejecuta código en respuesta a cambios en el ciclo de vida del componente (sincronización con efectos secundarios).
* **Uso en el proyecto:** Esencial para detectar cuándo cambia el curso en la URL (parámetro `idCourse`) y reiniciar el cuestionario inmediatamente. También se usa para persistir de manera segura la sesión del usuario en el `localStorage`.

### 3. `useContext`
* **¿Qué hace?:** Crea un estado global accesible por cualquier componente de la aplicación, sin importar qué tan profundo esté en el árbol, evitando el "prop drilling".
* **Uso en el proyecto:** Es el motor del **Sistema de Autenticación**. Protege las rutas privadas de la plataforma y provee la información del usuario logueado (`user`) y las funciones de `login` y `logout` a toda la aplicación.

### 4. `useReducer`
* **¿Qué hace?:** Una alternativa a `useState` ideal para gestionar estados complejos con múltiples transiciones de lógica interconectadas, centralizándolas en una función pura llamada *reducer*.
* **Uso en el proyecto:** Controla todo el **Sistema de Quizzes**. Maneja de forma unificada el avance de preguntas, el cálculo en tiempo real del puntaje del estudiante, el bloqueo del botón "Siguiente" y el despliegue automático de la pantalla de resultados cuando el cuestionario se completa.

### 5. Custom Hooks (Hooks Personalizados)
* **¿Qué hacen?:** Permiten extraer lógica repetitiva de los componentes en funciones reutilizables que pueden mantener internamente su propio estado de React.
* **Uso en el proyecto:** Implementados para encapsular y limpiar el consumo del contexto de autenticación o abstraer peticiones de datos, logrando que los componentes de la interfaz de usuario (JSX) queden mucho más limpios, modulares y fáciles de mantener.

---

## 🛠️ Características Clave Implementadas

* **Autenticación Global (`useContext`):** Flujo completo para iniciar y cerrar sesión que bloquea o desbloquea el acceso al catálogo formativo.
* **Quizzes Dinámicos por Curso (`useReducer`):** Filtrado inteligente de cuestionarios específicos (ej. *React Avanzado* o *SQL Server*) que adapta el contenido de la evaluación según el módulo activo.
* **Rutado Dinámico:** Navegación fluida e intuitiva basada en parámetros de URL para cargar lecciones bajo demanda.
* **Arquitectura Escalable:** Separación estricta entre la UI (Componentes visuales), la lógica de negocio (Hooks y Reducers) y los estilos CSS.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1. **Clonar este repositorio:**
   git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
