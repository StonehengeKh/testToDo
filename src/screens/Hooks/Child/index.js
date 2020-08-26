import React, {useState, useEffect, useRef} from 'react';
import './style.css'

function Child({dataBool, dataStr, dataNumber, dataFunc}) {

    const [message, setMessage] = useState('Hello')

    const [shouldRenderOnMount, setShouldRenderOnMount] = useState(false);

    const callNotOnMount = () => {
        console.log("I'M NOT CALLING ON COMPONENT MOUNT");
    }

    const ref = useRef(false)

    useEffect(() => {
        if (!ref.current) {
            ref.current = true
        } else {
            callNotOnMount()
        }

    },[shouldRenderOnMount])

    const messageButton = () => setMessage('Message from Button')

    return (
        <div className='dataList'>
            <button onClick={() => setShouldRenderOnMount(shouldRenderOnMount => !shouldRenderOnMount)}>Update</button>
            <span>Message: {message}</span>
            <span>DataBool: {dataBool ? 'Ok' : 'Not' }</span>
            <span>DataStr: {dataStr}</span>
            <span>DataNumber: {dataNumber}</span>

            <button onClick={dataFunc}>Func start</button>
            <button onClick={messageButton}>Message from button</button>
        </div>
    );
}

export default Child;



