import React, { useState } from 'react'
import Axios from 'axios';

const AddEducation = () => {
  const [formData, setFormData] = useState({
    degree: '',
    university: '',
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

  const addEducation = async (e) => {
    e.preventDefault();
    const newEducation = formData;
    try {
      if (userType === 'candidate' && candidateToken) {
        const response = await Axios.post(`http://localhost:3000/v1/candidate/create`, newEducation, {
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
      console.error('Error adding education:', error);
    }
  };

  return (
    <>
    <form onSubmit={addEducation}>
      <div className="sm:col-span-4">
        <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
            Degree / Course
        </label>
        <div className="mt-2">
            <input
            type="text"
            name="degree"
            id="degree"
            autoComplete="degree"
            onChange={handleChange}
            value={formData.degree}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="university" className="block text-sm font-medium leading-6 text-gray-900">
            University / College
        </label>
        <div className="mt-2">
            <input
            id="university"
            name="university"
            type="text"
            autoComplete="university"
            onChange={handleChange}
            value={formData.university}
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

export default AddEducation
