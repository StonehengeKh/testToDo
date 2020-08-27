import {
    GET_DOG_REQUEST,
    GET_DOG_SUCCESS,
    GET_DOG_ERROR,
} from "./actionTypes";

import {getDog as getDogApi} from "../../api";

export const getDog = () => async dispatch => {
    dispatch ({type: GET_DOG_REQUEST})

    try {
        const dog = await getDogApi()
        dispatch({
            type: GET_DOG_SUCCESS,
            payload: dog
        })
    } catch (err) {
        dispatch({
            type: GET_DOG_ERROR,
            payload: err,
            error: true
        })
    }
}