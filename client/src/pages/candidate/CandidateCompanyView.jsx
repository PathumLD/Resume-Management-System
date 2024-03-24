import React from 'react'
import CompanyExtra from '../../components/company/profile/CompanyExtra'
import ProfileDetailsView from '../../components/candidate/companies/ProfileDetailsView'

const CandidateCompanyView = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        <div className='col-span-1 overflow-hidden'>
            <ProfileDetailsView />
        </div>
        <div className='col-span-1 mb-10 overflow-hidden'>
            <CompanyExtra />
        </div>
      </div>
    </>
  )
}

export default CandidateCompanyView
