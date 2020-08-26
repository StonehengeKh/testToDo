import { createSelector } from 'reselect';

const selectCommentsReducer = (state) => state && state.commentsReducer;

const selectComments = createSelector(selectCommentsReducer, (reducer) => {
    return reducer && reducer.comments;
});

export { selectComments };
