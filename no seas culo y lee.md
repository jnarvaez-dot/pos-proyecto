# 🥖 Proyecto Panadería "ZambiPan"

Sistema de gestión de inventario y ventas para panaderías, desarrollado con **Next.js**, **Prisma** y **Supabase**.

## 🛠️ Configuración Inicial para Desarrolladores

Si acabas de clonar el proyecto, sigue estos pasos para configurar tu entorno local:

### 1. Instalación de dependencias
Asegúrate de tener Node.js instalado y ejecuta:
```bash
npm install
```

### 2. CREA un archivo .env con esto ya te lo paso al bien escrito 
```bash
DATABASE_URL="postgresql://postgres:tu_password@db.tu_id_supabase.supabase.co:5432/postgres"
```
### 3. GENERA PRISMA
```bash
npx prisma generate
```
### Asi puedes traer la data 
Productos: GET /api/products (Trae todos los productos con su categoría incluida).

Categorías: GET /api/categories (Trae el listado de categorías disponibles).
```bash
ejemplo full ia
const getProducts = async () => {
  const res = await fetch('/api/products');
  const products = await res.json();
  return products;
}
```
### Asi se ve la data 
```bash
{
"name": "Concha de Vainilla",
"stock": 24,
"category": {
"name": "Pan Dulce"
}
}
```
### SI TIENES DUDAS ABRES /src/types/index.ts

