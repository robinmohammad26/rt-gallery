import React from 'react';

const GlobalLoading = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div>
                <span className="loading loading-spinner text-error"></span>
            </div>
        </div>
    );
};

export default GlobalLoading;