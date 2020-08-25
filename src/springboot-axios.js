import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://209.97.163.4:9010/basedrs/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;