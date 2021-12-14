import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardForm from './cardform/Cardform';
import CardList from './cardlist/Cardlist';
import './Content.css';
import Sidebar from './sidebar/Sidebar';

const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <Switch>
                <Route exact path="/dashboard/cardform">
                    <CardForm />
                </Route>
                <Route path="/dashboard">
                    <CardList />
                </Route>
            </Switch>
        </div>
    )
}

export default Content;