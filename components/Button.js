import React from 'react'

const Button = ({label, handleClick }) => {
  return (
    <button className='bg-green-600 text-white w-full rounded-md flex justify-center items-center p-3 font-semibold'>
      {label}
    </button>
  )
}

export default Button
