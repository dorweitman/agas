import React from 'react';

import Table from '../table/table';
import { properties, route } from './config';

const PersonTable = () => {
    return <Table properties={properties} route={route} />;
};

export default PersonTable;