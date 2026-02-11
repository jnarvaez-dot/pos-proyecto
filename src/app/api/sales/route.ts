import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { userId, items } = body // items: [{ productId, quantity, price }]

        const result = await db.$transaction(async (tx) => {
            let totalCalculado = 0;
            const itemsParaCrear = [];

            for (const item of items) {
                // Buscamos el producto para tener el precio real y el stock actual
                const productData = await tx.product.findUnique({
                    where: { id: item.productId }
                });

                if (!productData) throw new Error(`Producto ${item.productId} no encontrado`);
                if (productData.stock < item.quantity) {
                    throw new Error(`Stock insuficiente para: ${productData.name}`);
                }

                const subtotal = productData.price * item.quantity;
                totalCalculado += subtotal;

                itemsParaCrear.push({
                    productId: item.productId,
                    quantity: item.quantity,
                    priceAtSale: productData.price // Usamos el precio de la DB, no del cliente
                });

                // Descontamos stock
                await tx.product.update({
                    where: { id: item.productId },
                    data: { stock: { decrement: item.quantity } }
                });
            }

            const sale = await tx.sale.create({
                data: {
                    userId,
                    total: totalCalculado,
                    items: { create: itemsParaCrear }
                }
            });

            return sale;
        });
        return NextResponse.json(result, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}