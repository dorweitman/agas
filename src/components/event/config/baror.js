const endTime = {
    value: 'endTime',
    translation: 'זמן סיום',
    default: 0,
    type: 'timer',
    min: 0,
    max: 59,
};
const startTime = {
    value: 'startTime',
    translation: 'זמן התחלה',
    default: 0,
    type: 'timer',
    min: 0,
    max: 59,
};

const properties = [
    startTime,
    endTime, 
];

module.exports = properties; 