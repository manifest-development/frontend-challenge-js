import React, { useContext } from 'react';
import employeeImg from '../../assets/katie.png';
import { FormContext } from '../../context/FormProvider';
import * as Styled from './styles';

function ConfirmationPage({ userName }) {
  const { backToFirstStep } = useContext(FormContext);

  const handleSubmitAnother = () => {
    backToFirstStep();
  };

  return (
    <Styled.ContentContainer>
      <Styled.Picture src={employeeImg} alt="Employee" />
      <Styled.ConfirmationMessageContainer>
        <Styled.ConfirmationMessage id="confirmation-message">
          Hi,
          {userName}
          , thank you for submitting the form. We will check and get back
          to you within 2 business days.
        </Styled.ConfirmationMessage>
      </Styled.ConfirmationMessageContainer>
      <Styled.SubmitAnotherButton onClick={handleSubmitAnother} id="submit-another-button">
        Submit Another
      </Styled.SubmitAnotherButton>
    </Styled.ContentContainer>
  );
}

export default ConfirmationPage;
