import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
    try {
        const products = await db.product.findMany({
            include: { category: true }
        })
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 })
    }
}
