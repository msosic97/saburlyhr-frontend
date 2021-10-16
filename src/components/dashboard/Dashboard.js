import React from "react";
import './Dashboard.css';
import Navbar from "./partials/navbar/Navbar.js";
import Welcome from "./partials/welcome/Welcome";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Welcome />
        </div>
    )
}

export default Dashboard;