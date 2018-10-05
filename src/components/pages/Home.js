import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import {Weather} from './Weather';
import NoMatch from './NoMatch';
import Weather from './Weather';

class Home extends Component {


    componentWillMount(){
        this.setState({
            cities:[],
            loading : true
        })
        var that = this;
        let cities_woeid = {Istanbul:2344116, Berlin:638242, London:44418, Helsinki:565346, Dublin:560743, Vancouver:9807};
        let cities = [];
        for (let city in cities_woeid){
            fetch(`http://localhost/weather.php?command=location&woeid=${cities_woeid[city]}`)
            .then(result => result.json().then(res=>{
                cities.push(res);
                that.setState({ cities });
            }))    
        }

        this.setState({
            loading: false
        })
        
    }

    renderCities(){
        if(this.state.loading!= null && !this.state.loading ){
            return this.state.cities.map(function(index){
                console.log(index);
                return <Weather city={index} cityWeather={index.consolidated_weather[0]} day="today" key={index.consolidated_weather[0].id}/>;
            })
        }
        return false;
    }



    render() {
        return (

            <div className="site-content">


                <div className="hero" data-bg-image="images/banner.png">
                    <div className="container">
                        <form action="#" className="find-location">
                            <input type="text" placeholder="Find your location..." />
                            <input type="submit" value="Find" />
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

export default Home;
