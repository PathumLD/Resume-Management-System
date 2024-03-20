import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function EditBasicDetails() {
  const [formData, setFormData] = useState({
    bio: '',
    linkedin: '',
    github: '',
    website: '',
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
            const { bio, linkedin, github, website } = response.data.candidate;
            setFormData({ bio, linkedin, github, website });
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

  const updateBasicDetails = async (e) => {
    e.preventDefault();
    // const { bio, linkedin, github, website } = formData;
    const updatedBasicDetails = formData;
    try {
      if (userType === 'candidate' && candidateToken) {
        const response = await Axios.put(`http://localhost:3000/v1/candidate/update/${clientId}`, updatedBasicDetails, {
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
      <form onSubmit={updateBasicDetails}>
      <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                Bio
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  value={formData.bio}
                  autoComplete="bio"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-gray-900">
                LinkedIn
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  value={formData.linkedin}
                  autoComplete="linkedin"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900">
                Github
              </label>
              <div className="mt-2">
                <input
                  id="github"
                  name="github"
                  type="text"
                  value={formData.github}
                  autoComplete="github"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                Website
              </label>
              <div className="mt-2">
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  autoComplete="website"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
                />
              </div>
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







