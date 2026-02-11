"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import {dashboardNavigation} from "@/config/nagivation";

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-6">ZambiPan POS</h2>

            <nav className="space-y-1">
                {dashboardNavigation.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "block rounded px-3 py-2 transition-colors",
                                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                            )}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
