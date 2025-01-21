'use client'

import React, { useMemo, useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Button from '@/components/Button'
import useExamParticipationStore from '@/store/participate'
import useSWR from 'swr'
import Timer from '@/components/Timer'
import { axiosInstance } from '@/app/layout'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const page = () => {
  const selectedExam = useExamParticipationStore((state) => state.selectedExam)
  const participationId = useExamParticipationStore((state) => state.participationId)
  const { data } = useSWR(`questions/exam/${selectedExam?.id}`)
  const questions = useMemo(() => data?.data, [data])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")
  const [score, setScore] = useState(0)

  const computeScore = () => {
    if(optionChosen === questions[currentIndex]?.correctOption) {
      setScore((prev) => prev + 1)
    } else {
      setScore((prev) => prev - 1 < 0 ? 0 : prev - 1)
    }
  }

  const handleNext = () => {
    computeScore()
    setCurrentIndex((prev) => prev + 1)
  }

  const handleSubmit = async () => {
    setLoading(false)
    let scoreToUpload = score
    if(optionChosen == questions[currentIndex]?.correct) {
      scoreToUpload += 1
    }else {
      scoreToUpload = scoreToUpload - 1 < 0 ? 0 : scoreToUpload - 1
    }

    try {
      await axiosInstance.post(`/exams/${participationId}/submit`, {
        score: scoreToUpload
      })

      toast.success('Exam submitted successfully')
      setLoading(true)
      router.push('/user')
    } catch (err) {
      toast.error('Error submitting exam')
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center h-[80vh]'>
      {
        questions && (
          <div className='space-y-7 font-semibold text-center flex flex-col justify-center items-start border p-8 w-2/6 rounded-lg  shadow-lg'>
              <div className='flex gap-5 justify-center items-center'>
                  <span>{currentIndex + 1}.</span>
                  <span>{questions[currentIndex]?.question}?</span>
              </div>
              <div className='flex flex-col mt-3 space-y-4 w-full'>
              <RadioGroup value={optionChosen} onValueChange={(value) => setOptionChosen(value)} color='green' className='gap-4'>
                {
                  questions[currentIndex]?.options.map((option, index) => (
                    <div key={option?.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option?.option} id={option} />
                      <span >{option?.option}</span>
                    </div>
                  ))
                }
              </RadioGroup>
              </div>
              <div className='w-full'>
                <Button loading={loading} handleClick={selectedExam?.noOfQuestions === currentIndex + 1 ? handleSubmit : handleNext } label={selectedExam?.noOfQuestions === currentIndex + 1 ? 'Submit' : 'Next'} />
              </div>
          </div>
        )
      }
        <div className='mt-7 flex flex-col gap-3 justify-center items-center'>
          <span className='font-medium text-sm'>Time Left</span>
          <Timer duration={selectedExam?.duration} onTimeUp={handleSubmit} />
        </div>
    </div>
  )
}

export default page
