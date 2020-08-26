import React from 'react';

import './style.css';
import Child from "./Child";
import HeaderOfScreens from "../../components/HeaderOfScreens";

function Hooks() {

    return (
        <div className='containerHooks'>
            <HeaderOfScreens title={'Hooks'}/>
            <Child
                dataBool={true}
                dataStr={'String'}
                dataNumber={10}
                dataFunc={() => console.log('Message from func')}
            />
        </div>
    );
}

export default Hooks;
