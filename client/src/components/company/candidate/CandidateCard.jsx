import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateCard = ({ candidate }) => {

    const navigate = useNavigate();

    const handleCandidateView = () => {
        navigate(`/company/candidate-profile/${candidate._id}`);
    }
  return (
    <>
      <button
        className="flex-wrap items-center justify-center block bg-white shadow-md outline-none w-72 h-72 rounded-xl hover:bg-gray-100 hover:outline-blue "
        onClick={handleCandidateView}
      >
        <img src={candidate.logo} alt={candidate.name} className="w-full h-32 rounded-t-xl" />
        <div className="flex flex-col">
          <h2 className="mt-4 mb-2 text-xl font-semibold text-gray-800">{candidate.candidateName}</h2>
          <h3 className="mb-1 font-semibold text-gray-500 text-md">{candidate.jobType} {candidate.jobTitle}</h3>
        </div>
      </button>
    </>
  );
};

export default CandidateCard;