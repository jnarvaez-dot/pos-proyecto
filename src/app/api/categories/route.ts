import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
    try {
        const categories = await db.category.findMany()
        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener categorías' }, { status: 500 })
    }
}