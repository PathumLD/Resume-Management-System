import React from 'react';
import DetailsCard from '../../components/candidate/all-vacancies/DetailsCard';
import JobsTable from '../../components/candidate/all-vacancies/JobsTable';

const CandidateAllVacancies = () => {

  return (
    <div className='w-full overflow-hidden'>
      <div className='flex flex-wrap justify-center lg:mt-6 lg:mx-10 gap-x-4 gap-y-2'>
        <DetailsCard />
      </div>
      <div className='mt-4 overflow-x-auto lg:mt-6'>
        <JobsTable />
      </div>
    </div>
  );
};

export default CandidateAllVacancies;
