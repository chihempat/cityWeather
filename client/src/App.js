import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';


function App() {

  const userData = localStorage.getItem('userInfo');
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path="/" component={() => {
            if (userData) {
              return <HomeScreen/>
            } else {
              return <AuthScreen/>
            }
          }} exact />
          <Route path="/home" component={() => {
            if (userData) {
              return <HomeScreen/>
            } else {
              return <AuthScreen/>
            }
          }} exact />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
