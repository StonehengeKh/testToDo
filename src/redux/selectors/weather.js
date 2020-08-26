import { createSelector } from 'reselect';

const selectWeatherReducer = (state) => state && state.weatherReducer;

const selectWeather = createSelector(selectWeatherReducer, (reducer) => {
    return reducer && reducer.weather;
});

export { selectWeather };