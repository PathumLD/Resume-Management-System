import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
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
import CompanyInterviews from './pages/company/CompanyInterviews'
import CompanyEvents from './pages/company/CompanyEvents'
import CompanyTalentPool from './pages/company/CompanyTalentPool'
import CandidateEditProfile from './pages/candidate/CandidateEditProfile'
import CandidateCompanyView from './pages/candidate/CandidateCompanyView'
import CompanyCandidates from './pages/company/CompanyCandidates'
import CompanyCandidateView from './pages/company/CompanyCandidateView'
import VisitorRegister from './pages/VisitorRegister'
import VisitorVacancies from './pages/VisitorVacancies'
import VisitorLogin from './pages/VisitorLogin'




const Layout = ({ children }) => {
  const userType = localStorage.getItem('userType');
  const client = localStorage.getItem('clientToken')


  if (!client) {
    return <Navigate to="/login" replace />;
  }
 
    return (
      <>
      <div className='flex flex-col bg-slate-200'>
      <div className='fixed w-full '>
        {userType === 'candidate' ? <Navbar /> : userType === 'company' ? <CompanyNavbar /> : null}
        
      </div>
      <div className='w-5/6 mx-auto mt-20 '> 
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
        <Route path="/visitor-register" element={<VisitorRegister />} />
        <Route path="/visitor-login" element={<VisitorLogin />} />
        <Route path="/visitor-vacancies" element={<VisitorVacancies />} />

        
        <>
             {/* Candidate */}
        <Route path="/candidate/*" element={<Layout><CandidateProfile /></Layout>} />
        <Route path="/candidate/applied-vacancies" element={<Layout><CandidateAppliedVacancies /></Layout>} />
        <Route path="/candidate/interviews" element={<Layout><CandidateInterviews /></Layout>} />
        <Route path="/candidate/all-vacancies" element={<Layout><CandidateAllVacancies /></Layout>} />
        <Route path="/candidate/companies" element={<Layout><CandidateCompanies /></Layout>} />
        <Route path="/candidate/company-profile/:companyId" element={<Layout><CandidateCompanyView /></Layout>} />
        <Route path="/candidate/events" element={<Layout><CandidateEvents /></Layout>} />
        <Route path="/candidate/update-profile" element={<Layout><CandidateEditProfile /></Layout>} />
        </>

        <>
              {/* Company */}
        <Route path="/company/*" element={<Layout><CompanyProfile /></Layout>} />
        <Route path="/company/interviews" element={<Layout><CompanyInterviews /></Layout>} />
        <Route path="/company/candidates" element={<Layout><CompanyCandidates /></Layout>} />
        <Route path="/company/candidate-profile/:candidateId" element={<Layout><CompanyCandidateView /></Layout>} />
        <Route path="/company/events" element={<Layout><CompanyEvents /></Layout>} />
        <Route path="/company/talent-pool" element={<Layout><CompanyTalentPool /></Layout>} />
        </>
        

      </Routes>
    </>
  )
}

export default App;
