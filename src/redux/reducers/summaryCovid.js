import {
    GET_SUMMARY_COVID_INFORMATION_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    summaryCovidGlobal: {},
    summaryCovidCountries: [],
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_SUMMARY_COVID_INFORMATION_SUCCESS: {
            return {
                ...state,
                summaryCovidGlobal: payload.Global,
                summaryCovidCountries: payload.Countries,
            }
        }

        default:
            return state
    }
}

