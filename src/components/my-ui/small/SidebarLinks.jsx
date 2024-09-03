'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SidebarLinks = () => {
    const pathname = usePathname()

    const menuItems = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "History", href: "#" },
        { name: "Transfer Package", href: "#" },
        { name: "Parches Package", href: "#" },
    ]

    return (
        <>
            {
                menuItems.map((item, index) => <Link key={index} href={item.href}>
                    <li
                        className={`w-full px-4 py-2 hover:bg-secondary ${pathname === item.href && 'bg-secondary'} rounded-md mb-2`}
                    >{item.name}</li>
                </Link>)
            }
        </>
    );
};

export default SidebarLinks;