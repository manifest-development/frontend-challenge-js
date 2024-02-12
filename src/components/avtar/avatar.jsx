import * as Styled from './styles';

function Avtar({
  children, src, ...props
}) {
  return (
    <Styled.Avatar {...props}>
      <img src={src} alt="Avatar" width="60px" height="60px" />
      {children}
    </Styled.Avatar>
  );
}

export default Avtar;
