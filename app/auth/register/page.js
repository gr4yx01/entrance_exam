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
    const [loading, setLoading] = useState(false)
    const [_, setCookie] = useCookies(['access_token', 'role'])
    const [detail, setDetail] = useState({
      username: '',
      password: '',
      email: '',
      school: '',
      age: 0,
    })

    const handleSubmit = async () => {
      try {
          setLoading(true)
          const response = await axiosInstance.post('/auths/register', detail)

          setCookie('access_token', response.data.access_token, {
              path: '/'
          })
          setCookie('role', 'STUDENT' , {
              path: '/'
          })

          toast.success('Account created successfully')
          router.push('/user')
          setLoading(false)
      } catch (error) {
          toast.error(error?.response?.data?.message)
          setLoading(false)
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
        <div className='flex flex-col gap-2'>
          <span className='font-bold text-3xl'>Create new account</span>
          <span className='font-semibold text-gray-400 text-sm'>Ensure you use a valid email address as it would be used to verify your account</span>
        </div>
        <div className='mt-5 flex gap-5 w-full'>
          <TextField handleChange={(e) => setDetail({
            ...detail,
            username: e.target.value
          })} label='Username' />
          <TextField handleChange={(e) => setDetail({
            ...detail,
            email: e.target.value
          })} label='Email' />
        </div>
        <div className='mt-5 flex gap-5 w-full'>
          <TextField handleChange={(e) => setDetail({
            ...detail,
            school: e.target.value
          })} label='School' />
          <TextField handleChange={(e) => setDetail({
            ...detail,
            age: Number(e.target.value)
          })} label='Age' />
        </div>
          <TextField handleChange={(e) => setDetail({
            ...detail,
            password: e.target.value
          })} label='Password' type='password' secureTextEntry />
        <Button handleClick={handleSubmit} label='Create Account' loading={loading}/> 
        <div className='w-full flex justify-end items-center'>
          <button onClick={() => router.push('/')} className='font-semibold text-sm text-green-500'>Login to account</button>
        </div>
      </div>
    </div>
  );
}
