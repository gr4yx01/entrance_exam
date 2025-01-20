'use client'

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import useExamStore from '@/store/exam'
import { toast } from 'react-toastify'
import { axiosInstance } from '@/app/layout'

const Exams = () => {
  const router = useRouter()
  const { data } = useSWR('exams')
  const setSelectedExam = useExamStore((state) => state.setSelectedExam)

  const addQuestion = (exam) => {
    setSelectedExam(exam)
    router.push('/admin/questions')
  }

  const deleteExam = async (id) => {
    try {
      await axiosInstance.delete(`/exams/${id}`)

      toast.success('Examination successfully deleted')
    } catch (err) {
      toast.error('Error deleting examination')
    }
  }

  return (
    <div className='flex flex-col text-black'>
        <div className='flex justify-end items-center w-full'>
            <button onClick={() => router.push('/admin/exam/create')} className='border px-5 p-3 rounded-lg text-green-500 font-semibold'>Create Exam</button>
        </div>
        <div className='grid grid-cols-3 gap-8 p-5'>
          {
            data?.map((exam) => (
              <Card>
                <CardHeader>
                  <CardTitle className='flex justify-between items-center pb-3'>
                    <span>{exam?.name}</span>
                    <Trash2 onClick={() => deleteExam(exam?.id)} color='red'/>
                  </CardTitle>
                  <CardDescription>{exam?.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-col gap-3 text-sm'>
                    <span>Duration: {exam?.duration}</span>
                    <span>Number of Questions: {exam?.noOfQuestions}</span>
                  </div>
                </CardContent>
                <CardFooter>
                <button disabled={exam?.question?.length === exam?.noOfQuestions} onClick={() => addQuestion(exam)} className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Add Question</button>
                </CardFooter>
              </Card>
            ))
          }
        </div>
    </div>
  )
}

export default Exams
