export function getHashParameters(urlHash: string): any {
    return urlHash
        .slice(1)
        .split('&')
        .reduce((acc, v) => {
            const [key, value] = v.split('=');
            acc[key] = value;
            return acc;
        }, {} as any);
}