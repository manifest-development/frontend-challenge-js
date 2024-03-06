import * as Styled from './styles';
import Button from '../button';
import avatar from '../../assets/katie.png';

function ThankYouPage({ initializeForm, name }) {
  return (
    <Styled.ThankYouContainer id="thank-you-container">
      <Styled.RowContainer>
        <Styled.ImageWrapper>
          <img src={avatar} alt="Katie" id="thank-you-image" />
        </Styled.ImageWrapper>
        <Styled.MessageWrapper id="thank-you-message">
          {`Hi, ${name}, thank you for submitting the form. We will check and get back to you within 2 business days.`}
        </Styled.MessageWrapper>
      </Styled.RowContainer>
      <Button onClick={() => initializeForm()} id="start-new-form-button">
        SUBMIT ANOTHER
      </Button>
    </Styled.ThankYouContainer>
  );
}

export default ThankYouPage;
