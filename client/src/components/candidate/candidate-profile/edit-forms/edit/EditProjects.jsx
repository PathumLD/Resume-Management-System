import React from 'react'

export default function EditProjects() {
  return (
    <>
      <div className="sm:col-span-4">
            <label htmlFor="projectName" className="block text-sm font-medium leading-6 text-gray-900">
            Project Name
            </label>
            <div className="mt-2">
            <input
                type="text"
                name="projectName"
                id="projectName"
                autoComplete="projectName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="technologies" className="block text-sm font-medium leading-6 text-gray-900">
            Technologies
            </label>
            <div className="mt-2">
            <input
                type="text"
                name="technologies"
                id="technologies"
                autoComplete="technologies"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="projectDetails" className="block text-sm font-medium leading-6 text-gray-900">
            Project Details
            </label>
            <div className="mt-2">
            <input
                id="projectDetails"
                name="projectDetails"
                type="text"
                autoComplete="projectDetails"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
            </div>
        </div>
    </>
  )
}
