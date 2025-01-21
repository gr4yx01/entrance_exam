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

import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import useExamParticipationStore from '@/store/participate'
import { toast } from 'react-toastify'
import { axiosInstance } from '../layout'

const page = () => {
  const router = useRouter()
  const { data } = useSWR('exams')
  const setSelectedExam = useExamParticipationStore((state) => state.setSelectedExam)
  const setParticipationId = useExamParticipationStore((state) => state.setParticipationId)

  const takeExamination = async (exam) => {
    try {
      const response = await axiosInstance.post(`/exams/${exam?.id}/participate`)

      setSelectedExam(exam)
      setParticipationId(response?.data?.data?.id)
      router.push('/user/exam')
    } catch (err) {
      toast.error(err?.response?.data?.message)
    }
  }

  return (
    <div className='flex flex-col text-black'>
        <div className='grid grid-cols-3 gap-8 p-5'>
          {
            data?.map((exam) => (
              <Card key={exam?.id}>
                <CardHeader>
                  <CardTitle className='flex justify-between items-center pb-3'>
                    <span>{exam?.name}</span>
                  </CardTitle>
                  <CardDescription>{exam?.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-col gap-3 text-sm'>
                    <span>Duration: {exam?.duration}min</span>
                    <span>Number of Questions: {exam?.noOfQuestions}</span>
                  </div>
                </CardContent>
                <CardFooter>
                <button onClick={() => takeExamination(exam)} className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Take Exam</button>
                </CardFooter>
              </Card>
            ))
          }
        </div>
    </div>
  )
}

export default page
