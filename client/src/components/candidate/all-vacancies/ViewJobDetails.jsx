import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewJobDetails = ({ jobId }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/jobs/getJobById/${jobId}`);
        const { job } = response.data;
        setJob(job);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="flow-root py-3 border border-gray-100 rounded-lg shadow-sm bg-slate-100">
          <dl className="-my-3 text-sm divide-y divide-gray-100">
            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:gap-4">
              <dt className="font-medium text-gray-900">Title</dt>
              <dd className="pl-4 text-gray-700 whitespace-normal sm:col-span-2">{job.jobType} {job.jobTitle}</dd>
            </div>

            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:gap-4">
              <dt className="font-medium text-gray-900">Company</dt>
              <dd className="pl-4 text-gray-700 whitespace-normal sm:col-span-2">{job.company.companyName}</dd>
            </div>

            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:gap-4">
              <dt className="font-medium text-gray-900">Location</dt>
              <dd className="pl-4 text-gray-700 whitespace-normal sm:col-span-2">{job.jobLocation}</dd>
            </div>

            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:gap-4">
              <dt className="font-medium text-gray-900">Salary</dt>
              <dd className="pl-4 text-gray-700 whitespace-normal sm:col-span-2">{job.jobSalary}</dd>
            </div>

            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:gap-4">
              <dt className="font-medium text-gray-900">Requirements</dt>
              <dd className="pl-4 text-gray-700 whitespace-normal sm:col-span-2">{job.jobRequirements}</dd>
            </div>

            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:gap-4">
              <dt className="font-medium text-gray-900">Description</dt>
              <dd className="pl-4 text-gray-700 whitespace-normal sm:col-span-2">{job.jobDescription}</dd>
            </div>

            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:gap-4">
              <dt className="font-medium text-gray-900">Responsibilities</dt>
              <dd className="pl-4 text-gray-700 whitespace-normal sm:col-span-2">{job.jobResponsibilities}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ViewJobDetails;