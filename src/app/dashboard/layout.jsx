import Sidebar from '@/components/my-ui/Sidebar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <section className='flex'>
            <Sidebar />
            <div className='flex-1 *:w-full ml-64 sm:ml-56 lg:ml-64'>
                {children}
            </div>
        </section>
    );
};

export default layout;