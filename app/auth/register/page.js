'use client';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { Landmark } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter()

  return (
    <div className="flex h-screen">
      <div className="bg-green-400 h-screen w-3/5 flex flex-col space-y-10 justify-center items-center">
        <div className='flex justify-center items-center flex-col w-64 gap-4'>
          <Landmark size={40}/>
          <span className='font-semibold text-2xl text-center'>National Common Entrance Examination</span>
        </div>
        <div className='w-3/5 font-medium text-lg'>
        The National Common Entranced Examination for admission into Junior Secondary School (JSS 1) of Federal Government Unity Colleges will be held throughout the country and other interested foreign countries.
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center items-start px-32 w-full gap-5">
        <div className='flex flex-col gap-2'>
          <span className='font-bold text-3xl'>Create new account</span>
          <span className='font-semibold text-gray-400 text-sm'>Ensure you use a valid email address as it would be used to verify your account</span>
        </div>
        <div className='mt-5 flex gap-5 w-full'>
          <TextField label='Username' />
          <TextField label='Email' />
        </div>
        <div className='mt-5 flex gap-5 w-full'>
          <TextField label='School' />
          <TextField label='Age' />
        </div>
          <TextField label='Password' type='password' secureTextEntry />
        <Button label='Create Account' />
        <div className='w-full flex justify-end items-center'>
          <button onClick={() => router.push('/')} className='font-semibold text-sm text-green-500'>Login to account</button>
        </div>
      </div>
    </div>
  );
}
