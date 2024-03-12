import React, { useState } from 'react'
import {AdminSidebarNavigation} from '../../../Data/AdminSidebarNavigation';
import react from '../../../assets/react.svg';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'

const linkClasses = 'flex items-center gap-2 px-3 py-2 hover:bg-blue-400 hover:no-underline active:bg-blue-700 rounded-md text-lg'

const AdminSidebar = ({ mobileSidebarOpen }) => {

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`flex `}>
      <div className={`bg-white  h-screen pl-5  pt-1 flex flex-col text-blue overflow-hidden ${open ?  "w-60 sm:w-72" : "w-20"} duration-300 relative `}>

        <div className='inline-flex items-center gap-2 px-1 py-4 '>
          <img
                src={react}
                alt="Logo"
                className={`rounded-full   cursor-pointer block float-left  mr-2 w-12  
                duration-500 ${open && "rotate-[360deg] "}`}
                onClick={toggleSidebar}
          />
          <h1 className={`text-blue-text origin-left font-bold text-2xl cursor-pointer duration-300 ${!open && "scale-0"}`} onClick={toggleSidebar} >
            TalentFolio
          </h1>
        </div>

        <div className='flex flex-col justify-center flex-1 overflow-hidden sm:mt-20 '>
          <div className='flex flex-col flex-1 gap-1 py-10 mt-10 overflow-hidden '>
              {AdminSidebarNavigation.map((item) => (
                <SidebarLink key={item.key} item={item} isOpen={open}/>
              ))}
          </div>

          <div className={`flex flex-col gap-0.5  border-t border-neutral-300 ${!open && "scale-0"}  overflow-hidden`}>
            <span className={`py-4 overflow-hidden font-medium text-center text-blue/75 ` }>© 2024 Talent Folio</span>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

function SidebarLink({ item, isOpen }){

  const {pathname} = useLocation()

  return(
    <Link
      to={item.path}
      className={`${pathname === item.path ? 'border-r-blue border-r-2  text-blue font-bold shadow-md' : 'text-neutral-500'} ${linkClasses} 
      ${!isOpen && 'mb-4' // Add margin between icons when the sidebar is not fully open
      }`}
    >
      <span className='text-xl'>{item.icon}</span>
      <span className={`text-base  flex-2 duration-200  py-2`}>{isOpen && item.label}</span>
    </Link>
  )
}

export default AdminSidebar