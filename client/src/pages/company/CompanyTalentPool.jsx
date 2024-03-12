import React from 'react'
import { talents } from '../../Data/TalentList';

function TalentCard({ talents }) {
  return (
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
  );
}

const CompanyTalentPool = () => {

  return (
    <>
     <div className="container px-4 mx-auto">
      {/* ... other components */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {talents.map((talents) => (
          <TalentCard key={talents.id} talents={talents} />
        ))}
      </section>
    </div>
    </>
  )
}

export default CompanyTalentPool
