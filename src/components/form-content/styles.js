import styled from 'styled-components';

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`;

export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

export const LineParagraph = styled.p`
  &:first-child {
    margin-top: 40px;
  }
  margin: 10px 0;
  text-align: left;
  width: 100%;
  font-size: 24px;
  color: #333;
  font-weight: 500;

  span {
    width: 110px;
    display: inline-flex;
    font-weight: 300;
  }

  strong {
    margin-left: 20px;
    font-weight: 600;
  }
`;

// Add thank you page styles here

export const ThankYouPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ThankYouPageBody = styled.div`
display: flex;
flex-direction: row;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
}
`;

export const ThankYouImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ThankYouText = styled.div`
  background: #989E8D;
  max-width: 488px;

  padding: 10px;
  border-radius: 20px;
  color: white;
  font-family: Gill Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

`;

