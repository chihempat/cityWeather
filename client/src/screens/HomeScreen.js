import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import WeatherChart from '../components/WeatherChart';
import WeatherCard from '../components/WeatherCard';
import Message from '../components/Message';
import Loader from '../components/Message';
import SideMenu from '../components/SideMenu';
import { fetchWeatherAction, fetchForecastAction } from '../redux/Actions/dataActions';
import { logoutAction } from '../redux/Actions/userActions';

import './HomeScreen.css';



const HomeScreen = ({ history }) => {
    const dispatch = useDispatch();


    // const userLogin = useSelector(state => state.userLogin);
    // const userRegister = useSelector(state => state.userRegister);

    // const { user: loginUser } = userLogin;
    // const { user: registerUser } = userRegister;

    const userData = localStorage.getItem('userInfo');

    const [city, setCity] = useState('Delhi');
    const weather = useSelector(state => state.cityWeather);
    const forecast = useSelector(state => state.cityForecast);
    const { loading: weatherLoading, error: weatherError, data: weatherData, success: weatherSuccess} = weather;
    const { loading: forecastLoading, error: forecastError, data: forecastData, success: forecastSuccess } = forecast;

    const getWeather = async (city) => {
        dispatch(fetchWeatherAction(city));
    }
    const getForecast = async (city) => {
        dispatch(fetchForecastAction(city));
    }
    useEffect(() => {
        if (!userData)
           window.location.href = '/';
        getWeather(city);
        getForecast(city);

        // eslint-disable-next-line
    }, [city, dispatch]);

  return (
    <div className="Home">
      <div className="sidebar">
        <SideMenu/>
      </div>
    <h1>Four City Weather</h1>
      <form>
        <select id="items" onChange={(e) => setCity(e.target.value)}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Pune">Pune</option>
        </select>
      </form>
          <div className="display">
              {weatherError && <div><Message variant='danger'>{weatherError}</Message></div>}
              {weatherLoading && <div><Loader /></div>}
              {forecastError && <div><Message variant='danger'>{weatherError}</Message></div>}
                {forecastLoading && <div><Loader /></div>}

        {weatherSuccess && <WeatherCard city={city} data={weatherData} />}
        {forecastSuccess && <WeatherChart city={city} data={forecastData.data.list} />}
    </div>
          <button className='btn-us' onClick={() => {
              dispatch(logoutAction());
              history.push('/');
            }
          }>Logout</button>
    </div>


  )
}

export default HomeScreen


