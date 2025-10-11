import {
  listarProductos,
  obtenerProductoPorId,
  crearProducto,
  borrarProducto,
  actualizarProducto,
} from "./fakestoreAPI.js";

const args = process.argv.slice(2);
const metodo = args[0];
const recurso = args[1];

//Tabla de comandos
const comandos = {
  "GET products": () => listarProductos(),

  "GET productById": () => obtenerProductoPorId(recurso),

  "POST products": () => {
    const [_, __, title, price, category] = args;
    if (!title || !price || !category) {
      return console.log("Parámetros faltantes. Usa: npm run start POST products <title> <price> <category>");
    }
    crearProducto({ title, price, category });
  },

  "PUT products": () => {
    const [_, __, id, title, price, category] = args;
    if (!id || !title || !price || !category) {
      return console.log("Parámetros faltantes. Usa: npm run start PUT products <id> <title> <price> <category>");
    }
    actualizarProducto({ id, title, price, category });
  },

  "DELETE productById": () => borrarProducto(recurso),
};

//Determina la clave del comando
let clave = `${metodo} ${recurso}`;
if (recurso?.startsWith("products/")) {
  clave = `${metodo} productById`;
}

//Ejecuta comando correspondiente
const accion = comandos[clave];

if (accion) {
  accion();
} else {
  console.log("Comando no reconocido o parámetros incorrectos.\n");
  console.log("Ejemplos válidos:");
  console.log("npm run start GET products");
  console.log("npm run start GET products/5");
  console.log("npm run start POST products 'Remera Negra' 2500 ropa");
  console.log("npm run start PUT products 3 'Campera Azul' 3500 abrigo");
  console.log("npm run start DELETE products/7");
}

//Versión comentada funcional con IF Y ELSE IF

/*if (metodo === "GET" && recurso === "products") {
  listarProductos();
} else if (metodo === "GET" && recurso.startsWith("products/")) {
  obtenerProductoPorId(recurso);
} else if (metodo === "POST" && recurso === "products" && args.length === 5) {
  const [_, __, title, price, category] = args;
  crearProducto({ title, price, category });
} else if (metodo === "DELETE" && recurso.startsWith("products/")) {
  borrarProducto(recurso);
} else if (metodo === "PUT" && recurso === "products" && args.length >= 6) {
  const [_, __, id, title, price, category] = args;
  actualizarProducto({ id, title, price, category });
} else {
  console.log("⚠️ Comando no reconocido o parámetros incorrectos.");
  console.log("Ejemplos:");
  console.log("  npm run start GET products");
  console.log("  npm run start GET products/5");
  console.log('  npm run start POST products "Remera" 1500 ropa');
  console.log("  npm run start PUT products <id> <title> <price> <category>");
  console.log("  npm run start DELETE products/7");
}*/
