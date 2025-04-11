// src/stores/userStore.ts
import { defineStore } from 'pinia'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase' // certifique-se de que esse caminho está correto

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null as null | {
            name: string
            email: string
            photo: string
        },
    }),

    getters: {
        isLoggedIn: (state) => !!state.user,
        userName: (state) => state.user?.name || '',
        userPhoto: (state) => state.user?.photo || '',
    },

    actions: {
        async loginWithGoogle() {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            this.user = {
                name: user.displayName || '',
                email: user.email || '',
                photo: user.photoURL || '',
            }
        },

        async logout() {
            await signOut(auth)
            this.user = null
        },

        fetchUserOnStart() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log('User is logged in:', user)
                    this.user = {
                        name: user.displayName || '',
                        email: user.email || '',
                        photo: user.photoURL || '',
                    }

                } else {
                    this.user = null
                }
            })
        }
    }
})
