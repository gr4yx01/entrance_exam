'use client'

import { parseCookies } from 'nookies'
import UserNav from '../../components/UserNav'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const layout = ({children}) => {
  const { role } = parseCookies()
  const router = useRouter()

  useEffect(() => {
    if(role === 'STUDENT') {
      router.push('/user')
    } else if (!role) {
      router.push('/auth/admin/login')
    }
  }, [])

  return (
    <div className='flex'>
      <UserNav />
      <div className='bg-white flex-1 p-10'>
        {children}
      </div>
    </div>
  )
}

export default layout
