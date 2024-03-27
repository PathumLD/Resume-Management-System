import React from 'react'
import AppointmentCalendar from '../../components/candidate/interview/Calendar'



const CandidateInterviews = () => {
  return (
    <div className='w-full p-4 overflow-hidden rounded-lg h-[calc(100vh-110px)] bg-slate-100 '>
      <AppointmentCalendar />
    </div>
  )
}

export default CandidateInterviews
