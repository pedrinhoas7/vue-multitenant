<template>
  <div class="space-y-6">
    <PropertyFilter @filter="applyFilters" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="property in filteredProperties" :key="property.id" :title="property.title"
        :address="property.address" :price="property.price" :image="property.image"
        :description="property.description" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Card from './Card.vue';
import PropertyFilter from './PropertyFilter.vue';
import { useTenantStore } from '@/stores/tenantStore';
import { getPropertiesByTenant } from '@/repositories/propertiesRepository';
import { getTenant } from '@/utils/tenant';
import { getTenantConfig } from '@/services/tenantService';

const tenantStore = useTenantStore()
const config = ref({})
const properties = ref([])
onMounted(async() => {
  config.value = await getTenantConfig(getTenant())
  properties.value = await getPropertiesByTenant(config.value.tenantId)
})  

const filters = ref({
  city: '',
  type: '',
  maxPrice: null,
  order: ''
});

const applyFilters = (newFilters) => {
  filters.value = { ...newFilters };
};

const filteredProperties = computed(() => {
  let list = [...properties.value];

  if (filters.value.city) {
    list = list.filter(p => p.city === filters.value.city);
  }

  if (filters.value.type) {
    list = list.filter(p => p.type === filters.value.type);
  }

  if (filters.value.maxPrice) {
    list = list.filter(p => p.price <= filters.value.maxPrice);
  }

  if (filters.value.order === 'price_asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (filters.value.order === 'price_desc') {
    list.sort((a, b) => b.price - a.price);
  }

  return list;
});
</script>