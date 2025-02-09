export function toSentenceCase(text: string): string {
    return text.toLowerCase().replace(/^\w/, (c: string) => c.toUpperCase());
}

export function trimToEllipsis(text: string): string {
    const maxLength = 20;
    return text.length > maxLength? `${text.slice(0, maxLength - 3)}...` : text;
}