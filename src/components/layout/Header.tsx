"use client"
import { usePathname } from "next/navigation"

export default function Header() {

    const pathname = usePathname()

    const getTitle = (path: string) => {
        if (path.includes('/pos')) return 'Punto de Venta'
        if (path.includes('/productos')) return 'Gestión de Productos'
        if (path.includes('/inventario')) return 'Control de Stock'
        if (path.includes('/reportes')) return 'Análisis y Reportes'
        return 'Panel de Control'
    }

    return (
        <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
            <span className="font-semibold text-gray-700">{getTitle(pathname)}</span>
            <div className="flex items-center gap-2">
                {/* Indicador de "En línea" */}
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-500 font-medium italic">
                    Vendedor
                </span>
            </div>
        </header>
    )
}