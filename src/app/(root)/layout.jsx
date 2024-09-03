import ResponsiveNavbar from '@/components/my-ui/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <section className='flex flex-col'>
            <ResponsiveNavbar />
            {children}
        </section>
    );
};

export default Layout;