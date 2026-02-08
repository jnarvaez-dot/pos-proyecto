import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { userId, items } = body // items: [{ productId, quantity, price }]

        const result = await db.$transaction(async (tx) => {

            const totalSale = items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0)

            const sale = await tx.sale.create({
                data: {
                    userId,
                    total: totalSale,
                    items: {
                        create: items.map((item: any) => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            priceAtSale: item.price
                        }))
                    }
                }
            })

            for (const item of items) {
                const product = await tx.product.update({
                    where: { id: item.productId },
                    data: {
                        stock: {
                            decrement: item.quantity // Resta la cantidad vendida
                        }
                    }
                })
                if (product.stock < 0) {
                    throw new Error(`Stock insuficiente para: ${product.name}`)
                }
            }
            return sale
        })
        return NextResponse.json(result, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}