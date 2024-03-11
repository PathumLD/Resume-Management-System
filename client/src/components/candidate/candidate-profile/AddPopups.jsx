import React, { useState } from 'react';

const CandidateProfileInfo = () => {
  const [eduPopup, setEduPopup] = useState(false);
  const [expPopup, setExpPopup] = useState(false);
  const [projPopup, setProjPopup] = useState(false);
  const [skillsPopup, setSkillsPopup] = useState(false);

  const openPopup = (section) => {
    switch (section) {
      case 'education':
        setEduPopup(true);
        break;
      case 'experience':
        setExpPopup(true);
        break;
      case 'projects':
        setProjPopup(true);
        break;
      case 'skills':
        setSkillsPopup(true);
        break;
      default:
        break;
    }
  };

  const closePopup = (section) => {
    switch (section) {
      case 'education':
        setEduPopup(false);
        break;
      case 'experience':
        setExpPopup(false);
        break;
      case 'projects':
        setProjPopup(false);
        break;
      case 'skills':
        setSkillsPopup(false);
        break;
      default:
        break;
    }
  };

  const handleAddItem = (section) => {
    // Implement logic to add a new item for the selected section
    // You can use state or any other mechanism to manage the new items
    console.log(`Adding new item to ${section}`);
    closePopup(section);
  };

  return (
    <>
      {/* Existing code */}
      
      {/* Education Popup */}
      {eduPopup && (
        <div className="popup">
          {/* Add your form elements for Education here */}
          <button onClick={() => handleAddItem('education')}>Add Education</button>
          <button onClick={() => closePopup('education')}>Cancel</button>
        </div>
      )}

      {/* Experience Popup */}
      {expPopup && (
        <div className="popup">
          {/* Add your form elements for Working Experience here */}
          <button onClick={() => handleAddItem('experience')}>Add Experience</button>
          <button onClick={() => closePopup('experience')}>Cancel</button>
        </div>
      )}

      {/* Projects Popup */}
      {projPopup && (
        <div className="popup">
          {/* Add your form elements for Projects here */}
          <button onClick={() => handleAddItem('projects')}>Add Project</button>
          <button onClick={() => closePopup('projects')}>Cancel</button>
        </div>
      )}

      {/* Skills Popup */}
      {skillsPopup && (
        <div className="popup">
          {/* Add your form elements for Skills here */}
          <button onClick={() => handleAddItem('skills')}>Add Skill</button>
          <button onClick={() => closePopup('skills')}>Cancel</button>
        </div>
      )}

      {/* Existing code */}
    </>
  );
};

export default CandidateProfileInfo;
