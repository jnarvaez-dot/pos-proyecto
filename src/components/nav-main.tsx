"use client"

import Link from "next/link"
import { type LucideIcon } from "lucide-react"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
                            items,
                        }: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Menú Principal
            </SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            tooltip={item.title}
                            isActive={item.isActive}
                            className={
                                item.isActive
                                    ? "bg-gradient-to-r from-[#722F37] to-[#8b3842] text-white hover:from-[#5a252c] hover:to-[#722F37] shadow-md font-semibold"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-[#722F37] transition-all"
                            }
                        >
                            <Link href={item.url} className="flex items-center gap-3 px-3 py-2">
                                {item.icon && <item.icon className="h-5 w-5" />}
                                <span className="font-medium">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}