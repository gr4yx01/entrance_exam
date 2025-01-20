'use client'

import { axiosInstance } from '@/app/layout'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [detail, setDetail] = useState({
      name: '',
      description: '',
      duration: 0,
      noOfQuestions: 0
    })

    const handleSubmit = async () => {
      try {
        setLoading(true)
        await axiosInstance.post('/exams', detail)

        setDetail({
          name: '',
          description: '',
          duration: 0,
          noOfQuestions: 0
        })

        toast.success('Examination created')
        setLoading(false)
      } catch (err) {
        toast.error('Error creating examination')
      }
    }

  return (
    <div className='w-2/4 flex flex-col gap-5'>
        <div className='border rounded-full p-3 w-12 h-12'>
          <ArrowLeft onClick={() => router.back()}/>
        </div>
      <span className='font-semibold text-center'>Create New Examination</span>
      <div className='border shadow-lg p-8 rounded-lg flex flex-col gap-5'>
        <TextField handleChange={(e) => setDetail({
          ...detail,
          name: e.target.value
        })} label={'Name'} value={detail?.name} />
        <TextField handleChange={(e) => setDetail({
          ...detail,
          description: e.target.value
        })} label={'Description'} value={detail?.description}/>
        <TextField handleChange={(e) => setDetail({
          ...detail,
          duration: Number(e.target.value)
        })} type='number' label={'Duration'} value={detail?.duration} />
        <TextField handleChange={(e) => setDetail({
          ...detail,
          noOfQuestions: Number(e.target.value)
        })} type='number' label={'Number of Questions'} value={detail?.noOfQuestions} />
        <Button handleClick={handleSubmit} loading={loading} label={'Create'} />
      </div>
    </div>
  )
}

export default page
