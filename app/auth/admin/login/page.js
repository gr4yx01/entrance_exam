'use client';

import { axiosInstance } from '@/app/layout';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { Landmark } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

export default function page() {
  const router = useRouter()
  const [_, setCookie] = useCookies(['access_token', 'role'])
  const [detail, setDetail] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post('/auths/login/admin', detail)

      setCookie('access_token', response?.data?.access_token, {
        path: '/'
      })

      setCookie('role', 'ADMIN', {
        path: '/'
      })

      router.push('/admin')
      toast.success('Login successful')
    } catch (err)  {
      toast.error('Error logging in')
    }
  }
  
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
        
        <div className='flex flex-col gap-5'>
          <span className='font-bold text-3xl'>Login as Admin</span>
          <span className='font-semibold text-gray-400 text-sm'>Login with your email & password</span>
        </div>
        <div className='mt-5 flex flex-col gap-5 w-full'>
          <TextField handleChange={(e) => setDetail({
            ...detail,
            email: e.target.value
          })} label='Email' />
          <TextField handleChange={(e) => setDetail({
            ...detail,
            password: e.target.value
          })} label='Password' type='password' secureTextEntry />
        </div>
        <Button handleClick={handleSubmit} label='Login to account' />
        <div className='w-full flex justify-end items-center'>
        </div>
      </div>
    </div>
  );
}
