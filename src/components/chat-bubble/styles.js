import styled from 'styled-components';
import { desktopBreakpoint } from '../../constants';

const primaryColor = '#989E8D';

export const ResponsiveBox = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
align-items: center;
margin-bottom: 48px;
@media screen and (min-width: ${desktopBreakpoint}px){
    flex-direction: row;
    align-items: end;
}
`;

export const ChatBubble = styled.div`
font-family:inherit;
font-size: 20px;
width: 100%;
border-radius: 16px;
background: ${primaryColor};
padding: 16px;
color: white;
`;

export const Avatar = styled.div`
background-color: ${primaryColor};
background-image: url(https://s3-alpha-sig.figma.com/img/8d3f/0334/c00b93e0e31cc617b3fcd13d247744bb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZMDYvb9uoKwDtk6uv7X3wRajGkMnP7V2SZ~cekvlKtIvA1KdK12DTbKuuuvT26l22wOpqbKRWTRO-brHntniem9ytsAAqMUXxq1RhA9YMAsORCfEUa16lXXx8e4Q01by~KsPP~CqBr6H5a2dnOn0nOvLHcXUOdjErtjEraRK8e0jPQPbA2l3M1uJOb4QC-j6dpAtBtz1zRm5g1Iq6Sku-dVSJZA4YfrORWyfR6EgjHe8lIS~Ce5EwajDqTuMU1b65DEIomyvgNKTmHNhcky0IRb7lmToGkIW7r7~rlIDbwMCe~qcA2r9glLVVtDydZ60qH~CK0BmRlhooc2~egdAQ__);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 48px;
width: 48px;
min-height: 0px;
border-radius: 50%;
aspect-ratio: 1 / 1; 
`;
