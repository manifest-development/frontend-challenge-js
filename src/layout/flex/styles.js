import styled, { css } from 'styled-components';

export const FlexDiv = styled.div`
display:flex;
flex-direction: ${(props) => (props.$flexDirection ? props.$flexDirection : 'row')};
justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : 'space-between')};
align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'center')};
width: ${(props) => (props.width ? props.width : '100%')};
gap: ${(props) => (props.gap ? props.gap : 0)};
height: ${(props) => (props.$flexDirection === 'column' ? '100%' : 'auto')};

${(props) => props.responsive && css`
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 5%;
      }
    `}
`;
