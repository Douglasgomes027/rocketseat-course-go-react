import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WeatherActions from '../../store/actions/weather';

const Weather = props =>(

  props.weather.data.map(weather =>(
    <div className="weather__info">
        {weather.city && weather.country &&
        <p className="weather__key">Location:
            <span className="weather__value"> {weather.city},{weather.country} </span>
        </p>}
        {weather.temperature &&
            <p className="weather__key">Temperature:
                <span className="weather__value"> {weather.temperature}</span>
            </p>}
        {weather.humidity &&
        <p className="weather__key">Humidity:
            <span className="weather__value"> {weather.humidity}</span>
        </p>}
        {weather.description &&
        <p className="weather__key">Description:
            <span className="weather__value"> {weather.description}</span>
        </p>}
    </div>
  ))
)

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => bindActionCreators(WeatherActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
