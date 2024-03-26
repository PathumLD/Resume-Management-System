import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CandidateCard from '../../components/company/candidate/CandidateCard';

const CompanyCandidates = () => {
    const [company, setCompany] = useState(null);
    const [candidates, setCandidates] = useState([]);

    const companyToken = localStorage.getItem('clientToken');

    useEffect(() => {
        const fetchCompanyAndCandidates = async () => {
            try {
                if(companyToken) {
                    const response = await Axios.get(`http://localhost:3000/v1/company/getCompanyByClientId/${companyToken}`, {
                        headers: {
                            Authorization: `Bearer ${companyToken}`,
                            'Content-Type': 'application/json',
                          },
                });
                
                if (response.status === 200) {
                    setCompany(response.data.company);
                    setCandidates(response.data.candidateDetails);
                } else {
                    console.error('Failed to fetch company and candidates');
                }
                } else {
                    console.error('Invalid companyToken');
                }
            } catch (error) {
                console.error('Error fetching company and candidates:', error);
            }
        };

        fetchCompanyAndCandidates();
    }, []);

    return (
        <div className="container p-4 px-4 mx-auto bg-slate-100 h-[calc(100vh-110px)]">
            <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
                {candidates.map((candidate) => (
                    <CandidateCard key={candidate._id} candidate={candidate} />
                ))}
            </section>
        </div>
    );
};

export default CompanyCandidates;
