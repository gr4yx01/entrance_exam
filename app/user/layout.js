'use client'

import Header from '@/components/Header'
import { isTokenExpired } from '@/helper'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React, { useEffect } from 'react'

const layout = ({ children }) => {
  const { role, access_token } = parseCookies()
    const router = useRouter()
  
    useEffect(() => {
      if(isTokenExpired(access_token)) {
        document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        router.push('/auth/login')
      }
  
      if(role === 'ADMIN') {
        router.push('/admin')
      } else if (!role) {
        router.push('/auth/login')
      }
    }, [])

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default layout
