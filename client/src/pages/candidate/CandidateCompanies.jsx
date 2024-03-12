import React from 'react';
import companies from '../../data/Companies';

function CompanyCard({ company }) {
  return (
    <button
      className="flex-wrap items-center justify-center block bg-white shadow-md rounded-xl hover:bg-gray-100 focus:outline-none"
      onClick={() => {
        // Handle redirect to company profile page
      }}
    >
      <img src={company.logo} alt={company.name} className="w-full h-24 mt-4 rounded-t-xl" />
      <div className="flex flex-col">
        <h3 className="my-4 text-lg text-gray-800 font-base">{company.name}</h3>
      </div>
    </button>
  );
}

const CandidateCompanies = () => {
  

  return (
    <div className="container px-4 mx-auto">
      {/* ... other components */}
      <section className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-6">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </section>
    </div>
  );
}

export default CandidateCompanies;
