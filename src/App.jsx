import { useContext } from 'react';
import './App.css';
import { FormContext } from './context/FormProvider';
import FormNavBar from './components/form-nav-bar';
import FormContent from './components/form-content';
import FullPageLoader from './components/full-page-loader';
import ThankYouPage from './components/thank-you-page';

function App() {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    showThankYou,
    submitAnotherForm,
  } = useContext(FormContext);

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      {showThankYou
        ? (
          <ThankYouPage
            submitAnotherForm={submitAnotherForm}
            userName={userData.name}
          />
        )
        : (
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
