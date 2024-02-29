import { useContext } from 'react';
import Container from '../../layout/container';
import { Button } from '../button/styles';
import imageSrc from '../../assets/katie.png';
import './styles.css';
import { FormContext } from '../../context/FormProvider';

const ThankYou = function () {
  const formContext = useContext(FormContext);
  const handleSubmitAnother = () => {
    formContext.resetForm();
  };
  return (
    <Container>
      <div className="main-container">
        <div className="container">
          <div>
            <img src={imageSrc} alt="" className="image" />
          </div>
          <div className="message">
            <p>
              Hi, {formContext.userData.name}, thank you for submitting the form.
              We will check and get back to you within 2 business days.
            </p>
          </div>
        </div>
        <Button onClick={handleSubmitAnother} id="submit-another-button">SUBMIT ANOTHER</Button>
      </div>
    </Container>
  );
};

export default ThankYou;
