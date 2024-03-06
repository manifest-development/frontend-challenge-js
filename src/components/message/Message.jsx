import * as Styled from './styles';

function Message({
  text,
  ...props
}) {
  return (
    <Styled.MessageDiv
      {...props}
    >
      {text}
    </Styled.MessageDiv>
  );
}
export default Message;
