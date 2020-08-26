import { createSelector } from 'reselect';

const selectCurrencyBTCReducer = (state) => state && state.currencyBTCReducer;

const selectCurrencyBTC = createSelector(selectCurrencyBTCReducer, (reducer) => {
    return reducer && reducer.currencyBTC;
});

export { selectCurrencyBTC };