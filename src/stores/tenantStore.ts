import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTenant } from '@/utils/tenant'
import { getTenantConfig } from '@/services/tenantService'

export const useTenantStore = defineStore('tenant', () => {
    const tenantId = ref(getTenant()) // ex: retorna 'cliente1'
    const config = ref<any | null>(null)
    const isLoaded = ref(false)

    const loadConfig = async () => {
        config.value = await getTenantConfig(tenantId.value)
        isLoaded.value = true
    }

    return {
        tenantId,
        config,
        isLoaded,
        loadConfig
    }
})
