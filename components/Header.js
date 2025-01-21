'use client'

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { UserIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { parseCookies } from 'nookies'
  

const Header = () => {
  const router = useRouter()
  const { role } = parseCookies()

  const handleLogOut = () => {
    document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    router.push('/')
  }

  return (
    <div className='flex justify-between items-center p-5 border-b shadow-xs'>
      <Link href={role === 'ADMIN' ? '/admin' : role === 'STUDENT' ? '/user' : '/'} className='font-semibold text-2xl w-2/5'>NCEE</Link>
      <div className='flex gap-5'>
        <button onClick={() => router.push('/user/result')}>Result</button>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center gap-3 border rounded-full p-3 pr-4 outline-none'>
            <UserIcon size={14} />
            Henry
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogOut}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header
