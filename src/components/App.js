import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Style imports.
import styles from '../css/app.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route render={routeProps => <div><h1 className={styles.title}> {'<React />'} </h1></div> } path="*" />
            </Router>
        );
    }
};
