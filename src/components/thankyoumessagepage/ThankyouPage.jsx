import React, { useContext } from 'react';
import { FormContext } from '../../context/FormProvider';
import katieImg from '../../assets/katie.png';
import * as Styled from './styles';

function ThankYouPage({ userName }) {
  const { resetFormPage } = useContext(FormContext);

  const ResetForm = () => {
    resetFormPage();
  };

  return (
    <Styled.ThankyouBox id="thankyou data message ">
      <Styled.Image src={katieImg} alt="FemaleImg" />
      <Styled.ThankyouData id="data message ">
        <Styled.ThankYouPage id="thank you message">
          Hi,
          {userName}
          , thank you for submitting the form. We will check and get back
          to you within 2 business days.
        </Styled.ThankYouPage>
      </Styled.ThankyouData>
      <Styled.SubmitAnotherButton onClick={ResetForm} id="Reset-form">
        Submit Another
      </Styled.SubmitAnotherButton>
    </Styled.ThankyouBox>
  );
}

export default ThankYouPage;
