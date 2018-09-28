import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "0254eb2949f0a44bba96b350b4709b42";

export default class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    }

    render() {
        return(
            <div>
                <Titles />
                <Form getWeather={ this.getWeather }/>
                <Weather
                    temperature={ this.state.temperature }
                    city={ this.state.city }
                    country={ this.state.country}
                    humidity={ this.state.country }
                    error= {this.state.error}
                />
            </div>
        );
    }
};