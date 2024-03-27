import React from 'react'
import { FaLink, FaLinkedin, FaGithub } from "react-icons/fa";


const TalentCard = ({ candidate }) => {
  return (
    <>
      {/* <button
            className="flex-wrap items-center justify-center block bg-white shadow-md outline-none w-72 h-72 rounded-xl hover:bg-gray-100 hover:outline-blue">
            <img src={candidate.logo} alt={candidate.name} className="w-full h-32 rounded-t-xl" />
            <div className="flex flex-col">
                <h3 className="my-4 text-lg font-semibold text-gray-800">{candidate.candidateName}</h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 transform opacity-0 back bg-gradient-to-br from-blue-900 to-blue-500 hover:opacity-100 rotate-y-180">
                <div className="flex flex-col items-center justify-center w-full h-full p-4">
                    <p className="text-base text-justify text-white">{candidate.jobType}</p>
                </div>
            </div>
        </button> */}

      <div className='p-4 overflow-hidden transition-transform duration-300 shadow-md bg-emerald-50 rounded-xl hover:shadow-lg transform-gpu hover:-translate-y-2 hover:scale-110 w-80 h-96'>
            <div className="front">
                <img src={candidate.img} alt={candidate.candidateName} className="object-cover h-40 rounded-t-lg w-72" />
                <h2 className="mt-2 text-3xl font-bold text-center">{candidate.candidateName}</h2>
                <h3 className="mt-3 text-lg font-semibold text-center opacity-50 ">{candidate.jobType} {candidate.jobTitle}</h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 transform opacity-0 back bg-gradient-to-br from-sky-900 to-sky-500 hover:opacity-100 rotate-y-180">
                <div className="flex flex-col items-center justify-center w-full h-full p-4">
                    <div className='flex flex-row justify-center gap-4 '>
                    <p className="text-2xl text-center text-white">
                        <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </p>
                    <p className="text-2xl text-center text-white">
                        <a href={candidate.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </p>
                    <p className="text-2xl text-center text-white">
                        <a href={candidate.website} target="_blank" rel="noopener noreferrer"><FaLink/></a>
                    </p>

                    </div>
                    <p className="mt-2 text-base text-justify text-white">{candidate.bio}</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default TalentCard


  
