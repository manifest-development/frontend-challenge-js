import styled from 'styled-components';
import { desktopBreakpoint } from '../../constants';

const bgPrimaryColor = '#989E8D';
const borderRadius = '30px';

export const Message = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  color: #FFFFFF;

  background-color: ${bgPrimaryColor};
  border-radius: ${borderRadius};

  padding: 13px 15px 9px 15px;
  @media screen and (min-width: ${desktopBreakpoint}px){
    padding: 12px 16px 15px 16px;
  }
`;
