import React, { Component } from 'react';

class Weather extends Component {
    render() {
        const { city, cityWeather , day } = this.props;
        let image=`https://www.metaweather.com/static/img/weather/${cityWeather.weather_state_abbr}.svg`;
        return (
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        <div className="today forecast">
                            <div className="forecast-header">
                                <div className="day">{day}</div>
                                <div className="date">{cityWeather.applicable_date}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="location">{city.title}</div>
                                <div className="degree">
                                    <div className="num">{Math.round(cityWeather.min_temp)}<sup>o</sup>C - </div>
                                    <div className="num">{Math.round(cityWeather.max_temp)}<sup>o</sup>C</div>
                                    <div className="forecast-icon">
                                        <img src={image} alt="" width="98" />
                                    </div>
                                </div>
                                <span><img src="images/icon-umberella.png" alt="" />{cityWeather.humidity}%</span>
                                <span><img src="images/icon-wind.png" alt="" />{Math.round(cityWeather.wind_speed)}km/h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;
