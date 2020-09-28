import runProperties from './run';
import pushUpProperties from './pushUps';
import { formatDate } from '../../../utils';

const date = {
    name: 'event_date',
    translation: 'תאריך',
    default: formatDate(new Date()),
    type: 'date',
    repetitive: true,
};
const name = {
    name: 'name',
    translation: 'אירוע',
    default: 'first',
    type: 'select',
    options: { first: 'קמ"נים פתיחה', final: 'קמ"נים סוף' },
    repetitive: true,
};
const id = {
    name: 'army_id',
    translation: 'מספר אישי',
    default: 0,
    type: 'number',
    min: 0,
};
const moed = {
    name: 'moed',
    translation: 'מועד',
    default: 'a',
    type: 'select',
    options: { a: 'א', b: 'ב', special: 'מיוחד' },
    repetitive: true,
};

const route = { run: 'event/run', pushUps: 'event/pushups' };
const properties = [name, moed, date, id];
const runTableProperties = [...properties, ...runProperties];
const pushUpTableProperties = [...properties, ...pushUpProperties];

export {
    route,
    runTableProperties,
    pushUpTableProperties,
}; 