<template>
  <div class="p-4 border rounded-xl shadow-lg max-w-md mx-auto space-y-4">
    <h2 class="text-xl font-bold mb-2">Importar JSON via Textarea</h2>

    <!-- Textarea para colar o JSON -->
    <label class="block">
      <span class="font-medium">Cole aqui o JSON</span>
      <textarea v-model="jsonInput" class="mt-2 w-full h-40 p-2 border rounded font-mono text-sm" placeholder='[ { "title": "Apartamento", "address": "Av. Paulista, São Paulo - SP", "city": "São Paulo", "clientId": "tenant-1", "description": "2 quartos, 1 vaga, perto do metrô.", "image": "https://placehold.co/600x400?text=Imovel+1", "price": "450000", "tenantId": "tenant-2", "type": "apartamento" } ]'></textarea>
    </label>

    <button @click="handleImport" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
      Importar
    </button>

    <div v-if="importedJson" class="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-96">
      <pre>{{ importedJson }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { db, collection, addDoc } from "../../firebase"; 

const jsonInput = ref("");
const importedJson = ref<string | null>(null);

// 📥 Importa o JSON da textarea e envia para o Firebase
async function handleImport() {
  try {
    const parsed = JSON.parse(jsonInput.value);
    importedJson.value = JSON.stringify(parsed, null, 2); // Exibe o JSON bonito

    // Enviar para o Firestore
    const collectionRef = collection(db, "properties"); // Substitua "imoveis" pelo nome da sua coleção
    for (const item of parsed) {
      await addDoc(collectionRef, item); // Adiciona cada item do JSON à coleção
    }

    importedJson.value = "✅ Importação bem-sucedida!";
  } catch (error) {
    importedJson.value = "❌ JSON inválido!";
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
