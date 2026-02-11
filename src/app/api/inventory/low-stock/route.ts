import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
    try {
        const lowStockProducts = await db.product.findMany({
            where: {
                stock: {
                    lte: db.product.fields.minStock
                }
            },
            include: { category: true }
        })
        return NextResponse.json(lowStockProducts)
    } catch (error) {
        return NextResponse.json({ error: 'Error al consultar faltantes' }, { status: 500 })
    }
}