import * as Styled from './styles';

function Flex({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
  ...props
}) {
  return (
    <Styled.FlexDiv
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap} // gap property for flex containers I added
      {...props}
    >
      {children}
    </Styled.FlexDiv>
  );
}

export default Flex;
