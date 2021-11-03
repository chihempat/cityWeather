import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
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
          <Route path="/" exact>
            {userData ? <Redirect to="/home" /> : <AuthScreen />}
          </Route>
          <Route path="/home" exact>
             {!userData ? <Redirect to="/" /> : <HomeScreen />}
          </Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
