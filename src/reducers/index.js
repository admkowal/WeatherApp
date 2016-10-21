import { combineReducers } from 'redux';
import currentWeather from './current_weather_reducer.js'
import forecastWeather from './forecast_weather_reducer.js'

const rootReducer = combineReducers({
  	currentWeather,
	forecastWeather
});

export default rootReducer;
