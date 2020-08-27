import {
    GET_CAT_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    cat: [],
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_CAT_SUCCESS: {
            return {
                ...state,
                cat: payload
            }
        }

        default:
            return state
    }
}

