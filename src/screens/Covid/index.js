import React, {useEffect} from "react";
import {connect} from "react-redux";

import './style.css'
import {getSummaryCovid} from "../../redux/actions/summaryCovidInformation";
import HeaderOfScreens from "../../components/HeaderOfScreens";

function Covid ({getSummaryCovid, summaryCovidGlobal, summaryCovidCountries}) {

    useEffect(() => {getSummaryCovid()}, [])                                                                            // eslint-disable-line react-hooks/exhaustive-deps

    summaryCovidCountries.sort((a,b) => b.TotalConfirmed - a.TotalConfirmed)

    return (
        <div className='covidContainer'>
            <HeaderOfScreens title={'Covid-19'}/>
            <div className='globalInformationCovid'>
                <h5>Global Information</h5>
                <span className='titleGlobalInformation'>New Confirmed: {summaryCovidGlobal && summaryCovidGlobal.NewConfirmed}</span>
                <span className='titleGlobalInformation'>New Deaths: {summaryCovidGlobal && summaryCovidGlobal.NewDeaths}</span>
                <span className='titleGlobalInformation'>New Recovered: {summaryCovidGlobal && summaryCovidGlobal.NewRecovered}</span>
                <span className='titleGlobalInformation'>Total Confirmed: {summaryCovidGlobal && summaryCovidGlobal.TotalConfirmed}</span>
                <span className='titleGlobalInformation'>Total Deaths: {summaryCovidGlobal && summaryCovidGlobal.TotalDeaths}</span>
                <span className='titleGlobalInformation'>Total Recovered: {summaryCovidGlobal && summaryCovidGlobal.TotalRecovered}</span>
            </div>
            <h5>Countries Information</h5>
            <div className='countriesCovidContainer'>
                {summaryCovidCountries && summaryCovidCountries.map(({Country, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered}, index) => (
                    <div key={Country} className='countryCovidContainer'>
                        <span className='countryName'>{index + 1}: {Country}</span>
                        <div className='wrapperSmallContainerInCountries'>
                            <div className='smallContainerInCountryInformation'>
                                <span>New Confirmed: {NewConfirmed}</span>
                                <span>New Deaths: {NewDeaths}</span>
                                <span>New Recovered: {NewRecovered}</span>
                            </div>
                            <div className='smallContainerInCountryInformation'>
                                <span>Total Confirmed: {TotalConfirmed}</span>
                                <span>Total Deaths: {TotalDeaths}</span>
                                <span>Total Recovered: {TotalRecovered}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    summaryCovidGlobal: state.summaryCovidReducer.summaryCovidGlobal,
    summaryCovidCountries: state.summaryCovidReducer.summaryCovidCountries,
})

const mapDispatchToProps = {
    getSummaryCovid,
};

export default connect(mapStateToProps, mapDispatchToProps)(Covid)