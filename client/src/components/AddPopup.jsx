import React from 'react'
import { RxCross1 } from "react-icons/rx";

const AddPopup = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative max-w-md mx-auto my-16 w-72">
            <div className="relative flex flex-col w-full bg-white border shadow-lg outline-none rounded-3xl h-60 focus:outline-none">
                <div className="flex items-start justify-start p-5 rounded-t-md border-blueGray-200">
                <h3 className="flex items-center m-4 mt-10 text-3xl font-bold text-primary-text">Register as</h3>
                <RxCross1 className='flex items-end justify-end ml-auto text-xl cursor-pointer hover:text-red-600 text-primary-text' onClick={onClose} />
                </div>
                <div className="relative flex-auto p-6">{children}</div>
            </div>
            </div>
        </div>
        )}
        {isOpen && (
        <div className="fixed inset-0 z-10 bg-black opacity-75"></div>
        )}
    </>
  )
}

export default AddPopup;
