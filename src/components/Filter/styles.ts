import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;

    ul {
        width: 70vw;
        background-color: #fff;

        display: flex;
        align-items: center;
        padding: 1.5rem 2rem;
        border-radius: 5px;
        margin: 1.3rem 0;
        position: relative;
        box-shadow: 0px 4px 6px 4px rgba(91, 164, 164, 0.2);
        margin-bottom: -2rem;

        position: relative;

        li {
            list-style: none;
            background-color: ${({ theme }) => theme.colors['desaturated-dark-opacity']};
            color: ${({ theme }) => theme.colors['desaturated-dark']};
            font-weight: 700;
            padding: 0 0 0 0.5rem;
            display: flex;
            align-items: center;
            border-radius: 5px;

            &:not(:last-child) {
                margin-right: 1rem;
            }

            .close {
                background-color: ${({ theme }) => theme.colors['desaturated-dark']};
                border: none;
                border-radius: 0 5px 5px 0;
                cursor: pointer;
                margin-left: 0.5rem;
                transition: all 0.2s;
                img {
                    padding: 0.5rem;
                }

                &:hover {
                    background-color: ${({ theme }) => theme.colors['very-dark-grayish']};
                }
            }
        }

        .clear {
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.colors['dark-grayish']};
            position: absolute;
            right: 1.5rem;
            cursor: pointer;

            &:hover {
                color: ${({ theme }) => theme.colors['desaturated-dark']};
                text-decoration: underline;
            }
        }
    }
`;
