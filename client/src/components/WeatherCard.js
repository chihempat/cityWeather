import React from 'react';
import '../screens/HomeScreen.css';


const WeatherCard = ({ city, data }) => {
    const { temp,pressure, humidity } = data.data.main;
    const { description, icon } = data.data.weather[0];
    const { speed, deg } = data.data.wind;
    return (
      <>
        <div className='section'>
          <div className='data-card'>
            <div className='data-title'>
                            <img alt='icon' src={`http://openweathermap.org/img/w/${icon}.png`} />
            <p className='title'>
                {city} -
                <span className='data-card__temp'> {(temp - 272.07).toFixed(2)}&deg;C</span>
              </p>

            </div>

            <div className='data-card__val'>
              <p>Description : {description} </p>
              <p>Pressure: {pressure}</p>
              <p>Humidity: {humidity} % </p>
              <p>Wind Speed: {speed} km/h</p>
              <p>Wind Direction: {deg} &deg;</p>
            </div>
          </div>
        </div>
        {/* <div className="widget">
            <div className="left-panel panel">
                <div className="date">
                    Monday, 20 Aug 2018
                </div>
                <div className="city">
                    Mumbai
                </div>
                <div className="temp">
                   <img src="https://s5.postimg.cc/yzcm7htyb/image.png" alt="" width="60" />
                   27&deg;
                </div>
            </div>
            <div className="right-panel panel">
                <img src="https://s5.postimg.cc/lifnombwz/mumbai1.png" alt="" width="160" />
            </div>

        </div> */}
      </>
    )
  }


export default WeatherCard
