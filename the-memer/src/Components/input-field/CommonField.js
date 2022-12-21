import React from 'react';

const CommonField = (props) => {

    // component attributes
    const {placeholder,className,valid=null, requireValid=true, type='', name=''} = props;

    return (
        <div className={`my-2`}>
            <input type={type} name={name} placeholder={placeholder?placeholder: 'Text Feild'} className={`${className} text-lg outline-purplePrimary font-raleway ${valid === null ? '' : valid ? 'border border-green-600' : 'border border-red-600'} rounded-lg`} required={requireValid}/>
        </div>
    );
};

export default CommonField;