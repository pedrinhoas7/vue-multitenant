<template>
  <div class="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
    <img :src="image" alt="Imagem do imóvel" class="w-full h-48 object-cover" />
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h2 class="text-lg font-semibold text-neutral-black mb-1">{{ title }}</h2>
        <p class="text-sm text-gray-600">{{ address }}</p>
        <p class="text-green-600 font-bold mt-2 text-lg">R$ {{ formatPrice(price) }}</p>
        <p class="text-sm text-gray-500 mt-2">{{ description }}</p>
        <p class="text-sm text-gray-500 mt-2">{{ type }}</p>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <button @click="toggleFavorite" class="text-red-500 hover:scale-110 transition"
          :aria-label="favorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="1.5" class="w-6 h-6">
            <path :fill="favorited ? 'currentColor' : 'none'" stroke-linecap="round" stroke-linejoin="round"
              d="M12 21C12 21 4 13.8 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.8 16 21 16 21H12Z" />
          </svg>
        </button>

        <button class="bg-primary text-white px-4 py-2 rounded hover:bg-emerald-700 text-sm">
          Saiba mais
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

defineProps(['title', 'address', 'price', 'image', 'description', 'type'])

const favorited = ref(false)
const userStore = useUserStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const toggleFavorite = async () => {
  if (!userStore.isLoggedIn) {
    await userStore.loginWithGoogle()
    return
  }
  favorited.value = !favorited.value
}

</script>