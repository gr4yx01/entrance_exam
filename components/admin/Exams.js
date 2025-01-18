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

const Exams = () => {
  return (
    <div className='flex flex-col text-black'>
        <div className='flex justify-end items-center w-full'>
            <button className='border px-5 p-3 rounded-lg text-green-500 font-semibold'>Create Exam</button>
        </div>
        <div className='grid grid-cols-3 gap-8 p-5'>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between items-center pb-3'>
                <span>English Language</span>
                <Trash2 color='red'/>
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
              <button className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Add Question</button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between items-center pb-3'>
                <span>English Language</span>
                <Trash2 color='red'/>
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
              <button className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Add Question</button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between items-center pb-3'>
                <span>English Language</span>
                <Trash2 color='red'/>
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
              <button className='bg-green-500 w-full p-2 text-white font-semibold rounded-lg'>Add Question</button>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}

export default Exams
