import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// ELIMINAR UNA CATEGORÍA (DELETE)
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        await db.category.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
        return NextResponse.json(
            { error: "No se puede eliminar una categoría que tiene productos asociados. Mueve o elimina los productos primero." },
            { status: 400 }
        );
    }
}

// EDITAR UNA CATEGORÍA (PATCH)
export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await req.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
        }

        const updatedCategory = await db.category.update({
            where: { id: parseInt(id) },
            data: { name },
        });

        return NextResponse.json(updatedCategory);
    } catch (error) {
        return NextResponse.json({ error: "Error al actualizar la categoría" }, { status: 500 });
    }
}