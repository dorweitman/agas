import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Tables from './event/event';
import Person from './people/people';
import { StyledNavLink } from './styled-components';

import { translation } from '../config';

import './admin.css';

class AdminPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <StyledNavLink exact to='/person' activeClassName='navLinkActive'>{translation.soldier}</StyledNavLink>
                    <StyledNavLink exact to='/event' activeClassName='navLinkActive'>{translation.event}</StyledNavLink>
                    <Switch>
                        <Route path='/person' component={Person} />
                        <Route path='/event' component={Tables} />
                    </Switch>
                </div>
            </Router>
        );
    };
}

export default AdminPage; 