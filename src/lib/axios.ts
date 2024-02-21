'use server';

import axios from 'axios';

// Создание экземпляра Axios
const aiAxios = axios.create();

aiAxios.interceptors.request.use((config) => {
    console.log(process.env.OPENAI_API_KEY);
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${process.env.OPENAI_API_KEY}`;
    return config;
});
aiAxios.defaults.baseURL = process.env.OPENAI_API_HOST;
export default aiAxios;
