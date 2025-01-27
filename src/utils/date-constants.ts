export function getCurrentDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return {
        year,
        month,
        day,
    }
}

export function formatDate(date: Date): string {
    return date.getFullYear() + '-' + date.getMonth()
}