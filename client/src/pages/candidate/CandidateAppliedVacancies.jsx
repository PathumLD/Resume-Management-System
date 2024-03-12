import React from 'react'
import Table from '../../components/candidate/applied-vacancies/Table'
import SearchBar from '../../components/candidate/common/SearchBar'


const CandidateAppliedVacancies = () => {
  return (
    <>
      <div className='w-full overflow-hidden'>
      <div className='flex flex-wrap justify-center lg:mt-2 lg:mx-10 gap-x-4 gap-y-2'>
        <SearchBar />
      </div>
      <div className='mt-1 overflow-x-auto lg:mt-2'>
        <Table />
      </div>
    </div>
    </>
  )
}

export default CandidateAppliedVacancies
