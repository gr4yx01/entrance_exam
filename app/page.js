'use client';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { Landmark } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
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
        <div className='flex justify-end w-full items-center gap-5'>
            <button onClick={() => router.push('/auth/admin/login')} className='border py-2 shadow-md bg-green-500 text-white font-semibold px-4 rounded-lg'>
                Admin
            </button>
        </div>
        <div className='flex flex-col gap-5'>
          <span className='font-bold text-3xl'>Login</span>
          <span className='font-semibold text-gray-400 text-sm'>Login with your email & password</span>
        </div>
        <div className='mt-5 flex flex-col gap-5 w-full'>
          <TextField label='Username' />
          <TextField label='Password' type='password' secureTextEntry />
        </div>
        <Button label='Login to account' />
        <div className='w-full flex justify-end items-center'>
        <button onClick={() => router.push('/auth/register')} className='font-semibold text-sm text-green-500'>Create Account</button>
        </div>
      </div>
    </div>
  );
}
