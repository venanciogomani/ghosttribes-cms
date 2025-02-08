import wretch from 'wretch';

export const api = wretch().url(import.meta.env.VITE_API_BASE_URL);