import {
    GET_DOG_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    dog: {},
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_DOG_SUCCESS: {
            return {
                ...state,
                dog: payload
            }
        }

        default:
            return state
    }
}

