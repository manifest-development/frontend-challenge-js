import styled from 'styled-components';

export const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
  font-size: 20px;
  font-weight: 300;
  box-sizing: border-box;
  max-width: 500px;
  margin: 20px auto;

  @media screen and (max-width: 768px) {
    align-items: stretch;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 100px;
`;

export const MessageWrapper = styled.div`
  color: #FFF;
  border-radius: 1.25rem;
  background-color: #989E8D;
  padding: 2rem;
  flex: 1;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
