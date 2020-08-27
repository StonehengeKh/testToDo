import {
    GET_CAT_REQUEST,
    GET_CAT_SUCCESS,
    GET_CAT_ERROR,
} from "./actionTypes";

import {getCat as getCatApi} from "../../api";

export const getCat = () => async dispatch => {
    dispatch ({type: GET_CAT_REQUEST})

    try {
        const cat = await getCatApi()
        dispatch({
            type: GET_CAT_SUCCESS,
            payload: cat
        })
    } catch (err) {
        dispatch({
            type: GET_CAT_ERROR,
            payload: err,
            error: true
        })
    }
}