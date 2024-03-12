import React, { useState } from 'react'
import dp from '../../../assets/LandingImage.jpg';
import { HiCheck,HiX } from "react-icons/hi";

const CompanyProfileInfo = () => {

    const [bioEditing, setBioEditing] = useState(false);
    const [linkedinEditing, setLinkedinEditing] = useState(false);
    const [githubEditing, setGithubEditing] = useState(false);
    const [websiteEditing, setWebsiteEditing] = useState(false);

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
        

        <div className='flex flex-col items-start mt-4 '>
        <label htmlFor="bio" className='font-medium text-blue-text'>
          Description
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
          Linkedin
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

      {/* <div className='flex flex-col items-start mt-4 '>
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
      </div> */}

      <div className='flex flex-col items-start mt-4 '>
        <label htmlFor="website" className='font-medium text-blue-text'>
          Company Website
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
    </>
  )
}

export default CompanyProfileInfo
