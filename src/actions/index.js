import axios from 'axios';

const API_KEY = "28b1c2a3d26fe7972b3c51193b0a6b76";
const URL_CORE = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
	let url = `${URL_CORE}&q=${city}`;
	const req = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: req
	}
}