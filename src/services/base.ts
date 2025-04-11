import axios from 'axios';
import { getTenant } from '../utils/tenant';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config: any) => {
    config.headers['X-Tenant-ID'] = getTenant();
    return config;
});

export default api;
