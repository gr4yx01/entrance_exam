'use client'

import Exams from '../../components/admin/Exams'
import Participants from '../../components/admin/Participants'
import { useNavigation } from '../../store/navigation'
import React from 'react'

const page = () => {
  const current = useNavigation((state) => state.current)

  return (
    <div>
      {
        current === 'exams' ? <Exams /> : <Participants />
      }
    </div>
  )
}

export default page
