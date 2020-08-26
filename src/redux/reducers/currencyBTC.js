import {
    GET_CURRENCY_BTC_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    currencyBTC: {}
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_CURRENCY_BTC_SUCCESS: {
            return {
                ...state,
                currencyBTC: payload
            }
        }

        default:
            return state
    }
}

