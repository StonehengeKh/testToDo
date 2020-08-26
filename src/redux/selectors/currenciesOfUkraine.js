import { createSelector } from 'reselect';

const selectCurrenciesOfUkraineReducer = (state) => state && state.currenciesOfUkraineReducer;

const selectCurrenciesOfUkraine = createSelector(selectCurrenciesOfUkraineReducer, (reducer) => {
    return reducer && reducer.currenciesOfUkraine;
});

export { selectCurrenciesOfUkraine };