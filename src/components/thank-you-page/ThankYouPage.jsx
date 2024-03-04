import React from 'react';
import Flex from '../../layout/flex';
import Button from '../button';
import * as Styled from './styles';
import avatarImage from '../../assets/katie.png';

function ThankYouPage({ userName, onReset }) {
  return (
    <Flex flexDirection="column" justifyContent="center" id="thankyou-page">
      <Styled.ThankYouBox>
        <Styled.AvatarImage src={avatarImage} alt="User Avatar" id="avatar" />
        <Styled.MessageBox>
          <Styled.ThankYouMessage id="thankyou-message">
            Hi,

            {userName}
            , thank you for submitting the form.
            We will check and get back to you within 2 business days.
          </Styled.ThankYouMessage>
        </Styled.MessageBox>
      </Styled.ThankYouBox>
      <Button onClick={onReset} id="submit-another-button">SUBMIT ANOTHER</Button>
    </Flex>
  );
}

export default ThankYouPage;
