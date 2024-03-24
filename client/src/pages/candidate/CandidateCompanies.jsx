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
    <div className="container px-4 mx-auto">
      {/* ... other components */}
      <section className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-4 lg:grid-cols-6">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company}  />
        ))}
      </section>
    </div>
  );
}

export default CandidateCompanies;
