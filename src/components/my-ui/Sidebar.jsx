import Link from 'next/link';
import React from 'react';
import SidebarLinks from './small/SidebarLinks';

const Sidebar = () => {
    return (
        <div className='w-64 sm:w-56 lg:w-64 h-screen overflow-auto border-r fixed'>
            <Link href="/"><h3 className='text-xl font-bold w-full py-4 px-6'>E-Dining</h3></Link>
            < ul className='w-full p-2' >
                <SidebarLinks />
            </ul >
        </div >
    );
};

export default Sidebar;

