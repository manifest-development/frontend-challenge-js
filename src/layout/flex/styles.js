import styled from 'styled-components';

export const FlexDiv = styled.div`
display:flex;
flex-direction: ${(props) => (props.$flexDirection ? props.$flexDirection : 'row')};
justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : 'space-between')};
align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'center')};
gap: ${(props) => (props.$gap ? props.$gap : '0')};
width: 100%;
height: ${(props) => (props.$flexDirection === 'column' ? '100%' : 'auto')}`;
