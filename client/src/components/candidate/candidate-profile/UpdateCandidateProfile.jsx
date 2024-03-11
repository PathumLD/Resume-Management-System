import React, { useEffect, useState } from 'react';
import dp from '../../../assets/dp.jpg';
import { FaPlus } from 'react-icons/fa';
import { HiCheck,HiX } from "react-icons/hi";
import AddPopup from '../../AddPopup';
import { FiEdit3 } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import Axios from 'axios';




const UpdateCandidateProfile = () => {

  const { id } = useParams();
  const candidateToken = localStorage.getItem('candidateToken');
  const userType = localStorage.getItem('userType');

  console.log('userType:', userType);
  console.log('candidateToken:', candidateToken);

  const [bioEditing, setBioEditing] = useState(false);
  const [linkedinEditing, setLinkedinEditing] = useState(false);
  const [githubEditing, setGithubEditing] = useState(false);
  const [websiteEditing, setWebsiteEditing] = useState(false);


  const [isPopupOpen, setIsPopupOpen] = useState(false);
    

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  const handleEditStart = (section) => {
    switch (section) {
      case 'bio':
        setBioEditing(true);
        break;
      case 'linkedin':
        setLinkedinEditing(true);
        break;
      case 'github':
        setGithubEditing(true);
        break;
      case 'website':
        setWebsiteEditing(true);
        break;
      // Add more cases for other sections if needed
      default:
        break;
    }
  };

  const handleEditEnd = (section) => {
    switch (section) {
      case 'bio':
        setBioEditing(false);
        break;
      case 'linkedin':
        setLinkedinEditing(false);
        break;
      case 'github':
        setGithubEditing(false);
        break;
      case 'website':
        setWebsiteEditing(false);
        break;
      // Add more cases for other sections if needed
      default:
        break;
    }
  };

  const [candidate, setCandidate] = useState(null);
   
  useEffect(() => {
    const getCandidateProfile = async () => {
      try {
        if (userType === 'candidate' && candidateToken) {
          // Make a GET request to the backend API endpoint with the candidate's ID
          const response = await Axios.get(`http://localhost:3000/v1/candidate/getById/${id}`, {
            headers: {
              'Authorization': `Bearer ${candidateToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setCandidate(data.candidate);
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
  }, [id, userType, candidateToken]); // Empty dependency array ensures the effect runs only once
 
  
  return (
    <>
    <div className='pb-6 border-[#001A23]/50 border-b-2'>
    <div className='flex justify-center '>
      <div className='flex justify-center w-24 h-24 mt-6 bg-gray-200 rounded-full outline outline-gray-300 outline-offset-4 md:w-32 md:h-32 '>
        <img src={dp} alt="candidate profile" className='w-40 rounded-full '/>
      </div>
    </div>
    <h1 className='mt-4 text-3xl font-bold text-center text-blue '>{candidate && candidate.email}</h1>
    <h1 className='text-xl font-medium text-center text-blue'>Software Engineer</h1>
    </div>

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6 '>
        <h3 className='mt-4 text-xl font-bold text-primary-text'>Basic Details</h3>

        <div className='flex flex-col items-start mt-4 '>
        <label htmlFor="bio" className='font-medium text-blue-text'>
          Your Bio
        </label>
        <div
          id="bio"
          name="bio"
          className='p-2 text-justify rounded-md text-md text-primary-text'
          contentEditable={true}
          onClick={() => handleEditStart('bio')}
          onBlur={() => handleEditEnd('bio')}
          dangerouslySetInnerHTML={{
            __html:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium',
          }}
        />

        {bioEditing && (
          <div className='flex items-center gap-6 mt-1 ml-auto'>
            <HiCheck className='m-2 text-xl rounded-full hover:bg-green-600 hover:text-white' />
            <HiX className='m-2 text-xl rounded-full hover:bg-red-600 hover:text-white' />
          </div>
        )}
      </div>

      <div className='flex flex-col items-start mt-4 '>
        <label htmlFor="linkedin" className='font-medium text-blue-text'>
          Your Linkedin
        </label>
        <div
          id="linkedin"
          name="linkedin"
          className='p-2 text-justify rounded-md text-md text-primary-text'
          contentEditable={true}
          onClick={() => handleEditStart('linkedin')}
          onBlur={() => handleEditEnd('linkedin')}
          dangerouslySetInnerHTML={{
            __html:
              'www.linkedin.com/PathumLD',
          }}
        />

        {linkedinEditing && (
          <div className='flex items-center gap-6 mt-1 ml-auto'>
            <HiCheck className='m-2 text-xl rounded-full hover:bg-green-600 hover:text-white' />
            <HiX className='m-2 text-xl rounded-full hover:bg-red-600 hover:text-white' />
          </div>
        )}
      </div>

      <div className='flex flex-col items-start mt-4 '>
        <label htmlFor="github" className='font-medium text-blue-text'>
          Your Github
        </label>
        <div
          id="github"
          name="github"
          className='p-2 text-justify rounded-md text-md text-primary-text'
          contentEditable={true}
          onClick={() => handleEditStart('github')}
          onBlur={() => handleEditEnd('github')}
          dangerouslySetInnerHTML={{
            __html:
              'github.io/PathumLD',
          }}
        />

        {githubEditing && (
          <div className='flex items-center gap-6 mt-1 ml-auto'>
            <HiCheck className='m-2 text-xl rounded-full hover:bg-green-600 hover:text-white' />
            <HiX className='m-2 text-xl rounded-full hover:bg-red-600 hover:text-white' />
          </div>
        )}
      </div>

      <div className='flex flex-col items-start mt-4 '>
        <label htmlFor="website" className='font-medium text-blue-text'>
          Your Website
        </label>
        <div
          id="website"
          name="website"
          className='p-2 text-justify rounded-md text-md text-primary-text'
          contentEditable={true}
          onClick={() => handleEditStart('website')}
          onBlur={() => handleEditEnd('website')}
          dangerouslySetInnerHTML={{
            __html:
              'www.mywebsite.com',
          }}
        />

        {websiteEditing && (
          <div className='flex items-center gap-6 mt-1 ml-auto'>
            <HiCheck className='m-2 text-xl rounded-full hover:bg-green-600 hover:text-white' />
            <HiX className='m-2 text-xl rounded-full hover:bg-red-600 hover:text-white' />
          </div>
        )}
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
          
          {/* <div
              id="bio"
              name="bio"
              className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'
              contentEditable={false}
              dangerouslySetInnerHTML={{
                __html: ' BSc. Information Systems ' 
              }}
          />
      
          <div
              id="bio"
              name="bio"
              className='ml-4 font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' University of Colombo School of Computing '
              }}
          /> */}

          <div className='flex justify-between '>
            <div className=''>
              <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>BSc. Information Systems</h3>
              <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>University of Colombo School of Computing</h3>
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
              <h3 className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'>Intern Software Engineer (2022 - 2023)</h3>
              <h3 className='ml-4 font-semibold text-left rounded-md text-md text-black/50'>Boffo System Labs</h3>
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
    
    </>
  );
};

export default UpdateCandidateProfile;
