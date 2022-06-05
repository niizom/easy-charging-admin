import { http } from '../api';

const auth = {
    login: data => http.post('/auth/', data),
    logout: data => http.delete(`/auth/`, data)
};

export default auth;
