import {
    GET_COMMENTS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    comments: []
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_COMMENTS_SUCCESS: {
            return {
                ...state,
                comments: payload,
            }
        }

        default:
            return state
    }
}

