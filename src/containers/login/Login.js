import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="loginForm">
                <form action="/dashboard" method="">
                    <h1>LOGIN</h1>
                    <p>Please enter your username and password!</p>
                    <div className="inputFields">
                        <label htmlFor="username">Username:</label>
                        <input id='username' className="loginInput" type="text"/>
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="loginInput" type="password"/>
                        <input type="submit" value="Login" className="loginBtn"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login