import React, { createContext, useState } from 'react';
import { User } from '../class/user';

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);
  const [thankYouPage, setThankYouPage] = useState(false);

  const updateFormStep = (updatedUserData) => {
    if (updatedUserData.name && updatedUserData.income != null && updatedUserData.income >= 0) {
      setFormStep(2);
    }
    if (updatedUserData.education) {
      setFormStep(3);
    }
  };

  const updateUserData = (updatedUserData) => {
    updateFormStep(updatedUserData);
    setUserData(updatedUserData);
  };

  const mockSaveData = async () => new Promise((res) => { setTimeout(res, 1500); });

  const saveData = async () => {
    try {
      await mockSaveData(userData);
      setIsLoading(false);
      setThankYouPage(true);
    } catch (e) {
      console.error(e);
    }
  };

  const initializeForm = async () => {
    setThankYouPage(false);
    setUserData(new User());
    setFormStep(1);
  };

  const confirmForm = () => {
    setIsLoading(true);
    saveData();
  };

  const backToPreviousStep = () => {
    setFormStep((prev) => prev - 1);
  };

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    thankYouPage,
    initializeForm,
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
