"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import {dashboardNavigation} from "@/config/nagivation";

const data = {
    user: {
        name: "Admin",
        email: "admin@zambipan.com",
        avatar: "/avatars/admin.jpg",
    },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    // Convertir tu navegación al formato que espera NavMain
    const navItems = dashboardNavigation.map((item) => ({
        title: item.label,
        url: item.href,
        icon: item.icon,
        isActive: pathname === item.href,
    }))

    return (
        <Sidebar collapsible="icon" className="border-r border-gray-200" {...props}>
            <SidebarHeader className="border-b border-gray-200 bg-gradient-to-b from-[#722F37] to-[#5a252c]">
                <div className="flex items-center gap-3 px-3 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg font-bold text-lg text-[#722F37] group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 transition-all">
                        ZP
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-lg font-black text-white tracking-tight">
              Zambi<span className="text-amber-300">Pan</span>
            </span>
                        <span className="text-xs text-amber-100 font-medium uppercase tracking-wider">
              Punto de Venta
            </span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="bg-white">
                <NavMain items={navItems} />
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-200 bg-gray-50">
                <NavUser user={data.user} />
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}