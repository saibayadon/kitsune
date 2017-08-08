import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// App CSS.
import '../css/app.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route render={routeProps =>
                    <div><h1>React</h1></div>
                } path="*" />
            </Router>
        );
    }
};
