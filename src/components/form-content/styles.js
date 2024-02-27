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
export const ThankyouPage = styled.div`
  margin-top:30%;
  left:35%;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
`;
export const ThankYouPageContent = styled.div`
font-size:20px;
color:white;
width:100%;
border-radius:20px;
margin-left:10px;
display:flex;
margin-bottom:10px;
`;
export const ThankYouPageText = styled.div`
display:flex;
align-items:center;
margin-top:2%;
margin-bottom:2%;
padding-left:10px;
padding-right:10px;
background-color:#989E8D;
height:120px;
border-radius:30px;
`;
export const FormImage = styled.div`
height:30px;
width:30px;
margin-top:80px;
margin-right:10px;
`;
