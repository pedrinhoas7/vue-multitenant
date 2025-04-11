import { remoteConfig, fetchAndActivate, getValue } from '../../firebase';

export async function getTenantConfig(tenantId: string) {
  try {
    await fetchAndActivate(remoteConfig);

    const configsRaw = getValue(remoteConfig, 'tenant_configs').asString();
    console.log('configsRaw', configsRaw);
    const configs: Record<string, any> = JSON.parse(configsRaw);
    
    return configs[tenantId] || configs['default'];
  } catch (error) {
    console.error('Erro ao buscar configs do tenant:', error);
    return {
      name: 'Meu App',
      primaryColor: '#333',
      backgroundColor: '#04986D',
      logo: '/vite.svg'
    };
  }
}
