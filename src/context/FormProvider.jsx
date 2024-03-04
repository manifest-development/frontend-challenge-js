import React, { createContext, useState } from 'react';
import { User } from '../class/user';

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormStep = (updatedUserData) => {
    console.log(updatedUserData.income);
    if (updatedUserData.name && (updatedUserData.income >= 0)) {
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

  const saveAndResetData = async () => {
    try {
      await mockSaveData(userData);
      // ADD THANK YOU PAGE HERE
      setIsSubmitted(true);
      setUserData(userData);
      setIsLoading(false);
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

  const submitAnotherForm = () => {
    setUserData(new User());
    setFormStep(1);
    setIsSubmitted(false);
  };

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    submitAnotherForm,
    isLoading,
    isSubmitted,
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
