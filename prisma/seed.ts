const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // 1. Crear Usuario Admin
    const admin = await prisma.user.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            name: 'Admin ZambiPan',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    // 2. Crear Categorías
    const catDulce = await prisma.category.create({ data: { name: 'Pan Dulce' } });
    const catSal = await prisma.category.create({ data: { name: 'Pan de Sal' } });
    const catBebida = await prisma.category.create({ data: { name: 'Bebidas' } });

    // 3. Crear Productos
    const concha = await prisma.product.create({
        data: { name: 'Concha Vainilla', price: 1.50, stock: 50, minStock: 10, categoryId: catDulce.id }
    });
    const bolillo = await prisma.product.create({
        data: { name: 'Bolillo', price: 0.50, stock: 100, minStock: 20, categoryId: catSal.id }
    });
    const cafe = await prisma.product.create({
        data: { name: 'Café Americano', price: 2.00, stock: 30, minStock: 5, categoryId: catBebida.id }
    });

    // 4. Crear Ventas de prueba (Simulando los últimos 3 días)
    const hoy = new Date();
    for (let i = 0; i < 3; i++) {
        const fechaVenta = new Date();
        fechaVenta.setDate(hoy.getDate() - i);

        await prisma.sale.create({
            data: {
                userId: admin.id,
                total: 5.50,
                createdAt: fechaVenta,
                items: {
                    create: [
                        { productId: concha.id, quantity: 2, priceAtSale: 1.50 }, // Cambiado: price -> priceAtSale
                        { productId: cafe.id, quantity: 1, priceAtSale: 2.00 },   // Cambiado: price -> priceAtSale
                        { productId: bolillo.id, quantity: 1, priceAtSale: 0.50 }, // Cambiado: price -> priceAtSale
                    ]
                }
            }
        });
    }

    console.log('✅ Base de datos poblada con éxito (Admin, Productos y Ventas)');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());