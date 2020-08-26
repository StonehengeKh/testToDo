import {
    GET_CURRENCY_BTC_REQUEST,
    GET_CURRENCY_BTC_SUCCESS,
    GET_CURRENCY_BTC_ERROR,
} from './actionTypes'

import {getCurrencyBTC as getCurrencyBTCApi} from "../../api";

export const getCurrencyBTC = () => async dispatch => {
    dispatch ({type: GET_CURRENCY_BTC_REQUEST})

    try {
        const currencyBTC = await getCurrencyBTCApi()
        dispatch({
            type: GET_CURRENCY_BTC_SUCCESS,
            payload: currencyBTC
        })
    } catch (err) {
        dispatch({
            type: GET_CURRENCY_BTC_ERROR,
            payload: err,
            error: true
        })
    }
}