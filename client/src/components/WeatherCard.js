import React from 'react';
import '../screens/HomeScreen.css';


const WeatherCard = ({ city, data }) => {
    const { temp,pressure, humidity } = data.data.main;
    const { description, icon } = data.data.weather[0];
    const { wind, speed, deg } = data.data.wind;
    return (
      <>
        <div className='section'>
          <div className='data-card'>
            <h1>{city} <span><img src={`http://openweathermap.org/img/w/${icon}.png`} /></span></h1>
            <div className='data-card__val'>
              <p>Temperature: {(temp - 272.07).toFixed(2)}&deg;C</p>
            </div>
            <div className='data-card__val'>
              <p>Description : {description} </p>
              <p>Pressure: {pressure}</p>
              <p>Humidity: {humidity} % </p>
            </div>
            <div className='data-card__val'>
              <p>Wind Speed: {speed} km/h</p>
              <p>Wind Direction: {deg} &deg;</p>
            </div>
          </div>
        </div>
      </>
    )
  }


export default WeatherCard
