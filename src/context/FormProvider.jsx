import React, { createContext, useState } from "react";
import { User } from "../class/user";

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(new User());
  const [isLoading, setIsLoading] = useState(false);
  const [submitAnother, setSubmitAnother] = useState(true);

  const updateFormStep = (updatedUserData) => {
    if (updatedUserData.name && updatedUserData.income) {
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

  const mockSaveData = async () =>
    new Promise((res) => {
      setTimeout(res, 1500);
    });

  const saveAndResetData = async () => {
    try {
      await mockSaveData(userData);
      setSubmitAnother(false);
      setUserData(new User());
      setFormStep(1);
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

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    submitAnother,
    setSubmitAnother,
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
