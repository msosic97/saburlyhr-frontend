import './App.css';
import React, {useState} from 'react';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [redirect, setRedirect] = useState(false)

  if (localStorage.getItem('token') !== "undefined"){
    setRedirect(true)
}
else {
    setRedirect(false)
}

  return (
    <div className="App">
        { redirect ?
            <Dashboard />
      
          :
          
            <Login />
        }
    </div>
  );
}

export default App;
