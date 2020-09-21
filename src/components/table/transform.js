const createObject = (properties) => {
    const obj = {};

    for (const property of properties) {
        obj[property.value] = property.default;
    }

    return obj;
};

module.exports = {
    createObject,
}; 