import * as Styled from './styles';
import Container from '../../layout/container';
import katie from '../../assets/katie.png';

export default function ThankYouPage({ submitAnotherForm, userName }) {
  return (
    <Container>
      <Styled.ThankYouPage>
        <div className="message-div" id="thank-you-page">
          <img src={katie} alt="thank you" id="katie-image" />
          <p id="thank-you-message">
            Hi,&nbsp;
            {userName}
            , thank you for submitting the form.
            We will check and get back to you within a few business days.
          </p>
        </div>
        <button
          type="button"
          onClick={submitAnotherForm}
          id="submit-another-button"
        >
          SUBMIT ANOTHER
        </button>
      </Styled.ThankYouPage>
    </Container>
  );
}
