import React from 'react';
import DetailsCard from '../../components/candidate/all-vacancies/DetailsCard';
import JobsTable from '../../components/candidate/all-vacancies/JobsTable';
import SearchBar from '../../components/candidate/common/SearchBar';

const CandidateAllVacancies = () => {

  return (
    <div className='w-full p-4 overflow-hidden rounded-lg bg-slate-100 h-[calc(100vh-110px)]  '>
      <div className='flex flex-wrap justify-center lg:mt-6 lg:mx-10 gap-x-4 gap-y-2'>
        <DetailsCard />
      </div>
      <div className='flex flex-wrap justify-center mt-4 lg:mt-6 lg:mx-10 gap-x-4 gap-y-2'>
        <SearchBar />
      </div>
      <div className='mt-4 overflow-x-auto bg-white rounded-lg shadow-lg lg:mt-6'>
        <JobsTable />
      </div>
    </div>
  );
};

export default CandidateAllVacancies;
