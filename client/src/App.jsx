import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/shared/candidate/Navbar'
import { Outlet } from 'react-router-dom';

import CandidateProfile from './pages/candidate/CandidateProfile'
import CandidateSidebar from './components/shared/candidate/CandidateSidebar'


const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-full h-[55rem] overflow-hidden sm:flex-row">
      <div className="w-64 ">
        <CandidateSidebar />
      </div>
      <div className="flex flex-col flex-grow overflow-hidden">
        <Navbar />
        <div className="grid flex-grow p-4 overflow-auto grid-col-6">
          {children}
        </div>
      </div>
    </div>
  );
};






// const ProtectedRoute = ({children}) => {
//   const [isAuthenticated] = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);

//   if (!isAuthenticated) {
//     return null;
//   }

//   return (
//       children
//   )
// };

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/candidate" element={<Layout><CandidateProfile /></Layout>} />

      </Routes>
    </>
  )
}

export default App;
