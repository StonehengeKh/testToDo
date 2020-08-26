import {
    GET_NEWS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    news: {}
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_NEWS_SUCCESS: {
            return {
                ...state,
                news: payload
            }
        }

        default:
            return state
    }
}

