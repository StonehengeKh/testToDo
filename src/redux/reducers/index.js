import {combineReducers} from 'redux';

import postsReducer from './posts';
import commentsReducer from './comments';

export default combineReducers({
    postsReducer,
    commentsReducer,
});
