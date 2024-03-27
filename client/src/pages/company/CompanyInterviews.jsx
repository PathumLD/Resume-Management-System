import React from 'react'
import CompanyCalendar from '../../components/company/interviews/CompanyCalendar'

const CompanyInterviews = () => {
  return (
    <div className='w-full p-4 overflow-hidden rounded-lg h-[calc(100vh-110px)] bg-slate-100 '>
      <CompanyCalendar />
    </div>
  )
}

export default CompanyInterviews
