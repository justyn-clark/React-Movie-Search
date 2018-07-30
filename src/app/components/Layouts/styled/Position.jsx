import styled from "styled-components";

const Position = styled.div`
  position: ${({ position }) => position || "static"};
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  transform: ${({ transform }) => transform || "none"};
`;

export default Position;
