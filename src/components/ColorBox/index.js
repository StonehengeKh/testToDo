import React from "react";
import './style.css'

function ColorBox ({color}) {
    return (
        <div className='box' style={{backgroundColor: color}}></div>
    )
}

export default ColorBox