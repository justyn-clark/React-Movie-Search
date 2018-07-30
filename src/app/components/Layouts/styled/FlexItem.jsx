import styled from "styled-components";

const FlexItem = styled.div`
  flex: ${({ flex }) => flex || "1"};
`;

export default FlexItem;
