// fakestoreAPI.js
const BASE_URL = "https://fakestoreapi.com/products";

// 📦 Obtener todos los productos
export async function listarProductos() {
  try {
    const response = await fetch(BASE_URL);
    const productos = await response.json();
    console.log("🛍️ Lista completa de productos:");
    productos.forEach((p) => console.log(p));
  } catch (error) {
    console.error("❌ Error al obtener los productos:", error.message);
  }
}

// 🔍 Obtener un producto específico
export async function obtenerProductoPorId(path) {
  try {
    const id = path.split("/")[1];
    const response = await fetch(`${BASE_URL}/${id}`);
    const producto = await response.json();
    console.log("📄 Detalle del producto:", producto);
  } catch (error) {
    console.error("❌ Error al obtener el producto:", error.message);
  }
}

// ➕ Crear un nuevo producto
export async function crearProducto(producto) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...producto,
        description: "Producto creado desde mi app Node.js",
        image: "https://media.istockphoto.com/id/1369359642/photo/top-view-of-laptop-with-text-node-js.jpg?s=2048x2048&w=is&k=20&c=lHZITVQU4E1YS24-n5FQ95GKwVkR50qnSOSLpfYadDg=",
        //image: "https://i.pravatar.cc",
      }),
    });

    const data = await response.json();
    console.log("✅ Producto agregado correctamente:", data);
  } catch (error) {
    console.error("❌ Error al agregar producto:", error.message);
  }
}

// 🗑️ Eliminar un producto
export async function borrarProducto(path) {
  try {
    const id = path.split("/")[1];
    const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    const resultado = await response.json();
    console.log("🗑️ Producto eliminado correctamente:", resultado);
  } catch (error) {
    console.error("❌ Error al eliminar producto:", error.message);
  }
}

// 🔄 Actualizar un producto existente
export async function actualizarProducto(producto) {
  try {
    const response = await fetch(`${BASE_URL}/${producto.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...producto,
        description: producto.description || "Actualizado desde Node.js",
        image: producto.image || "https://media.istockphoto.com/id/1369359642/photo/top-view-of-laptop-with-text-node-js.jpg?s=2048x2048&w=is&k=20&c=lHZITVQU4E1YS24-n5FQ95GKwVkR50qnSOSLpfYadDg=",
        //image: producto.image || "https://i.pravatar.cc",
      }),
    });

    const data = await response.json();
    console.log("♻️ Producto actualizado correctamente:", data);
  } catch (error) {
    console.error("❌ Error al actualizar producto:", error.message);
  }
}
