'use client'

import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()

  return (
    <div className='w-2/4 flex flex-col gap-5'>
        <div className='border rounded-full p-3 w-12 h-12'>
          <ArrowLeft onClick={() => router.back()}/>
        </div>
      <span className='font-semibold text-center'>Create New Examination</span>
      <div className='border shadow-lg p-8 rounded-lg flex flex-col gap-5'>
        <TextField label={'Name'} />
        <TextField label={'Description'} />
        <TextField label={'Duration'} />
        <TextField label={'Number of Questions'} />
        <Button label={'Create'} />
      </div>
    </div>
  )
}

export default page
