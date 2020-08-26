import React from "react";
import {Link} from "react-router-dom";

import './style.css'

function HeaderOfScreens ({title}) {
    return (
        <div className='headerContainer'>
            <h4 className='titleScreen'>{title}</h4>
            <Link to={'/'} className='backButton'>Back</Link>
        </div>
    )
}

export default HeaderOfScreens