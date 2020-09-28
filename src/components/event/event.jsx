import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import moment from 'moment';

import Table from '../table/table';
import { Img, StyledNavLink } from './styled-components';

import { route, runTableProperties, pushUpTableProperties } from './config';

import pushUpsImage from '../../assets/images/push-up.jpg';
import runningImage from '../../assets/images/runner.jpg';

const RunTable = () => {
    const defaultTime = moment().startOf('day');

    return <Table properties={runTableProperties} defaultTime={defaultTime} route={route.run} />;
};

const PushUpsTable = () => {
    return <Table properties={pushUpTableProperties} route={route.pushUps} />;
};

const Tables = () => (
    <>
        <StyledNavLink exact to='/event/run'>
            <Img src={runningImage} alt='runningImage' />
        </StyledNavLink>
        <StyledNavLink exact to='/event/pushUps'>
            <Img src={pushUpsImage} alt='pushUpsImage' />
        </StyledNavLink>
        <Switch>
            <Route path='/event/run' component={RunTable} />
            <Route path='/event/pushUps' component={PushUpsTable} />
        </Switch>
    </>
);

export default Tables; 