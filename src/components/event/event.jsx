import React from 'react';
import { Route, Switch } from 'react-router-dom';
import moment from 'moment';

import Table from '../table/table';
import { Img, StyledNavLink } from '../styled-components';

import { route, barorTableProperties, pushUpTableProperties } from './config';

import pushUpsImage from '../../assets/images/push-up.jpg';
import runningImage from '../../assets/images/runner.jpg';

const BarorTable = () => {
    const defaultTime = moment().startOf('day');

    return <Table properties={barorTableProperties} defaultTime={defaultTime} route={route.baror} />;
};

const PushUpsTable = () => {
    return <Table properties={pushUpTableProperties} route={route.pushUps} />;
};

const Tables = () => (
    <>
        <StyledNavLink to='/event/baror' className='nested borderAnimation' activeClassName='navLinkActive'>
            <Img src={runningImage} alt='runningImage' />
        </StyledNavLink>
        <StyledNavLink to='/event/pushUps' className='nested borderAnimation' activeClassName='navLinkActive'>
            <Img src={pushUpsImage} alt='pushUpsImage' />
        </StyledNavLink>
        <Switch>
            <Route path='/event/baror' component={BarorTable} />
            <Route path='/event/pushUps' component={PushUpsTable} />
        </Switch>
    </>
);

export default Tables; 