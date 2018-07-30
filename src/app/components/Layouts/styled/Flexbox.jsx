import styled from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default Flexbox;