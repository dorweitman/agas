import { formatDate } from '../../lib/utils';

const lastname = {
    name: 'last_name',
    translation: 'שם משפחה',
    default: '',
    type: 'text',
};
const team = {
    name: 'team',
    translation: 'צוות',
    default: '',
    type: 'text',
};
const id = {
    name: 'army_id',
    translation: 'מספר אישי',
    default: 0,
    type: 'number',
    min: 0,
};
const birthDate = {
    name: 'birth_date',
    translation: 'תאריך לידה',
    default: formatDate(new Date()),
    type: 'date',
};
const gender = {
    name: 'gender',
    translation: 'מין',
    default: '-',
    type: 'select',
    options: { default: '-', male: 'זכר', female: 'נקבה' },
};
const firstname = {
    name: 'first_name',
    translation: 'שם פרטי',
    default: '',
    type: 'text',
};
const phoneNumber = {
    name: 'phone',
    translation: 'מספר טלפון',
    default: ' ',
    type: 'text',
};

const route = 'person';
const properties = [
    firstname,
    lastname,
    team,
    id,
    birthDate,
    phoneNumber,
    gender,
];

export { properties, route }; 