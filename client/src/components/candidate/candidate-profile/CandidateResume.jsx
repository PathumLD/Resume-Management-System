import React, { useState } from 'react'

const CandidateResume = () => {

        const [isChecked, setIsChecked] = useState(false)
      
        const handleCheckboxChange = () => {
          setIsChecked(!isChecked)
        }

        
  return (
    <div className=''>
      <div className='ml-6 '>
        <h3 className='mt-10 text-3xl font-bold sm:mt-6 text-blue'>My Resumes</h3>
        <button className='flex items-center justify-center px-4 py-3 mt-4 ml-auto text-lg font-semibold text-white rounded-lg bg-blue'>Upload CV</button>
      </div>

      <div className='mt-6 ml-6'>
        <label className='flex items-center font-medium cursor-pointer select-none text-dark dark:text-primary-text'>
        <div className='relative'>
            <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
            />
            <div className='flex items-center justify-center w-5 h-5 mr-4 border rounded-full box border-stroke dark:border-primary-text'>
            <span
                className={`h-[10px] w-[10px] rounded-full ${
                isChecked ? 'bg-blue' : 'bg-transparent'
                }`}
            >
                {' '}
            </span>
            </div>
        </div>
                My CV
        </label>
      </div>

      <div className='sm:w-[35rem] w-full sm:h-[45rem] h-[30rem] bg-slate-400 mx-auto my-8 shadow-lg rounded-md overflow-hidden'>
            
      </div>
    </div>
  )
}

export default CandidateResume
