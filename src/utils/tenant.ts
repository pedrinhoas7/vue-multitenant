// tenant.ts
export function getTenant() {
    const hostname = window.location.hostname;

    // Ex: cliente1.seusite.com => cliente1
    const tenant = hostname.split('.')[0];

    return tenant;
}
