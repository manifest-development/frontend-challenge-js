import React, { createContext, useState } from 'react';
import { User } from '../class/user';

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);

  const updateFormStep = (updatedUserData) => {
    // step1: condition updatedUserData.income fails when the income is 0
    // because 0 is falsy in Javascript
    // solution: change the way to check the value
    if (updatedUserData.name
      && updatedUserData.income !== null
      && updatedUserData.income !== undefined
      // && typeof updatedUserData.income === 'number'
    ) {
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
      // setUserData(new User());
      // setFormStep(1);
      // step2.1: add a new step for thank you page
      setFormStep(4);
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

  // step2.1: move the form reset function here and remember to return it
  const resetForm = () => {
    setUserData(new User());
    setFormStep(1);
  };

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    resetForm,
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
