import {combineReducers} from 'redux';

import postsReducer from './posts';
import commentsReducer from './comments';
import summaryCovidReducer from './summaryCovid';
import weatherReducer from './weather'
import currencyBTCReducer from './currencyBTC'
import currenciesOfUkraineReducer from './currenciesOfUkraine'
import newsReducer from './news'

export default combineReducers({
    postsReducer,
    commentsReducer,
    summaryCovidReducer,
    weatherReducer,
    currencyBTCReducer,
    currenciesOfUkraineReducer,
    newsReducer,
});
