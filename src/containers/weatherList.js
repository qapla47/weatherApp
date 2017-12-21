import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./../components/chart";
import GoogleMap from './../components/googleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp*1.8-459.67);
    const pressure = cityData.list.map(weather => weather.main.pressure*0.02952998751);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const windSpeed = cityData.list.map(weather => weather.wind.speed*1.94384);
    const windDirection = cityData.list.map(weather => weather.wind.deg);
    const cloudCover = cityData.list.map(weather => weather.clouds.all);
    const {lon, lat} = cityData.city.coord; // creates both lat and lon variables

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={windSpeed} color="red" units='kts'/>
        </td>
        <td>
          <Chart data={windDirection} color="black" units='deg'/>
        </td>
        <td>
          <Chart data={cloudCover} color="orange" units='%'/>
        </td>
        <td>
          <Chart data={temp} color="blue" units='F' />
        </td>
        <td>
          <Chart data={pressure} color="green" units='inHg'/>
        </td>
        <td>
          <Chart data={humidity} color="purple" units='%'/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Wind Speed (kts)</th>
            <th>Wind Direction</th>
            <th>Cloud Cover (%)</th>
            <th>Temperature (F)</th>
            <th>Pressure (inHg)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
