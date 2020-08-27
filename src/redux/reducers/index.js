import {combineReducers} from 'redux';

import postsReducer from './posts';
import commentsReducer from './comments';
import summaryCovidReducer from './summaryCovid';
import weatherReducer from './weather'
import currencyBTCReducer from './currencyBTC'
import currenciesOfUkraineReducer from './currenciesOfUkraine'
import newsReducer from './news'
import dogReducer from './dog'
import catReducer from './cat'

export default combineReducers({
    postsReducer,
    commentsReducer,
    summaryCovidReducer,
    weatherReducer,
    currencyBTCReducer,
    currenciesOfUkraineReducer,
    newsReducer,
    dogReducer,
    catReducer,
});
