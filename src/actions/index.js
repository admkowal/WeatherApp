import axios from 'axios';
 
const API_KEY = "28b1c2a3d26fe7972b3c51193b0a6b76";
const URL_CORE = `http://api.openweathermap.org/data/2.5`

export const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';
export const FETCH_FORECAST_WEATHER = 'FETCH_FORECAST_WEATHER';


export const fetchCurrentWeather = (city) => {
	const req = axios.get(`${URL_CORE}/weather?appid=${API_KEY}&q=${city}`);

	return {
		type: FETCH_CURRENT_WEATHER,
		payload: req
	}
}

export const fetchForecastWeather = (city) => {
	const req = axios.get(`${URL_CORE}/forecast?appid=${API_KEY}&q=${city}`);
	
	return {
		type: FETCH_FORECAST_WEATHER,
		payload: req
	}
}