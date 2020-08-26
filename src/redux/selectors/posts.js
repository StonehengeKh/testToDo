import { createSelector } from 'reselect';

const selectPostsReducer = (state) => state && state.postsReducer;

const selectPosts = createSelector(selectPostsReducer, (reducer) => {
    return reducer && reducer.posts;
});

const selectUniqueUserID = createSelector(selectPostsReducer, (reducer) => {
    return reducer && reducer.uniqueUserID;
});

const selectSelectedUserId = createSelector(selectPostsReducer, (reducer) => {
    return reducer && reducer.selectedUserId;
});

const selectSearch = createSelector(selectPostsReducer, (reducer) => {
    return reducer && reducer.search;
});

export { selectPosts, selectUniqueUserID, selectSelectedUserId, selectSearch};
