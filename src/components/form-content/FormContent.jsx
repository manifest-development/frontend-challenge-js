import { useEffect, useState } from 'react';
import { User } from '../../class/user';
import Container from '../../layout/container';
import Flex from '../../layout/flex';
import Button from '../button';
import Input from '../input';
import katie from '../../assets/katie.png';
import * as Styled from './styles';

function FormContent({
  currentStep, updateUserData, userData, confirmForm, backToPreviousStep, resetFormStep,
}) {
  const [localData, setLocalData] = useState(userData);
  const message = `Hi, ${localData.name}, thank you for submitting the form. We will check and get back to you within 2 business days.`;

  useEffect(() => {
    setLocalData(userData);
    console.log(userData);
    // console.log(currentStep);
  }, [userData]);

  const submitForm = () => {
    // this is in FormProvider
    updateUserData(new User(localData)); // Object is made/remade when the first submit is made
  };

  const updateField = (key, value) => {
    setLocalData({ ...localData, [key]: value });
  };

  return (
    <Container>
      <Styled.FormContentDiv>
        {currentStep === 1 ? (
          <Flex flexDirection="column">
            <Styled.FormHeading>Basic Information</Styled.FormHeading>
            <Input
              label="Name"
              type="text"
              placeholder="Your name"
              onChange={(e) => updateField('name', e.target.value)}
              value={localData.name || ''}
              id="input-name"
            />
            <Input
              label="Annual Income in USD"
              type="text"
              onChange={(e) => updateField('income', e.target.value)}
              value={localData.income || ''}
              inputLabelCaption="[Input 0 if you are a student]"
              placeholder="Your income"
              id="input-income"
            />

            <Button onClick={submitForm} id="form-step-1-next">Next</Button>
          </Flex>
        ) : currentStep === 2 ? (
          <Flex flexDirection="column">
            <Styled.FormHeading>Education Level</Styled.FormHeading>
            <Input
              label="Education Level"
              type="select"
              options={[
                'High school or equivalent',
                'Associate degree',
                "Bachelor's degree",
                "Master's degree or above",
                'None of the above',
              ]}
              onChange={(e) => updateField('education', e.target.value)}
              value={localData.education}
              id="input-education"
            />
            <Button onClick={submitForm} id="form-step-2-next">Next</Button>
          </Flex>
        ) : currentStep === 3 ? (
          <Flex flexDirection="column" id="confirmation-page">
            <Styled.FormHeading>Confirmation</Styled.FormHeading>
            <Flex flexDirection="column" justifyContent="flex-start">
              <Styled.LineParagraph id="confirmation-name">
                <span>Name</span>
                :
                <strong>{localData.name}</strong>
              </Styled.LineParagraph>
              <Styled.LineParagraph id="confirmation-income">
                <span>Income</span>
                :
                <strong>{localData.income}</strong>
              </Styled.LineParagraph>
              <Styled.LineParagraph id="confirmation-education">
                <span>Education</span>
                :
                <strong>{localData.education}</strong>
              </Styled.LineParagraph>
            </Flex>
            <Button onClick={backToPreviousStep} invert id="form-confirmation-back-button">Back</Button>
            <Button onClick={confirmForm} id="form-confirmation-button">Confirm</Button>
          </Flex>
        ) : (currentStep === 4 && (
          <Flex flexDirection="column" justifyContent="center" gap="1rem" id="thank-you-page">
            <Styled.PictureMessageWrapper>
              <img src={katie} alt="Katie" id="thank-you-image" />
              <Styled.LineParagraph id="thank-you-message">
                <Styled.MessageWrapper>
                  {message}
                </Styled.MessageWrapper>
              </Styled.LineParagraph>
            </Styled.PictureMessageWrapper>
            <Button onClick={resetFormStep} id="form-reset-button">Submit Another</Button>
          </Flex>
        )
        )}
      </Styled.FormContentDiv>
    </Container>
  );
}

export default FormContent;
