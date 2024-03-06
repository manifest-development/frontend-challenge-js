import Container from '../../layout/container';
import Flex from '../../layout/flex';
import Button from '../button/Button';
import Avatar from '../avatar/Avatar';
import Message from '../message/Message';
import * as Styled from './styles';

import katiePhoto from '../../assets/katie.png';

function ThankYouContent({ userName, resetForm }) {
  const handleSubmitAnother = () => {
    resetForm();
  };

  return (
    <Container>
      <Styled.ContentDiv id="thank-you-page">
        <Flex flexDirection="row" justifyContent="center">
          <Styled.Div>
            <Styled.ChatContainer>
              <Avatar src={katiePhoto} alt="Picture of Katie" id="thank-you-avatar" />
              <Message>
                <Styled.MessageText id="thank-you-text">
                  Hi,
                  {' '}
                  {userName || 'Person'}
                  , thank you for submitting the form.
                  We will check and get back to you within 2 business days.
                </Styled.MessageText>
              </Message>
            </Styled.ChatContainer>
            <Button onClick={handleSubmitAnother} id="thank-you-submit-another">SUBMIT ANOTHER</Button>
          </Styled.Div>
        </Flex>
      </Styled.ContentDiv>
    </Container>
  );
}

export default ThankYouContent;
