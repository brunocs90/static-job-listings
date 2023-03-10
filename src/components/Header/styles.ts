import styled from 'styled-components';
import background from '/images/bg-header-desktop.svg';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors['desaturated-dark']};
    background-image: url(${background});
    background-position-x: center;
    background-size: cover;

    @media (max-width: 768px) {
        /* border: solid white; */
    }
    @media (max-width: 655px) {
        /* border: solid white; */
    }
`;
