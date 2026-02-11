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
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, price, stock, minStock, categoryId } = body;

        const newProduct = await db.product.create({
            data: {
                name,
                price: parseFloat(price),
                stock: parseInt(stock),
                minStock: parseInt(minStock),
                categoryId: parseInt(categoryId),
            },
        });

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error al crear el producto" }, { status: 500 });
    }
}