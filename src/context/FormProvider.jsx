import React, { createContext, useState } from 'react';
import { User } from '../class/user';

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);

  const updateFormStep = (updatedUserData) => {
    // Handling the issue where user inputs 0 as its income
    if (updatedUserData.name && (updatedUserData.income ?? 0) >= 0) { 
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
      setIsLoading(false);
      setFormStep(4); // Redirecting to form 4 after the user clicks submit button
    } catch (e) {
      console.error(e);
    }
  };

  // Solving issue 3 where we redirect to Form 1 after user clicks on Submit another.
  const redirectToForm1 = () => {
    try {
      setUserData(new User()); // clearing the previous user's data
      setIsLoading(false); // Setting the loading symbol to false
      setFormStep(1); // Redirecting to form 1
    } catch (e) {
      console.error(e);
    }
  };

  const confirmForm = () => {
    setIsLoading(true);
    saveAndResetData();
  };

  const thankyouForm = () => {
    setIsLoading(true);
    redirectToForm1();
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
    thankyouForm,
    backToPreviousStep,
    isLoading,
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
