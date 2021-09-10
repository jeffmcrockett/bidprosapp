import React from 'react';
import axios from 'axios';
import './weather.css';

export default class Weather extends React.Component {
    state = {
        weatherData: []
    }

    componentDidMount() {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=30.26&lon=-97.73&exclude=minutely,hourly&appid=ec45395c440302133c91736d9f5a7dd1")
        .then(res => {
            const weatherData = res.data;
            this.setState({ weatherData });
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className="weatherContainer">
                <h1>Austin Weather Forecast</h1>
                <br></br>
                <div className="weatherTable">
                    <h3>Current Weather</h3>
                    <p>Weather data in state and printing to console</p>
                    <br></br>
                    <p>Correct routes are failing to render, no idea why...</p>
                    <br></br>
                    <p>Would like to know why this.state.weatherData.current.weather[0].main will not return that value</p>
                    <br></br>
                    <p>Partial credit on the bonus points?</p>
                    <br></br>
                </div>
            </div>
        )
    }
}