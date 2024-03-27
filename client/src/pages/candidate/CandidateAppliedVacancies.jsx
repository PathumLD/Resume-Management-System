import React from 'react'
import Table from '../../components/candidate/applied-vacancies/Table'
import SearchBar from '../../components/candidate/common/SearchBar'


const CandidateAppliedVacancies = () => {
  return (
    <>
      <div className='w-full p-4 overflow-hidden rounded-lg h-[calc(100vh-110px)] bg-slate-100 '>
      
      <div className='my-1 lg:my-2'>
        <Table />
      </div>
    </div>
    </>
  )
}

export default CandidateAppliedVacancies
