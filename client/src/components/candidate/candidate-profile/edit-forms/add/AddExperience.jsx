import React from 'react'

const AddExperience = () => {
  return (
    <>
      <div className="sm:col-span-4">
        <label htmlFor="jobType" className="block text-sm font-medium leading-6 text-gray-900">
          Job Type
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="jobType"
            id="jobType"
            autoComplete="jobType"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="jobTitle" className="block text-sm font-medium leading-6 text-gray-900">
          Job Title
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            autoComplete="jobTitle"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="timePeriod" className="block text-sm font-medium leading-6 text-gray-900">
          Time Period
        </label>
        <div className="mt-2">
          <input
            id="timePeriod"
            name="timePeriod"
            type="text"
            autoComplete="timePeriod"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  )
}

export default AddExperience
