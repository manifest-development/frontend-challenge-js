import React, { createContext, useState } from 'react';
import { User } from '../class/user';

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateFormStep = (updatedUserData) => {
    if (updatedUserData.name && updatedUserData.income !== undefined && updatedUserData.income !== null && updatedUserData.income !== '') {
      setFormStep(2);
    }
    if (updatedUserData.education) {
      setFormStep(3);
    }
    if (updatedUserData.ResetForm) {
      setFormStep(1);
    }
  };

  const updateUserData = (updatedUserData) => {
    updateFormStep(updatedUserData);
    setUserData(updatedUserData);
  };

  const mockSaveData = async () => new Promise((res) => { setTimeout(res, 1500); });

  const saveAndResetData = async () => {
    try {
      await mockSaveData(userData);
      setIsLoading(false);
      setFormStep(4);
      setUserData(new User());
    } catch (e) {
      console.error(e);
    }
  };

  const confirmForm = () => {
    setIsLoading(true);
    saveAndResetData();
  };

  const backToPreviousStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const resetFormPage = () => {
    setFormStep(1);
  };

  const resetForm = async () => {
    console.log('resetting form');
    setIsLoading(true);
    setUserData(new User());
    updateFormStep({ resetForm: true });
    setFormStep(1);
    setIsLoading(false);
    saveAndResetData(1);
  };
  const handleSubmitForm = async () => {
    await confirmForm(); // Confirm the form submission
    await saveAndResetData(); // Save data and reset form
    setFormSubmitted(true); // Set formSubmitted state to true after successful submission
  };

  return {
    formStep,
    saveAndResetData,
    resetForm,
    setFormStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    setIsLoading,
    handleSubmitForm,
    setFormSubmitted,
    formSubmitted,
    resetFormPage,

  };
};

export const FormContext = createContext();

function FormProvider({ children }) {
  return (
    <FormContext.Provider value={CreateProviderValue()}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
