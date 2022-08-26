import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
export default class App extends Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }
  

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    if (!(city && country)) {
      return false
    } else {
      let api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`)
      let data = await api.json();
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
  } 
  
  
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Form getWeather={this.getWeather}/>
          <Weather mystate={this.state}/>
        </div>
      </div>
    )
  }
}

