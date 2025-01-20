'use client'

import Button from '@/components/Button'
import TextField from '@/components/TextField'
import useExamStore from '@/store/exam'
import React from 'react'

const page = () => {
  const selectedExam = useExamStore((state) => state.selectedExam)

  console.log(selectedExam)

  return (
    <div className='flex w-3/5 justify-center flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <span className='text-center font-medium text-xl'>Add Questions</span>
          <span className='text-sm text-gray-500'>
            {selectedExam?.questions?.length}/{selectedExam?.noOfQuestions}
          </span>
        </div>
      <div className='gap-2 flex flex-col'>
        <TextField label={'Question'} />
        <span className='py-2 text-center'>Add Options</span>
        <TextField label={'Option A'} />
        <TextField label={'Option B'} />
        <TextField label={'Option C'} />
        <TextField label={'Option D'} />
      </div>
      <Button label={'Next'}/>
    </div>
  )
}

export default page
