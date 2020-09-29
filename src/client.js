import axios from 'axios';
import config from './lib/config';

const instance = axios.create({
    baseURL: config.url,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const saveData = async (url, data, config = {}) => {
    try {
        return instance.post(url, data, config);
    } catch (error) {
        console.error(error);
    }
};

export const getData = async (url, config = {}) => {
    try {
        return instance.get(url, config);
    } catch (error) {
        console.error(error);
    }
};
