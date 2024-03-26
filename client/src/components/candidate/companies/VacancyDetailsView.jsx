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
        const jobsData = response.data.jobs.map(job => ({
          ...job,
          applied: false // Add applied property to each job initially set to false
        }));
        setJobs(jobsData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchJobs();
  }, [companyId]);

  // Function to apply for a job
  const handleApplyForJob = async (jobId) => {
    try {
      const candidateToken = localStorage.getItem('clientToken');
      const response = await axios.put(`http://localhost:3000/v1/jobs/apply-for-job/${jobId}`, null, {
        headers: {
          Authorization: `Bearer ${candidateToken}`,
        },
      });

      if (response.status === 200) {
        // Update the jobs state to mark the job as applied
        setJobs(prevJobs => prevJobs.map(job => job._id === jobId ? { ...job, applied: true } : job));
      } else {
        console.error('Failed to apply for job');
      }
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  // Function to cancel application for a job
  const handleCancelApplication = async (jobId) => {
    try {
      const candidateToken = localStorage.getItem('clientToken');
      const response = await axios.put(`http://localhost:3000/v1/candidate/cancelApplication/${candidateToken}`, { jobId }, {
        headers: {
          Authorization: `Bearer ${candidateToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Update the jobs state to mark the job as not applied
        setJobs(prevJobs => prevJobs.map(job => job._id === jobId ? { ...job, applied: false } : job));
        console.log('Application canceled successfully');
      } else {
        console.error('Failed to cancel application');
      }
    } catch (error) {
      console.error('Error canceling application:', error);
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
            {jobs.filter(job => job.jobStatus === 'Open').map(job => (
              <tr key={job._id}>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobType}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobTitle}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {job.applied ? (
                    <button onClick={() => handleCancelApplication(job._id)} className="p-2 font-medium text-red-500 border hover:border-red-600 rounded-xl hover:text-red-500 hover:bg-transparent">
                      Cancel Application
                    </button>
                  ) : (
                    <button onClick={() => handleApplyForJob(job._id)} className="p-2 font-medium text-green-500 border hover:border-green-600 rounded-xl hover:text-green-500 hover:bg-transparent">
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
