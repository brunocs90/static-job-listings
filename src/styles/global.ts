import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: ${({ theme }) => theme['font-family']};
    font-size: 1.5rem;
}

a {
  text-decoration: none;
}

`;
