import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTenant } from '@/utils/tenant'
import { getTenantConfig } from '@/services/tenantService'

export const useTenantStore = defineStore('tenant', () => {
    const tenant = ref(getTenant())
    const config = ref<any | null>(null)
    const isLoaded = ref(false)
    const tenantId = ref('')

    const loadConfig = async () => {
        config.value = await getTenantConfig(tenant.value)
        console.log('Tenant config:')
        console.log(config.value)
        tenantId.value = config.value.tenantId
        isLoaded.value = true
    }

    return {
        tenantId,
        config,
        isLoaded,
        loadConfig
    }
})
