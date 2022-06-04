import { http } from '../api';

const auth = {
    login: data => http.post('/auth/', data),
    logout: data => http.post(`/accounts/logout/`, data)
};

export default auth;
