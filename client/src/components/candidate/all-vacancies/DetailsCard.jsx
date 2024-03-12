import React from 'react';
import { FiUsers } from 'react-icons/fi';


const DetailsCard = () => {
  return (
    <>

        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 ">
            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Application
                </h5>
                <h1 className='text-2xl font-semibold text-center lg:text-3xl'>
                    20
                </h1> 
            </div>
            
            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Application
                </h5>
                <h1 className='text-2xl font-semibold text-center sm:text-3xl'>
                    20
                </h1>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Application
                </h5>
                <h1 className='text-2xl font-semibold text-center sm:text-3xl'>
                    20
                </h1>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Application
                </h5>
                <h1 className='text-2xl font-semibold text-center sm:text-3xl'>
                    20
                </h1>
            </div>
        </div>
     
    </>
  );
};


export default DetailsCard;
