import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    try {
        const productSales = await db.saleItem.groupBy({
            by: ['productId'],
            _sum: {
                quantity: true,
            },
            orderBy: {
                _sum: {
                    quantity: 'desc',
                },
            },
        });

        const products = await db.product.findMany({
            select: {
                id: true,
                name: true,
            },
        });

        const formattedStats = productSales.map((item) => {
            const productInfo = products.find((p) => p.id === item.productId);
            return {
                name: productInfo?.name || "Desconocido",
                totalSold: item._sum.quantity || 0,
            };
        });

        const top5 = formattedStats.slice(0, 5);
        const bottom5 = [...formattedStats].reverse().slice(0, 5);

        return NextResponse.json({
            top: top5,
            bottom: bottom5,
        });
    } catch (error) {
        console.error("Error en reporte de ventas:", error);
        return NextResponse.json(
            { error: "Error al generar el reporte de productos" },
            { status: 500 }
        );
    }
}