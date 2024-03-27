// src/components/LandingPage.jsx
import React, { useState } from 'react';
import LandingImage from '../assets/LandingImage.jpg';
import LogoBar from '../components/LogoBar';

// import Navbar from '../components/Navbar';

const LandingPage = () => {

  const handleGetStarted = () => {
    window.location.href = '/register';
  };

  const backgroundStyle = {
    position: 'relative',
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    color: '#fff',
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  };

  
  return (
    <>

    <LogoBar />
      <div className='h-60'  style={backgroundStyle}>
        <div className='z-10 mx-auto mb-8 text-center md:mb-24 md:ml-16 md:text-start '>
          <h1 className='text-5xl font-bold shadow-sm md:text-8xl'>
            Welcome to <span className='text-cyan-500'>TalentFolio</span>
          </h1>
          <p className='mt-4 text-2xl md:text-4xl'>
            Unlock Potential, Unleash Talent
          </p>

          <button className='px-4 py-3 my-6 text-lg font-semibold border-2 bg-blue hover:border-blue hover:border-2 hover:bg-transparent rounded-2xl' type='submit' onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
      <div style={overlayStyle}></div>

          {/* About Us */}

          <div  className="w-full my-8 lg:my-12">
            <h1 className='my-6 ml-6 text-2xl font-bold md:ml-10 md:text-3xl text-primary-text'>About Us</h1>
            <p className='mx-6 text-justify'>
              Welcome to TalentFolio, the premier Resume Management System designed to revolutionize the way you handle resumes, manage talent pools, and track applicants. At TalentFolio, we understand the critical role that talent acquisition plays in the success of your organization. Our platform is meticulously crafted to simplify and enhance your recruitment processes, ensuring you make informed decisions to build a stellar team.

            <br />
              <span className='mt-3 text-lg font-medium border-b-2 border-black md:text-xl'>Our Mission</span>
            <br />
              At TalentFolio, our mission is to empower organizations with a cutting-edge Resume Management System that streamlines the recruitment journey. We aim to provide a robust and user-friendly platform that saves time, improves efficiency, and allows you to focus on what matters most – finding the right talent.

            <br />
              <span className='text-lg font-medium border-b-2 border-black md:text-xl'>Key Features</span>
            <br />
    
              <ul style={{ listStyleType: 'disc' }} className='ml-4'>
                <li className='mt-3'><span className='font-semibold'>Centralized Resume Storage:</span> TalentFolio offers a secure and centralized repository for storing resumes. Easily organize and access candidate information in one place, eliminating the hassle of scattered data.</li>
                <li className='mt-3'><span className='font-semibold'>Advanced Talent Pool Management:</span> Effortlessly manage and categorize talent pools based on skills, experience, and other parameters. Our system allows you to create dynamic talent pipelines, ensuring you are ready to tap into the right skills when needed.</li>
                <li className='mt-3'><span className='font-semibold'>Applicant Tracking System (ATS):</span> Track and monitor applicants seamlessly with our intuitive ATS. From initial application to the final hiring decision, TalentFolio provides a transparent and efficient process.</li>
                <li className='mt-3'><span className='font-semibold'>Customizable Workflows:</span> Tailor your recruitment workflows to align with your organization's unique hiring processes. TalentFolio adapts to your needs, providing flexibility and scalability.</li>
              </ul>

              <br />
              <span className='text-lg font-medium border-b-2 border-black md:text-xl'>Why Choose TalentFolio?</span>
              <br />

              <ul style={{ listStyleType: 'disc' }} className='ml-4'>
                <li className='mt-3'><span className='font-semibold'>Efficiency and Time Savings:</span> Our system is designed to simplify complex processes, reducing the time spent on administrative tasks and allowing you to focus on engaging with top-tier talent.</li>
                <li className='mt-3'><span className='font-semibold'>Data Security:</span> TalentFolio prioritizes the security of your data. Our robust security measures ensure that sensitive candidate information is protected at all times.</li>
                <li className='mt-3'><span className='font-semibold'>User-Friendly Interface:</span> Enjoy a seamless experience with our user-friendly interface. TalentFolio is designed for ease of use, requiring minimal training for your team.</li>
                <li className='mt-3'><span className='font-semibold'>Scalability:</span> Whether you're a small startup or a large enterprise, TalentFolio scales with your growth. Our system adapts to the changing needs of your organization.</li>
              </ul>

              <br />
              <span className='text-lg font-medium border-b-2 border-black md:text-xl'>Join TalentFolio Today</span>
              <br />

              Embark on a transformative journey with TalentFolio and elevate your recruitment strategy. Stay ahead in the competitive talent landscape by embracing a system that empowers you to make data-driven decisions and build a workforce of excellence.
            </p>
          </div>
  
    </>
  );
};

export default LandingPage;
