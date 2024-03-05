import styled from 'styled-components';

export const ThankYouPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 3rem;
  .message-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      width: 50px;
      height: 50px;
    }
  }
  p {
    padding: 1rem;
    background-color: #989E8D;
    border-radius: 30px;
    color: white;
  }
  button {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #7B876D;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  button:hover {
    background-color: #5A5A5A;
  }
  @media (min-width: 768px) {
    .message-div {
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
      gap: 1.5rem
    }
    gap: 2rem;
  }
  

`;
