const date = {
    value: 'date',
    translation: 'תאריך',
    default: new Date(),
    type: 'date',
    same: true,   
};
const eventName = {
    value: 'eventName',
    translation: 'אירוע',
    default: 'קמ"נים פתיחה',
    type: 'select',
    options: ['קמ"נים סוף', 'קמ"נים פתיחה'],
};
const id = {
    value: 'id',
    translation: 'מספר אישי',
    default: 0,
    type: 'number',
    min: 0,
};
const moed = {
    value: 'moed',
    translation: 'מועד',
    default: 'ב',
    type: 'select',
    options: ['א', 'ב', 'מיוחד'],
};

const eventType = { baror: 'baror', pushUps: 'pushUps' };
const properties = [
    eventName,      
    moed,
    date,   
    id,
];

module.exports = { properties, eventType }; 