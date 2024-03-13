import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/shared/candidate/Navbar'
import { Outlet } from 'react-router-dom';

import CandidateProfile from './pages/candidate/CandidateProfile'
import Footer from './components/Footer'
import CandidateAppliedVacancies from './pages/candidate/CandidateAppliedVacancies'
import CandidateInterviews from './pages/candidate/CandidateInterviews'
import CandidateAllVacancies from './pages/candidate/CandidateAllVacancies'
import CandidateCompanies from './pages/candidate/CandidateCompanies'
import CandidateEvents from './pages/candidate/CandidateEvents'
import CompanyProfile from './pages/company/CompanyProfile'
import CompanyNavbar from './components/shared/company/CompanyNavbar'




const Layout = ({ children }) => {

  const userType = localStorage.getItem('userType');
    return (
      <>
      <div className='flex flex-col'>
      <div className='fixed w-full '>
        {userType === 'candidate' ? <Navbar /> : userType === 'company' ? <CompanyNavbar /> : null}
        
      </div>
      <div className='mt-20'> 
        {children}
      </div>
      </div>
      </>
    );
  };



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        
        <>
             {/* Candidate */}
        <Route path="/candidate/*" element={<Layout><CandidateProfile /></Layout>} />
        <Route path="/candidate/applied-vacancies" element={<Layout><CandidateAppliedVacancies /></Layout>} />
        <Route path="/candidate/interviews" element={<Layout><CandidateInterviews /></Layout>} />
        <Route path="/candidate/all-vacancies" element={<Layout><CandidateAllVacancies /></Layout>} />
        <Route path="/candidate/companies" element={<Layout><CandidateCompanies /></Layout>} />
        <Route path="/candidate/events" element={<Layout><CandidateEvents /></Layout>} />
        </>

        <>
              {/* Company */}
        <Route path="/company/*" element={<Layout><CompanyProfile /></Layout>} />
        </>
        

      </Routes>
    </>
  )
}

export default App;
