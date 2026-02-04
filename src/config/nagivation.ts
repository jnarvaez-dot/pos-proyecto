export type NavItem = {
    label: string;
    href: string;
    roles?: string[];
}

export const dashboardNavigation: NavItem[] = [
    {
        label: "Punto de venta",
        href: "/dashboard/pos",
        roles: ["admin", "vendedor"]
    },
    {
        label: "Productos",
        href: "/dashboard/productos",
        roles: ["admin", "vendedor"]
    },
    {
        label: "Inventario",
        href: "/dashboard/inventario",
        roles: ["admin"]
    },
    {
        label: "Reportes",
        href: "/dashboard/reportes",
        roles: ["admin", "vendedor"]
    }
]