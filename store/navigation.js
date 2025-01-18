import { create } from 'zustand'

export const useNavigation = create((set) => ({
    current: 'exams',
    setNavigation: (current) => set({ current })
}))