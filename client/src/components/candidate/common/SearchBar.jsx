import React, { useState } from 'react'
import { FiMapPin, FiSearch} from 'react-icons/fi'

const SearchBar = ({query, handleInputChange}) => {

    
  return (
    <div className='max=w-screen-xl container mx-auto xl:px-24 px-4 md:py-6 py-2'>

      <form>
        <div className='flex flex-col justify-start gap-4 md:flex-row md:gap-1'>
            <div className='flex w-full rounded shadow-sm md:rounded-sm-md ring-1 ring-insert focus-within:ring-1 focus-within:ring-inset focus:ring-indigo-700 md:w-1/4'>
                <input type="text" name="title" id="title" placeholder='What you are looking for?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 ring-none'
                onChange={handleInputChange}
                value = {query}
                />
                <FiSearch  className='absolute mt-2.5 ml-2 text-gray-400'/>  
            </div>

            <div className='flex w-full rounded shadow-sm md:rounded-sm-none ring-1 ring-insert focus-within:ring-1 focus-within:ring-inset focus:ring-indigo-700 md:w-1/4'>
                <input type="text" name="title" id="title" placeholder='Location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 ring-none'
                />
                <FiMapPin  className='absolute mt-2.5 ml-2 text-gray-400'/> 
            </div>

            <button type='submit' className='px-8 py-2 text-white rounded bg-blue md:rounded-s-none'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
