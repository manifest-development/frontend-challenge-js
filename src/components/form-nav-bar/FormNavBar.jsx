import Container from '../../layout/container';
import Flex from '../../layout/flex';
import * as Styled from './styles';

function FormStepItem({ active, done, children }) {
  return <Styled.FormStepItem $active={active} $done={done}>{children}</Styled.FormStepItem>;
}

function FormNavBar({ currentStep }) {
  if (currentStep !== 4) {
    return (
      <Styled.FormNavBar>
        <Container>
          <Flex alignItems="center">
            <FormStepItem active={currentStep === 1} done={currentStep >= 1}>
              1
            </FormStepItem>
            <FormStepItem active={currentStep === 2} done={currentStep >= 2}>
              2
            </FormStepItem>
            <FormStepItem active={currentStep === 3} done={currentStep >= 3}>
              3
            </FormStepItem>
          </Flex>
        </Container>
      </Styled.FormNavBar>
    );
  }
}

export default FormNavBar;
