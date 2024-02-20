import * as Styled from './styles';

function ChatBubble(props) {
  const { children } = props;
  return (
    <Styled.ResponsiveBox>
      <Styled.Avatar />
      <Styled.ChatBubble>{children}</Styled.ChatBubble>
    </Styled.ResponsiveBox>
  );
}

export default ChatBubble;
