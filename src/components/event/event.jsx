import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import moment from 'moment';

import Table from '../table/table';
import { Img } from './components';

import { properties, route } from './config';
import barorProperties from './config/baror';
import pushUpProperties from './config/pushUps';

import pushUpsImage from '../../assets/images/push-up.jpg';
import runningImage from '../../assets/images/runner.jpg';

const BarorTable = () => {
    const defaultTime = moment().startOf('day');
    const tableProperties = [...properties, ...barorProperties ];

    return <Table properties={tableProperties} defaultTime={defaultTime} route={route.baror}/>;
};

const PushUpsTable = () => {
    const tableProperties = [...properties, ...pushUpProperties];

    return <Table properties={tableProperties} route={route.pushUps}/>;
};

const Tables = () => (
    <>
        <NavLink to='/event/baror' className='navLink nested right borderanimation' activeClassName='navLinkActive'>
            <Img src={runningImage} alt='runningImage' />
        </NavLink>
        <NavLink to='/event/pushUps' className='navLink nested right borderanimation' activeClassName='navLinkActive'>
            <Img src={pushUpsImage} alt='pushUpsImage' />
        </NavLink>
        <Switch>
            <Route path='/event/baror' component={BarorTable} />
            <Route path='/event/pushUps' component={PushUpsTable} />
        </Switch>
    </>
);

export default Tables; 