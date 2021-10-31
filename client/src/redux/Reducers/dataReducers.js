import {
  FETCH_WEATHER_DATA_REQUEST,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_FAIL,
  FETCH_FORECAST_DATA_REQUEST,
  FETCH_FORECAST_DATA_SUCCESS,
  FETCH_FORECAST_DATA_FAIL,
} from '../Constants/dataConstants';

export const weatherDataReducer = (state = {
  loading: false,
}, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_REQUEST:
      return {
        loading: true,
      };
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };
    case FETCH_WEATHER_DATA_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const forecastDataReducer = (state = {
  loading: false,
}, action) => {
  switch (action.type) {
    case FETCH_FORECAST_DATA_REQUEST:
      return {

        loading: true,
      };
    case FETCH_FORECAST_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };
    case FETCH_FORECAST_DATA_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}