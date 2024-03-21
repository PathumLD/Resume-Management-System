import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const EditCompanyDetails = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        address: '',
        location: '',
        description: '',
        linkedin: '',
        website: '',
        contact: '',
    });

    const [profileCreated, setProfileCreated] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const companyToken = localStorage.getItem('clientToken');
    const userType = localStorage.getItem('userType');
    const clientId = localStorage.getItem('clientId');

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                if (userType === 'company' && companyToken) {
                    const response = await Axios.get(`http://localhost:3000/v1/company/getCompanyById/${companyToken}`, {
                        headers: {
                            Authorization: `Bearer ${companyToken}`,
                        },
                    });
    
                    if (response.status === 200) {
                        const { companyName, address, location, description, linkedin, website, contact } = response.data.company;
                        setFormData({ companyName, address, location, description, linkedin, website, contact });
                        // Set profileCreated to true only if the company data is successfully fetched
                        setProfileCreated(true);
                    } else {
                        // If the company does not exist, set profileCreated to false
                        setProfileCreated(false);
                        console.error('Company profile not found');
                    }
                } else {
                    console.error('Invalid userType or missing companyToken');
                }
            } catch (error) {
                console.error('Error fetching company data:', error.response ? error.response.data : error);
            }
        };
    
        fetchCompanyData();
    }, [companyToken, userType, clientId]);
    
    const updateCompanyDetails = async (e) => {
        e.preventDefault();
        try {
            if (userType === 'company' && companyToken) {
                let response;
                if (!profileCreated) {
                    // If profile is not created, use create API
                    const response = await Axios.put('http://localhost:3000/v1/company/create', formData, {
                        headers: {
                            Authorization: `Bearer ${companyToken}`,
                        },
                    });
                    console.log(response.data);
                } else {
                    // If profile is created, use update API
                    const response = await Axios.put(`http://localhost:3000/v1/company/update/${companyToken}`, formData, {
                        headers: {
                            Authorization: `Bearer ${companyToken}`,
                        },
                    });
                    console.log(response.data);
                }
                // Reload the page after successful update
                window.location.reload();
            } else {
                console.error('Invalid userType or missing companyToken');
            }
        } catch (error) {
            console.error('Error updating basic details:', error);
        }
    };
    
    
    

  return (
    <>
      <form onSubmit={updateCompanyDetails}>
      <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-4">

        <div className="sm:col-span-4">
        <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
            Company Name
        </label>
        <div className="mt-2">
            <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            autoComplete="companyName"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
            Address
        </label>
        <div className="mt-2">
            <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            autoComplete="address"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
            Contact
        </label>
        <div className="mt-2">
            <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            autoComplete="contact"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
            Location
        </label>
        <div className="mt-2">
            <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            autoComplete="location"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
            Description
        </label>
        <div className="mt-2">
            <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            autoComplete="description"
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

export default EditCompanyDetails
