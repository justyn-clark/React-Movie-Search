import { injectGlobal } from 'styled-components';

const globalStyles = injectGlobal`
  body {
    background-color: #eaeaea;
    font-family: sans-serif;
  }

  div, section {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
`;

export default globalStyles;