const date = {
    value: 'date',
    translation: 'תאריך',
    default: new Date(),
    type: 'date',   
};
const eventName = {
    value: 'eventName',
    translation: 'אירוע',
    default: 'קמ"נים בראור פתיחה',
    type: 'select',
    options: ['קמ"נים בראור סוף', 'קמ"נים בראור פתיחה'],
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
    options: ['א', 'ב', 'ג'],
};

const eventType = { baror: 'baror', pushUps: 'pushUps' };
const properties = [
    eventName,      
    moed,
    date,   
    id,
];

module.exports = { properties, eventType }; 