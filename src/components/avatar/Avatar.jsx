import * as Styled from './styles';

function Avatar({
  src, alt, sz, children, ...props
}) {
  return <Styled.Avatar src={src} alt={alt} $sz={sz} {...props}>{children}</Styled.Avatar>;
}

export default Avatar;
