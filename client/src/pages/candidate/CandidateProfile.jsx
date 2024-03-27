import React from 'react'
import CandidateProfileInfo from '../../components/candidate/candidate-profile/CandidateProfileInfo'
import CandidateResume from '../../components/candidate/candidate-profile/CandidateResume'

const CandidateProfile = () => {
  return (
    <>
      <div className='mx-10'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
      <div className='col-span-3 overflow-hidden bg-white rounded-lg'>
        <CandidateProfileInfo />
      </div>
      <div className='col-span-2 px-4 overflow-hidden bg-white rounded-lg'>
        <CandidateResume />
      </div>
      </div>
    </div>
    </>
  )
}

export default CandidateProfile
