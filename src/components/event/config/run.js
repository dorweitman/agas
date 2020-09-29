const moment = require('moment');
const { formatMoment } = require('../../../lib/utils');

const getDefaultTime = () => formatMoment(moment().startOf('day'));

const endTime = {
    name: 'end_time',
    translation: 'זמן סיום',
    default: getDefaultTime(),
    type: 'timer',
    min: 0,
    max: 59,
};
const startTime = {
    name: 'start_time',
    translation: 'זמן התחלה',
    default: getDefaultTime(),
    type: 'timer',
    min: 0,
    max: 59,
};

const properties = [
    startTime,
    endTime, 
];

module.exports = properties; 