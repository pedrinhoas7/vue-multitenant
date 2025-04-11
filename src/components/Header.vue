<template>
  <header class="bg-white shadow-md w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <!-- Logo -->
      <img :src="config.logo" alt="Logo" class="h-10 w-auto" />
      <div class="text-xl font-bold text-primary">
        <a href="/">{{ config.name }}</a>
      </div>

      <!-- Navegação desktop -->
      <nav class="hidden md:flex gap-6 items-center text-sm font-medium text-neutral-black">
        <div v-if="userStore.isLoggedIn" class="flex items-center gap-4">
          <img
            :src="userStore.userPhoto"
            alt="Avatar"
            class="w-8 h-8 rounded-full object-cover"
          />
          <span>{{ userStore.userName }}</span>
          <button @click="logout" class="text-primary hover:underline">Sair</button>
        </div>

        <div v-else>
          <button @click="login" class="text-primary hover:underline">Entrar com Google</button>
        </div>
      </nav>

      <!-- Botão menu mobile -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="md:hidden px-4 pb-4">
      <nav class="flex flex-col gap-4 text-sm font-medium text-neutral-black">
        <a href="#" class="hover:text-primary transition-colors">Início</a>

        <div v-if="userStore.isLoggedIn" class="flex items-center gap-3">
          <img
            :src="userStore.userPhoto"
            alt="Avatar"
            class="w-8 h-8 rounded-full object-cover"
          />
          <span>{{ userStore.userName }}</span>
          <button @click="logout" class="text-primary hover:underline">Sair</button>
        </div>

        <div v-else>
          <button @click="login" class="text-primary hover:underline">Entrar com Google</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useTenantStore } from '@/stores/tenantStore'
import { getTenant } from '@/utils/tenant';
import { getTenantConfig } from '@/services/tenantService';


const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
const config = ref({})
const userStore = useUserStore()
const tenantStore = useTenantStore()
onMounted(async() => {
  config.value = await getTenantConfig(getTenant())
})  

const login = async () => {
  await userStore.loginWithGoogle()
}

const logout = async () => {
  await userStore.logout()
}
</script>
