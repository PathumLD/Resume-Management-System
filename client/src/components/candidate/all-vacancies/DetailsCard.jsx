import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiUsers, FiInbox, FiHome, FiUserCheck } from 'react-icons/fi';


const DetailsCard = () => {
    const [candidateCount, setCandidateCount] = useState(0);
    const [companyCount, setCompanyCount] = useState(0);
    const [vacancyCount, setVacancyCount] = useState(0);


  useEffect(() => {
    const fetchCandidateCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/v1/auth/active-candidates');
        const activeCandidates = response.data;
        setCandidateCount(activeCandidates.length);
      } catch (error) {
        console.error(error);
        // Handle errors gracefully, such as displaying an error message to the user
      }
    };

    fetchCandidateCount();
  }, []);


  useEffect(() => {
    const fetchCompanyCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/v1/auth/active-companies');
        const activeCompanies = response.data;
        setCompanyCount(activeCompanies.length);
      } catch (error) {
        console.error(error);
        // Handle errors gracefully, such as displaying an error message to the user
      }
    };

    fetchCompanyCount();
  }, []);


  useEffect(() => {
    const fetchVacancyCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/v1/jobs/active-jobs');
        const activeVacancies = response.data;
        setVacancyCount(activeVacancies.length);
      } catch (error) {
        console.error(error);
        // Handle errors gracefully, such as displaying an error message to the user
      }
    };

    fetchVacancyCount();
  }, []);

  
  return (
    <>

        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 ">
            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiUsers className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Candidates
                </h5>
                <h1 className='text-2xl font-semibold text-center lg:text-3xl'>
                    {candidateCount}
                </h1> 
            </div>
            
            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiHome className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Companies
                </h5>
                <h1 className='text-2xl font-semibold text-center sm:text-3xl'>
                    {companyCount}
                </h1>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiInbox className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Vacancies
                </h5>
                <h1 className='text-2xl font-semibold text-center sm:text-3xl'>
                    {vacancyCount}
                </h1>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg ">
                <FiUserCheck className="hidden mx-auto mb-1 sm:w-8 sm:h-8 text-primary sm:block" />

                <h5 className="mb-1 font-medium leading-tight text-center text-md lg:text-xl text-primary-text">
                    Total Applications
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
