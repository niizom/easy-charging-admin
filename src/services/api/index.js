import axios from 'axios';
import { signOut } from '../../redux/slicers/auth';
import { removePersistedData } from '../../redux/persistor';

const ENV = process.env;

export const http = axios.create({
    baseURL: ENV.REACT_APP_API_BASE_URL
});

export const subscribe = (store, redirect) => {
    http.interceptors.request.use(
        config => {
            const state = store.getState();
            const accessToken = state && state.auth.token;

            if (accessToken) config.headers['Authorization'] = ['Bearer', accessToken].join(' ');

            return config;
        },
        error => Promise.reject(error)
    );

    http.interceptors.response.use(
        config => config,
        error => {
            const { response } = error;
            const status = response?.status;

            if (!status) return; // if status not exist

            if (status === 401 || status === 403) {
                store.dispatch(signOut()); // clean redux store
                removePersistedData(); // clean persisted data
                redirect.push('/login'); // redirect to login page
            }

            return Promise.reject(error);
        }
    );
};
