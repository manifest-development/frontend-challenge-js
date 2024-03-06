import styled from 'styled-components';

export const Figure = styled.figure`
  img {
    width: 60%;
    height: auto;
  };

  @media (min-width: 769px) {
    justify-content: flex-end;
    margin-bottom: -5%;
    margin-right: -2%;
  }
`;
