import React, { useEffect, useState } from 'react';
import CompanyCard from '../../components/candidate/companies/CompanyCard';
import axios from 'axios';



const CandidateCompanies = () => {
  const [companies, setCompanies] = useState([]); // State to store companies

  useEffect(() => {
    // Function to fetch companies
    const fetchCompanies = async () => {
      try {
        // Using axios
        const response = await axios.get('http://localhost:3000/v1/company/getAllCompanies');
        setCompanies(response.data); // Set companies in state
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchCompanies(); // Call the function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container px-4 mx-auto bg-white rounded-lg h-[calc(100vh-80px)]">
      {/* ... other components */}
      <section className="grid grid-cols-1 gap-8 py-10 md:grid-cols-4 ">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company}  />
        ))}
      </section>
    </div>
  );
}

export default CandidateCompanies;
