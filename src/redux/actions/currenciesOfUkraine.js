import {
    GET_CURRENCIES_OF_UKRAINE_REQUEST,
    GET_CURRENCIES_OF_UKRAINE_SUCCESS,
    GET_CURRENCIES_OF_UKRAINE_ERROR
} from './actionTypes'

import {getCurrenciesOfUkraine as getCurrenciesOfUkraineApi} from "../../api";

export const getCurrenciesOfUkraine = () => async dispatch => {
    dispatch ({type: GET_CURRENCIES_OF_UKRAINE_REQUEST})

    try {
        const currenciesOfUkraine = await getCurrenciesOfUkraineApi()
        dispatch({
            type: GET_CURRENCIES_OF_UKRAINE_SUCCESS,
            payload: currenciesOfUkraine
        })
    } catch (err) {
        dispatch({
            type: GET_CURRENCIES_OF_UKRAINE_ERROR,
            payload: err,
            error: true
        })
    }
}