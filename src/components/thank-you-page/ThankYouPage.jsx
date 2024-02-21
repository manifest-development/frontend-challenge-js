import * as Styled from './styles';
import Button from '../button';

function ThankYouPage({ startNewForm, name }) {
  return (
    <Styled.ThankYouPage>
      <div className="thank-you-container">
        <p>
          Hi, thank you
          { ' '}
          { name }
          , for submitting the form.
          We will check and get back to you within 2 business days.
        </p>
        <Button onClick={() => startNewForm()} id="start-new-form-button">Submit Another</Button>
      </div>
    </Styled.ThankYouPage>
  );
}

export default ThankYouPage;
