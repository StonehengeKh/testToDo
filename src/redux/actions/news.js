import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    GET_NEWS_ERROR
} from "./actionTypes";

import {getNews as getNewsApi} from "../../api";

export const getNews = () => async dispatch => {
    dispatch ({type: GET_NEWS_REQUEST})

    try {
        const news = await getNewsApi()
        dispatch({
            type: GET_NEWS_SUCCESS,
            payload: news
        })
    } catch (err) {
        dispatch({
            type: GET_NEWS_ERROR,
            payload: err,
            error: true
        })
    }
}