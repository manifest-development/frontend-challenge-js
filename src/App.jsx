import { useContext } from 'react';
import './App.css';
import { FormContext } from './context/FormProvider';
import FormNavBar from './components/form-nav-bar';
import FormContent from './components/form-content';
import ThankYouContent from './components/thank-you-content/ThankYouContent';
import FullPageLoader from './components/full-page-loader';

function App() {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    formCompleted,
    resetForm,
  } = useContext(FormContext);

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      {formCompleted ? <ThankYouContent userName={userData.name} resetForm={resetForm} /> : (
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
