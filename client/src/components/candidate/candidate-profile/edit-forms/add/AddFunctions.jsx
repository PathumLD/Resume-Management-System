import React, { useState } from 'react'

const AddFunctions = () => {

  const [isEducationAddPopupOpen, setIsEducationAddPopupOpen] = useState(false);
  const [isExperienceAddPopupOpen, setIsExperienceAddPopupOpen] = useState(false);
  const [isProjectAddPopupOpen, setIsProjectAddPopupOpen] = useState(false);
  const [isSkillsAddPopupOpen, setIsSkillsAddPopupOpen] = useState(false);

  const openEducationAddPopup = () => {
    setIsEducationAddPopupOpen(true);
  };

  const closeEducationAddPopup = () => {
    setIsEducationAddPopupOpen(false);
  };

  const openExperienceAddPopup = () => {
    setIsExperienceAddPopupOpen(true);
  };

  const closeExperienceAddPopup = () => {
    setIsExperienceAddPopupOpen(false);
  };

  const openProjectAddPopup = () => {
    setIsProjectAddPopupOpen(true);
  };

  const closeProjectAddPopup = () => {
    setIsProjectAddPopupOpen(false);
  };

  const openSkillsAddPopup = () => {
    setIsSkillsAddPopupOpen(true);
  };

  const closeSkillsAddPopup = () => {
    setIsSkillsAddPopupOpen(false);
  };
  return {
   
    isEducationAddPopupOpen,
    openEducationAddPopup,
    closeEducationAddPopup,
    isExperienceAddPopupOpen,
    openExperienceAddPopup,
    closeExperienceAddPopup,
    isProjectAddPopupOpen,
    openProjectAddPopup,
    closeProjectAddPopup,
    isSkillsAddPopupOpen,
    openSkillsAddPopup,
    closeSkillsAddPopup,
  }
}

export default AddFunctions
