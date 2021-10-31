import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import {
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
} from './Reducers/userReducers';

import {
  weatherDataReducer,
  forecastDataReducer
} from './Reducers/dataReducers'

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userLogout: userLogoutReducer,
  userRegister: userRegisterReducer,
  cityWeather: weatherDataReducer,
  cityForecast: forecastDataReducer
});
const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;