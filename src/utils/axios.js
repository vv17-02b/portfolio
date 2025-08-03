import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000', // Адрес твоего backend-сервера
    withCredentials: true,           // Если используешь куки/сессии
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
