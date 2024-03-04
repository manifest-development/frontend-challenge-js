import React, { useContext } from 'react';
import './ThankYouPage.css'; // Import the CSS file
import { FormContext } from '../../context/FormProvider';
import Button from '../button/Button';

function ThankyouPage() {
  const { backToFirstStep } = useContext(FormContext);

  // Function to handle "Submit Another" button click
  const handleSubmitAnother = () => {
    backToFirstStep(1);
  };

  return (
    <div className="thank-you-container">
      <div className="katie">&nbsp;</div>
      <div className="rectangle-2">
        <div className="message">thank you for submitting the form. We will check and get back to you within 2 business days.</div>
      </div>
      <div className="rectangle-3">&nbsp;</div>
      <Button className="submit-another" type="button" onClick={handleSubmitAnother} id="reset-form-button">Submit Another</Button>
    </div>
  );
}

export default ThankyouPage;
