import {BarChart3, LayoutDashboard, LucideIcon, Package, ShoppingCart, Warehouse} from "lucide-react";

export type NavItem = {
    label: string;
    href: string;
    icon: LucideIcon;
    roles?: string[];
}

export const dashboardNavigation: NavItem[] = [
    {
        label: "Panel de Control",
        href: "/dashboard",
        icon: LayoutDashboard,
        roles: ["admin", "vendedor"]
    },
    {
        label: "Punto de venta",
        href: "/dashboard/pos",
        icon: ShoppingCart,
        roles: ["admin", "vendedor"]
    },
    {
        label: "Productos",
        href: "/dashboard/productos",
        icon: Package,
        roles: ["admin", "vendedor"]
    },
    {
        label: "Inventario",
        href: "/dashboard/inventario",
        icon: Warehouse,
        roles: ["admin"]
    },
    {
        label: "Reportes",
        href: "/dashboard/reportes",
        icon: BarChart3,
        roles: ["admin", "vendedor"]
    }
]