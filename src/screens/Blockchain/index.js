import React, {useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'

import {getCurrencyBTC} from "../../redux/actions/currencyBTC";
import './style.css'
import HeaderOfScreens from "../../components/HeaderOfScreens";
import {debounce} from "../HomePage";
import {selectCurrencyBTC} from "../../redux/selectors/currencyBTC";

function Blockchain ({getCurrencyBTC, currencyBTC}) {

    const [sumExchangedBTC, setSumExchangedBTC] = useState()

    useEffect(() => {getCurrencyBTC()}, [])                                                                     // eslint-disable-line react-hooks/exhaustive-deps
    console.log('currencyBTC', currencyBTC)

    const exchangeUSDToBTC = (event) => {
        setSumExchangedBTC(event.target.value)
    }

    const debounced = useRef(debounce(exchangeUSDToBTC, 1000)).current;
    const exchangeUsdToBTC = (event) => {
        event.persist();
        debounced(event)
    }
    const resultUsdToBTC = (sumExchangedBTC / (currencyBTC && currencyBTC.USD && currencyBTC.USD.last))

    return(

        <div className='containerBTCExchange'>
            <HeaderOfScreens title={'List of currency for 1 BTC now'}/>
            <div>
                <div>USD: {currencyBTC && currencyBTC.USD && currencyBTC.USD.last}</div>
                <div>EUR: {currencyBTC && currencyBTC.EUR && currencyBTC.EUR.last}</div>
                <div>RUB: {currencyBTC && currencyBTC.RUB && currencyBTC.RUB.last}</div>
            </div>
            <div>
                $ <input className='inputForExchange' type='number' name='forExchangeUSD' placeholder='USD exchange' onChange={exchangeUsdToBTC}/>
            </div>
            {sumExchangedBTC > 0 && <span className='sumExchangedBTC'>You get {resultUsdToBTC} BTC</span>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    currencyBTC: selectCurrencyBTC(state)
})

const mapDispatchToProps = {
    getCurrencyBTC
}

export default connect(mapStateToProps, mapDispatchToProps) (Blockchain)