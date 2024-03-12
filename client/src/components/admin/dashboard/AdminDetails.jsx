import React from 'react'
import { FiUsers } from 'react-icons/fi';

const AdminDetails = () => {
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 ">
            <div className="h-40 p-4 rounded-lg shadow-xl bg-gray-50 ">
                <div className='flex flex-col items-center justify-center h-full'>
                    <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                    <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                        Total Application
                    </h5>
                    <h1 className='text-2xl font-semibold text-center lg:text-3xl'>
                        20
                    </h1> 
                </div>
            </div>

            <div className="h-40 p-4 rounded-lg shadow-xl bg-gray-50 ">
                <div className='flex flex-col items-center justify-center h-full'>
                    <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                    <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                        Total Application
                    </h5>
                    <h1 className='text-2xl font-semibold text-center lg:text-3xl'>
                        20
                    </h1> 
                </div>
            </div>

            <div className="h-40 p-4 rounded-lg shadow-xl bg-gray-50 ">
                <div className='flex flex-col items-center justify-center h-full'>
                    <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                    <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                        Total Application
                    </h5>
                    <h1 className='text-2xl font-semibold text-center lg:text-3xl'>
                        20
                    </h1> 
                </div>
            </div>

            <div className="h-40 p-4 rounded-lg shadow-xl bg-gray-50 ">
                <div className='flex flex-col items-center justify-center h-full'>
                    <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                    <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                        Total Application
                    </h5>
                    <h1 className='text-2xl font-semibold text-center lg:text-3xl'>
                        20
                    </h1> 
                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default AdminDetails
