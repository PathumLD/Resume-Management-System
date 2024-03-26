import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VacancyDetailsView = () => {
 const { companyId } = useParams(); // Get companyId from URL
 const [jobs, setJobs] = useState([]);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/jobs/getJobsByCompany/${companyId}`);
        setJobs(response.data.jobs);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchJobs();
 }, [companyId]);

 const checkIfApplied = (job) => {
  const candidateId = localStorage.getItem('clientId'); // Get the candidate ID from localStorage or your preferred storage
  return job.appliedCandidates.some(candidate => candidate._id === candidateId);
};
const handleApplyApplications = async (jobId) => {
  try {
     const candidateToken = localStorage.getItem('clientToken');
     const response = await axios.put(`http://localhost:3000/v1/jobs/apply-for-job/${jobId}`, null, {
       headers: {
         Authorization: `Bearer ${candidateToken}`,
       },
     });
 
     if (response.status === 200) {
       console.log('Applied for job successfully');
       // Update the jobs state to reflect the applied status
       setJobs(prevJobs => {
         return prevJobs.map(job => {
           if (job._id === jobId) {
             return {
               ...job,
               applied: true
             };
           }
           return job;
         });
       });
     } else {
       console.error('Failed to apply for job');
     }
  } catch (error) {
     console.error('Error applying for job:', error);
  }
 };
 

const saveAppliedJobsToStorage = (jobs) => {
  const appliedJobIds = jobs.filter(job => job.applied).map(job => job._id);
  localStorage.setItem('appliedJobIds', JSON.stringify(appliedJobIds));
};


const handleCancelApplication = async (jobId) => {
  try {
     const candidateToken = localStorage.getItem('clientToken');
     const response = await axios.put(`http://localhost:3000/v1/jobs/cancel-application/${jobId}`, null, {
       headers: {
         Authorization: `Bearer ${candidateToken}`,
       },
     });
 
     if (response.status === 200) {
       console.log('Cancelled application successfully');
       // Update the jobs state to reflect the cancelled status
       setJobs(prevJobs => {
         return prevJobs.map(job => {
           if (job._id === jobId) {
             return {
               ...job,
               applied: false
             };
           }
           return job;
         });
       });
     } else {
       console.error('Failed to cancel application');
     }
  } catch (error) {
     console.error('Error cancelling application:', error);
  }
 };
 

 return (
    <>
      <div className="flex items-center justify-between mt-10">
        <h2 className="mb-6 ml-6 text-lg font-semibold sm:ml-10 sm:text-xl md:text-2xl">Current Vacancy Details</h2>
      </div>
      {error && <p>Error: {error}</p>}
      {jobs && (
        <table className="min-w-full mt-4 text-sm text-center bg-white divide-y-2 divide-gray-200">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Type</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Title</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.filter(job => job.jobStatus === 'Open').map((job, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobType}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobTitle}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
        {job.applied ? (
          <button onClick={() => handleCancelApplications(job._id)} className="p-2 font-medium text-red-500 border hover:border-red-600 rounded-xl hover:text-red-500 hover:bg-transparent">
            Cancel Application
          </button>
        ) : (
          <button onClick={() => handleApplyApplications(job._id)} className="p-2 font-medium text-green-500 border hover:border-green-600 rounded-xl hover:text-green-500 hover:bg-transparent">
            Apply
          </button>
        )}
      </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
 );
};

export default VacancyDetailsView;
