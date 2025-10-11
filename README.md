# Proyecto Node.js - Gestión de Productos (FakeStore API)

### 💡 Descripción  
Este proyecto fue desarrollado como parte de la pre-entrega del curso de **Node.js** de Talento Tech.  
El objetivo es crear una pequeña aplicación que funcione desde la terminal y permita interactuar con la API pública de **FakeStore**, realizando operaciones básicas como consultar, agregar, actualizar y eliminar productos.

---

### ⚙️ **Configuración Inicial**
1. Crear el directorio del proyecto:
   ```bash
   mkdir proyecto-node
   cd proyecto-node
   ```
2. Inicializar Node.js:
   ```bash
   npm init -y
   ```
3. En el archivo `package.json`, agregar:
   ```json
   "type": "module",
   "scripts": {
     "start": "node index.js"
   }
   ```
4. Crear los archivos:
   ```
   index.js
   fakestoreAPI.js
   ```

---

### 🧩 **Funcionalidades implementadas**
El programa puede ejecutar distintos comandos desde la terminal usando **process.argv**.  
Cada comando interpreta una acción diferente según el método HTTP indicado:

| Acción | Comando | Descripción |
|--------|----------|-------------|
| Obtener todos los productos | `npm run start GET products` | Muestra la lista completa. |
| Obtener un producto por ID | `npm run start GET products/5` | Muestra un solo producto. |
| Crear un producto nuevo | `npm run start POST products "Remera Negra" 2500 ropa` | Agrega un producto a la API. |
| Actualizar un producto | `npm run start PUT products 5 "Zapatillas" 4000 calzado` | Modifica los datos del producto. |
| Eliminar un producto | `npm run start DELETE products/5` | Elimina el producto indicado. |

---

### 🔧 **Detalles Técnicos**
- Se utilizó **`fetch()`** para realizar las peticiones HTTP a la API FakeStore.  
- El código está estructurado en dos archivos para mantener la **modularidad**:
  - `index.js` → controla los comandos de la terminal.  
  - `fakestoreAPI.js` → contiene todas las funciones que interactúan con la API.  
- Se usaron las características modernas de **JavaScript (ES6)**:
  - **Destructuring** para extraer argumentos fácilmente.  
  - **Spread Operator (`...`)** para clonar y combinar objetos al enviar datos.  
- Se agregó manejo de errores con mensajes claros mediante `try/catch`.  
- Los logs en consola son descriptivos y fáciles de leer.

---

### 🚀 **Mejoras y decisiones de diseño**

Durante el desarrollo del proyecto hice varios cambios para mejorar el código y hacerlo más ordenado y eficiente.
A continuación, explico las principales decisiones:

1. Reemplacé los if / else if por una tabla de comandos

En lugar de usar muchos condicionales para cada comando, armé una tabla de comandos (dispatch table), que es un objeto donde cada clave representa un comando (por ejemplo "GET products" o "DELETE productById") y su valor es la función que debe ejecutarse.

Esto me permitió:
   - Hacer el código más corto y legible.
   - Evitar estructuras repetitivas.
   - Poder agregar nuevos comandos fácilmente sin tocar toda la lógica.
   - Validar parámetros directamente en cada comando, mostrando mensajes claros si falta algo.

En resumen, el código del index.js ahora es más limpio, modular y fácil de mantener.

2. Usé forEach en lugar de map

En el ejemplo que se vió se usaba .map() solo para imprimir productos, pero ese método devuelve un nuevo array con los resultados, lo cual no tenía sentido en este caso.
Por eso lo reemplacé por .forEach(), que está pensado justamente para recorrer un array y ejecutar una acción sin devolver nada.

Esto hace que el código sea más semántico, un poco más eficiente, y además refleja mejor la intención del bloque: mostrar los productos, no transformarlos.

3. Pequeñas mejoras generales

Además de lo anterior, también hice algunos ajustes para pulir el proyecto:
   - Funciones con nombres más descriptivos, lo que facilita entender qué hace cada una.
   - Manejo de errores mejorado usando console.error cuando corresponde.
   - Mensajes de ayuda automáticos cuando el usuario ingresa comandos incorrectos.
   - Corrección del header JSON (quitando espacios innecesarios).
   - Estructura modular y validación de parámetros, lo que hace que el código sea más escalable.

---