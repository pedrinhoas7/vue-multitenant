import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/userStore'

const app = createApp(App);
app.use(router)
app.use(createPinia())

// Verify if the user is logged in when the app starts
const userStore = useUserStore()
userStore.fetchUserOnStart() 

app.mount('#app')
