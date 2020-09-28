const endTime = {
    name: 'end_time',
    translation: 'זמן סיום',
    default: 0,
    type: 'timer',
    min: 0,
    max: 59,
};
const startTime = {
    name: 'start_time',
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