const name = { name: 'שם פרטי', default: '', type: 'text' };
const lastname = { name: 'שם משפחה', default: '', type: 'text' };
const team = { name: 'צוות', default: '', type: 'text' };
const id = { name: 'מספר אישי', default: 0, type: 'number' };
const age = { name: 'גיל', default: 0, type: 'number' };
const gender = { name: 'מין', default: '-', type: 'select', options: ['-', 'זכר', 'נקבה'] };

const sendData = 'שלח/י מידע';
const selectInputType = 'select';

const personProperties = [name, lastname, team, id, age, gender];

const createPersonObject = () => {
    const personObject = {};

    for (const p of personProperties) {
        personObject[p.name] = p.default;
    }

    return personObject;
};

module.exports = {
    createPersonObject,
    personProperties,
    sendData,
    selectInputType,
}; 