import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import moment from 'moment';

import Table from '../table/table';
import { properties } from './config';

import barorProperties from './config/baror';
import pushUpProperties from './config/pushUps';

import pushUpsImage from '../../assets/images/push-up.jpg';
import runningImage from '../../assets/images/runner.jpg';

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
            <NavLink to='/event/baror' className='navLink nested right borderanimation' activeClassName='navLinkActive'>
                <img src={runningImage} alt="runningImage" width="50%" height="300px" />
            </NavLink>
            <NavLink to='/event/pushUps' className='navLink nested right borderanimation' activeClassName='navLinkActive'>
                <img src={pushUpsImage} alt="pushUpsImage" width="50%" height="300px" />
            </NavLink>
            <Switch>
                <Route path='/event/baror' component={BarorTable} />
                <Route path='/event/pushUps' component={PushUpsTable} />
            </Switch>
        </>
    );
};

export default Tables; 