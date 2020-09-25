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
    default: 'first',
    type: 'select',
    options: { first: 'קמ"נים פתיחה', final: 'קמ"נים סוף' },
    same: true,
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
    default: 'a',
    type: 'select',
    options: { a: 'א', b: 'ב', special: 'מיוחד' },
    same: true,
};

const route = { baror: 'event/baror', pushUps: 'event/pushUps' };
const properties = [
    eventName,
    moed,
    date,
    id,
];

module.exports = { properties, route }; 