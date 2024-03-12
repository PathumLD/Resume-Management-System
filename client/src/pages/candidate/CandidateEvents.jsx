import React from 'react'
import { EventList } from '../../data/EventList'

function EventCard({ CandidateEvents }) {
  return (
    <button
      className="flex-wrap items-center justify-center block bg-white shadow-md rounded-xl hover:bg-gray-100 focus:outline-none"
      onClick={() => {
        // Handle redirect to Candidate profile page
      }}
    >
      <img src={CandidateEvents.logo} alt={CandidateEvents.name} className="w-full h-24 mt-4 rounded-t-xl" />
      <div className="flex flex-col">
        <h3 className="my-4 text-lg text-gray-800 font-base">{CandidateEvents.name}</h3>
      </div>
    </button>
  );
}

const CandidateEvents = () => {
  return (
    <>
     <div className="container px-4 mx-auto">
      {/* ... other components */}
      <section className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {EventList.map((CandidateEvents) => (
          <EventCard key={CandidateEvents.id} CandidateEvents={CandidateEvents} />
        ))}
      </section>
    </div>
    </>
  )
}

export default CandidateEvents
