export const tableNames = [
    {
        name: 'persons',
        translation: 'אנשים',
    },
    {
        name: 'pushups',
        translation: 'שכיבות סמיכה',
    },
    {
        name: 'run',
        translation: 'ריצת בראור',
    },
];

export const translateBoolean = (value) => {
    const passed = 'עבר';
    const notPassed = 'לא עבר';

    return value ? passed : notPassed;
}

export const route = 'search';