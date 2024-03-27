import React, { useEffect, useState } from 'react'
import dp from '../../../assets/LandingImage.jpg';
import Axios from 'axios';
import EditCompanyDetails from './EditCompanyDetails';
import { FiEdit3 } from 'react-icons/fi';
import Popup from '../../candidate/candidate-profile/EditPopups';

const CompanyProfileInfo = () => {
  const [isCompanyDetailsEditPopupOpen, setIsCompanyDetailsEditPopupOpen] = useState(false);
  
  const openCompanyDetailsEditPopup = () => {
    setIsCompanyDetailsEditPopupOpen(true);
  };

  const closeCompanyDetailsEditPopup = () => {
    setIsCompanyDetailsEditPopupOpen(false);
  };

  const [company, setCompany] = useState(null);
  const companyToken = localStorage.getItem('clientToken');
  const userType = localStorage.getItem('userType');

  useEffect(() => {
    const getCompanyProfile = async () => {
      try {
        if (userType === 'company' && companyToken) {
          const response = await Axios.get(`http://localhost:3000/v1/company/getCompanyByClientId/${companyToken}`, {
            headers: {
              Authorization: `Bearer ${companyToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 200) {
            setCompany(response.data.company);
          } else {
            console.error('Failed to fetch company profile');
          } 
        } else {
          console.error('Invalid userType or missing companyToken');
        }
      } catch (error) {
        console.error('Error fetching company profile:', error);
      }
    };

    // Call the API when component mount
    getCompanyProfile();
  }, [companyToken, userType]);

  return (
    <>
      <div className='pb-6 border-[#001A23]/50 border-b-2'>
    <div className='flex justify-center '>
      <div className='flex justify-center h-60 '>
        <img src={dp} alt="candidate profile" className='mt-4 ' />
      </div>
    </div>
    <h1 className='mt-6 text-3xl font-bold text-center lg:mt-8 text-blue'>{company && company.companyName}</h1>
    <h1 className='text-xl font-medium text-center text-blue'>{company && company.address}</h1>
    <h1 className='font-medium text-center text-md text-blue'>{company && company.location}</h1>
    <h1 className='font-medium text-center text-md text-blue'>{company && company.contact}</h1>
    </div>

    <div className=''>
      <div className='mx-4 my-6 '>
      <div className='flex justify-between mt-4'>
      <h3 className='text-xl font-bold text-primary-text'>Basic Details</h3>
      <button className='' onClick={openCompanyDetailsEditPopup}><FiEdit3 className='text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text'/></button>
    </div>
    <Popup isOpen={isCompanyDetailsEditPopupOpen} closePopup={closeCompanyDetailsEditPopup} title="Update Basic Details">
      <EditCompanyDetails />
    </Popup>
        

      <div className='flex flex-col items-start mt-4'>
          <label htmlFor="description" className='font-medium text-blue-text'>
            Company Description
          </label>
          <div
            id="description"
            name="description"
            className='p-2 text-justify rounded-md text-md text-primary-text'
            dangerouslySetInnerHTML={{
              __html: company?.description || 'No description available',
            }}
          />
        </div>

        <div className='flex flex-col items-start mt-4'>
              <label htmlFor="linkedin" className='font-medium text-blue-text'>
                Company Linkedin
              </label>
              {company?.linkedin ? (
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-2 text-justify rounded-md text-md text-primary-text hover:underline hover:font-semibold'
                >
                  {company.linkedin}
                </a>
              ) : (
                <div className='p-2 text-justify rounded-md text-md text-primary-text '>
                  No Linkedin available
                </div>
              )}
            </div>


            <div className='flex flex-col items-start mt-4'>
              <label htmlFor="website" className='font-medium text-blue-text '>
                Company Website
              </label>
              {company?.website ? (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-2 text-justify rounded-md text-md text-primary-text hover:underline hover:font-semibold'
                >
                  {company.website}
                </a>
              ) : (
                <div className='p-2 text-justify rounded-md text-md text-primary-text'>
                  No website available
                </div>
              )}
            </div>

        
        
        <span></span>
      </div>
    </div>
    </>
  )
}

export default CompanyProfileInfo