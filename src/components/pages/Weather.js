import React, { Component } from 'react';

class Weather extends Component {
    render() {
        const { params } = this.props.match;
        console.log(params);
        return (
            <div>
                <h2>Weather : {params.woeid}</h2>
            </div>
        );
    }
}

export default Weather;
