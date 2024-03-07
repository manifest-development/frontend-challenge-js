import styled from 'styled-components';

const buttonPrimaryColor = '#7B876D';

export const Button = styled.button`
cursor:pointer;
text-transform: uppercase;
letter-spacing: 2px;
font-size: 20px;
font-family:inherit;
line-height: 36px;
display:block;
width: 100%;
height:40px;
border-radius: 10px;
margin-bottom: 10px;

background: ${(props) => (props.$invert ? 'transparent' : buttonPrimaryColor)};
border: 2px solid ${buttonPrimaryColor};
color: ${(props) => (props.$invert ? buttonPrimaryColor : 'white')};

box-shadow: 0 9px #999;

&:hover {
    background-color: green;
    color: white;
}

&:active {
    background-color: green;
    color: white;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
