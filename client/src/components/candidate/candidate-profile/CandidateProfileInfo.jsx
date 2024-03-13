import React, { useEffect, useState } from 'react';
import dp from '../../../assets/dp.jpg';
import { FaPlus } from 'react-icons/fa';
import { HiCheck,HiX } from "react-icons/hi";
import AddPopup from '../../AddPopup';
import { FiEdit3 } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const CandidateProfileInfo = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [candidate, setCandidate] = useState(null);
  const clientToken = localStorage.getItem('clientToken');
  const userType = localStorage.getItem('userType');

  useEffect(() => {
    const getCandidateProfile = async () => {
      try {
        if (userType === 'candidate' && clientToken) {
          const response = await Axios.get(`http://localhost:3000/v1/candidate/getById/${clientToken}`, {
            headers: {
              Authorization: `Bearer ${clientToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 200) {
            setCandidate(response.data.candidate);
          } else {
            console.error('Failed to fetch candidate profile');
          }
        } else {
          console.error('Invalid userType or missing candidateToken');
        }
      } catch (error) {
        console.error('Error fetching candidate profile:', error);
      }
    };

    getCandidateProfile();
  }, [clientToken, userType]);



  
 
  
  return (
    <>
    <div className=''>
    <div className='pb-6 border-[#001A23]/50 border-b-2'>
    <div className='flex justify-center '>
      <div className='flex justify-center w-24 h-24 mt-6 bg-gray-200 rounded-full outline outline-gray-300 outline-offset-4 md:w-32 md:h-32 '>
        <img src={dp} alt="candidate profile" className='w-40 rounded-full '/>
      </div>
    </div>
    <h1 className='mt-4 text-3xl font-bold text-center text-blue '>{candidate && candidate.candidateName}</h1>
    <h1 className='font-medium text-center text-md text-blue'>{candidate && candidate.address} | {candidate && candidate.contact}</h1>
    <h1 className='text-xl font-medium text-center text-blue'>{candidate && candidate.jobTitle}</h1>
    
    </div>

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6 '>
        <h3 className='mt-4 text-xl font-bold text-primary-text'>Basic Details</h3>

        <div className='flex flex-col items-start mt-4'>
          <label htmlFor="bio" className='font-medium text-blue-text'>
            Your Bio
          </label>
          <div
            id="bio"
            name="bio"
            className='p-2 text-justify rounded-md text-md text-primary-text'
            dangerouslySetInnerHTML={{
              __html: candidate?.bio || 'No bio available',
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
            {candidate?.linkedin || 'No Linkedin available'}
          </div>
        </div>

        <div className='flex flex-col items-start mt-4'>
          <label htmlFor="github" className='font-medium text-blue-text'>
            Your Github
          </label>
          <div
            id="github"
            name="github"
            className='p-2 text-justify rounded-md text-md text-primary-text'
          >
            {candidate?.github || 'No Github available'}
          </div>
        </div>

        <div className='flex flex-col items-start mt-4'>
          <label htmlFor="website" className='font-medium text-blue-text'>
            Your Website
          </label>
          <div
            id="website"
            name="website"
            className='p-2 text-justify rounded-md text-md text-primary-text'
          >
            {candidate?.website || 'No website available'}
          </div>
        </div>

        
        
        <span></span>
      </div>
    </div>

               {/* Education */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Education</h3>
          <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openPopup}><FaPlus /></button>
          <AddPopup isOpen={isPopupOpen} onClose={closePopup}>
            <div className='z-50 flex items-center justify-center gap-6 mx-auto '>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Candidate</button>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Company</button>
            </div>
          </AddPopup>
        </div>

          <div className='flex justify-between '>
            <div className=''>
              <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.degree}</h3>
              <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.university}</h3>
            </div>
            <FiEdit3 className='mt-8 text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text'/>
          </div>

      </div>
    </div>

              {/* Experience */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Working Experience</h3>
          <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openPopup}><FaPlus /></button>
          <AddPopup isOpen={isPopupOpen} onClose={closePopup}>
            <div className='z-50 flex items-center justify-center gap-6 mx-auto '>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Candidate</button>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Company</button>
            </div>
          </AddPopup>
        </div>
          
        <div className='flex justify-between '>
            <div className=''>
              <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.jobType} {candidate && candidate.jobTitle}  (2022 - 2023)</h3>
              <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.workplace} </h3>
            </div>
            <FiEdit3 className='mt-8 text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text'/>
          </div>
      </div>
    </div>
    
                {/* Projects */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Projects</h3>
          <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openPopup}><FaPlus /></button>
          <AddPopup isOpen={isPopupOpen} onClose={closePopup}>
            <div className='z-50 flex items-center justify-center gap-6 mx-auto '>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Candidate</button>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Company</button>
            </div>
          </AddPopup>
        </div>
          
        <div className='flex justify-between '>
            <div className=''>
              <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>TalentFolio (Resume Management System)</h3>
              <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>ReactJS | NodeJS | ExpressJS | MongoDB | TailwindCSS</h3>
              <h3 className='ml-4 font-medium text-justify w-[32.5rem] text-md text-primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</h3>
            </div>
            <FiEdit3 className='mt-8 text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text'/>
          </div>
      </div>
    </div>

                  {/* Skills */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Skills</h3>
          <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openPopup}><FaPlus /></button>
          <AddPopup isOpen={isPopupOpen} onClose={closePopup}>
            <div className='z-50 flex items-center justify-center gap-6 mx-auto '>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Candidate</button>
              <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' >Company</button>
            </div>
          </AddPopup>
        </div>
          
          <div className='flex flex-wrap gap-x-8 sm:gap-x-40 sm:gap-y-10 gap-y-4'>
            <span>
            <div
                id="bio"
                name="bio"
                className='mt-4 text-lg font-semibold text-justify rounded-md text-blue-text'
                contentEditable={true}
                dangerouslySetInnerHTML={{
                  __html: ' Technical Skills ' 
                }}
            />

            <div
              id="bio"
              name="bio"
              className='ml-4 italic font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              style={{ whiteSpace: 'pre-line' }}
              dangerouslySetInnerHTML={{
                __html: 'ReactJS | NodeJS '
              }}
            />
            </span>

            <span>
            <div
                id="bio"
                name="bio"
                className='mt-4 text-lg font-semibold text-justify rounded-md text-blue-text'
                contentEditable={true}
                dangerouslySetInnerHTML={{
                  __html: ' Soft Skills ' 
                }}
            />

            <div
              id="bio"
              name="bio"
              className='ml-4 italic font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              style={{ whiteSpace: 'pre-line' }}
              dangerouslySetInnerHTML={{
                __html: 'ReactJS | NodeJS '
              }}
            />
            </span>

            

            
            
          </div>
          

      </div>
    </div>
    </div>
    
    </>
  );
};

export default CandidateProfileInfo;
