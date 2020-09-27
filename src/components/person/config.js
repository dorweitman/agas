import { formatDate } from '../../utils';

const lastname = {
    value: 'last_name',
    translation: 'שם משפחה',
    default: '',
    type: 'text',
};
const team = {
    value: 'team',
    translation: 'צוות',
    default: '',
    type: 'text',
};
const id = {
    value: 'army_id',
    translation: 'מספר אישי',
    default: 0,
    type: 'number',
    min: 0,
};
const birthDate = {
    value: 'birth_date',
    translation: 'תאריך לידה',
    default: formatDate(new Date()),
    type: 'date',
};
const gender = {
    value: 'gender',
    translation: 'מין',
    default: '-',
    type: 'select',
    options: { default: '-', male: 'זכר', female: 'נקבה' },
};
const firstname = {
    value: 'first_name',
    translation: 'שם פרטי',
    default: '',
    type: 'text',
};

const route = 'person';
const properties = [
    firstname,
    lastname,
    team,
    id,
    birthDate,
    gender,
];

export { properties, route }; 