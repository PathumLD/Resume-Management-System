import React from 'react'
import { EventList } from '../../Data/EventList'

function EventCard({ CompanyEvents }) {
  return (
    <button
      className="flex-wrap items-center justify-center block bg-white shadow-md rounded-xl hover:bg-gray-100 focus:outline-none"
      onClick={() => {
        // Handle redirect to company profile page
      }}
    >
      <img src={CompanyEvents.logo} alt={CompanyEvents.name} className="w-full h-24 mt-4 rounded-t-xl" />
      <div className="flex flex-col">
        <h3 className="my-4 text-lg text-gray-800 font-base">{CompanyEvents.name}</h3>
      </div>
    </button>
  );
}

const CompanyEvents = () => {
  return (
    <>
     <div className="container px-4 mx-auto">
      {/* ... other components */}
      <section className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {EventList.map((CompanyEvents) => (
          <EventCard key={CompanyEvents.id} CompanyEvents={CompanyEvents} />
        ))}
      </section>
    </div>
    </>
  )
}

export default CompanyEvents
