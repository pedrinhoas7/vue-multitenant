export interface TenantConfig {
    name: string;
    primaryColor: string;
    logo: string;
}

export const tenantConfigs: Record<string, TenantConfig> = {
    cliente1: {
        name: 'Cliente 1',
        primaryColor: '#04986D',
        logo: '/logos/cliente1.svg'
    },
    cliente2: {
        name: 'Cliente 2',
        primaryColor: '#646cff',
        logo: '/logos/cliente2.svg'
    },
    default: {
        name: 'Meu App',
        primaryColor: '#333',
        logo: '/vite.svg'
    }
};
