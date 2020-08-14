import {
    GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR, GET_COMMENTS_REQUEST
} from './actionTypes'

import {
    getComments as getCommentsApi,
} from '../../api'

export const getComments = (id) => async dispatch => {
    dispatch ({type: GET_COMMENTS_REQUEST})

    try {
        const comments = await getCommentsApi(id)
        dispatch({
            type: GET_COMMENTS_SUCCESS,
            payload: comments
        })
    } catch (err) {
        dispatch({
            type: GET_COMMENTS_ERROR,
            payload: err,
            error: true
        })
    }
}