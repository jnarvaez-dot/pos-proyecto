import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    try {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0); // Ajustamos al inicio del día

        // 1. Suma de ingresos de hoy
        const ventasHoy = await db.sale.aggregate({
            where: { createdAt: { gte: hoy } },
            _sum: { total: true }
        });

        // 2. Conteo de productos con stock bajo (stock <= minStock)
        // Nota: Prisma no permite comparar dos columnas directamente en un where simple,
        // así que traemos los que cumplen la condición de forma eficiente.
        const productos = await db.product.findMany({
            select: { stock: true, minStock: true }
        });
        const alertasStock = productos.filter(p => p.stock <= p.minStock).length;

        // 3. Total de ventas realizadas hoy (cantidad de tickets)
        const numVentasHoy = await db.sale.count({
            where: { createdAt: { gte: hoy } }
        });

        return NextResponse.json({
            ingresosHoy: ventasHoy._sum.total || 0,
            alertasStock,
            ventasRealizadas: numVentasHoy
        });

    } catch (error) {
        return NextResponse.json({ error: "Error al cargar estadísticas" }, { status: 500 });
    }
}