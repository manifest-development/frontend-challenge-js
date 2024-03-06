import * as Styled from './styles';

function Message({
  invert, children, onClick, ...props
}) {
  return <Styled.Message {...props}>{children}</Styled.Message>;
}

export default Message;
