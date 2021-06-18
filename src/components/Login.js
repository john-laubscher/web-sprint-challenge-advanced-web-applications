import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  //state, hooks, error message
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("Username or Password not valid.");

  const history = useHistory();

  const error = () => {
    if (loginInfo.username === "" || loginInfo.password === "") {
      return errorMessage;
    }
  };

  //handle Change function
  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log("this is handleChange state", loginInfo);

  //login function
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", loginInfo)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username
            <input id="username" data-testid="username" type="text" name="username" value={loginInfo.username} onChange={handleChange} />
          </label>
          <label>
            Password
            <input id="password" data-testid="password" type="text" name="password" value={loginInfo.password} onChange={handleChange} />
          </label>
          <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">
        {error()}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.
