import { create } from 'zustand'

const useExamStore = create((set) => ({
    selectedExam: {},
    setSelectedExam: (exam) => set({ selectedExam: exam })
}))

export default useExamStore