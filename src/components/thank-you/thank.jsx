import React from 'react';
import * as Styled from './styles';
import Button from '../button';
import katie from '../../assets/katie.png';
import Container from '../../layout/container';

function ThankYouPage({ userData, submitAnotherForm }) {
  return (
    <Container>
      <Styled.FormContentDiv>
        <Styled.Div1>
          <Styled.Div2>
            <img src={katie} alt="katie" />
            <Styled.Div3>
              Hi!&nbsp;
              {userData.name}
              ,&nbsp;
              thank you for submitting the form. We will check and get back to you within
              2 business days.
            </Styled.Div3>
          </Styled.Div2>
          <Button onClick={submitAnotherForm} id="submit-another-form">SUBMIT ANOTHER</Button>
        </Styled.Div1>
      </Styled.FormContentDiv>
    </Container>
  );
}

export default ThankYouPage;
