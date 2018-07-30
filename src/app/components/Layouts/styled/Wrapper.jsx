import styled from "styled-components";

const Wrapper = styled.div`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  height: ${({ height }) => height || "auto"};
  max-height: ${({ maxHeight }) => maxHeight || "none"};
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export default Wrapper;
