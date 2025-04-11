<script setup lang="ts">
import Header from './components/Header.vue'
import { onMounted, ref } from 'vue'

onMounted(async () => {
  const tenantStore = useTenantStore()
  tenantStore.loadConfig()
  const tenantConfig = ref<any | null>(null)
  tenantConfig.value = await getTenantConfig(getTenant())
  document.documentElement.style.setProperty('--background-color', tenantConfig.value.backgroundColor);
  document.documentElement.style.setProperty('--primary-color', tenantConfig.value.primaryColor);
})
</script>

<template>
  <div class="h-screen">
    <Header />
    <router-view />
  </div>
</template>
