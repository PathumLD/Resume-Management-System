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

 const handleApplyApplications = () => {
    // Implement your logic here
    console.log("Apply Applications clicked");
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
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Title</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Type</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Status</th>
              <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.filter(job => job.jobStatus === 'Open').map((job, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobTitle}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{job.jobType}</td>
                <td className={`px-4 py-2 font-medium ${job.applyStatus === 'Not Applied' ? 'text-blue' : 'text-green-500'} text-md whitespace-nowrap`}>{job.applyStatus}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                 <button onClick={handleApplyApplications} className="p-2 font-medium text-green-500 border hover:border-green-600 rounded-3xl hover:text-green-500 hover:bg-transparent">
                    Apply Applications
                 </button>
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
