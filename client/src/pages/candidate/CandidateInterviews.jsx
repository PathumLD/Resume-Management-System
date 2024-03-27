import React from 'react'
import AppointmentCalendar from '../../components/candidate/interview/Calendar'



const CandidateInterviews = () => {
  return (
    <div className=''>
      <div className=' w-full p-4  overflow-hidden rounded-lg h-[calc(100vh-80px)] bg-white'>
      <AppointmentCalendar />
    </div>
    </div>
  )
}

export default CandidateInterviews
