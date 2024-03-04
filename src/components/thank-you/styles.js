import styled from 'styled-components';

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Div2 = styled.div`
  @media only screen and (min-width: 700px){
    display: flex;
    margin-bottom: 40px;
    flex-direction: row;
  }
`;

export const Div3 = styled.p`
  margin-bottom: 50px;
  margin-top: 25px;
  background-color: #7B876D;
  color: #FFFFFF;
  font-size:18px;
  padding: 8px;
  border-radius: 15px;
  margin-left: 30px;
  margin-bottom: 10px;
`;
