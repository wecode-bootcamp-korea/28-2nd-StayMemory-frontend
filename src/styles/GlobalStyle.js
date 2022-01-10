import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    border-box: box-sizing;
  };
`;

export default GlobalStyle;
