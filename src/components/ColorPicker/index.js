import React, {useEffect, useState} from 'react'

import './style.css'
import ColorBox from "../ColorBox";
import DropMenu from "./DropMenu";

function ColorPicker ({value, colors, onChange}) {

    const [color, setColor] = useState(value)
    const updateColor = (hex) => {
        setColor(hex)
        closeDropBox()
    }

    const notUpdateColorFromRGB = () => {
        setRed(redStateValue);
        setGreen(greenStateValue);
        setBlue(blueStateValue);
        closeDropBox()
    }

    const [dropBox, setDropBox] = useState(null)
    const updateDropBoxToColorList = () => {
        setDropBox('colorList')
    }
    const updateDropBoxToColorRGB = () => {
        setDropBox('colorRGB')
    }
    const closeDropBox = () => {
        setDropBox(null)
    }

    let rgbColor = color.slice()

    if(rgbColor.substring(0,1) === '#') {
        rgbColor = rgbColor.substring(1);
    }

    const redStateValue = parseInt(rgbColor.substring(0,2),16)
    const greenStateValue = parseInt(rgbColor.substring(2,4),16)
    const blueStateValue = parseInt(rgbColor.substring(4),16)

    const [red, setRed] = useState(redStateValue)
    const updateRed = (event) => {
        setRed(+event.target.value)
    }
    const [green, setGreen] = useState(greenStateValue)
    const updateGreen = (event) => {
        setGreen(+event.target.value)
    }
    const [blue, setBlue] = useState(blueStateValue)
    const updateBlue = (event) => {
        setBlue(+event.target.value)
    }

    useEffect(() => {
        setRed(redStateValue);
        setGreen(greenStateValue);
        setBlue(blueStateValue)
        onChange(color)
    },  [color])

    const rgb = `rgb(${red}, ${green}, ${blue})`
    const rgbToHex = (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    const updateColorFromRGB = () => {
        let nex = rgbToHex(red, green, blue)
        setColor(nex)
        closeDropBox()
    }

    return (
        <section className='colorPickerContainer'>
            <div className='colorPicker'>
                <div className='colorValue'>{color}</div>
                <div className='colorBoxesStyle colorBox' onClick={updateDropBoxToColorRGB}>
                    <ColorBox color={rgb}/>
                </div>
                <div className='colorBoxesStyle colorSelectButton' onClick={updateDropBoxToColorList}>▼</div>
            </div>
            {dropBox !== null && <DropMenu
                closeDropBox={closeDropBox}
                colors={colors}
                updateColor={updateColor}
                color={color}
                dropBox={dropBox}
                red={red}
                green={green}
                blue={blue}
                updateRed={updateRed}
                updateGreen={updateGreen}
                updateBlue={updateBlue}
                updateColorFromRGB={updateColorFromRGB}
                notUpdateColorFromRGB={notUpdateColorFromRGB}
            />}
        </section>
    )
}

export default ColorPicker