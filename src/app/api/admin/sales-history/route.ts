import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    try {
        const history = await db.sale.findMany({
            include: {
                user: {
                    select: { username: true }
                },
                items: {
                    include: {
                        product: { select: { name: true } }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(history);
    } catch (error) {
        return NextResponse.json({ error: "Error al cargar historial" }, { status: 500 });
    }
}