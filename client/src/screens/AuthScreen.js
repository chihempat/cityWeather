import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction, logoutAction } from "../redux/Actions/userActions";
import axios from "axios";
import Message from '../components/Message';
import Loader from '../components/Loader.js';
import './Auth.css';

function AuthScreen({ history }) {

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const userRegister = useSelector(state => state.userRegister);

  const { loading: loginLoading, error: loginError, user: loginUser } = userLogin;
  const { loading: registerLoading, error: registerError, user: registerUser } = userRegister;

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [method, setMethod] = useState("login");

  const register = async () => {
    try {

      dispatch(registerAction(registerUsername, registerPassword));
      setRegisterPassword('');
      setRegisterUsername('');
      if (registerUser) {
        //history.push("/home");
      }

    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    try {
      dispatch(loginAction(loginUsername, loginPassword));
      setLoginPassword('');
      setLoginUsername('');
      if (loginUser) {
        //history.push("/home");
      }
    } catch (error) {
    };
    const getUser = async () => {
      try {
        const data = await axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/user",
        })
      } catch (error) {
        console.log(error);
      }
    };
  }
  useEffect(() => {
    if (loginUser) {
      window.location.href = "/home";
      //history.push("/home");
    }
    if(registerUser){
      //history.push("/home");
      window.location.href = "/home";
    }
  }, [loginUser, registerUser]);


    return (
      <div className="App">
        <h1>Auth Screen</h1>
        {loginLoading || registerLoading && <h3><Loader ></Loader></h3>}
        {loginError && <Message variant='danger'>{loginError}</Message>}
        {registerError && <Message variant='danger'>{registerError}</Message>}
        {method === "login" ? (
          <div>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Sign In</button>
          </div>
        ) : (
          <div>
            <h1>Register</h1>
              <input
              type="text"
              placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
              <input
                type="password"
              placeholder="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Sign Up</button>
          </div>
        )}
        <button onClick={() => setMethod(() => {
          setRegisterPassword('');
          setRegisterUsername('');
          setLoginPassword('');
          setLoginUsername('');
          return method === "login" ? "register" : "login";
        })}>{method === "login" ? "Register as New User" : "Already Registered Login Instead"}</button>
      </div>
    )
}

export default AuthScreen;
