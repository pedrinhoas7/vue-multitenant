export function getTenant() {
    const hostname = window.location.hostname;

    const tenant = hostname.split('.')[0];

    return tenant;
}
