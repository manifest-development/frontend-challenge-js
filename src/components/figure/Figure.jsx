import * as Styled from './styles';

function Figure({ src, alt }) {
  return (
    <Styled.Figure>
      <img src={src} alt={alt} />
    </Styled.Figure>
  );
}

export default Figure;
