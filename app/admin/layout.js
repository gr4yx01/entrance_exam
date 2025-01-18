import UserNav from '../../components/UserNav'
import React from 'react'

const layout = ({children}) => {
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
