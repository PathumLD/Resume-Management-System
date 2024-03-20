import React, { useState } from 'react'

const EditFunctions = () => {
  const [isBasicDetailsEditPopupOpen, setIsBasicDetailsEditPopupOpen] = useState(false);
  const [isEducationEditPopupOpen, setIsEducationEditPopupOpen] = useState(false);
  const [isExperienceEditPopupOpen, setIsExperienceEditPopupOpen] = useState(false);
  const [isProjectEditPopupOpen, setIsProjectEditPopupOpen] = useState(false);
  const [isSkillsEditPopupOpen, setIsSkillsEditPopupOpen] = useState(false);

  const openBasicDetailsEditPopup = () => {
    setIsBasicDetailsEditPopupOpen(true);
  };

  const closeBasicDetailsEditPopup = () => {
    setIsBasicDetailsEditPopupOpen(false);
  };

  const openEducationEditPopup = () => {
    setIsEducationEditPopupOpen(true);
  };

  const closeEducationEditPopup = () => {
    setIsEducationEditPopupOpen(false);
  };

  const openExperienceEditPopup = () => {
    setIsExperienceEditPopupOpen(true);
  };

  const closeExperienceEditPopup = () => {
    setIsExperienceEditPopupOpen(false);
  };

  const openProjectEditPopup = () => {
    setIsProjectEditPopupOpen(true);
  };

  const closeProjectEditPopup = () => {
    setIsProjectEditPopupOpen(false);
  };

  const openSkillsEditPopup = () => {
    setIsSkillsEditPopupOpen(true);
  };

  const closeSkillsEditPopup = () => {
    setIsSkillsEditPopupOpen(false);
  };
  return {
    isBasicDetailsEditPopupOpen,
    openBasicDetailsEditPopup,
    closeBasicDetailsEditPopup,
    isEducationEditPopupOpen,
    openEducationEditPopup,
    closeEducationEditPopup,
    isExperienceEditPopupOpen,
    openExperienceEditPopup,
    closeExperienceEditPopup,
    isProjectEditPopupOpen,
    openProjectEditPopup,
    closeProjectEditPopup,
    isSkillsEditPopupOpen,
    openSkillsEditPopup,
    closeSkillsEditPopup,
  }
}

export default EditFunctions
