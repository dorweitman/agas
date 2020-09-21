const date = {
    value: 'date',
    translation: 'תאריך',
    default: new Date(),
    type: 'date',
};
const eventType = {
    value: 'eventType',
    translation: 'סוג אירוע',
    default: '',
    type: 'select',
    options: ['-', 'שכיבות סמיכה', 'ריצה'],
};
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
const id = {
    value: 'id',
    translation: 'מספר אישי',
    default: 0,
    type: 'number',
    min: 0,
};

const properties = [
    eventType,
    date, 
    startTime,
    endTime,
    id,
];

module.exports = properties; 