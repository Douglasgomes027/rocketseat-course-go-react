import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WeatherActions from '../../store/actions/weather';

class Form extends Component{

  getWeather = (event) => {
    event.preventDefault();
    const country = event.target.elements.country.value;
    const city = event.target.elements.city.value;

    this.props.getWeatherRequest(country, city);

  };

  render(){
    return(
      <form onSubmit={this.getWeather}>
        <input type="text" name="country" placeholder="country..."/>
        <input type="text" name="city" placeholder="city..."/>
        <button>Get Weather</button>
    </form>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
  returnMsg: state.weather.returnMsg,
});

const mapDispatchToProps = dispatch => bindActionCreators(WeatherActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
