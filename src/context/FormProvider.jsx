import React, { createContext, useState } from 'react';
import { User } from '../class/user';

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);
  // This state is for the Thank You Form.
  const [showThankYou, setShowThankYou] = useState(false);

  const updateFormStep = (updatedUserData) => {
    // !Number.isNaN() checks if the input is a number. Presumably, you do not want
    // form inputs that are not numbers to advance the form step.
    if (updatedUserData.name && !Number.isNaN(updatedUserData.income)) {
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

  // Here is my logic for submitting the form and resetting the form state.
  // (I took it out of saveAndResetData and put it in its own function
  // because I only want it called when the user clicks SUBMIT ANOTHER)
  const submitAnotherForm = () => {
    setShowThankYou(false);
    setUserData(new User());
    setFormStep(1);
  };
  const saveAndResetData = async () => {
    try {
      await mockSaveData(userData);
      setIsLoading(false);
      setShowThankYou(true);
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

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    showThankYou,
    submitAnotherForm,
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
