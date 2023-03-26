import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn btn-secondary text-center my-5">{children}</button>
        </div>
    );
};

export default Button;