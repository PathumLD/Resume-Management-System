import React, { useState } from 'react'
import  Axios  from 'axios';

const AddVacancy = () => {

    const [formData, setFormData] = useState({
        jobTitle: '',
        jobType: '',
        jobDescription: '',
        jobLocation: '',
        jobSalary: '',
        jobRequirements: '',
        jobResponsibilities: '',
    });
    

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };

      const companyToken = localStorage.getItem('clientToken');
      const userType = localStorage.getItem('userType');
      const companyId = localStorage.getItem('clientId');

      const addVacancy = async (e) => {
        e.preventDefault();
        const newVacancy = formData;
        try {
          if (userType === 'company' && companyToken) {
            const response = await Axios.post(`http://localhost:3000/v1/jobs/create-job`, newVacancy, {
              headers: {
                Authorization: `Bearer ${companyToken}`,
              },
            });
            console.log(response.data);
            // Reload the page after successful update
            window.location.reload();
          } else {
            console.error('Invalid userType or missing companyToken');
          }
        } catch (error) {
          console.error('Error adding education:', error);
        }
      };
    
  return (
    <>
      <form onSubmit={addVacancy}>
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
        <label htmlFor="jobType" className="block text-sm font-medium leading-6 text-gray-900">
            Job Type
        </label>
        <div className="mt-2">
            <input
            id="jobType"
            name="jobType"
            type="text"
            autoComplete="jobType"
            onChange={handleChange}
            value={formData.jobType}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="jobDescription" className="block text-sm font-medium leading-6 text-gray-900">
            Job Description
        </label>
        <div className="mt-2">
            <input
            id="jobDescription"
            name="jobDescription"
            type="text"
            autoComplete="jobDescription"
            onChange={handleChange}
            value={formData.jobDescription}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="jobLocation" className="block text-sm font-medium leading-6 text-gray-900">
            Job Location
        </label>
        <div className="mt-2">
            <input
            id="jobLocation"
            name="jobLocation"
            type="text"
            autoComplete="jobLocation"
            onChange={handleChange}
            value={formData.jobLocation}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="jobSalary" className="block text-sm font-medium leading-6 text-gray-900">
            Salary
        </label>
        <div className="mt-2">
            <input
            id="jobSalary"
            name="jobSalary"
            type="text"
            autoComplete="jobSalary"
            onChange={handleChange}
            value={formData.jobSalary}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="jobRequirements" className="block text-sm font-medium leading-6 text-gray-900">
            Job Requirements
        </label>
        <div className="mt-2">
            <input
            id="jobRequirements"
            name="jobRequirements"
            type="text"
            autoComplete="jobRequirements"
            onChange={handleChange}
            value={formData.jobRequirements}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="jobResponsibilities" className="block text-sm font-medium leading-6 text-gray-900">
            Job Responsibilities
        </label>
        <div className="mt-2">
            <input
            id="jobResponsibilities"
            name="jobResponsibilities"
            type="text"
            autoComplete="jobResponsibilities"
            onChange={handleChange}
            value={formData.jobResponsibilities}
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

export default AddVacancy
