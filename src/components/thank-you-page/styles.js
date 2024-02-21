import styled from 'styled-components';

export const ThankYouPage = styled.div`
  background-color: rgba(256, 256, 256, 0.45);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .thank-you-container {
    margin-bottom: 12px;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 16px;
    width: auto; 
    height: auto;
    margin-bottom: 12px;
    background-color: #c7d4c5;
    width: 200px; 
    height: 100px;
    color: black; 
    border-radius: 10px; 
    padding: 10px; 
    align-items: center;
  }
`;
