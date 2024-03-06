import styled from 'styled-components';
import { desktopBreakpoint } from '../../constants';

export const ContentDiv = styled.div`
  display: flex;
  height: 100vh;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  gap: 67px;
  @media screen and (min-width: ${desktopBreakpoint}px){
    gap: 45px;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  flex-direction: column;
  @media screen and (min-width: ${desktopBreakpoint}px){
    flex-direction: row;
    align-items: flex-end;
    gap: 32px;
  }
`;

export const MessageText = styled.h1`
  font-family: Gill Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;
