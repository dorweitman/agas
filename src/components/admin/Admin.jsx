import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Tables from '../event/event';
import Person from '../person/person';

import { translation } from '../../lib/config';

import './admin.css';

class AdminPage extends Component {
    render() {
        return (
            <Router>
                <NavLink to='/person' className='navLink' activeClassName='navLinkActive'>{translation.soldier}</NavLink>
                <NavLink to='/event' className='navLink' activeClassName='navLinkActive'>{translation.event}</NavLink>
                <Switch>
                    <Route path='/person' component={Person} />
                    <Route path='/event' component={Tables} />
                </Switch>
            </Router>
        );
    };
}

export default AdminPage; 