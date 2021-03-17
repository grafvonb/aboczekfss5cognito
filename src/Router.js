import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import Profile from './Profile';
import { Protected } from './Protected';
import { Public } from './Public';

export const Router = () => {
    const [current, setCurrent] = useState('home');
    function setRoute() {
        const location = window.location.href.split('/');
        const pathName = location[location - 1];
        setCurrent(pathName || 'home');
    }
    useEffect(() => {
        setRoute();
        window.addEventListener('hashchange', setRoute)
        return () => window.removeEventListener('hashchange', setRoute);
    }, []);
    return (
        <HashRouter>
            <Nav current={current} />
            <Switch>
                <Route exact path="/" component={Public} />
                <Route exact path="/protected" component={Protected} />
                <Route exact path="/profile" component={Profile} />
                <Route component={Public} />
            </Switch>
        </HashRouter>
    );
}