import styled from "styled-components";

const messageColor = "#989E8D";

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  max-width: 700px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  width: 100%;
`;
export const PopupBubble = styled.div`
  padding: 10px;
  background-color: ${messageColor};
  border-radius: 30px;
`;

export const PopupMessage = styled.p`
  font-size: 20px;
  font-family: inherit;
  display: block;
  color: white;
`;

export const PopupPicture = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  align-self: end;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0px;
    align-self: center;
  }
`;
