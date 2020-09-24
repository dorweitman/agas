import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: config.url
});

export const saveData = async (url, data) => {
    try {
        return instance.post(url, data);
    } catch (error) {
        console.error(error);
    }
};

export const getData = async (url) => {
    try {
        return instance.get(url);
    } catch (error) {
        console.error(error);
    }
};
