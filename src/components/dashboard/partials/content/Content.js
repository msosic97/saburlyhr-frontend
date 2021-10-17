import React from 'react';
import CardForm from './cardform/Cardform';
import CardList from './cardlist/Cardlist';
import './Content.css';
import Sidebar from './sidebar/Sidebar';

let isVisible = true;

const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <CardForm isVisible={isVisible}/>
            <CardList isVisible={isVisible}/>
        </div>
    )
}

export default Content;