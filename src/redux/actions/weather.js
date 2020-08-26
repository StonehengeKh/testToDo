import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR,
} from "./actionTypes";

import {getWeather as getWeatherApi} from "../../api";

export const getWeather = (city) => async dispatch => {
    dispatch ({type: GET_WEATHER_REQUEST})

    try {
        const weather = await getWeatherApi(city)
        dispatch({
            type: GET_WEATHER_SUCCESS,
            payload: weather
        })
    } catch (err) {
        dispatch({
            type: GET_WEATHER_ERROR,
            payload: err,
            error: true
        })
    }
}