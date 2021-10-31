import {
  FETCH_WEATHER_DATA_REQUEST,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_FAIL,
  FETCH_FORECAST_DATA_REQUEST,
  FETCH_FORECAST_DATA_SUCCESS,
  FETCH_FORECAST_DATA_FAIL,
} from '../Constants/dataConstants';
import axios from 'axios';




export const fetchWeatherAction = (city) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_WEATHER_DATA_REQUEST });
    const { data: apiKey } = await axios.get(`http://localhost:4000/apikey`);
    console.log(apiKey);
    const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    console.log(data);
    dispatch({
      type: FETCH_WEATHER_DATA_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: FETCH_WEATHER_DATA_FAIL,
      payload: error.response && error.response.data.message? error.response.data.message : error.message,
    });
  }
}

export const fetchForecastAction = (city) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_FORECAST_DATA_REQUEST });
    const {data: apiKey} = await axios.get(`http://localhost:4000/apikey`);
    const data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);

    dispatch({
      type: FETCH_FORECAST_DATA_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: FETCH_FORECAST_DATA_FAIL,
      payload: error.response && error.response.data.message? error.response.data.message : error.message,
    });
  }
}
