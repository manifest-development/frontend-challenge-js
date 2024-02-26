import React, { createContext, useState } from 'react';
import { User } from '../class/user';

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);

  const updateFormStep = (updatedUserData) => {
    if (updatedUserData.name && updatedUserData.income >= 0 && updatedUserData.income !== '') {
      // 0 is a falsy value because the input is type number.
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

  const mockSaveData = async () => new Promise((res) => {
    setTimeout(res, 1500);
  });

  const saveAndResetData = async () => {
    try {
      await mockSaveData(userData);
      // ADD THANK YOU PAGE HERE

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

  const submitAnother = () => {
    setUserData(new User());
    setFormStep(1);
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
    submitAnother,
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
