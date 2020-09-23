const lastname = {
    value: 'lastname',
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
    value: 'id',
    translation: 'מספר אישי',
    default: 0,
    type: 'number',
    min: 0,
};
const age = {
    value: 'age',
    translation: 'תאריך לידה',
    default: new Date(),
    type: 'date',
};
const gender = {
    value: 'gender',
    translation: 'מין',
    default: '',
    type: 'select',
    options: ['-', 'זכר', 'נקבה'],
};
const name = {
    value: 'name',
    translation: 'שם פרטי',
    default: '',
    type: 'text',
};

const properties = [
    name,
    lastname,
    team,
    id,
    age,
    gender,
];

module.exports = properties; 