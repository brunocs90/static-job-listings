import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 15px;
  font-weight: 500;

}

body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    min-width: 375px;
}

body, input, textarea, button {
    font-family: ${({ theme }) => theme['font-family']};
}

a {
  text-decoration: none;
}

`;
