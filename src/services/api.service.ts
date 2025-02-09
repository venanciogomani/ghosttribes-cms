import wretch from 'wretch';

export const api = wretch().url(import.meta.env.VITE_API_BASE_URL);

export async function handlePreflight(url: string) {
    await api
        .url(url)
        .options({
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Authorization',
            }
        })
        .fetch();
}