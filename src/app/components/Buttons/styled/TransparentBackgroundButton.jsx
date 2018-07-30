import styled from 'styled-components';

const TransparentBackgroundButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ color }) => color || 'black'};
  font-size: ${({ fontSize }) => fontSize || '12px'};
`;

export default TransparentBackgroundButton;