import React from 'react';
import CompanyProfileInfo from '../../components/company/profile/CompanyProfileInfo';
import CompanyExtra from '../../components/company/profile/CompanyExtra';

function CompanyProfile() {
  return (
    <>
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      <div className='col-span-1 overflow-hidden rounded-lg bg-slate-100'>
        <CompanyProfileInfo />
      </div>
      <div className='col-span-1 px-4 mb-10 overflow-hidden rounded-lg bg-slate-100'>
        <CompanyExtra />
      </div>
    </div>
    </>
  );
}

export default CompanyProfile;