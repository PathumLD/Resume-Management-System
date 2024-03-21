import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CompanyExtra = () => {
  const companyToken = localStorage.getItem('clientToken');
  const clientId = localStorage.getItem('clientId');
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      // Fetch the company data to get its ID
      const response = await Axios.get('http://localhost:3000/v1/company/getCompanyById', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('clientToken')}`,
        },
      });
  
      if (response.status === 200) {
        const companyId = response.data.company._id;
  
        // Fetch job posts associated with the company using companyId
        const jobsResponse = await Axios.get(`http://localhost:3000/v1/jobs/getJobsByCompany/${companyId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('clientToken')}`,
          },
        });
  
        if (jobsResponse.status === 200) {
          setJobs(jobsResponse.data.jobs);
        } else {
          console.error('Failed to fetch job posts');
        }
      } else {
        console.error('Failed to fetch company data');
      }
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  };
  

  useEffect(() => {
    fetchJobs();
  }, []);
   

  return (
    <>
      <div className="mt-10 overflow-x-auto">
        <h2 className="mb-6 ml-6 text-lg font-semibold sm:ml-10 sm:text-xl md:text-2xl">Vacancy Details</h2>
        <button className="p-2 mb-4 font-medium text-green-500 border right-10 hover:bg-green-500 rounded-xl hover:text-white text-md">
          New Vacancy
        </button>
        <table className="min-w-full text-sm text-center bg-white divide-y-2 divide-gray-200">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Title</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Applications</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobTitle}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.applications}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <button className="p-2 font-medium text-red-500 border hover:border-red-500 rounded-3xl hover:text-red-500 hover:bg-transparent">
                    Block Applications
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompanyExtra;
