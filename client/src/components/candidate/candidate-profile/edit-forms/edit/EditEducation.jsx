import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function EditEducation() {
  const [formData, setFormData] = useState({
    degree: '',
    university: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const candidateToken = localStorage.getItem('clientToken');
  const userType = localStorage.getItem('userType');
  const clientId = localStorage.getItem('clientId');

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        if (userType === 'candidate' && candidateToken) {
          const response = await Axios.get(`http://localhost:3000/v1/candidate/getById/${clientId}`, {
            headers: {
              Authorization: `Bearer ${candidateToken}`,
            },
          });

          if (response.status === 200) {
            const { degree, university } = response.data.candidate;
            setFormData({ degree, university });
          } else {
            console.error('Failed to fetch candidate data');
          }
        } else {
          console.error('Invalid userType or missing candidateToken');
        }
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      }
    };

    fetchCandidateData();
  }, [candidateToken, userType, clientId]);

  const updateEducation = async (e) => {
    e.preventDefault();
    const updatedEducation = formData;
    try {
      if (userType === 'candidate' && candidateToken) {
        const response = await Axios.put(`http://localhost:3000/v1/candidate/update/${clientId}`, updatedEducation, {
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
      console.error('Error updating basic details:', error);
    }
  };

    return (
      <>
      <form onSubmit={updateEducation}>
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

              <div className="flex items-center justify-center px-4 pt-6 mx-auto bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
              <button 
                className="flex items-center justify-center px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue"
                type='submit'
              >
                Update
              </button>
              
            </div>
              </form>
      </>
    )
  }