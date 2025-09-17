# ¡Bienvenidos al proyecto! 🎉

Este repositorio es una plantilla diseñada para ayudarte a comenzar rápidamente. Sigue estos pasos para configurar tu entorno y empezar a trabajar:

## 1. Usa esta plantilla
Haz clic en el botón **"Use this template"** en la parte superior derecha de este repositorio para crear un nuevo proyecto basado en esta plantilla. 📂

## 2. Instala las dependencias
Después de clonar tu nuevo repositorio, abre la terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```
Esto instalará todo lo necesario para que el proyecto funcione. ✅

## 3. Compila los estilos de Tailwind CSS ✂️
Para que los estilos de Tailwind funcionen mientras trabajas, ejecuta:
```bash
npm run tw
```
Este comando se encargará de compilar los estilos cada vez que uses clases de Tailwind en tu HTML. 🎨

## 4. Archivos importantes 📂
### Archivos originales:
- **`src/scripts/stays.js`**: Aquí encontrarás la data que necesitarás usar durante el proyecto. ¡Es tu fuente de información principal! 📊
- **`src/scripts/main.js`**: Este es el archivo donde escribirás el código principal de tu aplicación. Todo lo que construyas comenzará aquí. 🛠️
- **`src/scripts/utils.js`**: Este archivo contiene funciones auxiliares que pueden ser reutilizadas en diferentes partes de tu proyecto. Es un buen lugar para almacenar lógica común, como validaciones, formateos o cálculos. 🔧
- **`src/images/design`**: En esta carpeta encontrarás capturas que muestran cómo debería lucir el resultado esperado. Esto te servirá como referencia visual. 🖼️
- **`index.html`**: Este es el archivo donde desarrollarás el diseño de tu proyecto. Aquí se integrarán los estilos y el código para dar vida a tu aplicación. 🖋️

### Archivos añadidos para funcionalidad completa:
- **`src/scripts/headerButton.js`**: Maneja la apertura/cierre del overlay de búsqueda con comportamientos específicos para móvil (botón X) y desktop (ESC + click fuera). 🔘
- **`src/scripts/guestContainer.js`**: Controla los contadores de huéspedes (adultos y niños) con botones +/- y gestión de estados deshabilitados. 👥
- **`src/scripts/desktopFunction.js`**: Gestiona el comportamiento específico de desktop para resaltar campos y mostrar/ocultar contenedores de ubicación y huéspedes. 💻
- **`src/scripts/searchingFilter.js`**: Implementa el autocompletado de ubicaciones con dropdown de sugerencias, selección de ciudades y gestión responsiva de contenedores. 🔍

```plaintext
📂 ├── src/
    📜 ├── scripts/
         📄 ├── stays.js
         📄 ├── main.js
         📄 ├── utils.js
         📄 ├── headerButton.js
         📄 ├── guestContainer.js
         📄 ├── desktopFunction.js
         📄 └── searchingFilter.js
    🖼️ ├── images/
         🖼️ └── design/
📄 ├── index.html
📦 ├── package.json
📖 └── README.md
🚫 └── .gitignore
```

## 5. ¡Manos a la obra! 🚀
Ya tienes todo listo para empezar. Explora los archivos, experimenta con el código y diviértete aprendiendo. 🎉

Si tienes dudas, no dudes en preguntar. ¡Éxito en tu proyecto! 💪
