import React, { useState } from 'react'
import dp from '../../../assets/LandingImage.jpg';
import { HiCheck,HiX } from "react-icons/hi";

const CompanyProfileInfo = () => {

  const [company, setCompany] = useState(null);
  const companyToken = localStorage.getItem('companyToken');
  const userType = localStorage.getItem('userType');

  // useEffect(() => {
  //   const getCompanyProfile = async () => {
  //     try {
  //       if (userType === 'company' && companyToken) {
  //         const response = await Axios.get('http://localhost:3000/v1/company/getById/65ed92236fbe0ecad2975a6d', {
            
  //         })
  //       }
  //     }
  //   }
  // })

  return (
    <>
      <div className='pb-6 border-[#001A23]/50 border-b-2'>
    <div className='flex justify-center '>
      <div className='flex justify-center h-60 '>
        <img src={dp} alt="candidate profile" className='mt-4 ' />
      </div>
    </div>
    <h1 className='mt-6 text-3xl font-bold text-center lg:mt-8 md:mt-12 text-blue'>Boffo Systems Labs</h1>
    <h1 className='text-xl font-medium text-center text-blue'>6 Temple Rd, Sri Jayawardenepura Kotte 11222</h1>
    </div>

    <div className=''>
      <div className='mx-4 my-6 '>
        

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

export default CompanyProfileInfo
