import React from "react";
import './style.css'

function Button ({title, color, onClick, titleColor}) {
    return (
        <button
            className='btn'
            style={{backgroundColor: color, color: titleColor}}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button