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
  

const Header = () => {

  const handleLogOut = () => {
    document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    router.push('/')
  }

  return (
    <div className='flex justify-between items-center p-5 border-b shadow-xs'>
      <span className='font-semibold text-2xl w-2/5'>NCEE</span>
      <div className='flex gap-5'>
        <button>Result</button>
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
