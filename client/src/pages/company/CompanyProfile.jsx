import React from 'react';
import CompanyProfileInfo from '../../components/company/profile/CompanyProfileInfo';
import CompanyExtra from '../../components/company/profile/CompanyExtra';

function CompanyProfile() {
  return (
    <>
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 h-[calc(100vh-80px)]'>
      <div className='col-span-1 overflow-hidden bg-white rounded-lg'>
        <CompanyProfileInfo />
      </div>
      <div className='col-span-1 px-4 overflow-hidden bg-white rounded-lg'>
        <CompanyExtra />
      </div>
    </div>
    </>
  );
}

export default CompanyProfile;