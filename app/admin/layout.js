'use client'

import { parseCookies } from 'nookies'
import UserNav from '../../components/UserNav'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isTokenExpired } from '@/helper'

const layout = ({children}) => {
  const { role, access_token } = parseCookies()
  const router = useRouter()

  useEffect(() => {
    if(isTokenExpired(access_token)) {
      document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
      document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
      router.push('/auth/admin/login')
    }

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
