import { create } from 'zustand'

const useUserStore = create((set) => ({
    id: '',
    name: '',
    email: '',
    photo: '',
    isLogged: false,
    login: (user) => set({
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo,
        isLogged: true,
    }),
    logout: () => set({ 
        id: '',
        name: '',
        email: '',
        photo: '',
        isLogged: false,
    }),
}))

export default useUserStore