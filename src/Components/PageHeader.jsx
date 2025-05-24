import React from 'react';

const PageHeader = ({subHeading,heading,description}) => {
    
    return (
        <div>
            <p className='text-center text-lg text-blue-500 mt-5'>{subHeading}</p>
            <p className='text-center text-2xl font-bold'>{heading}</p>
            <p className='text-center text-xl'>{description}</p>
        </div>
    );
};

export default PageHeader;