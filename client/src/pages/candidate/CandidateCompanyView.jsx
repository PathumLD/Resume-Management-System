import React from 'react'
import ProfileDetailsView from '../../components/candidate/companies/ProfileDetailsView'
import VacancyDetailsView from '../../components/candidate/companies/VacancyDetailsView'

const CandidateCompanyView = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        <div className='col-span-1 overflow-hidden'>
            <ProfileDetailsView />
        </div>
        <div className='col-span-1 mb-10 overflow-hidden'>
            <VacancyDetailsView />
        </div>
      </div>
    </>
  )
}

export default CandidateCompanyView
