import styled from 'styled-components';

export const MainContainer = styled.main`
    height: 100%;
    min-height: calc(100vh - 15rem);
    background-color: ${({ theme }) => theme.colors.background};
    border: solid red;
`;
