import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {

    return (
        <div className="sidebar">
            <p className="sideParagraph">Time off</p>
            <ul>
                <li>
                    <Link to="/dashboard/cardform"><button className="sideBtn">Add new date</button></Link>
                </li>
                <li>
                    <Link to="/dashboard/cardlist"><button className="sideBtn">Show your list</button></Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;