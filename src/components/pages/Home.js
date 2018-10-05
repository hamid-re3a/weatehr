import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { axios } from 'axios';

class Home extends Component {

    constructor(){
        super();
        this.setState({
            cities : {},
            status : 'loading',
            server: 'http://localhost/'
        });

    }

    componentWillMount(){

    }


    render() {
        return (

            <div class="site-content">


                <div class="hero" data-bg-image="images/banner.png">
                    <div class="container">
                        <form action="#" class="find-location">
                            <input type="text" placeholder="Find your location..." />
                            <input type="submit" value="Find" />
                        </form>

                    </div>
                </div>

                <div class="forecast-table">
                    <div class="container">
                        <div class="forecast-container">
                            <div class="today forecast">
                                <div class="forecast-header">
                                    <div class="day">Monday</div>
                                    <div class="date">6 Oct</div>
                                </div>
                                <div class="forecast-content">
                                    <div class="location">New York</div>
                                    <div class="degree">
                                        <div class="num">23<sup>o</sup>C</div>
                                        <div class="forecast-icon">
                                            <img src="https://www.metaweather.com/static/img/weather/sn.svg" alt="" width="98" />
                                        </div>
                                    </div>
                                    <span><img src="images/icon-umberella.png" alt="" />20%</span>
                                    <span><img src="images/icon-wind.png" alt="" />18km/h</span>
                                    <span><img src="images/icon-compass.png" alt="" />East</span>
                                </div>
                            </div>
                            <div class="today forecast">
                                <div class="forecast-header">
                                    <div class="day">Monday</div>
                                    <div class="date">6 Oct</div>
                                </div>
                                <div class="forecast-content">
                                    <div class="location">New York</div>
                                    <div class="degree">
                                        <div class="num">23<sup>o</sup>C</div>
                                        <div class="forecast-icon">
                                            <img src="images/icons/icon-1.svg" alt="" />
                                        </div>
                                    </div>
                                    <span><img src="images/icon-umberella.png" alt="" />20%</span>
                                    <span><img src="images/icon-wind.png" alt="" />18km/h</span>
                                    <span><img src="images/icon-compass.png" alt="" />East</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <footer class="site-footer" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <form action="#" class="subscribe-form">
                                    <input type="text" placeholder="Enter your email to subscribe..." />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                            <div class="col-md-3 col-md-offset-1">
                                <div class="social-links">

                                </div>
                            </div>
                        </div>

                        <p class="colophon">Copyright 2018, All rights reserved</p>
                    </div>
                </footer>
            </div>



        );
    }
}

export default Home;
