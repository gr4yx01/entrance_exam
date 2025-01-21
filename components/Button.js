import { Loader2 } from 'lucide-react'
import React from 'react'

const Button = ({label, handleClick, loading, disabled }) => {
  return (
    <button disabled={disabled} onClick={handleClick} className={`${disabled ? "bg-gray-400" : "bg-green-500"} text-white w-full rounded-md flex justify-center items-center p-3 font-semibold`}>
      {
        loading ? <Loader2 className='animate-spin w-6 h-6' /> : (
          <span>{label}</span>
        )
      }
    </button>
  )
}

export default Button