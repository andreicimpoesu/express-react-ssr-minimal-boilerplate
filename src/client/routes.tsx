import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import About from './about';

export default function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={ App }/>
            <Route exact path='/about' component={ About }/>
        </Switch>
    );
}
