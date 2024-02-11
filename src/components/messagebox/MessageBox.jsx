import * as Styled from './styles';

function MessageBox({
    children, ...props
}) {
  return <Styled.MessageBox {...props}>{children}</Styled.MessageBox>;
}

export default MessageBox;