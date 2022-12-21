import React from 'react';

const PrimaryButton = (props) => {
    const {className='',children,padding='px-[4%] py-[1%]'} = props;
    return (
        <button className={`${className} ${padding} rounded-full text-center`}>{children}</button>
    );
};

export default PrimaryButton;