import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    CREATE_POST_REQUEST,
    CREATE_POSTS_SUCCESS,
    CREATE_POSTS_ERROR,
    DELETE_POSTS_REQUEST,
    DELETE_POSTS_SUCCESS,
    DELETE_POSTS_ERROR,
    EDIT_POSTS_REQUEST,
    EDIT_POSTS_SUCCESS,
    EDIT_POSTS_ERROR,
    SEARCH_POST,
    SORT_FROM_ID,
    UPDATE_FILTER_UNIQUE_ID
} from './actionTypes'

import {
    getPosts as getPostsApi,
    createPost as createPostApi,
    editPost as editPostApi,
    deletePost as deletePostApi,
} from '../../api'

export const getPosts = (id) => async dispatch => {
    dispatch ({type: GET_POSTS_REQUEST})

    try {
        const posts = await getPostsApi(id)
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: posts
        })
    } catch (err) {
        dispatch({
            type: GET_POSTS_ERROR,
            payload: err,
            error: true
        })
    }
}

export const createPost = (payload) => async dispatch => {
    dispatch ({type: CREATE_POST_REQUEST})

    try {
        const posts = await createPostApi(payload)
        dispatch({
            type: CREATE_POSTS_SUCCESS,
            payload: posts
        })
    } catch (err) {
        dispatch({
            type: CREATE_POSTS_ERROR,
            payload: err,
            error: true
        })
    }
}

export const deletePost = (payload) => async dispatch => {
    dispatch ({type: DELETE_POSTS_REQUEST})

    try {
        await deletePostApi(payload)
        // console.log('data====>', payload, posts)
        dispatch({
            type: DELETE_POSTS_SUCCESS,
            payload: payload
        })
    } catch (err) {
        dispatch({
            type: DELETE_POSTS_ERROR,
            payload: err,
            error: true
        })
    }
}

export const editPost = (payload) => async dispatch => {
    dispatch ({type: EDIT_POSTS_REQUEST})

    try {
        const posts = await editPostApi(payload)
        dispatch({
            type: EDIT_POSTS_SUCCESS,
            payload: posts
        })
    } catch (err) {
        dispatch({
            type: EDIT_POSTS_ERROR,
            payload: err,
            error: true
        })
    }
}

export const searchPost = (payload) => dispatch => {
    dispatch({
        type: SEARCH_POST,
        payload: payload
    })
}

export const sortForId = (payload) => dispatch => {
    dispatch({
        type: SORT_FROM_ID,
        payload: payload
    })
}

export const updateUniqueId = (payload) => dispatch => {
    dispatch({
        type: UPDATE_FILTER_UNIQUE_ID,
        payload
    })
}