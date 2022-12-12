import React from "react";
import './error.scss';

const Error = () => {
    return (
        <>
             <div className='container error-page'>
            <div className="text-area">
                <h1 className="error">
                    ERROR:
                </h1>
                <h1 className="message">
                    PAGE NOT FOUND! 😕
                </h1>
            </div>
            
        </div>
        </>
       
    )
}

export default Error;