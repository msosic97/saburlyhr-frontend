import React from 'react';
import './Dashboard.css';
import Content from "../../components/partials/content/Content";
import Navbar from "../../components/partials/navbar/Navbar";
import Welcome from "../../components/partials/welcome/Welcome";


const Dashboard = () => {
    
    const token = localStorage.getItem('token')


    if(token === null){
        window.location.replace("https://kind-wozniak-cfcd11.netlify.app/")
    }

    return (
        <div className="dashboard">
            <Navbar />
            <Welcome />
            <Content />
        </div>
    )
}

export default Dashboard;