🎯 Juego de Adivinanza: "Adivina el Número"

Un juego interactivo de lógica y adivinanza desarrollado como parte del aprendizaje en Code 101. El proyecto destaca por su interfaz limpia, sistema de retroalimentación inteligente y una funcionalidad avanzada de Modo Oscuro/Claro.

🚀 Características principales

Lógica de "Intuición": El juego no solo te dice si el número es alto o bajo, sino que utiliza un sistema de mensajes dinámicos para guiar al jugador.

Tema Dual (Dark/Light Mode): Incluye un interruptor (toggle) en la esquina superior que permite cambiar la estética del juego en tiempo real utilizando variables de CSS y manipulación del DOM.

Historial de Intentos: Registro detallado de cada jugada para que el usuario pueda analizar sus decisiones previas.

Diseño Responsivo: Interfaz adaptada para diferentes tamaños de pantalla con un estilo moderno y minimalista.

📂 Estructura del Proyecto

El proyecto se compone de tres archivos fundamentales:

1. index.html (Estructura)
Define el "esqueleto" semántico de la aplicación.

Usa etiquetas como <main> para el contenedor principal y <section> para organizar las áreas de entrada y resultados.

Contiene el botón interactivo para el cambio de tema (#btnTema) y los campos necesarios para la jugada (#inputNumero, #btnAdivinar).

2. style.css (Diseño y Temas)
Gestiona la apariencia visual mediante el uso de Variables CSS (Custom Properties).

Modo Claro: Basado en gradientes suaves y fondos blancos limpios.

Modo Oscuro: Activado mediante la clase .dark-mode, cambia automáticamente la paleta de colores a tonos azulados profundos y textos claros.

Transiciones: Implementa transition: 0.4s para asegurar que el cambio entre temas sea fluido y agradable a la vista.

3. script.js (Lógica y Dinamismo)

El "cerebro" del juego escrito en JavaScript.

Control del Juego: Genera el número secreto, valida la entrada del usuario y actualiza el contador de intentos.

Gestión del DOM: Cambia dinámicamente los mensajes de feedback y el contenido del historial.

Lógica del Switcher: Escucha el evento onclick del botón de tema para alternar la clase en el body y actualizar el emoji (☀️/🌙).

🛠️ Cómo ejecutarlo

Descarga los tres archivos en una misma carpeta.

Abre el archivo index.html en cualquier navegador web moderno.

¡Disfruta adivinando y probando el Modo Oscuro!

Desarrollado por: Yael Yusef Huamani Mucha 👨‍💻
Curso: Code 101 - Enter Tech School