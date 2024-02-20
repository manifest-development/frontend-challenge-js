import { useEffect, useState } from 'react';
import { User } from '../../class/user';
import Container from '../../layout/container';
import Flex from '../../layout/flex';
import Button from '../button';
import Input from '../input';
import ChatBubble from '../chat-bubble';
import * as Styled from './styles';

function FormContent({
  currentStep, updateUserData, userData, confirmForm, backToPreviousStep, resetForm,
}) {
  const [localData, setLocalData] = useState(userData);

  useEffect(() => {
    setLocalData(userData);
  }, [userData]);

  const submitForm = () => {
    updateUserData(new User(localData));
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
              value={localData.income}
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
        ) : (
          currentStep === 4 && (
            <Flex flexDirection="column" justifyContent="center" id="thank-you-page">
              <ChatBubble avatarUrl="https://s3-alpha-sig.figma.com/img/8d3f/0334/c00b93e0e31cc617b3fcd13d247744bb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZMDYvb9uoKwDtk6uv7X3wRajGkMnP7V2SZ~cekvlKtIvA1KdK12DTbKuuuvT26l22wOpqbKRWTRO-brHntniem9ytsAAqMUXxq1RhA9YMAsORCfEUa16lXXx8e4Q01by~KsPP~CqBr6H5a2dnOn0nOvLHcXUOdjErtjEraRK8e0jPQPbA2l3M1uJOb4QC-j6dpAtBtz1zRm5g1Iq6Sku-dVSJZA4YfrORWyfR6EgjHe8lIS~Ce5EwajDqTuMU1b65DEIomyvgNKTmHNhcky0IRb7lmToGkIW7r7~rlIDbwMCe~qcA2r9glLVVtDydZ60qH~CK0BmRlhooc2~egdAQ__">
                {`
                  Hi, ${localData.name}, thank you for submitting
                  the form. We will check and get back to you within 2 business days.
                `}
              </ChatBubble>
              <Button onClick={resetForm} id="form-reset-button">SUBMIT ANOTHER</Button>
            </Flex>
          )
        )}
      </Styled.FormContentDiv>
    </Container>
  );
}

export default FormContent;
