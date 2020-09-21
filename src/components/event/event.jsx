import React from 'react';

import moment from 'moment';

import Table from '../table/table'; 
import properties from './config';

const defaultTime = moment().startOf('day');

const EventTable = () => {
    return <Table properties={properties} defaultTime={defaultTime}/>; 
}; 

export default EventTable;