import { create } from 'zustand'

const useExamParticipationStore = create((set) => ({
  selectedExam: {},
  participationId: '',
  setSelectedExam: (exam) => set({ selectedExam: exam }),
  setParticipationId: (id) => set({ participationId: id }),
}))

export default useExamParticipationStore