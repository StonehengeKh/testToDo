import React from "react";
import {Link} from "react-router-dom";

import {DATA_HEADER_MENU} from './DATA_HEADER_MENU'
import './style.css'

function HeaderMenu () {
    return (
        <>
            {DATA_HEADER_MENU.map(({link, title}) => (
                <Link to={link} className='linkStyle' key={title}>{title}</Link>
            ))}
        </>
    )
}

export default HeaderMenu