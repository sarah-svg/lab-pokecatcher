import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom';
import Header from './Header.js';
import ListPage from './ListPage.js';
import Home from './Home.js';
import Fetch from './Fetch.js';
import DetailPage from './DetailPage.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                    <Route 
                        path="/list" 
                        exact
                        render={(routerProps) => <ListPage {...routerProps} />} 
                    />
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <Home {...routerProps} />} 
                    />
                    <Route 
                        path="/fetch" 
                        exact
                        render={(routerProps) => <Fetch {...routerProps} />} 
                    />
                      <Route 
                        path="/quotes/:booger" 
                        exact
                        render={(routerProps) => <DetailPage {...routerProps} />} 
                    />
                    </Switch>
                </Router>
            </div>
        )
    }
}