import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Tables from '../event/event';
import Person from '../person/person';
import { StyledNavLink } from './styled-components';

import { translation } from '../../lib/config';

const AdminPage = () => (
    <>
        <StyledNavLink to='/admin/person'>{translation.soldier}</StyledNavLink>
        <StyledNavLink to='/admin/event'>{translation.event}</StyledNavLink>
        <Switch>
            <Route path='/admin/person' component={Person} />
            <Route path='/admin/event' component={Tables} />
        </Switch>
    </>
);

export default AdminPage; 