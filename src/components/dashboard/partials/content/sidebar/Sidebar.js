import React from 'react'
import './Sidebar.css';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <p className="sideParagraph">Time off</p>
            <ul>
                <li>
                    <button className="sideBtn">Add new date</button>
                </li>
                <li>
                    <button className="sideBtn">Show your list</button>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;