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

export const ThankYouFlex = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 31px;
  align-items: center;
  margin-bottom: 50px;
`;

export const ThankYouMessageDiv = styled.div`
  width: 488px;
  height: 117px;
  background-color: #989E8D;
  border-radius: 30px;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 24px;
  padding: 12px 16px 15px 16px;
`;

export const ThankYouSubmit = styled.button`
  width: 580px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #7B876D;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 20px;
  text-warp: nowrap;
  padding: 5px 199px;
`;
