import { http } from "../api";

const categories = {
    getAll: () => http.get('/fuel_types/')
}

export default categories;
