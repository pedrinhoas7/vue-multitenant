<script setup lang="ts">
import Header from './components/Header.vue'
import { onMounted, ref, watch } from 'vue'
import { useTenantStore } from './stores/tenantStore'
import { getTenant } from '@/utils/tenant';
import { getTenantConfig } from '@/services/tenantService';

const config = ref({})
const tenantStore = useTenantStore()
onMounted(async () => {
  config.value = await getTenantConfig(getTenant())
})
watch(
  () => config.value,
  (newTenant) => {
    if (newTenant) {
      document.title = newTenant.title; 
      document.documentElement.style.setProperty('--background-color', newTenant.backgroundColor);
      document.documentElement.style.setProperty('--primary-color', newTenant.primaryColor);
    }
  },
  { immediate: true }
)

</script>

<template>
  <div id="content" class="min-h-screen bg-black flex flex-col">
    <Header />
    <router-view class="flex-1" />
  </div>

</template>
