import styled from 'styled-components';

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
