'use client'

import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React from 'react'

const layout = ({ children }) => {
  const { role } = parseCookies()
    const router = useRouter()
  
    useEffect(() => {
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
