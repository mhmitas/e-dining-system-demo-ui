import { LoaderCircle } from 'lucide-react';
import React from 'react';

const loading = () => {
    return (
        <div className='absolute inset-0 flex justify-center items-center'>
            <span><LoaderCircle className='animate-spin size-12 text-blue-600' /></span>
        </div>
    );
};

export default loading;