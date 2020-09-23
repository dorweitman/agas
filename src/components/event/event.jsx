import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import moment from 'moment';

import Table from '../table/table';
import { properties } from './config';

import barorProperties from './config/baror';
import pushUpProperties from './config/pushUps';

import pushUpsImage from '../../assets/images/push-up-exercise-illustration.gif';
import runningImage from '../../assets/images/running.gif';

const BarorTable = () => {
    const defaultTime = moment().startOf('day');
    const tableProperties = [...properties, ...barorProperties];

    return <Table properties={tableProperties} defaultTime={defaultTime} />;
};

const PushUpsTable = () => {
    const tableProperties = [...properties, ...pushUpProperties];

    return <Table properties={tableProperties} />;
};

const Tables = () => {
    return (
        <>
            <NavLink to='/event/baror' className='navLink nested right' activeClassName='navLinkActive'>
                <img src={runningImage} alt="runningImage" width="300" height="333" />
            </NavLink>
            <NavLink to='/event/pushUps' className='navLink nested right' activeClassName='navLinkActive'>
                <img src={pushUpsImage} alt="pushUpsImage" width="300" height="333" />
            </NavLink>
            <Switch>
                <Route path='/event/baror' component={BarorTable} />
                <Route path='/event/pushUps' component={PushUpsTable} />
            </Switch>
        </>
    );
};

// const moment  = require('moment')
// const defaultTime = moment().startOf('day');
// console.log(defaultTime.format('hh:mm:ss'))

export default Tables; 