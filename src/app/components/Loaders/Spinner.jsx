import styled, { keyframes } from 'styled-components';

const sizes = {
  small: '80px',
  medium: '100px',
  large: '120px'
};

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 16px solid ${({ backgroundColor }) => backgroundColor || '#f3f3f3'};
  border-top: 16px solid ${({ color }) => color || '#3498db'};
  border-radius: 50%;
  width: ${({ size }) => size ? sizes[size] : sizes.small};
  height: ${({ size }) => size ? sizes[size] : sizes.small};
  animation: ${rotate360} 2s linear infinite;
`;

export default Spinner;