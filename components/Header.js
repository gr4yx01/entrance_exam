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
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header
