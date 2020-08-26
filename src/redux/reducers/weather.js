import {
    GET_WEATHER_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    weather: {}
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_WEATHER_SUCCESS: {
            return {
                ...state,
                weather: payload
            }
        }

        default:
            return state
    }
}

