import barorProperties from './baror';
import pushUpProperties from './pushUps';

const date = {
    value: 'date',
    translation: 'תאריך',
    default: new Date(),
    type: 'date',
    same: true,
};
const name = {
    value: 'name',
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
const properties = [name, moed, date, id];
const barorTableProperties = [...properties, ...barorProperties];
const pushUpTableProperties = [...properties, ...pushUpProperties];

export {
    route,
    barorTableProperties,
    pushUpTableProperties,
}; 