import Button from '../button';
import * as Styled from './styles';
import avatar from '../../avatar.jpg';

function ThankYou({
  userData,
  refresh,
}) {
  const thankYou = `Hi, ${userData.name}, thank you for submitting the form. We will check and get back to you within 2 business days.`;
  return (
    <Styled.Body>
      <Styled.ThankYouWrapper>
        <Styled.IconWordsWrapper>
          {/* <img src={avatar} alt="avatar" /> */}
          <Styled.Image id="avatar" src={avatar} alt="avatar" />
          <Styled.WordsWrapper id="thankyou">
            {thankYou}
          </Styled.WordsWrapper>
        </Styled.IconWordsWrapper>
        <Button id="submitanother" onClick={refresh}>SUBMIT ANOTHER</Button>
      </Styled.ThankYouWrapper>
    </Styled.Body>
  );
}

export default ThankYou;
