import React from 'react'

const TalentCard = ({ talents }) => {
  return (
    <>
      <button
            className="flex-wrap items-center justify-center block bg-white shadow-md h-60 rounded-xl hover:bg-gray-100 focus:outline-none"
            onClick={() => {
                // Handle redirect to company profile page
            }}
            >
            <img src={talents.logo} alt={talents.name} className="w-full h-32 rounded-t-xl" />
            <div className="flex flex-col">
                <h3 className="my-4 text-lg font-semibold text-gray-800">{talents.name}</h3>
            </div>
        </button>
    </>
  )
}

export default TalentCard
