import React from "react";
import './Dashboard.css';
import Content from "./partials/content/Content";
import Navbar from "./partials/navbar/Navbar.js";
import Welcome from "./partials/welcome/Welcome";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Welcome />
            <Content />
        </div>
    )
}

export default Dashboard;