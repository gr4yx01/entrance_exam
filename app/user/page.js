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

const page = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col text-black'>
        <div className='grid grid-cols-3 gap-8 p-5'>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between items-center pb-3'>
                <span>English Language</span>
              </CardTitle>
              <CardDescription>Take this examination to test your language skill</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col gap-3 text-sm'>
                <span>Duration: 1hr 30mins</span>
                <span>Number of Questions: 20</span>
              </div>
            </CardContent>
            <CardFooter>
            <button onClick={() => router.push('/user/exam')} className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Take Exam</button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between items-center pb-3'>
                <span>Current Affairs</span>
              </CardTitle>
              <CardDescription>Take this examination to test your language skill</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col gap-3 text-sm'>
                <span>Duration: 1hr 30mins</span>
                <span>Number of Questions: 20</span>
              </div>
            </CardContent>
            <CardFooter>
              <button onClick={() => router.push('/admin/questions')} className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Take Exam</button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between items-center pb-3'>
                <span>Mathematics</span>
              </CardTitle>
              <CardDescription>Take this examination to test your language skill</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col gap-3 text-sm'>
                <span>Duration: 1hr 30mins</span>
                <span>Number of Questions: 20</span>
              </div>
            </CardContent>
            <CardFooter>
              <button className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Take Exam</button>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}

export default page
