import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// ACTUALIZAR UN PRODUCTO
export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await req.json();
        const { name, price, stock, minStock, categoryId } = body;

        const updatedProduct = await db.product.update({
            where: { id: parseInt(id) },
            data: {
                name,
                price: parseFloat(price),
                stock: parseInt(stock),
                minStock: parseInt(minStock),
                categoryId: parseInt(categoryId),
            },
        });

        return NextResponse.json(updatedProduct);
    } catch (error) {
        return NextResponse.json({ error: "Error al actualizar el producto" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        await db.product.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        // Si el producto tiene ventas asociadas, Prisma dará error de restricción
        return NextResponse.json(
            { error: "No se puede eliminar un producto que ya tiene ventas registradas" },
            { status: 400 }
        );
    }
}