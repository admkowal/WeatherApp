import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ChartLine from '../components/chart-line';
import ChartBars from '../components/chart-bars';

const WeatherList = ({ currentWeather, forecastWeather }) => {

	const renderTable = (currentWeather, forecastWeather) => {
		if (!currentWeather.length || !forecastWeather.length || forecastWeather.length !== currentWeather.length) {return null}

		const convertKelvinToCelcius = (tempInKelvin) => {
			return _.round(tempInKelvin - 273.15, 0)
		}


		const renderRow = (currentCity, index) => {

			const cityName = currentCity.name;
			const cityCoords = currentCity.coord
			const currentWeatherImgUrl = `http://openweathermap.org/img/w/${currentCity.weather[0].icon}.png`;
			const currentTemperature = convertKelvinToCelcius(currentCity.main.temp);

			const forecastTemps = forecastWeather[index].list.map(weather => convertKelvinToCelcius(weather.main.temp));
			const forecastPressures = forecastWeather[index].list.map(weather => weather.main.pressure);
			const forecastHumidities = forecastWeather[index].list.map(weather => weather.main.humidity);

			return (
				<tr key={cityName}>
					<td>{cityName}</td>
					<td><img src={currentWeatherImgUrl}/></td>
					<td>{currentTemperature}</td>
					<td><ChartLine weatherData={forecastTemps} color="red"/></td>
					<td><ChartLine weatherData={forecastPressures} color="blue"/></td>
					<td><ChartBars weatherData={forecastHumidities} style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }}/></td>
				</tr>
			);

		}

		return (
			currentWeather.map(renderRow)
		);
	}

	return (
		<table className="weather_table table table-bordered">
        <thead>
            <tr className="table-info">
            	<th></th>
            	<th colSpan="2">Current</th>
            	<th colSpan="3">5-day Forecast</th>
          	</tr>
          	<tr>
            	<th>City</th>
            	<th>Weather</th>
            	<th>Temperature (C)</th>
            	<th>Temperature (C)</th>
            	<th>Pressure (hPa)</th>
            	<th>Humidity (%)</th>
          	</tr>
        </thead>
        <tbody>
        	{renderTable(currentWeather, forecastWeather)}
        </tbody>
      </table>
	);

}

function mapStateToProps({ currentWeather, forecastWeather }) {
	return { currentWeather, forecastWeather }
}

export default connect(mapStateToProps)(WeatherList);