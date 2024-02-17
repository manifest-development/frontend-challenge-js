import * as Styled from './styles';

function Thankyou({
  children, ...props
}) {
  return <Styled.MessageBox {...props}>{children}</Styled.MessageBox>;
}

export default Thankyou;