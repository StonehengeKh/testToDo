import React from "react";
import onClickOutside from 'react-onclickoutside';

import './style.css'
import ColorBox from "../../ColorBox";
import Button from "../../Button";


function DropMenu ({
                       updateColor,
                       colors,
                       color,
                       dropBox,
                       red,
                       blue,
                       green,
                       updateRed,
                       updateGreen,
                       updateBlue,
                       updateColorFromRGB,
                       notUpdateColorFromRGB
}) {

    const closeToDropBox = () => {
        notUpdateColorFromRGB()
    }
    DropMenu.handleClickOutside = () => closeToDropBox();

    return (
        <div className='dropContainer'>
            <div className={dropBox === 'colorList' ? 'triangle colorList' : 'triangle colorRGB'}></div>
            {dropBox === 'colorList' && <div className='listColors'>
                {colors.map(({name, hex}) => (
                    <div
                        className={hex === color ? 'colorItem itemSelected' : 'colorItem'}
                        key={hex}
                        onClick={() => updateColor(hex)}
                    >
                        <span>{name.toUpperCase()}</span>
                        <ColorBox color={hex}/>
                    </div>
                ))}
            </div>}
            {dropBox === 'colorRGB' && <div className='rgbColors'>
                <div className='rangeContainer '>
                    <span className='nameRange'>R</span>
                    <input type='range' min='0' max='255' onChange={updateRed} value={red} className='range redGradient'/>
                </div>
                <div className='rangeContainer'>
                    <span className='nameRange'>G</span>
                    <input type='range' min='0' max='255' onChange={updateGreen} value={green} className='range greenGradient'/>
                </div>
                <div className='rangeContainer'>
                    <span className='nameRange'>B</span>
                    <input type='range' min='0' max='255' onChange={updateBlue} value={blue} className='range blueGradient'/>
                </div>
                <div className='rangeButtonContainer'>
                    <Button color={'lightgrey'} title={'CANCEL'} titleColor={'grey'} onClick={closeToDropBox}/>
                    <Button color={'green'} title={'OK'} titleColor={'white'} onClick={updateColorFromRGB}/>
                </div>
            </div>}
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => DropMenu.handleClickOutside,
};

export default onClickOutside(DropMenu, clickOutsideConfig);