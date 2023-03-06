import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: ${({ theme }) => theme['font-family']};
    font-size: ${({ theme }) => theme.Typography.body};
}

a {
  text-decoration: none;
}

`;