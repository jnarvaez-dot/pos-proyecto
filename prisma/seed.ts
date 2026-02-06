import { PrismaClient } from '@prisma/client'

// En la V6, Prisma encuentra la DATABASE_URL solita en el .env
const prisma = new PrismaClient()

async function main() {
    console.log('🧹 Borrando datos antiguos...')
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()

    console.log('📦 Creando categorías...')
    const catDulce = await prisma.category.create({ data: { name: 'Pan Dulce' } })
    const catSalado = await prisma.category.create({ data: { name: 'Pan Salado' } })
    const catBebidas = await prisma.category.create({ data: { name: 'Bebidas' } })

    console.log('🥐 Creando productos...')
    await prisma.product.createMany({
        data: [
            { name: 'Concha de Vainilla', price: 1.50, stock: 24, categoryId: catDulce.id },
            { name: 'Cuernito', price: 1.20, stock: 15, categoryId: catDulce.id },
            { name: 'Donas (6 pack)', price: 5.00, stock: 10, categoryId: catDulce.id },
            { name: 'Bolillo / Pan de agua', price: 0.25, stock: 100, categoryId: catSalado.id },
            { name: 'Baguette', price: 2.00, stock: 20, categoryId: catSalado.id },
            { name: 'Café Americano', price: 2.50, stock: 50, categoryId: catBebidas.id },
            { name: 'Jugo de Naranja', price: 3.00, stock: 10, categoryId: catBebidas.id },
        ]
    })

    console.log('✅ ¡Base de datos poblada exitosamente!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })