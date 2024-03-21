import React, { useState } from 'react'
import Axios from 'axios';

const AddExperience = () => {
  const [formData, setFormData] = useState({
    jobType: '',
    jobTitle: '',
    timePeriod: '',
    workplace: '',
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const candidateToken = localStorage.getItem('clientToken');
  const userType = localStorage.getItem('userType');
  const clientId = localStorage.getItem('clientId');

  const addExperience = async (e) => {
    e.preventDefault();
    const newExperience = formData;
    try {
      if (userType === 'candidate' && candidateToken) {
        const response = await Axios.put(`http://localhost:3000/v1/candidate/create`, newExperience, {
          headers: {
            Authorization: `Bearer ${candidateToken}`,
          },
        });
        console.log(response.data);
        // Reload the page after successful update
        window.location.reload();
      } else {
        console.error('Invalid userType or missing candidateToken');
      }
    } catch (error) {
      console.error('Error adding experience:', error);
    }
  };

  return (
    <>
    <form onSubmit={addExperience}>
      <div className="sm:col-span-4">
        <label htmlFor="jobType" className="block text-sm font-medium leading-6 text-gray-900">
          Job Type
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="jobType"
            id="jobType"
            autoComplete="jobType"
            onChange={handleChange}
            value={formData.jobType}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="jobTitle" className="block text-sm font-medium leading-6 text-gray-900">
          Job Title
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            autoComplete="jobTitle"
            onChange={handleChange}
            value={formData.jobTitle}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="timePeriod" className="block text-sm font-medium leading-6 text-gray-900">
          Time Period
        </label>
        <div className="mt-2">
          <input
            id="timePeriod"
            name="timePeriod"
            type="text"
            autoComplete="timePeriod"
            onChange={handleChange}
            value={formData.timePeriod}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="workplace" className="block text-sm font-medium leading-6 text-gray-900">
          Workplace
        </label>
        <div className="mt-2">
          <input
            id="workplace"
            name="workplace"
            type="text"
            autoComplete="workplace"
            onChange={handleChange}
            value={formData.workplace}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

        <div className="justify-center px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <button className="px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue">Save</button>
        </div>
      </form>
    </>
  )
}

export default AddExperience
