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
- Los logs en consola son descriptivos y fáciles de leer (incluyen emojis y textos cortos).  

---

### 🧠 **Mejora en la estructura del index.js**

En la versión que se estuvo viendo en clase, el manejo de los comandos se hacía con una serie de if y else if.
Aunque funciona, el código se ve largo y repetitivo, y cada vez que había que agregar un nuevo comando, era necesario sumar más condicionales.

Por eso reemplacé esa lógica por una tabla de comandos (también conocida como dispatch table).
Básicamente es un objeto donde cada clave representa un comando posible (por ejemplo, "GET products" o "DELETE productById") y su valor es una función que ejecuta la acción correspondiente.

Esto permitió:

Hacer el código más limpio y legible.

Evitar estructuras repetitivas.

Facilitar la extensión del programa (si quiero agregar un nuevo método, solo sumo una entrada al objeto).

Además, ahora cada comando se encarga de validar sus propios parámetros y mostrar mensajes claros si falta algo.
Esta forma es mucho más escalable y profesional para manejar una CLI sencilla en Node.js.

---

### 📊 **Mejoras Generales**
Comparado con el código que vimos en las clases, esta versión tiene:
- **Funciones con nombres más claros** y consistentes.  
- **Mensajes de consola más organizados** y fáciles de identificar.  
- **Manejo de errores mejorado** con `console.error`.  
- **Guía de ayuda** cuando el usuario ingresa comandos incorrectos.  
- **Función de actualización (`PUT`)** más completa y sin errores de texto.  
- **Mejora de rendimiento** usando `forEach` en lugar de `map` para recorrer arrays de forma más semántica.
- **Tabla de comandos en** index.js, reemplazando los if / else para mayor eficiencia y claridad.

---

### 🧠 **Por qué usé `forEach` en lugar de `map`**
En el código que se vió en clase se utilizaba `.map()` solo para imprimir cada producto, pero ese método **devuelve un nuevo array** con los resultados de la iteración, que en este caso no se usaban.  
Por eso decidí cambiarlo por **`.forEach()`**, que está pensado justamente para **recorrer un array y ejecutar una acción** sin necesidad de retornar nada.  

Esto hace que el código sea **más semántico, un poco más eficiente** y además refleja mejor la intención: *mostrar los productos*, no transformarlos.  

---

### 🚀 **Conclusión**
Con este proyecto logré comprender mejor cómo funcionan:
- Los **argumentos del proceso (`process.argv`)**.  
- Las **peticiones HTTP con fetch** en Node.js.  
- Y cómo aplicar **estructuras modulares y asincronismo** de manera limpia.  

Mi objetivo fue dejar el código lo más **ordenado, entendible y profesional** posible, cuidando los detalles y aplicando buenas prácticas.  
