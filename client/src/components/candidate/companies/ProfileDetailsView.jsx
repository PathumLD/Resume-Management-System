import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dp from '../../../assets/LandingImage.jpg';

const ProfileDetailsView = () => {

    const { companyId } = useParams();
    const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/company/getCompanyById/${companyId}`);
        setCompany(response.data.company);
      } catch (error) {
        console.error("Failed to fetch company details:", error);
      }
    };

    if (companyId) {
      fetchCompany();
    }
  }, [companyId]);

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
      {/* <button className='' onClick={openCompanyDetailsEditPopup}><FiEdit3 className='text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text'/></button> */}
    </div>
    {/* <Popup isOpen={isCompanyDetailsEditPopupOpen} closePopup={closeCompanyDetailsEditPopup} title="Update Basic Details">
      <EditCompanyDetails />
    </Popup> */}
        

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
            Your Linkedin
          </label>
          <div
            id="linkedin"
            name="linkedin"
            className='p-2 text-justify rounded-md text-md text-primary-text'
          >
            {company?.linkedin || 'No Linkedin available'}
          </div>
        </div>


        <div className='flex flex-col items-start mt-4'>
          <label htmlFor="website" className='font-medium text-blue-text'>
            Company Website
          </label>
          <div
            id="website"
            name="website"
            className='p-2 text-justify rounded-md text-md text-primary-text'
          >
            {company?.website || 'No website available'}
          </div>
        </div>

        
        
        <span></span>
      </div>
    </div>
    </>
  )
}

export default ProfileDetailsView
