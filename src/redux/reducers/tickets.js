import {
    GET_AIRPLANE_TICKETS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    tickets: []

}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_AIRPLANE_TICKETS_SUCCESS: {
            return {
                ...state,
                tickets: payload.tickets
            }
        }

        default:
            return state
    }
}

