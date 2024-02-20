import { useContext, useState, useEffect } from 'react';
import './App.css';
import { FormContext } from './context/FormProvider';
import FormNavBar from './components/form-nav-bar';
import FormContent from './components/form-content';
import FullPageLoader from './components/full-page-loader';
import ConfirmationPage from './components/confirmation-page/ConfirmationPage';

function App() {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
  } = useContext(FormContext);

  const [userName, setUserName] = useState(userData.name);

  useEffect(() => {
    setUserName(userData.name);
  }, [userData.name]);

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      {formStep === 4 ? (
        <ConfirmationPage userName={userName} />
      ) : (
        <>
          <FormNavBar currentStep={formStep} />
          <FormContent
            currentStep={formStep}
            updateUserData={updateUserData}
            userData={userData}
            confirmForm={confirmForm}
            backToPreviousStep={backToPreviousStep}
          />
        </>
      )}
    </div>
  );
}

export default App;
