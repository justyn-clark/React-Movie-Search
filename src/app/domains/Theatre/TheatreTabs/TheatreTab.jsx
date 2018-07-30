import styled from "styled-components";
import TransparentBackgroundButton from "../../../components/Buttons/styled/TransparentBackgroundButton";

const TheatreTab = TransparentBackgroundButton.extend`
  font-size: 16px;
  margin: 15px 0;
  padding-bottom: 10px;
  color: ${({ active, color }) => (active ? "orange" : color)};
  box-shadow: ${({ active }) => (active ? "0 3px 0 0 orange" : "none")};

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    padding: 15px 0;
    margin: 5px 0;
    box-shadow: none;
    color: ${({ active, color }) => (active ? "white" : color)};
    background: ${({ active }) => (active ? "orange" : "white")};
  }
`;

export default TheatreTab;
