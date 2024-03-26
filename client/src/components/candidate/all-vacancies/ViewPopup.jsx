import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const ViewPopup = ({ isOpen, closePopup, title, children }) => {
    if (!isOpen) return null;
    
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block overflow-auto text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div className="flex items-start justify-between p-4">
            <h3 className="flex items-center m-4 mt-10 text-3xl font-bold text-primary-text">{title}</h3>
            <hr />
            <RxCross1 className='flex items-end justify-end ml-auto text-xl cursor-pointer hover:text-red-600 text-primary-text' onClick={closePopup} />
          </div>
          <div className="p-6">
            {children}
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default ViewPopup
