import { createSelector } from 'reselect';

const selectSummaryCovidReducer = (state) => state && state.summaryCovidReducer;

const selectSummaryCovidGlobal = createSelector(selectSummaryCovidReducer, (reducer) => {
    return reducer && reducer.summaryCovidGlobal;
});

const selectSummaryCovidCountries = createSelector(selectSummaryCovidReducer, (reducer) => {
    return reducer && reducer.summaryCovidCountries;
});

export { selectSummaryCovidGlobal, selectSummaryCovidCountries};