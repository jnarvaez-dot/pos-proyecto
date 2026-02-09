# 🥖 Proyecto Panadería "ZambiPan"

Sistema profesional de gestión de inventario y punto de venta (POS) desarrollado con **Next.js**, **Prisma** y **Supabase**.

## 🛠️ Configuración Inicial

1. **Instalar dependencias:**
   ```bash
    npm install
    npx prisma generate
    npx prisma db push

### Ejecutar en Desarrollo:

    npm run dev

## Endpoints de la API
### 📦 Inventario

GET /api/products: Lista completa de productos.

GET /api/categories: Catálogo de categorías disponibles.

GET /api/inventory/low-stock: Alertas de stock (Productos por debajo de su minStock).

```JavaScript
const res = await fetch('/api/sales', {
method: 'POST',
body: JSON.stringify({
userId: "id_del_cajero",
items: [{ productId: 1, quantity: 2, price: 1.50 }]
})
});
```

Acción	 || Método	 ||      URL	           ||         Body (JSON)

Crear	 || POST	 ||    /api/products	   ||   { name, price, stock, minStock, categoryId }

Editar	 || PATCH	 ||      /api/products/5   ||   { price: 2.50, stock: 50 } (solo lo que cambie)

Eliminar ||	DELETE	 ||      /api/products/5   ||  	Nada

### 💰 Ventas

POST /api/sales: Registra una venta, crea el detalle y resta stock automáticamente. (Cuenta con rollback automático si no hay stock suficiente).

Ejemplo de llamada (Fetch):


### 🔐 Autenticación y Roles
El sistema utiliza NextAuth con estrategia JWT.

Admin: Acceso total a reportes y gestión de stock.

Cashier: Acceso limitado a punto de venta.
```javascript
   const result = await signIn("credentials", {
   username: "admin", // <--- Cambiado de 'email' a 'username'
   password: "admin123",
   redirect: false,
});
```

User: admin / Pass: admin123

### 🏗️ Estructura de Datos
Si tienes dudas sobre los tipos de TypeScript, consulta: src/types/index.ts.

La data de productos incluye la relación de categoría por defecto:

```JSON
{
"name": "Concha de Vainilla",
"stock": 24,
"category": { "name": "Pan Dulce" }
}
