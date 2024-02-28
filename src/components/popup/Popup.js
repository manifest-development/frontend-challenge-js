import * as Styled from "./styles";
import Button from "../button";
import Container from "../../layout/container";
import Flex from "../../layout/flex";

const picture = require("../../assets/katie.png");

export default function Popup({ name, setSubmitAnother }) {
  return (
    <Container>
      <Flex flexDirection="column" justifyContent="center">
        <Styled.PopupContainer>
          <Styled.PopupPicture src={picture} />
          <Styled.PopupBubble>
            <Styled.PopupMessage>
              Hi, {name}, thank you for submitting the form. We will check and
              get back to you within 2 business days.
            </Styled.PopupMessage>
          </Styled.PopupBubble>
        </Styled.PopupContainer>
        <Button
          onClick={() => {
            setSubmitAnother(true);
          }}
          id="submit-another-button"
        >
          Submit Another
        </Button>
      </Flex>
    </Container>
  );
}
