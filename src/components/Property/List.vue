<template>
    <div class="space-y-6">
      <PropertyFilter @filter="applyFilters" />
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="property in filteredProperties"
          :key="property.id"
          :title="property.title"
          :address="property.address"
          :price="property.price"
          :image="property.image"
          :description="property.description"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Card from './Card.vue';
  import PropertyFilter from './PropertyFilter.vue';
  
  //TODO: Add a function to fetch properties from an API or database
  const properties = ref([
    {
      id: 1,
      title: 'Apartamento Moderno',
      address: 'Av. Paulista, São Paulo - SP',
      price: 450000,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      description: '2 quartos, 1 vaga, perto do metrô.',
      type: 'apartamento',
      city: 'São Paulo'
    },
    {
      id: 2,
      title: 'Casa com quintal',
      address: 'Rua das Flores, Curitiba - PR',
      price: 350000,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      description: '3 quartos, ótimo espaço externo.',
      type: 'casa',
      city: 'Curitiba'
    },
    {
      id: 3,
      title: 'Kitnet mobiliada',
      address: 'Centro, Rio de Janeiro - RJ',
      price: 190000,
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20e',
      description: 'Ideal para estudantes e solteiros.',
      type: 'kitnet',
      city: 'Rio de Janeiro'
    }
  ]);
  
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
  