import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: 50%;

  height: ${(props) => (props.$sz ? props.$sz : '60px')};
  width: ${(props) => (props.$sz ? props.$sz : '60px')};
  min-width: ${(props) => (props.$sz ? props.$sz : '60px')};
  min-height: ${(props) => (props.$sz ? props.$sz : '60px')};
`;
