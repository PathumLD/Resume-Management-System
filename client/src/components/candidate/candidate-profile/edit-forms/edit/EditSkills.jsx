import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditSkills() {
 const [formData, setFormData] = useState({
    skills: '',
 });

 const handleChange = (content) => {
    // Ensure content is a string
    setFormData({ ...formData, skills: typeof content === 'string' ? content : content.toString() });
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
            const { skills } = response.data.candidate;
            // Ensure skills is a string
            setFormData({ skills: skills ? skills.join(', ') : '' });
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

 const updateSkills = async (e) => {
    e.preventDefault();
    try {
      if (userType === 'candidate' && candidateToken) {
        const response = await Axios.put(`http://localhost:3000/v1/candidate/update/${clientId}`, formData, {
          headers: {
            Authorization: `Bearer ${candidateToken}`,
          },
        });
        console.log(response.data);
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
      <form onSubmit={updateSkills}>
        <div className="sm:col-span-4">
          <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">
            Skills
          </label>
          <div className="mt-2">
            <ReactQuill
              id="skills"
              name="skills"
              type="text"
              autoComplete="skills"
              onChange={handleChange}
              value={formData.skills}
              className="block w-full h-72 mb-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
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
 );
}
