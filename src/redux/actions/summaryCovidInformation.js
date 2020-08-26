import {
    GET_SUMMARY_COVID_INFORMATION_REQUEST,
    GET_SUMMARY_COVID_INFORMATION_SUCCESS,
    GET_SUMMARY_COVID_INFORMATION_ERROR,
} from './actionTypes'

import {getSummaryCovid as getSummaryCovidApi} from '../../api'

export const getSummaryCovid = () => async dispatch => {
    dispatch ({type: GET_SUMMARY_COVID_INFORMATION_REQUEST})

    try {
        const summaryCovid = await getSummaryCovidApi()
        dispatch({
            type: GET_SUMMARY_COVID_INFORMATION_SUCCESS,
            payload: summaryCovid
        })
    } catch (err) {
        dispatch({
            type: GET_SUMMARY_COVID_INFORMATION_ERROR,
            payload: err,
            error: true
        })
    }
}