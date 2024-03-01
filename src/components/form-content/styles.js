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

// step2.3: new style for the thank you page
export const ThankYouBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px; 
  margin:60px 0;

  @media (min-width: 768px) {
    flex-direction: row; 
    align-items: flex-end;
  }
`;

export const MessageBox = styled.div`
  background: #989E8D;
  border-radius: 30px;
  padding: 20px;
  text-align: center;
`;

export const ThankYouMessage = styled.p`
  color: white;
  font-size: 24px;
  line-height: 30px;
`;

export const AvatarImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
