import { formatDate, formatMoment } from '../../lib/utils';
import { propertyType } from './config';

const formatValue = (type, value) => {
    const { date, timer, number } = propertyType;
    
    switch (type) {
        case date: return formatDate(value);
        case timer: return formatMoment(value);
        case number: return +value;
        default: return value;
    }
};

const createObject = (properties) => {
    const obj = {};

    for (const property of properties) {
        obj[property.name] = property.default;
    }

    return obj;
};

export {
    createObject,
    formatValue,
}; 