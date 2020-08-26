import {
    GET_CURRENCIES_OF_UKRAINE_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    currenciesOfUkraine: []
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_CURRENCIES_OF_UKRAINE_SUCCESS: {
            return {
                ...state,
                currenciesOfUkraine: payload
            }
        }

        default:
            return state
    }
}

