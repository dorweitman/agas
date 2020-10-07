const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    const year = date.getFullYear();

    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
};

const formatMoment = (moment) => {
    return moment.format('hh:mm:ss');
};

const isBoolean = (val) => {
    return typeof val === 'boolean';
};

export {
    formatDate,
    formatMoment,
    isBoolean,
};