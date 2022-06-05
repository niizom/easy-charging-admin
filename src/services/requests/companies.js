import { http } from '../api';

const companies = {
    getAll: () => http.get('/companies/'),
};

export default companies;
