import React from 'react'
import {connect} from "react-redux";

import './style.css'
import {getWeather} from '../../redux/actions/weather'
import {DATA_CITIES} from './DATA_CITIES'
import HeaderOfScreens from "../../components/HeaderOfScreens";
import {selectWeather} from "../../redux/selectors/weather";

function Weather ({weather, getWeather}) {
    // console.log('weather', weather)
    return (
        <div className='weatherContainer'>
            <HeaderOfScreens title={'Weather in Ukraine'}/>
            <div className='containerButtonCities'>
                {DATA_CITIES.map(({id, name}) => (
                        <div
                            key={id}
                            onClick={() => getWeather(name)}
                            className='cityButton'
                        >{name.toUpperCase()}</div>
                    )
                )}
            </div>
            {weather && weather.message && <span className='errorMessage'>{weather.message}</span>}
            {weather && weather.cod === 200 && <div className='containerWeatherCity'>
                <span className='titleCityWeather'>{weather.name}</span>
                <span>Temperature: {Math.floor(weather.main.temp - 273.15)} ℃</span>
                <span>Weather: {weather.weather[0].description}</span>
                <span>Wind: {weather.wind.speed} m/s</span>
            </div>}
        </div>
    )
}
const mapStateToProps = (state) => ({
    weather: selectWeather(state),
})

const mapDispatchToProps = {
    getWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather)