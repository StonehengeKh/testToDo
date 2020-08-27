import { createSelector } from 'reselect';

const selectDogReducer = (state) => state && state.dogReducer;

const selectDog = createSelector(selectDogReducer, (reducer) => {
    return reducer && reducer.dog;
});

export { selectDog };