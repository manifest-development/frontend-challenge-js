import styled from 'styled-components';
import { desktopBreakpoint } from '../../constants';

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

export const ProfilePic = styled.img`
  border-radius: 50%;

  height: 60px;
  width: 60px;
  min-width: 60px;
  min-height: 60px;
`;

export const Message = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
`;

export const MessageBubble = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  color: #FFFFFF;
  background-color: #989E8D;
  border-radius: 30px;
  padding: 15px 15px 10px 15px;
`;

export const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 80px;
  @media screen and (min-width: ${desktopBreakpoint}px){
    flex-direction: row;
    padding-bottom: 40px;
    align-items: end;
  }
`;
