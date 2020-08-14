import {
    GET_POSTS_SUCCESS,
    EDIT_POSTS_SUCCESS,
    CREATE_POSTS_SUCCESS,
    DELETE_POSTS_SUCCESS,
    UPDATE_FILTER_UNIQUE_ID,
    SORT_FROM_ID,
    SEARCH_POST,
} from '../actions/actionTypes'

const initialState = {
    posts: [],
    uniqueUserID: [],
    selectedUserId: [],
    search: '',
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_POSTS_SUCCESS: {
            const uniqueUserID = []
            payload.forEach(item => {
                if (uniqueUserID.indexOf(item.userId) === -1) {
                    uniqueUserID.push(item.userId);
                }
            })
            return {
                ...state,
                posts: payload,
                uniqueUserID: uniqueUserID,
            }
        }

        case CREATE_POSTS_SUCCESS: {
            return {
                ...state,
                posts: [payload, ...state.posts]
            }
        }

        case EDIT_POSTS_SUCCESS: {
                const newState = state.posts.map(el => {
                    if (el.id === payload.id) {
                        return payload
                    }
                    return el
                })
                return {
                    ...state,
                    posts: newState
                }
        }

        case DELETE_POSTS_SUCCESS: {
            const newState = state.posts.filter(el => el.id !== payload)
            return {
                ...state,
                posts: newState
            }
        }

        case UPDATE_FILTER_UNIQUE_ID: {
            if (state.selectedUserId.includes(payload)) {
                const newState = state.selectedUserId.filter(item => item !== payload)
                return {
                    ...state,
                    selectedUserId: newState
                }
            }
            return {
                ...state,
                selectedUserId: [...state.selectedUserId, payload]
            }
        }

        case SORT_FROM_ID: {
            if (payload === 'fromBig') {
                const arrFromBig = state.posts.slice();
                arrFromBig.sort((a, b) => b.id - a.id);
                return {
                    ...state,
                    posts: arrFromBig
                }
            }
            if (payload === 'fromSmall') {
                const arrFromSmall = state.posts.slice().sort((a, b) => a.id - b.id)
                return {
                    ...state,
                    posts: arrFromSmall
                }
            }
            if (payload === 'random') {
                const arrRandom = state.posts.slice()
                arrRandom.sort(() => 0.5 - Math.random())
                return {
                    ...state,
                    posts: arrRandom
                }
            }
            break
        }

        case SEARCH_POST: {
            return {
                ...state,
                search: payload,
            };
        }

        default:
            return state
    }
}

