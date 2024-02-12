import { useEffect, useState } from 'react';
import { User } from '../../class/user';
import Container from '../../layout/container';
import Flex from '../../layout/flex';
import Button from '../button';
import Messagebox from '../messagebox';
import Input from '../input';
import * as Styled from './styles';
import Avtar from '../avtar';

function FormContent({
  currentStep, updateUserData, userData, confirmForm, backToPreviousStep, submitAnother,
}) {
  const [localData, setLocalData] = useState(userData);

  useEffect(() => {
    setLocalData(userData);
  }, [userData]);
  const submitForm = () => {
    if (localData.income === '') {
      return;
    }
    if (localData.name && (localData.income !== '' || localData.income === 0)) {
      updateUserData(new User(localData));
    }
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
              type="number"
              //  Change the type to "number"
              onChange={(e) => updateField('income', e.target.value)}
              value={localData.income || ''}
              inputLabelCaption="[Input 0 if you are a student]"
              placeholder="Your income"
              id="input-income"
              required
              //  Add the required attribute here
            />

            <Button onClick={submitForm} disable={(localData.income === '') ? 'true' : 'false'} id="form-step-1-next">Next</Button>
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
        ) : currentStep === 4 && (
          <Flex flexDirection="column" id="thankyou-page">
            <Styled.FormHeading>Form Submitted !</Styled.FormHeading>
            <Flex flexDirection="column" justifyContent="space-between">
              <Flex />
              <Flex />
              <Flex />
              <Flex flexDirection="row" justifyContent="end">
                <Avtar src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" />
                <Messagebox>
                  Hi
                  {' '}
                  {localData.name}
                  , thank you for submitting the form.
                  We will check and get back to you within 2 business days.
                </Messagebox>
              </Flex>
              <Flex />
            </Flex>
            <Button onClick={submitAnother} id="form-resubmission-button">Submit Another</Button>
          </Flex>
        )}
      </Styled.FormContentDiv>
    </Container>
  );
}

export default FormContent;
