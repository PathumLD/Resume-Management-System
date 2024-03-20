import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddSkills = () => {
  return (
    <>
      <div className="sm:col-span-4">
            <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">
            Skills
            </label>
        <div className="mt-2">
            <ReactQuill
                id="skills"
                name="skills"
                type="text"
                autoComplete="skills"
                className="block w-full h-72 mb-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm   ring-gray-300 placeholder:text-gray-400 pl-3 sm:text-sm sm:leading-6"
            />
        </div>
     </div>
    </>
  )
}

export default AddSkills
