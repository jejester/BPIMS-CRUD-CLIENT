import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://bpims-crud-9a9f1ec3be00.herokuapp.com/api/',
});

export default axiosClient;