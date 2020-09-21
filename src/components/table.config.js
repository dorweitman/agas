const name = { value: 'name', translation: 'שם פרטי', default: '', type: 'text' };
const lastname = { value: 'lastname', translation: 'שם משפחה', default: '', type: 'text' };
const team = { value: 'team', translation: 'צוות', default: '', type: 'text' };
const id = { value: 'id', translation: 'מספר אישי', default: 0, type: 'number', min: 0 };
const age = { value: 'age', translation: 'גיל', default: new Date(), type: 'date', min: 0, max: 99 };
const gender = { value: 'gender', translation: 'מין', default: '', type: 'select', options: ['-', 'זכר', 'נקבה'] };

const sendData = 'שלח/י מידע';
const propertyType = { select: 'select', date: 'date' };
const redErrorBorder = '2px solid red';

const personProperties = [name, lastname, team, id, age, gender];

const createPersonObject = () => {
    const personObject = {};

    for (const p of personProperties) {
        personObject[p.value] = p.default;
    }

    return personObject;
};

module.exports = {
    createPersonObject,
    redErrorBorder,
    personProperties,
    sendData,
    propertyType,
}; 