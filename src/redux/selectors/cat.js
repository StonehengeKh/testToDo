import { createSelector } from 'reselect';

const selectCatReducer = (state) => state && state.catReducer;

const selectCat = createSelector(selectCatReducer, (reducer) => {
    return reducer && reducer.cat;
});

export { selectCat };