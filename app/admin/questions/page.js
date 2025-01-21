'use client'

import Button from '@/components/Button'
import TextField from '@/components/TextField'
import useExamStore from '@/store/exam'
import React, { useMemo, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { axiosInstance } from '@/app/layout'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const page = () => {
  const selectedExam = useExamStore((state) => state.selectedExam)
  const [noOfQuestion, setNoOfQuestion] = useState(selectedExam?.questions?.length)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [question, setQuestion] = useState({
    question: '',
    correctOption: 0,
  })
  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [optionC, setOptionC] = useState('')
  const [optionD, setOptionD] = useState('')
  const options = useMemo(() => [optionA, optionB, optionC, optionD], [optionA, optionB, optionC, optionD])

  const handleSubmit = async () => {
    try {
      if(selectedExam?.noOfQuestions === (selectedExam?.questions?.length + questions?.length + 1)) {
        setLoading(true)
        const questionsToUpload = [...questions, {
          question: question.question,
          options,
          correctOption: options[question?.correctOption],
        }]

        questionsToUpload.forEach(async (question) => {
          await axiosInstance.post(`/questions/${selectedExam?.id}`, {
            question: question?.question,
            options: question?.options,
            correct: question?.correctOption
          })
        })
       
          setLoading(false)
        toast.success('Question Added')
        router.push('/admin')
      } else {
        setQuestions([
          ...questions,
          {
            question: question.question,
            options,
            correctOption: options[question?.correctOption],
          }
      ])
        setQuestion({
          question: '',
          correctOption: 0,
        })
        setOptionA('')
        setOptionB('')
        setOptionC('')
        setOptionD('')
      }
    } catch (err) {
      toast.error('An error occurred')
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <div className='flex w-3/5 justify-center flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <span className='text-center font-medium text-xl'>Add Questions</span>
          <span className='text-sm text-gray-500'>
            {questions?.length + noOfQuestion + 1}/{selectedExam?.noOfQuestions}
          </span>
        </div>
      <div className='gap-2 flex flex-col'>
        <TextField value={question?.question} handleChange={(e) => setQuestion({
          ...question, 
          question: e.target.value
        })} label={'Question'} />
        <span className='py-2 text-center'>Add Options</span>
        <TextField value={optionA} handleChange={(e) => setOptionA(e.target.value)} label={'Option A'} />
        <TextField value={optionB} handleChange={(e) => setOptionB(e.target.value)} label={'Option B'} />
        <TextField value={optionC} handleChange={(e) => setOptionC(e.target.value)} label={'Option C'} />
        <TextField value={optionD} handleChange={(e) => setOptionD(e.target.value)} label={'Option D'} />
      </div>
      <Select>
  <SelectTrigger className="">
    <SelectValue value={question?.correctOption} onChange={(value) => setQuestion({
      ...question,
      correctOption: Number(value)
    })} placeholder="Select Correct Option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value={0}>{optionA}</SelectItem>
    <SelectItem value={1}>{optionB}</SelectItem>
    <SelectItem value={2}>{optionC}</SelectItem>
    <SelectItem value={3}>{optionD}</SelectItem>
  </SelectContent>
</Select>

      <Button handleClick={handleSubmit} label={selectedExam?.noOfQuestions !== (selectedExam?.questions?.length + questions?.length + 1) ? 'Next' : 'Submit'} loading={loading} />
    </div>
  )
}

export default page
