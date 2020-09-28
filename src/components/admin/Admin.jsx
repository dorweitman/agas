import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Tables from '../event/event';
import Person from '../person/person';
import { StyledNavLink } from './styled-components';

import { translation } from '../../lib/config';

class AdminPage extends Component {
    render() {
        return (
            <Router>
                <StyledNavLink to='/person'>{translation.soldier}</StyledNavLink>
                <StyledNavLink to='/event'>{translation.event}</StyledNavLink>
                <Switch>
                    <Route path='/person' component={Person} />
                    <Route path='/event' component={Tables} />
                </Switch>
            </Router>
        );
    };
}

export default AdminPage; 