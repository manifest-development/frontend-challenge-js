import styled from 'styled-components';

const buttonPrimaryColor = '#7B876D';

export const Button = styled.button`
cursor:pointer;
text-transform: uppercase;
letter-spacing: 2px;
font-size: 15px;
font-family:inherit;
line-height: 15px;
display:block;
width: 20;
height:30px;
border-radius: 20px;
margin-bottom: 20px;

background: ${(props) => (props.$invert ? 'transparent' : buttonPrimaryColor)};
border: 2px solid ${buttonPrimaryColor};
color: ${(props) => (props.$invert ? buttonPrimaryColor : 'white')};
`;
