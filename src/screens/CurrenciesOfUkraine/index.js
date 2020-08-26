import React, {useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'

import './style.css'
import {getCurrenciesOfUkraine} from '../../redux/actions/currenciesOfUkraine'
import {debounce} from "../HomePage";
import HeaderOfScreens from "../../components/HeaderOfScreens";
import {selectCurrenciesOfUkraine} from "../../redux/selectors/currenciesOfUkraine";

function CurrenciesOfUkraine ({currenciesOfUkraine, getCurrenciesOfUkraine}) {

    const usd = currenciesOfUkraine.find((el) => el.cc === "USD")
    const eur = currenciesOfUkraine.find((el) => el.cc === "EUR")
    const rub = currenciesOfUkraine.find((el) => el.cc === "RUB")

    const [usdExchange, setUsdExchange] = useState()
    const usdExchangeToUan = (event) => {
        setUsdExchange(event.target.value)
    }
    const debouncedUsd = useRef(debounce(usdExchangeToUan, 1000)).current;
    const exchangeUanToUsd = (event) => {
        event.persist();
        debouncedUsd(event)
    }

    const resultUanForUsd = (usdExchange * (usd && usd.rate)).toFixed(2)

    const [eurExchange, setEurExchange] = useState()
    const eurExchangeToUan = (event) => {
        setEurExchange(event.target.value)
    }
    const debouncedEur = useRef(debounce(eurExchangeToUan, 1000)).current;
    const exchangeUanToEur = (event) => {
        event.persist();
        debouncedEur(event)
    }
    const resultUanForEur = (eurExchange * (eur && eur.rate)).toFixed(2)


    const [rubExchange, setRubExchange] = useState()
    const rubExchangeToUan = (event) => {
        setRubExchange(event.target.value)
    }
    const debouncedRub = useRef(debounce(rubExchangeToUan, 1000)).current;
    const exchangeUanToRub = (event) => {
        event.persist();
        debouncedRub(event)
    }
    const resultUanForRub = (rubExchange * (rub && rub.rate)).toFixed(2)


    useEffect(() => {getCurrenciesOfUkraine()}, [])                                                     // eslint-disable-line react-hooks/exhaustive-deps
    // console.log(currenciesOfUkraine)

    currenciesOfUkraine.sort((a, b) => b.rate - a.rate )

    return (
        <div>
            <HeaderOfScreens title={'Currencies Of Ukraine'}/>
            <div className='containerBasisCurrencies'>
                <div className='currencyExchangeContainer'>
                    <span>USD: {usd && usd.rate} грн</span>
                    <input className='exchangeField' type='number' placeholder='USD' onChange={exchangeUanToUsd}/>
                    {usdExchange > 0 && <span>You need {resultUanForUsd} uan</span>}
                </div>
                <div className='currencyExchangeContainer'>
                    <span>EUR: {eur && eur.rate} грн</span>
                    <input className='exchangeField' type='number' placeholder='EUR' onChange={exchangeUanToEur}/>
                    {eurExchange > 0 && <span>You need {resultUanForEur} uan</span>}
                </div>
                <div className='currencyExchangeContainer'>
                    <span>RUB: {rub && rub.rate} грн</span>
                    <input className='exchangeField' type='number' placeholder='RUB' onChange={exchangeUanToRub}/>
                    {rubExchange > 0 && <span>You need {resultUanForRub} uan</span>}
                </div>
            </div>
            <div>
                {currenciesOfUkraine.map(({rate, txt, cc}) => (
                    <div key={cc}>
                        <span className='currencyName'>{txt}: </span>
                        <span>{rate} грн</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currenciesOfUkraine: selectCurrenciesOfUkraine(state)
})

const mapDispatchToProps = {
    getCurrenciesOfUkraine
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesOfUkraine)