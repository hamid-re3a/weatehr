import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Weather from './Weather';

class Search extends Component {


    componentWillMount() {
        this.setState({
            cities: [],
            loading: true,
            input: ''
        })
        var that = this;
        const { params } = this.props.match;

        let cities = [];
        fetch(`http://localhost/weather.php?command=search&keyword=${params.keyword}`)
            .then(result => result.json().then(res => {
                if (res[0] != null)
                    if (res != null && res.length > 0) {
                        fetch(`http://localhost/weather.php?command=location&woeid=${res[0].woeid}`)
                            .then(result => result.json().then(res => {
                                cities.push(res);
                                that.setState({ cities });

                                that.setState({
                                    loading: false
                                })
                            }))
                    }
            }))


        that.setState({
            loading: true
        })
    }

    renderCities() {
        const { params } = this.props.match;

        if (this.state.loading != null && !this.state.loading) {
            return this.state.cities.map(function (index) {
                return <Weather city={index} cityWeather={index.consolidated_weather[0]} day="today" key={index.consolidated_weather[0].id} />;
            })
        }
        return <div className="forecast-table">
            <div className="container">
                <div className="forecast-container">
                    <div className="today forecast">
                        <div className="forecast-content">
                            <div className="location">NO CITY FOUND ! <br /> TRY ANOTHER NAME</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    getKeyWord() {
        if (this.state.input != null && this.state.input != '')
            this.props.history.push('/search/' + this.state.input);
    }

    render() {
        return (

            <div className="site-content">
               
               <div className="site-header">
                    <div className="container">
                        <Link to="/" className="branding">
                            <img src="images/logo.png" alt="" className="logo" />
                            <div className="logo-type">
                                <h1 className="site-title">Weather</h1>
                                <small className="site-description">forcast everything</small>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="hero" data-bg-image="images/banner.png">
                    <div className="container">
                        <form className="find-location">
                            <input type="text" placeholder="Find your location..." onChange={this.handleChange.bind(this)} />
                            <input type="submit" value="Find" onClick={this.getKeyWord.bind(this)} />
                        </form>
                    </div>
                </div>

                {this.renderCities()}
                <footer className="site-footer" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <form action="#" className="subscribe-form">
                                    <input type="text" placeholder="Enter your email to subscribe..." />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                            <div className="col-md-3 col-md-offset-1">
                                <div className="social-links">

                                </div>
                            </div>
                        </div>

                        <p className="colophon">Copyright 2018, All rights reserved</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Search;
