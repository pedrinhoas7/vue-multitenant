import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/userStore'



// Aplica a cor no root

const app = createApp(App);
app.use(router)
app.use(createPinia())


const userStore = useUserStore()
userStore.fetchUserOnStart() 


app.mount('#app')
