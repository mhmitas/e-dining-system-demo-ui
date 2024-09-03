"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"

export default function ResponsiveNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Services", href: "#" },
        { name: "Contact", href: "#" },
    ]

    return (
        <nav className="dark:border-b h-16">
            <div className="my-container mx-auto flex items-center w-full h-full">
                <div className="flex items-center justify-between h-full w-full">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold">
                            Logo
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">Sign In</button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    {isMobileMenuOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[200px]">
                                {navItems.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <a
                                            href={item.href}
                                            className="w-full px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                                        >
                                            {item.name}
                                        </a>
                                        <button className="w-full px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground">Sign In</button>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}