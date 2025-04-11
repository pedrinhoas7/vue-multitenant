import { createApp, onMounted, ref } from 'vue'
import './style.css'
import App from './App.vue'
import { getTenant } from '@/utils/tenant';
import { getTenantConfig } from '@/services/tenantService';
import router from '@/router/index'
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { useTenantStore } from '@/stores/tenantStore'



// Aplica a cor no root

const app =createApp(App);
app.use(router)
app.use(createPinia())


const userStore = useUserStore()
userStore.fetchUserOnStart() 


app.mount('#app')
