import React from 'react'
import AdminDetails from '../../components/admin/dashboard/AdminDetails'
import CompanyRequest from '../../components/admin/dashboard/CompanyRequest'

const AdminDashboard = () => {
  return (
    <>
       <div className='w-full overflow-hidden'>
      <div className='flex flex-wrap justify-center lg:mt-6 lg:mx-10 gap-x-4 gap-y-2'>
        <AdminDetails />
      </div>
      <div className='mt-10 '>
        <CompanyRequest />
      </div>
      </div>
    </>
  )
}

export default AdminDashboard
