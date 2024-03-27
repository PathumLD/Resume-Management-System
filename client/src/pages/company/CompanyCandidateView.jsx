import React from 'react'
import ViewCandidateDetails from '../../components/company/candidate/ViewCandidateDetails'

const CompanyCandidateView = () => {
  return (
    <>
      <div className='mx-10'>
      <div className='grid grid-cols-1 lg:grid-cols-5'>
      <div className='col-span-3 overflow-hidden rounded-lg bg-slate-100'>
        <ViewCandidateDetails />
      </div>
      <div className='col-span-2 mb-10 overflow-hidden'>
        {/* <CandidateResume /> */}
      </div>
      </div>
    </div>
    </>
  )
}

export default CompanyCandidateView
