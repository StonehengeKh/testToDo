import { createSelector } from 'reselect';

const selectNewsReducer = (state) => state && state.newsReducer;

const selectNews = createSelector(selectNewsReducer, (reducer) => {
    return reducer && reducer.news;
});

export { selectNews };