import React, { useEffect, useState } from 'react'
import dp from '../../../assets/dp.jpg';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewCandidateDetails = () => {

    const { candidateId } = useParams();
    const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/candidate/getByViewId/${candidateId}`);
        setCandidate(response.data.candidate);
      } catch (error) {
        console.error("Failed to fetch candidate details:", error);
      }
    };

    if (candidateId) {
      fetchCandidate();
    }
}, [candidateId]);

  return (
    <>
      <div className=''>
        <div className='pb-6 border-[#001A23]/50 border-b-2 '>
            {/* Candidate profile image */}
            <div className='flex justify-center'>
              <label htmlFor="profileImageInput" className='cursor-pointer'>
                <input
                  type="file"
                  id="profileImageInput"
                  accept="image/*"
                  className="hidden"
                  // onChange={handleImageUpload}
                />
                <div className='flex justify-center w-24 h-24 mt-6 bg-gray-200 rounded-full outline outline-gray-300 outline-offset-4 md:w-32 md:h-32'>
                  <img src={dp} alt="candidate profile" className='w-40 rounded-full' />
                </div>
              </label>
            </div>


            {/* Candidate details */}
            <div className='text-center'>
              <h1 className='mt-4 text-3xl font-bold text-blue'>{candidate && candidate.candidateName}</h1>
              <h1 className='text-xl font-medium text-blue'>{candidate && candidate.jobTitle}</h1>
              <h1 className='font-medium text-md text-blue'>{candidate && candidate.email}</h1>
              <h1 className='font-medium text-md text-blue'>{candidate && candidate.address}</h1>
              <h1 className='font-medium text-md text-blue'>{candidate && candidate.contact}</h1>
            </div>

            {/* Edit icon positioned to the top right corner */}
            {/* <FiEdit3 className='absolute top-0 mt-2 mr-2 text-xl rounded-full cursor-pointer right-4 text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text' onClick={openEducationEditPopup} /> */}
        </div>


        <div className='border-[#001A23]/50 border-b-2 '>
          <div className='mx-4 my-6 '>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Basic Details</h3>
              
            </div>

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
              {candidate?.linkedin ? (
                <a
                  href={candidate.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-2 text-justify rounded-md text-md text-primary-text'
                >
                  {candidate.linkedin}
                </a>
              ) : (
                <div className='p-2 text-justify rounded-md text-md text-primary-text'>
                  No Linkedin available
                </div>
              )}
            </div>

            <div className='flex flex-col items-start mt-4'>
              <label htmlFor="github" className='font-medium text-blue-text'>
                Your Github
              </label>
              {candidate?.github ? (
                <a
                  href={candidate.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-2 text-justify rounded-md text-md text-primary-text'
                >
                  {candidate.github}
                </a>
              ) : (
                <div className='p-2 text-justify rounded-md text-md text-primary-text'>
                  No Github available
                </div>
              )}
            </div>

            <div className='flex flex-col items-start mt-4'>
              <label htmlFor="website" className='font-medium text-blue-text'>
                Your Website
              </label>
              {candidate?.website ? (
                <a
                  href={candidate.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-2 text-justify rounded-md text-md text-primary-text'
                >
                  {candidate.website}
                </a>
              ) : (
                <div className='p-2 text-justify rounded-md text-md text-primary-text'>
                  No website available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className='border-[#001A23]/50 border-b-2 '>
          <div className='mx-4 my-6'>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Education</h3>
              
            </div>
            

            <div className='flex justify-between '>
              <div className=''>
                <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.degree}</h3>
                <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.university}</h3>
              </div>
              
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className='border-[#001A23]/50 border-b-2 '>
          <div className='mx-4 my-6'>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Working Experience</h3>
              
            </div>
            

            <div className='flex justify-between '>
              <div className=''>
                <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.jobType} {candidate && candidate.jobTitle} [{candidate && candidate.timePeriod}]</h3>
                <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.workplace} </h3>
              </div>
              
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className='border-[#001A23]/50 border-b-2 '>
          <div className='mx-4 my-6'>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Projects</h3>
              
            </div>
            

            <div className='flex justify-between '>
              <div className=''>
                <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.projectName}</h3>
                <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.technologies}</h3>
                <h3 className='ml-4 font-medium text-justify w-[32.5rem] text-md text-primary-text'>{candidate && candidate.projectDetails}</h3>
              </div>
              
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='border-[#001A23]/50 border-b-2 '>
          <div className='mx-4 my-6'>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Skills</h3>
              
            </div>
            
            <div className='flex flex-wrap justify-between gap-x-8 sm:gap-x-40 sm:gap-y-10 gap-y-4'>
              <div className='flex flex-col items-start justify-between mt-4'>
                <div
                  id="skills"
                  name="skills"
                  className='p-2 text-justify rounded-md text-md text-primary-text'
                  dangerouslySetInnerHTML={{
                    __html: candidate?.skills || 'No skills available',
                  }}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewCandidateDetails
