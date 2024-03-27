import React from 'react'
import { EventList } from '../../data/EventList';

function EventCard({ CompanyEvents }) {
  return (
    <button
      className="flex-wrap items-center justify-center block shadow-md bg-slate-50 rounded-xl hover:bg-gray-100 outline outline-offset-1 outline-1 outline-gray-400 hover:outline-2"
      onClick={() => {
        // Handle redirect to company profile page
      }}
    >
      <img src={CompanyEvents.logo} alt={CompanyEvents.name} className="w-full h-40 rounded-t-xl" />
      <div className="flex flex-col">
        <h3 className="my-8 text-lg text-gray-800 font-base">{CompanyEvents.name}</h3>
      </div>
    </button>
  );
}

const CompanyEvents = () => {
  return (
    <>
     <div className="container px-8 pt-8  mx-auto bg-white rounded-lg h-[calc(100vh-80px)]">
      {/* ... other components */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 ">
        {EventList.map((CompanyEvents) => (
          <EventCard key={CompanyEvents.id} CompanyEvents={CompanyEvents} />
        ))}
      </section>
    </div>
    </>
  )
}

export default CompanyEvents
