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
                        <label>Username:</label>
                        <input className="loginInput" name="username" type="text"/>
                        <label>Password:</label>
                        <input className="loginInput" name="password" type="password"/>
                        <input type="submit" value="Login" className="loginBtn"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login