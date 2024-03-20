import React from 'react'

const AddEducation = () => {
  return (
    <>
      <div className="sm:col-span-4">
        <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
            Degree / Course
        </label>
        <div className="mt-2">
            <input
            type="text"
            name="degree"
            id="degree"
            autoComplete="degree"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="university" className="block text-sm font-medium leading-6 text-gray-900">
            University / College
        </label>
        <div className="mt-2">
            <input
            id="university"
            name="university"
            type="text"
            autoComplete="university"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
        </div>
    </>
  )
}

export default AddEducation
