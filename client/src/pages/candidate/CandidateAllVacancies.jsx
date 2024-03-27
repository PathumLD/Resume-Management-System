import React from 'react';
import DetailsCard from '../../components/candidate/all-vacancies/DetailsCard';
import JobsTable from '../../components/candidate/all-vacancies/JobsTable';
import SearchBar from '../../components/candidate/common/SearchBar';

const CandidateAllVacancies = () => {

  return (
    <div className='w-full  overflow-hidden rounded-lg bg-slate-200 h-[calc(100vh-80px)]  '>
      <div className='p-4 bg-white rounded-lg h-[calc(100vh-80px)]'>
      <div className='flex flex-wrap justify-center lg:mt-6 lg:mx-10 gap-x-4 gap-y-2'>
        <DetailsCard />
      </div>
      <div className='flex flex-wrap justify-center mt-4 lg:mt-6 lg:mx-10 gap-x-4 gap-y-2'>
        {/* <SearchBar /> */}
      </div>
      <div className='mt-4 overflow-x-auto rounded-lg shadow-lg bg-slate-50 lg:mt-6'>
        <JobsTable />
      </div>
      </div>
    </div>
  );
};

export default CandidateAllVacancies;
