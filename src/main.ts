import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { getTenant } from '@/utils/tenant';
import { tenantConfigs } from '@/configs/tenantConfigs';

const tenant = getTenant();
const config: any = tenantConfigs[tenant] as any || tenantConfigs['default'];

// Aplica a cor no root
document.documentElement.style.setProperty('--primary-color', config.primaryColor);
createApp(App).mount('#app')
