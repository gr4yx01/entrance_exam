import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Button from '@/components/Button'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-[80vh]'>
        <div className='space-y-7 font-semibold text-center flex flex-col justify-center items-start border p-8 w-2/6 rounded-lg  shadow-lg'>
            <div className='flex gap-5 justify-center items-center'>
                <span>1.</span>
                <span>Who is the president of Nigeria?</span>
            </div>
            <div className='flex flex-col mt-3 space-y-4 w-full'>
            <RadioGroup defaultValue="option-one" color='green' className='gap-4'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <span htmlFor="option-one">Bola Ahmed Tinubu</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <span htmlFor="option-two">Goodluck Jonathan</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <span htmlFor="option-two">Goodluck Jonathan</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <span htmlFor="option-two">Goodluck Jonathan</span>
              </div>
            </RadioGroup>
            </div>
            <div className='w-full'>
              <Button label={'Next'} />
            </div>
        </div>
        <div className='mt-7 flex flex-col gap-3 justify-center items-center'>
          <span className='font-medium text-sm'>Time Left</span>
          <div>
            <span className='font-bold text-xl'>15</span>
            <span>:</span>
            <span>00</span>
          </div>
        </div>
    </div>
  )
}

export default page
