import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { getTenant } from '@/utils/tenant';
import { tenantConfigs } from '@/configs/tenantConfigs';
import router from '@/router/index'
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/userStore'


const tenant = getTenant();
const config: any = tenantConfigs[tenant] as any || tenantConfigs['default'];

// Aplica a cor no root
document.documentElement.style.setProperty('--background-color', config.backgroundColor);
document.documentElement.style.setProperty('--primary-color', config.primaryColor);
const app =createApp(App);
app.use(router)
app.use(createPinia())


const userStore = useUserStore()
userStore.fetchUserOnStart() 

app.mount('#app')
