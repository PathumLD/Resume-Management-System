import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AddPopup from '../../candidate/candidate-profile/edit-forms/add/AddPopup';
import AddVacancy from '../../company/profile/AddVacancy';

const CompanyExtra = () => {
  const [jobs, setJobs] = useState([]);
  const [isVacancyAddPopupOpen, setIsVacancyAddPopupOpen] = useState(false);
  const companyToken = localStorage.getItem('clientToken');
  
  const openVacancyAddPopup = () => {
    setIsVacancyAddPopupOpen(true);
  };
  const closeVacancyAddPopup = () => {
    setIsVacancyAddPopupOpen(false);
  };

  const fetchJobs = async () => {
    try {
      
  
        // Fetch job posts associated with the company using companyId
        const jobsResponse = await Axios.get(`http://localhost:3000/v1/jobs/getJobsByCompany/65fb04a57539e663e6bc1ea4`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('clientToken')}`,
          },
        });
  
        if (jobsResponse.status === 200) {
          // Filter jobs with status === 'open'
        const openJobs = jobsResponse.data.jobs.filter(job => job.jobStatus === 'open' || job.jobStatus === 'Open');
        setJobs(openJobs);
        } else {
          console.error('Failed to fetch job posts');
        }
      
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);


  const handleBlockApplications = async (jobId) => {
    try {
      const response = await Axios.put(`http://localhost:3000/v1/jobs/delete-job/${jobId}`, null, {
        headers: {
          Authorization: `Bearer ${companyToken}`,
        },
      });

      if (response.status === 200) {
        // Update the jobs state with the updated job status
        const updatedJobs = jobs.map((job) => {
          if (job._id === jobId) {
            return { ...job, jobStatus: 'close' };
          }
          return job;
        });
        setJobs(updatedJobs);
        window.location.reload();
      } else {
        console.error('Failed to update job status');
      }
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };
   

  return (
    <>
      <div className="flex items-center justify-between mt-10 ">
    <h2 className="mb-6 ml-6 text-lg font-semibold sm:ml-10 sm:text-xl md:text-2xl">Current Vacancy Details</h2>
    <button className="p-2 font-medium text-green-500 border-2 hover:border-green-500 rounded-xl hover:text-green-600 text-md" onClick={openVacancyAddPopup}>
      New Vacancy
    </button>
  </div>
  <AddPopup isOpen={isVacancyAddPopupOpen} closePopup={closeVacancyAddPopup} title="Add Vacancy">
    <AddVacancy />
  </AddPopup>
  <table className="min-w-full mt-4 text-sm text-center bg-white divide-y-2 divide-gray-200">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Title</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Type</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Status</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobTitle}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobType}</td>
                <td className="px-4 py-2 font-medium text-green-500 text-md whitespace-nowrap">{job.jobStatus}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <button onClick={() => handleBlockApplications(job._id)} className="p-2 font-medium text-red-500 border hover:border-red-500 rounded-3xl hover:text-red-500 hover:bg-transparent">
                    Block Applications
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </>
  );
};

export default CompanyExtra;
