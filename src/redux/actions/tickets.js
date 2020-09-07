import {
    GET_AIRPLANE_TICKETS_REQUEST,
    GET_AIRPLANE_TICKETS_SUCCESS,
    GET_AIRPLANE_TICKETS_ERROR,
} from "./actionTypes";

import {getTickets as getTicketsApi} from "../../api";

export const getTickets = () => async dispatch => {
    dispatch ({type: GET_AIRPLANE_TICKETS_REQUEST})

    try {
        const tickets = await getTicketsApi()
        dispatch({
            type: GET_AIRPLANE_TICKETS_SUCCESS,
            payload: tickets
        })
    } catch (err) {
        dispatch({
            type: GET_AIRPLANE_TICKETS_ERROR,
            payload: err,
            error: true
        })
    }
}