import React, { useEffect, useState } from 'react';
import ViewPopup from './ViewPopup';
import ViewJobDetails from './ViewJobDetails';
import { Axios } from 'axios';

const JobsTable = () => {
  const [jobs, setJobs] = useState([]);
  const appliedJobIds = JSON.parse(localStorage.getItem('appliedJobIds')) || [];
  const [isJobDetailsViewPopupOpen, setIsJobDetailsViewPopupOpen] = useState(false);

  const openJobDetailsViewPopup = () => {
    setIsJobDetailsViewPopupOpen(true);
  };

  const closeJobDetailsViewPopup = () => {
    setIsJobDetailsViewPopupOpen(false);
  };

  useEffect(() => {
    // Fetch job data from your backend API
    fetch('http://localhost:3000/v1/jobs/all-jobs')
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const handleApplyForJob = async (jobId) => {
    try {
      const candidateToken = localStorage.getItem('clientToken');
      const response = await Axios.put(`http://localhost:3000/v1/jobs/apply-for-job/${jobId}`, null, {
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

  return (
    <>
      <section className="w-full mx-auto mt-6">
        <div className="flex flex-col">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden">
              {/* Scrollable Table Body */}
              <div className="overflow-y-auto max-h-96">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-regular text-center rtl:text-right text-primary-text"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-regular text-center rtl:text-right text-primary-text"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-regular text-center rtl:text-right text-primary-text"
                      >
                        Job Title
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-regular text-center rtl:text-right text-primary-text"
                      >
                        Applications
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-regular text-center rtl:text-right text-primary-text"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobs.filter(job => job.jobStatus === 'Open').map((job, index) => (
                      <tr key={job._id}>
                        <td className="px-4 py-4 text-sm font-medium text-center text-gray-700 sm:text-base whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <span>{index + 1}</span>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-center sm:text-base text-primary-text whitespace-nowrap">
                          <div className="flex flex-col items-center justify-center gap-x-2">
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 sm:text-base">
                                {job.company.companyName}
                              </h2>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-center sm:text-base text-primary-text whitespace-nowrap">
                        {job.jobType} {job.jobTitle} 
                        </td>

                        <td className="px-4 py-4 text-sm text-center sm:text-base text-primary-text whitespace-nowrap">
                          {job.applications}
                        </td>

                        <td className="px-4 py-4 text-sm text-center sm:text-base whitespace-nowrap">
                          <div className="flex items-center justify-center gap-x-2">
                            <button onClick={openJobDetailsViewPopup} className="px-3 py-1 font-medium transition-colors duration-200 border rounded-md text-primary-text hover:border-primary-text hover:text-primary-text focus:outline-none">
                              Details
                            </button>
                            <ViewPopup isOpen={isJobDetailsViewPopupOpen} closePopup={closeJobDetailsViewPopup} title="Job Details" >
                              <ViewJobDetails jobId={job._id} />
                            </ViewPopup>

                            <button onClick={() => handleApplyForJob(job._id)} className="px-3 py-1 font-medium text-blue-500 transition-colors duration-200 border rounded-md hover:text-blue hover:border-blue focus:outline-none">
                              Apply
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsTable;