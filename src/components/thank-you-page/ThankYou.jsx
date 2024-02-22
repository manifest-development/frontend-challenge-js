import Container from '../../layout/container';
import { Button } from '../button/styles';
import imageSrc from '../../assets/katie.png';

const ThankYou = function () {
  return (
    <Container>
      <div className="main-container">
        <div className="container">
          <div>
            <img src={imageSrc} alt="" className="temp" />
          </div>
          <div className="message">
            <p>
              Hi, userName, thank you for submitting the form.
              We will check and get back to you within 2 business days.
            </p>
          </div>
        </div>
        <Button id="submit-another-button">SUBMIT ANOTHER</Button>
      </div>
    </Container>
  );
};

export default ThankYou;
