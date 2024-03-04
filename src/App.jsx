import { useContext } from 'react';
import './App.css';
import { FormContext } from './context/FormProvider';
import FormNavBar from './components/form-nav-bar';
import FormContent from './components/form-content';
import FullPageLoader from './components/full-page-loader';

function App() {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    resetFormStep,
    isLoading,
  } = useContext(FormContext);

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      <FormNavBar currentStep={formStep} />
      <FormContent
        currentStep={formStep}
        updateUserData={updateUserData}
        userData={userData}
        confirmForm={confirmForm}
        backToPreviousStep={backToPreviousStep}
        // added function to reset the form; only appears when the form is submitted
        resetFormStep={resetFormStep}
      />
    </div>
  );
}

export default App;
