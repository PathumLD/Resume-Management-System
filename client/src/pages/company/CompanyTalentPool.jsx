import React from 'react'
import { talents } from '../../data/TalentList'
import TalentCard from '../../components/company/talent/TalentCard'



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
