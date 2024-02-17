import * as Styled from './styles';

function Avatar({
    children, src, ...props
}) {
    return (
        <Styled.Avatar {...props}>
        <img src={src}  alt='Avatar' height="60px" width="60px" />
            {children}
        </Styled.Avatar>
    );
}

export default Avatar;