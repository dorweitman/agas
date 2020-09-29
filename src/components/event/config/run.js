const moment = require('moment');

const defaultTime = moment().startOf('day');

const endTime = {
    name: 'end_time',
    translation: 'זמן סיום',
    default: defaultTime,
    type: 'timer',
    min: 0,
    max: 59,
};
const startTime = {
    name: 'start_time',
    translation: 'זמן התחלה',
    default: defaultTime,
    type: 'timer',
    min: 0,
    max: 59,
};

const properties = [
    startTime,
    endTime, 
];

module.exports = properties; 