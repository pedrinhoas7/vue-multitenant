<template>
    <div class="bg-white p-4 rounded-xl shadow-md w-full max-w-7xl mx-auto">
      <form @submit.prevent="emitFilter" class="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <!-- Cidade -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
          <select v-model="filters.city" class="w-full border border-gray-300 rounded px-3 py-2">
            <option value="">Todas</option>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>
  
        <!-- Tipo -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
          <select v-model="filters.type" class="w-full border border-gray-300 rounded px-3 py-2">
            <option value="">Todos</option>
            <option v-for="type in types" :value="type">{{ type }}</option>
          </select>
        </div>
  
        <!-- Faixa de preço -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Preço máximo</label>
          <input
            type="number"
            v-model.number="filters.maxPrice"
            class="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: 500000"
          />
        </div>
  
        <!-- Ordenação -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Ordenar por</label>
          <select v-model="filters.order" class="w-full border border-gray-300 rounded px-3 py-2">
            <option value="">Padrão</option>
            <option value="price_asc">Menor preço</option>
            <option value="price_desc">Maior preço</option>
          </select>
        </div>
  
        <!-- Botão -->
        <div class="md:col-span-4 sm:col-span-2 col-span-1 flex justify-end mt-2">
          <button
            type="submit"
            class="bg-primary text-white px-4 py-2 rounded hover:bg-emerald-700 transition-colors"
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { getTenantConfig } from '@/services/tenantService';
  import { getTenant } from '@/utils/tenant';
  import { getPropertiesByTenant } from '@/repositories/propertiesRepository';
  
  const filters = ref({
    city: '',
    type: '',
    maxPrice: null,
    order: '',
  });

  const config = ref({});
  const cities = ref([]);
  const types = ref([]);
  const properties = ref([]);

  console.log("properties")


  onMounted(async() => {
    config.value = await getTenantConfig(getTenant());
    properties.value = await getPropertiesByTenant(config.value.tenantId)
    cities.value = [...new Set(properties.value.map(property => property.city))];
    types.value = [...new Set(properties.value.map(property => property.type))];
  });
  
  const emit = defineEmits(['filter']);
  const emitFilter = () => {
    emit('filter', filters.value);
  };
  </script>
  