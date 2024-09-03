import ResponsiveNavbar from '@/components/my-ui/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <ResponsiveNavbar />
            {children}
        </div>
    );
};

export default Layout;