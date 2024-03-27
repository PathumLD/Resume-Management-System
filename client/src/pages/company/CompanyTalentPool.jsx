import React, { useState, useEffect } from 'react';
import TalentCard from '../../components/company/talent/TalentCard';
import Axios from 'axios';

const CompanyTalentPool = () => {
 const [candidates, setCandidates] = useState([]);

 useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/v1/candidate/getAll');
        if (response.status === 200) {
          setCandidates(response.data);
        } else {
          console.error('Failed to fetch candidates');
        }
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
 }, []);

 return (
    <>
      <div className="flex justify-center h-[calc(100vh-80px)]">
        <div className="container p-4 px-16 bg-white rounded-lg">
          {/* ... other components */}
          <section className="grid grid-cols-1 gap-8 mx-auto my-8 sm:grid-cols-2 lg:grid-cols-4">
            {candidates.map((candidate) => (
              <TalentCard key={candidate._id} candidate={candidate} />
            ))}
          </section>
        </div>
      </div>

    </>
 );
};

export default CompanyTalentPool;
