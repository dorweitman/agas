import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Tables from './event/event';
import Person from './people/people';

import './home.css';

class HomePage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavLink to='/person' className='navLink right' activeClassName='navLinkActive' exact>חייל/ת</NavLink>
                    <NavLink to='/event' className='navLink right' activeClassName='navLinkActive' exact>אירוע</NavLink>
                    <Switch>
                        <Route path='/person' component={Person} />
                        <Route path='/event' component={Tables} />
                    </Switch>
                </div>
            </Router>
        );
    };
}

export default HomePage; 