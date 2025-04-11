// src/stores/imovelStore.ts
import { defineStore } from 'pinia'

export const useImovelStore = defineStore('imovel', {
    state: () => ({
        imoveis: [] as Array<any>, // você pode tipar melhor isso se quiser
    }),
    actions: {
        adicionarImovel(imovel: any) {
            this.imoveis.push(imovel)
        },
        removerImovel(index: number) {
            this.imoveis.splice(index, 1)
        }
    },
    getters: {
        totalImoveis: (state) => state.imoveis.length
    }
})
