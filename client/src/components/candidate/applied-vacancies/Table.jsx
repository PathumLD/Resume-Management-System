import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Table = () => {
    const [appliedJobsDetails, setAppliedJobsDetails] = useState([]);
    const candidateToken = localStorage.getItem('clientToken');

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                if(candidateToken){
                    const response = await Axios.get(`http://localhost:3000/v1/candidate/getById/${candidateToken}`, {
                        headers: {
                            Authorization: `Bearer ${candidateToken}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    if (response.status === 200) {
                        setAppliedJobsDetails(response.data.appliedJobsDetails);
                    } else {
                        console.error('Failed to fetch applied jobs');
                    }
                }
            } catch (error) {
                console.error('Error fetching candidate profile:', error);
            }
        };

        fetchAppliedJobs();
    }, [candidateToken]);

   
    const handleCancelApplication = async (jobId) => {
        const candidateToken = localStorage.getItem('clientToken');
        try {
            const response = await Axios.put(
                `http://localhost:3000/v1/candidate/cancelApplication/${candidateToken}`,
                { jobId },
                {
                    headers: {
                        Authorization: `Bearer ${candidateToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            
          if (response.status === 200) {
            // Remove the canceled job from the appliedJobsDetails state
            setAppliedJobsDetails(prevAppliedJobsDetails =>
              prevAppliedJobsDetails.filter(job => job._id !== jobId)
            );
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
            <section className="w-full mx-auto mt-2 ">
                <div className="flex flex-col">
                    <div className="inline-block min-w-full py-2 align-middle ">
                        <div className="overflow-hidden rounded-t-xl">
                            {/* Scrollable Table Body */}
                            <div className="overflow-x-auto max-h-[50rem]">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="h-4 bg-gray-50">
                                        <tr className=''>
                                            <th scope="col" className="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                                Company
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                                Job Title
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                                Status
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {appliedJobsDetails.map(job => (
                                            <tr key={job._id}>
                                                <td className="px-4 py-4 text-sm text-center sm:text-base text-primary-text whitespace-nowrap">
                                                    <div className="flex flex-col items-center justify-center gap-x-2">
                                                        <div>
                                                            <h2 className="text-sm font-medium text-gray-800 sm:text-base">{job.company.companyName}</h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-center sm:text-base text-primary-text whitespace-nowrap">{job.jobType} {job.jobTitle}</td>
                                                <td className="px-4 py-4 text-sm font-medium text-center text-gray-700 sm:text-base whitespace-nowrap">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 ">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <h2 className="text-sm sm:text-base font-regular">Downloaded</h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-center sm:text-base whitespace-nowrap">
                                                    <div className="flex items-center justify-center gap-x-2">
                                                        <button onClick={() => handleCancelApplication(job._id)} className="px-3 py-1 font-medium transition-colors duration-200 border text-primary-text rounded-3xl hover:border-red-500 hover:text-red-500 focus:outline-none">
                                                            Cancel Application
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
    )
}

export default Table;
