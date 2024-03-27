import React, { useEffect, useState } from 'react';
import dp from '../../../assets/dp.jpg';
import { FaPlus } from 'react-icons/fa';
import { FiEdit3 } from "react-icons/fi";
import Axios from 'axios';
import EditBasicDetails from './edit-forms/edit/EditBasicDetails';
import Popup from './EditPopups';
import AddPopup from './edit-forms/add/AddPopup';
import EditSkills from './edit-forms/edit/EditSkills';
import EditEducation from './edit-forms/edit/EditEducation';
import EditProjects from './edit-forms/edit/EditProjects';
import EditFunctions from './edit-forms/edit/EditFunctions';
import AddFunctions from './edit-forms/add/AddFunctions';
import ExperienceEdit from './edit-forms/edit/ExperienceEdit';
import AddEducation from './edit-forms/add/AddEducation';
import AddExperience from './edit-forms/add/AddExperience';
import AddProjects from './edit-forms/add/AddProjects';
import AddSkills from './edit-forms/add/AddSkills';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CandidateProfileInfo = () => {

  const {
    isBasicDetailsEditPopupOpen,
    openBasicDetailsEditPopup,
    closeBasicDetailsEditPopup,
    isEducationEditPopupOpen,
    openEducationEditPopup,
    closeEducationEditPopup,
    isExperienceEditPopupOpen,
    openExperienceEditPopup,
    closeExperienceEditPopup,
    isProjectEditPopupOpen,
    openProjectEditPopup,
    closeProjectEditPopup,
    isSkillsEditPopupOpen,
    openSkillsEditPopup,
    closeSkillsEditPopup,
  } = EditFunctions();

  const {
    isEducationAddPopupOpen,
    openEducationAddPopup,
    closeEducationAddPopup,
    isExperienceAddPopupOpen,
    openExperienceAddPopup,
    closeExperienceAddPopup,
    isProjectAddPopupOpen,
    openProjectAddPopup,
    closeProjectAddPopup,
    isSkillsAddPopupOpen,
    openSkillsAddPopup,
    closeSkillsAddPopup,
  } = AddFunctions();
  

  const [candidate, setCandidate] = useState(null);
  const candidateToken = localStorage.getItem('clientToken');
  const userType = localStorage.getItem('userType');

  useEffect(() => {
    const getCandidateProfile = async () => {
      try {
        if (userType === 'candidate' && candidateToken) {
          const response = await Axios.get(`http://localhost:3000/v1/candidate/getById/${candidateToken}`, {
            headers: {
              Authorization: `Bearer ${candidateToken}`,
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
  }, [candidateToken, userType]);

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
              <button className='' onClick={openBasicDetailsEditPopup}><FiEdit3 className='text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text'/></button>
            </div>
            <Popup isOpen={isBasicDetailsEditPopupOpen} closePopup={closeBasicDetailsEditPopup} title="Update Basic Details">
              <EditBasicDetails />
            </Popup>

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
                  className='p-2 text-justify rounded-md text-md text-primary-text hover:underline hover:font-semibold'
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
                  className='p-2 text-justify rounded-md text-md text-primary-text hover:underline hover:font-semibold'
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
                  className='p-2 text-justify rounded-md text-md text-primary-text hover:underline hover:font-semibold'
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
              <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openEducationAddPopup}><FaPlus /></button>
            </div>
            <Popup isOpen={isEducationEditPopupOpen} closePopup={closeEducationEditPopup} title="Update Education">
              <EditEducation />
            </Popup>
            <AddPopup isOpen={isEducationAddPopupOpen} closePopup={closeEducationAddPopup} title="Add Education">
              <AddEducation />
            </AddPopup>

            <div className='flex justify-between '>
              <div className=''>
                <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.degree}</h3>
                <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.university}</h3>
              </div>
              <FiEdit3 className='mt-8 text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text' onClick={openEducationEditPopup}/>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className='border-[#001A23]/50 border-b-2 '>
          <div className='mx-4 my-6'>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Working Experience</h3>
              <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openExperienceAddPopup}><FaPlus /></button>
            </div>
            <Popup isOpen={isExperienceEditPopupOpen} closePopup={closeExperienceEditPopup} title="Update Working Experience">
              <ExperienceEdit />
            </Popup>
            <AddPopup isOpen={isExperienceAddPopupOpen} closePopup={closeExperienceAddPopup} title="Add Working Experience">
              <AddExperience />
            </AddPopup>

            <div className='flex justify-between '>
              <div className=''>
                <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.jobType} {candidate && candidate.jobTitle} [{candidate && candidate.timePeriod}]</h3>
                <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.workplace} </h3>
              </div>
              <FiEdit3 className='mt-8 text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text' onClick={openExperienceEditPopup}/>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className='border-[#001A23]/50 border-b-2 '>
          <div className='mx-4 my-6'>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Projects</h3>
              <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openProjectAddPopup}><FaPlus /></button>
            </div>
            <Popup isOpen={isProjectEditPopupOpen} closePopup={closeProjectEditPopup} title="Update Project">
              <EditProjects />
            </Popup>
            <AddPopup isOpen={isProjectAddPopupOpen} closePopup={closeProjectAddPopup} title="Add Project">
              <AddProjects />
            </AddPopup>

            <div className='flex justify-between '>
              <div className=''>
                <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>{candidate && candidate.projectName}</h3>
                <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>{candidate && candidate.technologies}</h3>
                <h3 className='ml-4 font-medium text-justify w-[32.5rem] text-md text-primary-text'>{candidate && candidate.projectDetails}</h3>
              </div>
              <FiEdit3 className='mt-8 text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text' onClick={openProjectEditPopup}/>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className=''>
          <div className='mx-4 my-6'>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl font-bold text-primary-text'>Skills</h3>
              <button className='p-1 text-xl rounded-full hover:ring-2' onClick={openSkillsAddPopup}><FaPlus /></button>
            </div>
            <Popup isOpen={isSkillsEditPopupOpen} closePopup={closeSkillsEditPopup} title="Update Skills">
              <EditSkills />
            </Popup>
            <AddPopup isOpen={isSkillsAddPopupOpen} closePopup={closeSkillsAddPopup} title="Add Skills">
              <AddSkills />
            </AddPopup> 

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
              <FiEdit3 className='mt-8 text-xl rounded-full text-black/50 hover:ring-2 ring-offset-2 ring-blue-text/75 hover:text-blue-text' onClick={openSkillsEditPopup}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateProfileInfo;